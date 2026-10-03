/**
 * Reusable Neo-Brutalist Button Primitive
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles = 'font-heading font-black transition-all cursor-pointer inline-flex items-center justify-center select-none';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs rounded-lg',
    md: 'px-6 py-2.5 sm:py-3.5 text-base rounded-xl',
    lg: 'px-8 py-3.5 sm:py-4 text-lg sm:text-xl rounded-2xl',
    pill: 'py-3.5 sm:py-4 px-8 text-base rounded-full',
  };

  const variantStyles = {
    primary: 'bg-primary text-white border-[3px] border-[#4A1529] shadow-[0px_4px_0px_0px_#4A1529] hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-1 active:shadow-none',
    secondary: 'bg-card text-[#4A1529] border-[3px] border-[#4A1529] shadow-[0px_4px_0px_0px_#4A1529] hover:bg-[#F7C4D5]/40 hover:-translate-y-0.5 active:translate-y-1 active:shadow-none',
    outline: 'bg-white text-[#4A1529] border-[2px] border-[#4A1529] hover:bg-[#F7C4D5]/30',
    ghost: 'text-text hover:text-primary hover:bg-text/5',
    danger: 'bg-red-500 text-white border-[3px] border-[#4A1529] shadow-[0px_4px_0px_0px_#4A1529] hover:bg-red-600',
    dangerGhost: 'text-red-500 hover:bg-red-50',
  };

  const disabledStyles = 'opacity-40 cursor-not-allowed shadow-none translate-y-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-y-0.5';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${sizeStyles[size] || sizeStyles.md}
        ${variantStyles[variant] || variantStyles.primary}
        ${disabled ? disabledStyles : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
