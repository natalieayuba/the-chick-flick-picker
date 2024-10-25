import styles from './CheckboxListItem.module.css';
import Checkbox from '../Checkbox/Checkbox';

const CheckboxListItem = ({ image, value, className, ...rest }) => (
  <Checkbox
    className={`box ${styles['checkbox-list-item']} ${styles[className]}`}
    value={value}
    image={image}
    {...rest}
  />
);

export default CheckboxListItem;
