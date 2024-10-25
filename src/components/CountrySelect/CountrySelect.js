import { useRef, useState, useEffect } from 'react';
import flags from 'country-flag-icons/react/3x2';
import styles from './CountrySelect.module.css';

const CountrySelect = ({ prevAnswer, updateAnswers }) => {
  const inputRef = useRef(null);
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

  const [filteredCountries, setFilteredCountries] = useState(
    Object.values(countries)
  );
  const [showMenu, setShowMenu] = useState(false);
  const [inputCountry, setInputCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleChange = (e) => setInputCountry(e.target.value);

  useEffect(() => {
    setFilteredCountries((filteredCountries) =>
      inputCountry === ''
        ? Object.values(countries)
        : filteredCountries.filter(({ name }) =>
            name
              .toLowerCase()
              .split(' ')
              .some((word) => word.startsWith(inputCountry.toLowerCase()))
          )
    );
  }, [inputCountry]);

  useEffect(() => {
    if (updateAnswers && selectedCountry && inputRef.current) {
      inputRef.current.value = countries[selectedCountry].name;
      updateAnswers('country', selectedCountry);
    }
  }, [selectedCountry]);

  return (
    <div className={styles.dropdown}>
      <input
        ref={inputRef}
        aria-label='Country'
        className='box'
        value={prevAnswer ? countries[prevAnswer].name : ''}
        onClick={() => setShowMenu(!showMenu)}
        onBlur={() => setShowMenu(false)}
        onChange={handleChange}
        placeholder='Select your country'
      />
      {showMenu && (
        <div
          className={styles['dropdown-content']}
          data-testid='dropdown-content'
        >
          {filteredCountries.length > 0 ? (
            <ol className={styles.countries}>
              {filteredCountries.map(({ countryCode, name }) => {
                const Flag = flags[countryCode.toUpperCase()];
                return (
                  <li
                    key={countryCode}
                    onMouseDown={() => setSelectedCountry(countryCode)}
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
