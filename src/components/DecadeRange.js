import { Fragment, useState } from 'react';
import Bar from './Bar';

const DecadeRange = () => {
  const decadeRange = {
    min: 1960,
    max: Math.round(new Date().getFullYear() / 10) * 10,
  };

  const [selectedDecadeRange, setSelectedDecadeRange] = useState(decadeRange);

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
          decimalToDecade(distance / maxDistance) < selectedDecadeRange.max) ||
        (thumbKey === 'max' &&
          decimalToDecade(distance / maxDistance) > selectedDecadeRange.min)
      ) {
        setSelectedDecadeRange({
          ...selectedDecadeRange,
          [thumbKey]: decimalToDecade(distance / maxDistance),
        });
      }
    }
  };

  return (
    <>
      <div className='range-slider'>
        <Bar
          offsets={{
            start: decadeToDecimal(selectedDecadeRange.min),
            end: decadeToDecimal(selectedDecadeRange.max),
          }}
          gradientId='range'
        />
        {Object.keys(decadeRange).map((key) => (
          <div
            key={key}
            id={`range-slider-thumb-${key}`}
            className='range-slider-thumb'
            onTouchMove={handleTouchMove}
            style={{
              left: `calc(91% * ${decadeToDecimal(selectedDecadeRange[key])})`,
            }}
          ></div>
        ))}
      </div>
      <p className='decade-range'>
        {Object.values(selectedDecadeRange).map((decade, index) => (
          <Fragment key={decade}>
            {decade}
            <sub>s</sub>
            {index === 0 && <span className='decade-range-dash'>&mdash;</span>}
          </Fragment>
        ))}
      </p>
    </>
  );
};

export default DecadeRange;
