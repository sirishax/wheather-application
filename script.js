const API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = async (city, units = 'metric') => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`City not found (${response.status})`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

const loader = document.getElementById('loader');
const unitBtn = document.getElementById('unit-btn');
let useCelsius = true;

function showLoader() { loader.classList.add('show'); loader.setAttribute('aria-hidden','false'); }
function hideLoader() { loader.classList.remove('show'); loader.setAttribute('aria-hidden','true'); }

if (unitBtn) {
  unitBtn.addEventListener('click', () => {
    useCelsius = !useCelsius;
    unitBtn.textContent = useCelsius ? '°C' : '°F';
    unitBtn.setAttribute('aria-pressed', String(!useCelsius)); // visual state
    // If there's an active city displayed, re-run search with same city
    const city = document.getElementById('city-name').textContent;
    if (city && city !== '---') {
      searchCity(city, true);
    }
  });
}

const searchCity = async (cityOverride, internalCall) => {
  // cityOverride optional to allow re-search when toggling units
  const input = document.getElementById('city-input');
  const city = (cityOverride || input.value || '').trim();
  const weatherContainer = document.getElementById("weather-data");
  
  if (!city) {
    showError("Please enter a city name!");
    return;
  }

  showLoader();
  try {
    weatherContainer.style.opacity = "0.5";
    const weatherData = await getWeatherData(city, useCelsius ? 'metric' : 'imperial');
    updateWeatherUI(weatherData, useCelsius ? 'metric' : 'imperial');
    weatherContainer.style.opacity = "1";
    
    // Add animation class
    weatherContainer.classList.add("weather-update");
    setTimeout(() => {
      weatherContainer.classList.remove("weather-update");
    }, 1000);
    
    // Save to recent searches
    saveRecentSearch(city);
  } catch (error) {
    showError("Unable to fetch weather data. Please check the city name.");
    weatherContainer.style.opacity = "1";
  } finally {
    hideLoader();
  }
};

const updateWeatherUI = (data, units='metric') => {
  try {
    const iconEl = document.getElementById('weather-icon');
    const cityEl = document.getElementById('city-name');
    const tempEl = document.getElementById('temp');
    const humidityEl = document.getElementById('humidity');
    const presEl = document.getElementById('pres');
    const minEl = document.getElementById('min-temp');
    const maxEl = document.getElementById('max-temp');

    const w = data.weather && data.weather[0];
    const icon = w && w.icon;
    // Map OpenWeather icons to Font Awesome fallback
    const mapIcon = {
      '01': '<i class="fas fa-sun"></i>',
      '02': '<i class="fas fa-cloud-sun"></i>',
      '03': '<i class="fas fa-cloud"></i>',
      '04': '<i class="fas fa-cloud-meatball"></i>',
      '09': '<i class="fas fa-cloud-rain"></i>',
      '10': '<i class="fas fa-cloud-showers-heavy"></i>',
      '11': '<i class="fas fa-bolt"></i>',
      '13': '<i class="far fa-snowflake"></i>',
      '50': '<i class="fas fa-smog"></i>',
    };
    let shortIcon = icon ? icon.slice(0,2) : '01';
    iconEl.innerHTML = mapIcon[shortIcon] || '<i class="fas fa-cloud-sun"></i>';

    cityEl.textContent = `${data.name}, ${data.sys && data.sys.country || ''}`;
    tempEl.innerHTML = `${Math.round(data.main.temp)}<span class="unit">${units === 'metric' ? '°C' : '°F'}</span>`;
    humidityEl.textContent = `${data.main.humidity}%`;
    presEl.textContent = `${data.main.pressure} hPa`;
    minEl.textContent = `${Math.round(data.main.temp_min)}${units === 'metric' ? '°C' : '°F'}`;
    maxEl.textContent = `${Math.round(data.main.temp_max)}${units === 'metric' ? '°C' : '°F'}`;
  } catch(e) {
    console.error('updateWeatherUI error', e);
  }
};

const showError = (message) => {
  const errorDiv = document.getElementById("error-message") || createErrorElement();
  errorDiv.textContent = message;
  errorDiv.style.opacity = "1";
  setTimeout(() => {
    errorDiv.style.opacity = "0";
  }, 3000);
};

const createErrorElement = () => {
  const errorDiv = document.createElement("div");
  errorDiv.id = "error-message";
  errorDiv.style.cssText = "position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background-color: #ff4444; color: white; padding: 10px 20px; border-radius: 5px; transition: opacity 0.3s; opacity: 0;";
  document.body.appendChild(errorDiv);
  return errorDiv;
};

const saveRecentSearch = (city) => {
  let searches = JSON.parse(localStorage.getItem("recentSearches") || "[]");
  searches = [city, ...searches.filter(s => s !== city)].slice(0, 5);
  localStorage.setItem("recentSearches", JSON.stringify(searches));
  updateRecentSearches();
};

const updateRecentSearches = () => {
  const searches = JSON.parse(localStorage.getItem("recentSearches") || "[]");
  const recentList = document.getElementById("recent-searches") || createRecentSearchesElement();
  recentList.innerHTML = searches.map(city => 
    `<button onclick="document.getElementById('city-input').value='${city}'; searchCity()">${city}</button>`
  ).join("");
};

const createRecentSearchesElement = () => {
  const container = document.createElement("div");
  container.id = "recent-searches";
  container.style.cssText = "margin-top: 20px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;";
  document.querySelector(".container").appendChild(container);
  return container;
};

/* Season helper: sets body[data-season] based on client month (Northern Hemisphere).
   Months: 0=Jan ... 11=Dec
   Mar-May: spring, Jun-Aug: summer, Sep-Nov: autumn, Dec-Feb: winter
   Call setSeason() on load; you can call setSeasonByName('summer') to override.
*/
function getSeasonFromMonth(monthIndex) {
  if (monthIndex >= 2 && monthIndex <= 4) return 'spring';
  if (monthIndex >= 5 && monthIndex <= 7) return 'summer';
  if (monthIndex >= 8 && monthIndex <= 10) return 'autumn';
  return 'winter';
}

function setSeason() {
  try {
    const month = new Date().getMonth();
    const season = getSeasonFromMonth(month);
    document.body.setAttribute('data-season', season);
  } catch (e) {
    console.error('setSeason error', e);
  }
}

/* Optional: call to explicitly set a season name */
function setSeasonByName(name) {
  const allowed = ['spring','summer','autumn','winter'];
  if (allowed.includes(name)) document.body.setAttribute('data-season', name);
}

/* Initialize on DOM load */
document.addEventListener('DOMContentLoaded', () => {
  setSeason();
  // existing init code may go here...
});

// Initialize recent searches on load
window.addEventListener("load", updateRecentSearches);
