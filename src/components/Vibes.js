import CheckboxListItem from './CheckboxListItem/CheckboxListItem';

const Vibes = ({ prevAnswer, updateAnswers }) => {
  const vibes = [
    'Flirty',
    'Lovey dovey',
    'Teary-eyed',
    'I want to feel inspired',
    'I want to laugh so hard milk comes out of my nose ',
  ];

  const handleChange = (e) => {
    updateAnswers(
      'vibes',
      e.target.checked
        ? [...prevAnswer, e.target.value]
        : prevAnswer.filter((answer) => answer !== e.target.value)
    );
  };

  return vibes.map((vibe) => (
    <CheckboxListItem
      key={vibe}
      checked={prevAnswer.includes(vibe)}
      value={vibe}
      onChange={handleChange}
    />
  ));
};

export default Vibes;
