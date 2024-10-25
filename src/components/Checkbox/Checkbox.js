import styles from './Checkbox.module.css';

const Checkbox = ({ image, type = 'checkbox', ...rest }) => (
  <label className={rest.className} htmlFor={rest.value}>
    <input type={type} id={rest.value} {...rest} />
    <div className={styles.checkbox}></div>
    {image ? <img src={image} alt={rest.value} /> : rest.value}
  </label>
);

export default Checkbox;
