import styles from './End.module.css';
import Checkbox from '../Checkbox/Checkbox';

const End = ({ reset }) => {
  const recommendedMovie = {
    name: 'Legally Blonde',
    year: 2001,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNTEyNjUwMTkxMV5BMl5BanBnXkFtZTcwNjk0NDk0NA@@._V1_.jpg',
    streamingLinks: [
      {
        name: 'Netflix',
        url: 'http://...',
        img: 'netflix.png',
      },
    ],
  };

  return (
    <div className={`${styles.container} container book-cover`}>
      <h2 className='text-lg'>
        <span>You should watch</span> Legally Blonde (2001)
      </h2>
      <div className={styles.poster}>
        <img
          alt={`${recommendedMovie.name} Poster`}
          src={recommendedMovie.poster}
        />
      </div>
      <div className={styles.nav}>
        {recommendedMovie.streamingLinks.map(({ name, url, img }) => (
          <a
            key={name}
            href={url}
            className={`box input ${styles['streaming-link']}`}
            target='_blank'
            rel='noreferrer noopener'
          >
            Watch now on <img src={img} alt={name} />
          </a>
        ))}
        <button onClick={reset}>Start again</button>
      </div>
      <div className={styles.rating}>
        Was this a good recommendation?
        <div className={styles['rating-options']}>
          {['Yes', 'no'].map((value) => (
            <Checkbox value={value} key={value} name='rating' type='radio' />
          ))}
        </div>
        <div className={styles.toast}>
          Thanks
          <br />
          for the
          <br /> feedback!
        </div>
      </div>
    </div>
  );
};

export default End;
