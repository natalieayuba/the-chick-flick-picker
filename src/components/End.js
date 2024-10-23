import '../styles/End.css';

const End = ({ reset }) => {
  const reccomendedMovie = {
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
    <div className='end-container container'>
      <h2>
        <span className='small'>You should watch</span> Legally Blonde (2001)
      </h2>
      <div className='poster'>
        <img
          alt={`${reccomendedMovie.name} Poster`}
          src={reccomendedMovie.poster}
        />
      </div>
      <div className='nav'>
        {reccomendedMovie.streamingLinks.map(({ name, url, img }) => (
          <a
            href={url}
            className='input'
            target='_blank'
            rel='noreferrer noopener'
          >
            Watch now on <img src={img} alt={name} />
          </a>
        ))}
        <button onClick={reset}>Start again</button>
      </div>
      <div className='rating'>
        Was this a good recommendation?
        <div className='rating-options'>
          {['Yes', 'no'].map((value) => (
            <label htmlFor={value} key={value}>
              <input id={value} type='radio' value={value} name='rating' />
              <div className='checkbox'></div>
              {value}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default End;
