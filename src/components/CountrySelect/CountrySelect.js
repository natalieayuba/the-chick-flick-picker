import { useRef, useState, useEffect } from 'react';
import flags from 'country-flag-icons/react/3x2';
import styles from './CountrySelect.module.css';

const CountrySelect = ({ prevAnswer, updateAnswers, answerKey }) => {
  const countries = {
    au: {
      countryCode: 'au',
      name: 'Australia',
      services: [],
    },
    ie: {
      countryCode: 'ie',
      name: 'Ireland',
      services: [],
    },
    hr: {
      countryCode: 'hr',
      name: 'Croatia',
      services: [],
    },
  };
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const [filteredCountries, setFilteredCountries] = useState(
    Object.values(countries)
  );

  useEffect(() => {
    setFilteredCountries((filteredCountries) =>
      query === ''
        ? Object.values(countries)
        : filteredCountries.filter(({ name }) =>
            name
              .toLowerCase()
              .split(' ')
              .some((word) => word.startsWith(query.toLowerCase()))
          )
    );
  }, [query]);

  const handleMouseDown = (countryCode, name) => {
    if (updateAnswers && inputRef.current) {
      inputRef.current.value = name;
      updateAnswers(answerKey, countryCode);
      setQuery('');
    }
  };

  const handleChange = (e) => {
    if (inputRef.current) {
      setIsOpen(true);
      inputRef.current.value = e.target.value;
      setQuery(e.target.value);
    }
  };

  return (
    <div className={styles.dropdown}>
      <input
        type='text'
        ref={inputRef}
        aria-label='Country'
        className='box input'
        defaultValue={prevAnswer && countries[prevAnswer].name}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
        onChange={handleChange}
        placeholder='Select your country'
      />
      {isOpen && (
        <div
          className={`box ${styles['dropdown-content']}`}
          data-testid='dropdown-content'
        >
          {filteredCountries.length > 0 ? (
            <ol className={styles.countries}>
              {filteredCountries.map(({ countryCode, name }) => {
                const Flag = flags[countryCode.toUpperCase()];
                return (
                  <li
                    key={countryCode}
                    title={name}
                    onMouseDown={() => handleMouseDown(countryCode, name)}
                  >
                    <Flag className={styles.flag} />
                    {name}
                  </li>
                );
              })}
            </ol>
          ) : (
            <span className={styles.empty}>No countries found.</span>
          )}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
