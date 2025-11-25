<div align="center">

# 🌤️ Weather App

### *Your Personal Weather Companion with Stunning Visuals*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Now-blue?style=for-the-badge&logo=vercel)](https://your-app-url.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/⭐_Star_on-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/sirishax/wheather-application)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/OpenWeather-EB6E4B?style=flat-square&logo=openweathermap&logoColor=white" alt="OpenWeather" />
  <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=flat-square&logo=fontawesome&logoColor=white" alt="Font Awesome" />
</p>

---

**A beautifully crafted weather application that brings real-time meteorological data to your fingertips with dynamic seasonal backgrounds, smooth animations, and an elegant glassmorphism design.**

[🚀 Get Started](#-quick-start) • [✨ Features](#-key-features) • [📖 Documentation](#-api-integration) • [🤝 Contribute](#-contributing)

</div>

---

## 🎯 Overview

Weather App is a modern, responsive web application that delivers accurate real-time weather information with an exceptional user experience. Built with vanilla JavaScript and powered by OpenWeather API, it combines functionality with aesthetic appeal through dynamic backgrounds that adapt to weather conditions and seasons.

<div align="center">

### 🌈 Dynamic Seasonal Themes

```
☀️ Summer    |    🍂 Autumn    |    ❄️ Winter    |    🌸 Spring
```

</div>

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 🎨 **Visual Excellence**
- 🌅 Dynamic backgrounds adapting to weather & seasons
- ✨ Smooth CSS animations & transitions
- 🎭 Glassmorphism UI with backdrop blur
- 📱 Fully responsive across all devices
- 🌙 Beautiful weather-specific themes

</td>
<td width="50%">

### ⚡ **Powerful Functionality**
- 🌡️ Real-time weather data updates
- 🔄 Celsius/Fahrenheit toggle
- 🔍 Smart search with recent history
- 💾 LocalStorage for persistent data
- 📊 Detailed weather metrics display

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

No installation required! This is a pure HTML/CSS/JS application.

### 🏃 Running Locally

<details open>
<summary><b>Option 1: Simple Setup (Recommended)</b></summary>

```bash
# Clone the repository
git clone https://github.com/sirishax/wheather-application.git

# Navigate to project directory
cd wheather-application

# Open in browser
start index.html
```

</details>

<details>
<summary><b>Option 2: Local Server (Python)</b></summary>

```bash
# Clone and navigate
git clone https://github.com/sirishax/wheather-application.git
cd wheather-application

# Start Python server
python -m http.server 8000

# Visit: http://localhost:8000
```

</details>

<details>
<summary><b>Option 3: Local Server (Node.js)</b></summary>

```bash
# Clone and navigate
git clone https://github.com/sirishax/wheather-application.git
cd wheather-application

# Start Node server
npx serve

# Follow the localhost URL provided
```

</details>

---

## 🎨 Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5 • CSS3 • Vanilla JavaScript (ES6+) |
| **API** | OpenWeather API |
| **Icons** | Font Awesome |
| **Fonts** | Google Fonts (Poppins) |
| **Deployment** | Vercel |
| **Design** | Glassmorphism • Animations • Responsive Design |

</div>

---

## 📖 API Integration

### 🔑 Setting Up Your API Key

<details>
<summary><b>Click to expand API setup instructions</b></summary>

1. **Get Your Free API Key**
   - Visit [OpenWeather API](https://openweathermap.org/api)
   - Sign up for a free account
   - Navigate to API Keys section
   - Copy your unique API key

2. **Update Configuration**
   
   Open `script.js` and replace the API key:
   
   ```javascript
   const API_KEY = "your_openweather_api_key_here";
   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   ```

3. **Test Your Integration**
   - Open the app in your browser
   - Search for any city
   - Verify weather data loads successfully

> **Note:** The included API key has usage limits. For production use, always use your own API key.

</details>

---

## 🌐 Deployment Guide

### Deploy to Vercel (Recommended)

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sirishax/wheather-application)

</div>

<details>
<summary><b>Method 1: One-Click Deploy</b></summary>

Simply click the "Deploy with Vercel" button above and follow the prompts!

</details>

<details>
<summary><b>Method 2: Vercel CLI</b></summary>

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your Vercel account
vercel login

# Deploy from project directory
vercel

# Follow the interactive prompts
# Your app will be live in seconds!
```

</details>

<details>
<summary><b>Method 3: GitHub Integration</b></summary>

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure project settings (or use defaults)
6. Click "Deploy"
7. Done! Your app is live 🎉

</details>

---

## 📸 Screenshots & Preview

<div align="center">

### 🖥️ Desktop View

![Desktop Preview](https://via.placeholder.com/800x400/4A90E2/ffffff?text=Desktop+View+-+Add+Your+Screenshot)

### 📱 Mobile View

<img src="https://via.placeholder.com/300x600/4A90E2/ffffff?text=Mobile+View+-+Add+Your+Screenshot" alt="Mobile Preview" width="250"/>

### 🎬 Features Demo

![Features Demo](https://via.placeholder.com/800x400/50C878/ffffff?text=Features+Demo+-+Add+Your+GIF)

> **Tip:** Replace placeholder images with actual screenshots of your app!

</div>

---

## 🎯 Features Breakdown

### Weather Metrics Displayed

| Metric | Description | Icon |
|--------|-------------|------|
| **Temperature** | Current temperature with unit toggle | 🌡️ |
| **Feels Like** | Apparent temperature | 🤔 |
| **Humidity** | Moisture percentage in air | 💧 |
| **Pressure** | Atmospheric pressure | 📊 |
| **Wind Speed** | Current wind velocity | 💨 |
| **Weather Condition** | Clear, Cloudy, Rain, etc. | ⛅ |

### Supported Weather Conditions

```
☀️ Clear Sky    ⛅ Partly Cloudy    ☁️ Cloudy    🌧️ Rain
⛈️ Thunderstorm    🌨️ Snow    🌫️ Fog    🌪️ Windy
```

---

## 🛠️ Project Structure

```
weather-app/
│
├── 📄 index.html          # Main HTML structure
├── 🎨 styles.css          # Styling & animations
├── ⚡ script.js           # Core JavaScript logic
├── 🔧 vercel.json         # Vercel configuration
└── 📖 README.md           # You are here!
```

---

## 💡 Usage Tips

### 🔍 **Searching for Weather**
1. Enter any city name in the search box
2. Press Enter or click the search button
3. View detailed weather information instantly

### 🔄 **Toggle Temperature Units**
- Click the toggle button to switch between °C and °F
- Your preference is saved automatically

### 📜 **Recent Searches**
- Your last searches are saved locally
- Quick access to frequently checked cities
- Clear history anytime

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

<details>
<summary><b>Contribution Guidelines</b></summary>

### 🔀 How to Contribute

1. **Fork the Repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/your-username/wheather-application.git
   cd wheather-application
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

4. **Make Your Changes**
   - Write clean, commented code
   - Follow existing code style
   - Test thoroughly

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "✨ Add amazing feature"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Describe your changes clearly

### 💭 Ideas for Contributions

- 🌓 Add dark mode toggle
- 🗓️ 7-day weather forecast
- 🌍 Multiple language support
- 📍 Geolocation integration
- 🎨 Additional themes
- ♿ Accessibility improvements
- 🐛 Bug fixes and optimizations

</details>

---

## 🐛 Known Issues & Roadmap

### Current Issues
- [ ] API key exposure in client-side code (consider backend proxy)
- [ ] Limited to single-city search

### Future Enhancements
- [ ] 🔮 7-day weather forecast
- [ ] 🗺️ Interactive weather maps
- [ ] 📍 Auto-detect user location
- [ ] 🌙 Dark/Light theme toggle
- [ ] 🔔 Weather alerts and notifications
- [ ] 📊 Historical weather data charts
- [ ] 🌐 Multi-language support
- [ ] 💾 Export weather reports

---

## 📚 Resources & Credits

### APIs & Services
- [OpenWeather API](https://openweathermap.org/api) - Weather data provider
- [Vercel](https://vercel.com) - Hosting platform

### Design & Assets
- [Font Awesome](https://fontawesome.com) - Icon library
- [Google Fonts](https://fonts.google.com) - Poppins font family
- Weather icons by OpenWeather

---

## 👩‍💻 Author

<div align="center">

### **Sirisha**

[![GitHub](https://img.shields.io/badge/GitHub-@sirishax-181717?style=for-the-badge&logo=github)](https://github.com/sirishax)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://your-portfolio-url.com)

*Passionate about creating beautiful, functional web applications* ✨

</div>

---

## 📄 License

<div align="center">

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Free to use, modify, and distribute
Copyright (c) 2025 Sirisha
```

</div>

---

## ⭐ Show Your Support

<div align="center">

If you found this project helpful or interesting, please consider giving it a ⭐ on GitHub!

[![Star History](https://img.shields.io/github/stars/sirishax/wheather-application?style=social)](https://github.com/sirishax/wheather-application/stargazers)

### Share with Others!

[![Twitter](https://img.shields.io/badge/Share_on-Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20weather%20app!&url=https://github.com/sirishax/wheather-application)
[![LinkedIn](https://img.shields.io/badge/Share_on-LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/sirishax/wheather-application)

---

**Made with ❤️ and ☕ by [Sirisha](https://github.com/sirishax)**

*Last updated: November 2025*

</div>