# Weather App 🌦️

A modern, responsive weather application that provides real-time weather information with a beautiful user interface featuring dynamic seasonal backgrounds.

## ✨ Features

- 🌡️ Real-time weather data from OpenWeather API
- 🎨 Dynamic background changes based on weather conditions and seasons
- 📱 Fully responsive design for all devices
- 🔄 Temperature unit toggle (Celsius/Fahrenheit)
- 🔍 Recent searches with localStorage
- ⚡ Animated weather icons and smooth transitions
- 📊 Detailed weather metrics (temperature, humidity, pressure)
- 🎭 Beautiful glassmorphism UI with backdrop blur effects

## 🚀 Live Demo

Visit the live app: [Your Vercel URL will be here]

## 🛠️ Technologies Used

- HTML5
- CSS3 (with animations and glassmorphism)
- Vanilla JavaScript (ES6+)
- OpenWeather API
- Font Awesome Icons
- Google Fonts (Poppins)

## 📦 Local Development

1. Clone the repository:
```bash
git clone https://github.com/sirishax/wheather-application.git
cd wheather-application
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. Enter a city name to get weather information

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and your app will be live!

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

## 🔑 API Key

This project uses the OpenWeather API. The current API key is included but has usage limits. For production:

1. Get your free API key from [OpenWeather](https://openweathermap.org/api)
2. Replace the API key in `script.js`:
```javascript
const API_KEY = "your_api_key_here";
```

## 📱 Screenshots

[Add screenshots of your app here]

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 👩‍💻 Author

**Sirisha**
- GitHub: [@sirishax](https://github.com/sirishax)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).