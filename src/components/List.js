import CheckboxListItem from './CheckboxListItem/CheckboxListItem';

const List = ({ prevAnswer, updateAnswers, list, name }) =>
  list.map((item) => {
    const value = name === 'services' ? item.id : item;
    return (
      <CheckboxListItem
        key={value}
        value={value}
        {...(prevAnswer && { checked: prevAnswer.includes(value) })}
        {...(name === 'services' && {
          className: 'checkbox-card',
          image: item.imageSet.lightThemeImage,
        })}
        onChange={(e) =>
          updateAnswers(
            name,
            e.target.checked
              ? [...prevAnswer, e.target.value]
              : prevAnswer.filter((answer) => answer !== e.target.value)
          )
        }
      />
    );
  });
export default List;
