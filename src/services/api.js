import axios from 'axios';

const api = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place/nearbysearch',
});

export default api;
