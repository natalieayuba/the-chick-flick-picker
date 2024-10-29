import styles from './Checkbox.module.css';

const Checkbox = ({ image, type = 'checkbox', ...rest }) => (
  <label className={rest.className} htmlFor={rest.value}>
    <input type={type} id={rest.value} {...rest} />
    <div className={styles.checkbox}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M3 14.8003C3.38211 15.6838 3.96658 16.5071 4.45238 17.3389C5.12107 18.4839 5.78179 19.6177 6.35317 20.8104C6.52725 21.1738 6.63161 21.5665 6.80159 21.9268C6.8842 22.1019 7.00396 21.9196 7.07937 21.8274C8.02423 20.6729 8.82719 19.408 9.6627 18.18C11.4206 15.5964 13.2271 13.0454 15.0714 10.5182C16.8204 8.12165 18.6433 5.78735 20.5675 3.51783C21.0109 2.99484 21.4477 2.42568 22 2'
          stroke='#121212'
          vectorEffect='non-scaling-stroke'
          strokeWidth={2}
          strokeLinecap='round'
        />
      </svg>
    </div>
    {image ? <img src={image} alt={rest.value} /> : rest.value}
  </label>
);

export default Checkbox;
