import React from 'react';

const CheckboxListItem = ({ value, handleChange, image, className }) => (
  <label
    className={`input checkbox-list-item${className ? ` ${className}` : ''}`}
    htmlFor={value}
  >
    <input type='checkbox' id={value} value={value} onChange={handleChange} />
    <div className='checkbox'></div>
    {image ? <img src={image} alt={value} /> : value}
  </label>
);

export default CheckboxListItem;
