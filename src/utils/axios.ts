import { default as axiosInstance } from 'axios';

const axios = axiosInstance.create({
  baseURL: 'http://api.openweathermap.org',
  params: {
    appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY
  }
});

export default axios;
