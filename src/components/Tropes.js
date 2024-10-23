import { useState } from 'react';
import CheckboxListItem from './CheckboxListItem';

const Tropes = () => {
  const tropes = [
    'Manic pixie dream girl',
    'Girlboss in the big city',
    'Enemies to lovers',
    'Friends to lovers',
    'Coming of age',
    'Musicals',
    'Wattpad adaptation',
    'Shakespeare adaptation',
    'Fairytale adaptation',
    'The beauty makeover',
    'The love triangle',
    'The fake relationship',
  ];

  const [selectedTropes, setSelectedTropes] = useState([]);

  const handleChange = (e) => {
    setSelectedTropes(
      e.target.checked
        ? [...selectedTropes, e.target.value]
        : selectedTropes.filter((trope) => trope !== e.target.value)
    );
  };

  return (
    <>
      {tropes.map((trope) => (
        <CheckboxListItem
          value={trope}
          key={trope}
          handleChange={handleChange}
        />
      ))}
    </>
  );
};

export default Tropes;
