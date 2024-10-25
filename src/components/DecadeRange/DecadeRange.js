import { Fragment } from 'react';
import Bar from '../Bar/Bar';
import styles from './DecadeRange.module.css';

const DecadeRange = ({ prevAnswer, updateAnswers }) => {
  const decadeRange = {
    start: 1960,
    end: Math.round(new Date().getFullYear() / 10) * 10,
  };

  const decadeToDecimal = (decade) =>
    (decade - decadeRange.start) / (decadeRange.end - decadeRange.start);

  const decimalToDecade = (decimal) =>
    decimal * (decadeRange.end - decadeRange.start) + decadeRange.start;

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - 24 - e.target.clientWidth / 2;
    const maxDistance = e.target.parentElement.clientWidth - 24;

    if (x > 0 && x < maxDistance) {
      const step = maxDistance / ((decadeRange.end - decadeRange.start) / 10);
      const distance = Math.round(x / step) * step;
      const thumbKey = e.target.id.includes('start') ? 'start' : 'end';

      if (
        (thumbKey === 'start' &&
          decimalToDecade(distance / maxDistance) < prevAnswer.end) ||
        (thumbKey === 'end' &&
          decimalToDecade(distance / maxDistance) > prevAnswer.start)
      ) {
        updateAnswers('decade', {
          ...prevAnswer,
          [thumbKey]: decimalToDecade(distance / maxDistance),
        });
      }
    }
  };

  return (
    <>
      <div className={styles.slider}>
        <Bar
          offsets={{
            start: decadeToDecimal(prevAnswer.start),
            end: decadeToDecimal(prevAnswer.end),
          }}
          id='slider'
        />
        {Object.keys(decadeRange).map((key) => (
          <div
            key={key}
            id={`slider-thumb-${key}`}
            className={styles['slider-thumb']}
            onTouchMove={handleTouchMove}
            style={{
              left: `calc(90% * ${decadeToDecimal(prevAnswer[key])})`,
            }}
          ></div>
        ))}
      </div>
      <p className={styles.range}>
        {Object.values(prevAnswer).map((decade, index) => (
          <Fragment key={decade}>
            {decade}
            <sub>s</sub>
            {index === 0 && <span>&mdash;</span>}
          </Fragment>
        ))}
      </p>
    </>
  );
};

export default DecadeRange;
