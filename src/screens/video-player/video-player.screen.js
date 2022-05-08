import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useVideos } from '../../hooks/useVideos';

export const VideoPlayerScreen = () => {
  const { id } = useParams();
  const { videos } = useVideos();

  const video = videos?.find((vid) => vid._id === id);
  console.log('videos', video);
  return (
    <>
      <h2>Video player</h2>
      <div>
        {/* video */}
        <div style={{ width: '600px' }}>
          <iframe
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${video?._id}`}
            title={video.title}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen=''
          ></iframe>
        </div>
        {/* title */}
        <h3>{video.title}</h3>
        {/* discriptiom */}
        <p>{video.description}</p>
        {/* like , watch later, copy, save */}

        {/* add comments */}

        {/* list all comments */}
        {video?.comments.map((comment) => (
          <div>
            <h4>{comment.user}</h4>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
};
