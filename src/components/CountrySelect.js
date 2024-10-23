import { useRef, useState, useEffect } from 'react';
// import flags from 'country-flag-icons/react/3x2';

const CountrySelect = () => {
  const inputRef = useRef(null);
  const countries = [
    'Argentina',
    'Austria',
    'Australia',
    'Azerbaijan',
    'Algeria',
  ];
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const [showMenu, setShowMenu] = useState(false);
  const [inputCountry, setInputCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const handleChange = (e) => setInputCountry(e.target.value);

  useEffect(() => {
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
  }, [countries, filteredCountries, inputCountry]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = selectedCountry;
      setShowMenu(false);
      inputRef.current.blur();
    }
  }, [selectedCountry]);

  return (
    <div className='dropdown'>
      <label className='input'>
        <input
          onClick={() => setShowMenu(!showMenu)}
          ref={inputRef}
          onChange={handleChange}
          placeholder='Select your country'
        />
      </label>
      {showMenu && (
        <div className='dropdown-content'>
          {filteredCountries.length > 0 ? (
            <ol className='countries'>
              {filteredCountries.map((country) => (
                <li key={country} onClick={() => setSelectedCountry(country)}>
                  <img alt={country} src='' className='flag' />
                  {country}
                </li>
              ))}
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
