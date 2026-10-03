/**
 * Reusable Badge Primitive
 */
export function Badge({
  children,
  variant = 'pink',
  className = '',
  ...props
}) {
  const variantStyles = {
    pink: 'bg-[#F7C4D5] text-[#4A1529]',
    primary: 'bg-primary text-white',
    outline: 'border-2 border-[#4A1529] text-[#4A1529]',
    success: 'bg-green-600 text-white',
    danger: 'bg-red-600 text-white',
    muted: 'bg-[#855264]/10 text-[#855264]',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full 
        font-heading font-black text-xs uppercase tracking-wider
        ${variantStyles[variant] || variantStyles.pink}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
