const Button = ({ children, className, ...rest }) => (
  <button className={`input ${className}`} type='button' {...rest}>
    {children}
  </button>
);

export default Button;
