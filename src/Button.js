const Button = ({ children, className, ...rest }) => (
  <button
    className={`box input ${className ? className : ''}`}
    type='button'
    {...rest}
  >
    {children}
  </button>
);

export default Button;
