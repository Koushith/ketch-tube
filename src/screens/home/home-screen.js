import { useVideos } from '../../hooks/useVideos';
import { Link } from 'react-router-dom';
export const HomeScreen = () => {
  const { videos } = useVideos();

  console.log(videos);

  return (
    <>
      <h2>Home Screen</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos minus id vero, dolores explicabo ab
        veniam, voluptatem mollitia ducimus illum nulla magni repellendus unde neque cum laudantium aperiam nam eos!
      </p>

      {videos.map((vid) => (
        // thumbnainl
        // title
        // creator
        // date
        <Link to={`video/${vid._id}`}>
          <div>
            <h2>{vid.title}</h2>
            <p>{vid.creator}</p>
            <p>{vid.uploaded}</p>
          </div>
        </Link>
      ))}
      <div>
        <iframe
          width='100%'
          height='100%'
          src={`https://www.youtube.com/embed/nUizoL723bE`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen=''
        ></iframe>
      </div>
    </>
  );
};
