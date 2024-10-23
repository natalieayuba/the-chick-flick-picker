import { useRef, useState, useEffect } from 'react';
import flags from 'country-flag-icons/react/3x2';

const CountrySelect = () => {
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

  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [showMenu, setShowMenu] = useState(false);
  const [inputCountry, setInputCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const handleChange = (e) => setInputCountry(e.target.value);

  useEffect(() => {
    if (inputCountry) {
      setFilteredCountries(
        inputCountry === ''
          ? countries
          : filteredCountries.filter((country) =>
              country
                .toLowerCase()
                .split(' ')
                .some((word) => word.startsWith(inputCountry.toLowerCase()))
            )
      );
    }
  }, [countries, filteredCountries, inputCountry]);

  const handleBlur = (e) => {
    if (selectedCountry) {
      e.target.value = countries[selectedCountry].name;
    }
    setShowMenu(false);
  };

  return (
    <div className='dropdown'>
      <input
        aria-label='Country'
        className='input'
        onClick={() => setShowMenu(!showMenu)}
        onBlur={handleBlur}
        ref={inputRef}
        onChange={handleChange}
        placeholder='Select your country'
      />
      {showMenu && (
        <div className='dropdown-content' data-testid='dropdown-content'>
          {Object.values(filteredCountries).length > 0 ? (
            <ol className='countries'>
              {Object.values(filteredCountries).map(({ countryCode, name }) => {
                const Flag = flags[countryCode.toUpperCase()];
                return (
                  <li
                    key={countryCode}
                    onMouseDown={() => setSelectedCountry(countryCode)}
                  >
                    <Flag className='flag' />
                    {name}
                  </li>
                );
              })}
            </ol>
          ) : (
            <span className='empty'>No countries found.</span>
          )}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
