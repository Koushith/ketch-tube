import { useContext } from 'react';
import { videoContext } from '../context';

export const useVideos = () => useContext(videoContext);
