import styles from './CheckboxListItem.module.css';
import Checkbox from '../Checkbox/Checkbox';

const CheckboxListItem = ({ image, value, className, ...rest }) => (
  <Checkbox
    data-testid='checkbox-list-item'
    className={`box ${styles['checkbox-list-item']} ${
      className ? styles[className] : ''
    }`}
    value={value}
    image={image}
    {...rest}
  />
);

export default CheckboxListItem;
