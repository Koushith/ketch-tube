import axios from 'axios';

export const videoService = () => {
  return axios.get('/api/videos');
};
