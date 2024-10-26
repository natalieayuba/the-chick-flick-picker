import CheckboxListItem from './CheckboxListItem/CheckboxListItem';

const List = ({ prevAnswer, updateAnswers, list, answerKey }) =>
  list.map((item) => {
    const value = answerKey === 'services' ? item.id : item;
    return (
      <CheckboxListItem
        key={value}
        value={value}
        {...(prevAnswer && { checked: prevAnswer.includes(value) })}
        {...(answerKey === 'services' && {
          className: 'checkbox-card',
          image: item.imageSet.lightThemeImage,
        })}
        onChange={(e) =>
          updateAnswers(
            answerKey,
            e.target.checked
              ? [...prevAnswer, e.target.value]
              : prevAnswer.filter((answer) => answer !== e.target.value)
          )
        }
      />
    );
  });
export default List;
