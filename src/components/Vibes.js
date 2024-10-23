import { useState } from 'react';
import CheckboxListItem from './CheckboxListItem';

const Vibes = () => {
  const vibes = [
    'Flirty',
    'Lovey dovey',
    'Teary-eyed',
    'I want to feel inspired',
    'I want to laugh so hard milk comes out of my nose ',
  ];

  const [selectedVibes, setSelectedVibes] = useState([]);

  const handleChange = (e) => {
    setSelectedVibes(
      e.target.checked
        ? [...selectedVibes, e.target.value]
        : selectedVibes.filter((vibe) => vibe !== e.target.value)
    );
  };

  return (
    <>
      {vibes.map((vibe) => (
        <CheckboxListItem key={vibe} value={vibe} handleChange={handleChange} />
      ))}
    </>
  );
};

export default Vibes;
