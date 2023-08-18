import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.giphy.com',
  params: {
    api_key: process.env.GIPHY_API_KEY,
  },
});
