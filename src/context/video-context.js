import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { videoService } from '../services';

export const videoContext = createContext(null);

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  // get all videos
  const getAllVideos = async () => {
    try {
      const {
        data: { videos },
      } = await videoService();
      setVideos(videos);
    } catch (err) {
      console.log('error while fetching videos', err);
    }
  };

  useEffect(() => {
    getAllVideos();
  }, []);

  return <videoContext.Provider value={{ videos, setVideos }}>{children}</videoContext.Provider>;
};
