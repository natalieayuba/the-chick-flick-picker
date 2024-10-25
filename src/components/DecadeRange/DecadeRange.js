import { Fragment, useEffect } from 'react';
import Bar from '../Bar/Bar';
import styles from './DecadeRange.module.css';

const DecadeRange = ({ prevAnswer, updateAnswers }) => {
  const decadeRange = {
    min: 1960,
    max: Math.round(new Date().getFullYear() / 10) * 10,
  };

  useEffect(() => {
    if (Object.values(prevAnswer).every((n) => n === 0)) {
      updateAnswers('decade', { start: decadeRange.min, end: decadeRange.max });
    }
  }, []);

  const decadeToDecimal = (decade) =>
    (decade - decadeRange.min) / (decadeRange.max - decadeRange.min);

  const decimalToDecade = (decimal) =>
    decimal * (decadeRange.max - decadeRange.min) + decadeRange.min;

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - 24 - e.target.clientWidth / 2;
    const maxDistance = e.target.parentElement.clientWidth - 24;

    if (x > 0 && x < maxDistance) {
      const step = maxDistance / ((decadeRange.max - decadeRange.min) / 10);
      const distance = Math.round(x / step) * step;
      const thumbKey = e.target.id.includes('min') ? 'min' : 'max';

      if (
        (thumbKey === 'min' &&
          decimalToDecade(distance / maxDistance) < prevAnswer.max) ||
        (thumbKey === 'max' &&
          decimalToDecade(distance / maxDistance) > prevAnswer.min)
      ) {
        updateAnswers('tropes', {
          ...prevAnswer,
          [thumbKey]: decimalToDecade(distance / maxDistance),
        });
      }
    }
  };

  return (
    <>
      <div className={styles['range-slider']}>
        <Bar
          offsets={{
            start: decadeToDecimal(prevAnswer.min),
            end: decadeToDecimal(prevAnswer.max),
          }}
          id='range-slider'
        />
        {Object.keys(decadeRange).map((key) => (
          <div
            key={key}
            id={`range-slider-thumb-${key}`}
            className={styles['range-slider-thumb']}
            onTouchMove={handleTouchMove}
            style={{
              left: `calc(90% * ${decadeToDecimal(prevAnswer[key])})`,
            }}
          ></div>
        ))}
      </div>
      <p className={styles['decade-range']}>
        {Object.values(prevAnswer).map((decade, index) => (
          <Fragment key={decade}>
            {decade}
            <sub>s</sub>
            {index === 0 && (
              <span className={styles['decade-range-dash']}>&mdash;</span>
            )}
          </Fragment>
        ))}
      </p>
    </>
  );
};

export default DecadeRange;
