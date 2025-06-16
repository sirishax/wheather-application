const API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = async (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
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

const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  const weatherContainer = document.getElementById("weather-data");
  
  if (!city) {
    showError("Please enter a city name!");
    return;
  }

  try {
    weatherContainer.style.opacity = "0.5";
    const weatherData = await getWeatherData(city);
    showWeatherData(weatherData);
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
  }
};

const showWeatherData = (weatherData) => {
  document.getElementById("city-name").textContent = weatherData.name;
  document.getElementById("temp").textContent = `${Math.round(weatherData.main.temp)} °C`;
  document.getElementById("humidity").textContent = `${weatherData.main.humidity} %`;
  document.getElementById("pres").textContent = `${weatherData.main.pressure} hPa`;
  document.getElementById("min-temp").textContent = `${Math.round(weatherData.main.temp_min)} °C`;
  document.getElementById("max-temp").textContent = `${Math.round(weatherData.main.temp_max)} °C`;

  const weatherType = weatherData.weather[0].main.toLowerCase();
  const weatherDesc = weatherData.weather[0].description;
  const iconMap = {
    clear: "fa-sun",
    clouds: "fa-cloud",
    rain: "fa-cloud-showers-heavy",
    snow: "fa-snowflake",
    thunderstorm: "fa-bolt",
    drizzle: "fa-cloud-rain",
    mist: "fa-smog",
    fog: "fa-smog",
    haze: "fa-smog"
  };

  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.innerHTML = `<i class="fas ${iconMap[weatherType] || "fa-cloud-sun"}"></i>`;
  weatherIcon.title = weatherDesc;

  // Update background based on weather
  updateBackground(weatherType);
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

const updateBackground = (weatherType) => {
  const body = document.body;
  const backgrounds = {
    clear: "#87CEEB",
    clouds: "#708090",
    rain: "#4682B4",
    snow: "#F0F8FF",
    thunderstorm: "#483D8B",
    drizzle: "#B0C4DE",
    mist: "#D3D3D3",
    fog: "#D3D3D3",
    haze: "#D3D3D3"
  };
  
  body.style.backgroundColor = backgrounds[weatherType] || "#87CEEB";
  body.style.transition = "background-color 1s ease";
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

// Initialize recent searches on load
window.addEventListener("load", updateRecentSearches);
