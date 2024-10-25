const Button = ({ children, className, ...rest }) => (
  <button className={`box ${className}`} type='button' {...rest}>
    {children}
  </button>
);

export default Button;
