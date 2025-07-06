
const ENV = import.meta.env

const config = {
  api: {
    baseUrl: ENV.VITE_APP_API_URL,
    WeatherUrl: ENV.VITE_APP_API_URL_WEATHER,
  },
};

export default config;