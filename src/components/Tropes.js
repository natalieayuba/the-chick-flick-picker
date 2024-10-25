import CheckboxListItem from './CheckboxListItem/CheckboxListItem';

const Tropes = ({ prevAnswer, updateAnswers }) => {
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

  const handleChange = (e) => {
    updateAnswers(
      'tropes',
      e.target.checked
        ? [...prevAnswer, e.target.value]
        : prevAnswer.filter((answer) => answer !== e.target.value)
    );
  };

  return tropes.map((trope) => (
    <CheckboxListItem
      value={trope}
      key={trope}
      onChange={handleChange}
      checked={prevAnswer && prevAnswer.includes(trope)}
    />
  ));
};

export default Tropes;
