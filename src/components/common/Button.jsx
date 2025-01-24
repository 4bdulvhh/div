const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseClasses = 'px-5 py-2.5 rounded-md font-medium transition-all duration-300 ease-in-out';
  const variantClasses = {
    primary: 'bg-[#8DC63F] hover:bg-[#7ab32e] text-white',
  };

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;