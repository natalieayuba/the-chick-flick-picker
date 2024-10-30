import styles from './Start.module.css';
import logo from '../../images/logo.png';
import Button from '../../Button';
import laraJean from '../../images/to-all-the-boys-ive-loved-before-lara-jean.png';
import cherAndDionne from '../../images/clueless-cher-and-dionne.png';
import elle from '../../images/legally-blonde-elle.png';
import thePlastics from '../../images/mean-girls-the-plastics.png';
import gorls from '../../images/gorls.png';

const Start = ({ next }) => {
  const cutouts = [
    {
      alt: 'Legally Blonde - Elle',
      src: elle,
      bottom: 430,
    },
    {
      alt: 'Clueless - Cher and Dionne',
      src: cherAndDionne,
      bottom: 140,
    },
    {
      alt: "To all the Boys I've Loved Before - Lara Jean",
      src: laraJean,
    },
    {
      alt: 'Mean Girls - The Plastics',
      src: thePlastics,
    },
  ];
  return (
    <div className={`container book-cover ${styles.container}`}>
      <header>
        <img alt='The Chick Flick Picker' src={logo} className={styles.logo} />
        <p className='text-lg'>
          Find the perfect girly film to watch just for you
        </p>
        <Button onClick={next}>Let's Begin!</Button>
      </header>
      {/* <div className={styles.cutouts}>
        {cutouts.map(({ src, alt, right, bottom }) => (
          <img src={src} key={alt} alt={alt} style={{ right, bottom }} />
        ))}
      </div> */}
      <img src={gorls} alt='Gorls' className={styles.gorls} />
      <footer>
        Created by{' '}
        <a
          href='http://www.natalieayuba.com'
          target='_blank'
          rel='noreferrer noopener'
        >
          Natalie Ayuba
        </a>
      </footer>
    </div>
  );
};
export default Start;
