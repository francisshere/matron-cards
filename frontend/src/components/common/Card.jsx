/**
 * Reusable Neo-Brutalist Card Primitive
 */
export function Card({
  children,
  className = '',
  shadow = 'md',
  border = true,
  onClick,
  ...props
}) {
  const shadowStyles = {
    none: '',
    sm: 'shadow-[0px_3px_0px_0px_#4A1529]',
    md: 'shadow-[0px_4px_0px_0px_#4A1529]',
    lg: 'shadow-[0px_6px_0px_0px_#4A1529]',
  };

  return (
    <div
      onClick={onClick}
      className={`
        bg-card rounded-2xl sm:rounded-3xl
        ${border ? 'border-[3px] border-[#4A1529]' : ''}
        ${shadowStyles[shadow] || shadowStyles.md}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
