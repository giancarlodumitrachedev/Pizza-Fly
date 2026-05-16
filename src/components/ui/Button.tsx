import React from 'react';
import { cn } from './PlaceholderImage';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', href, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[44px]";
    
    const variants = {
      primary: "bg-blue-900 text-white hover:bg-blue-800 shadow-md",
      secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
      ghost: "hover:bg-slate-100 hover:text-slate-900",
      outline: "border-2 border-white bg-transparent text-white hover:bg-white/10",
    };

    const sizes = {
      default: "px-6 py-2",
      sm: "h-11 rounded-md px-3",
      lg: "h-14 rounded-full px-8 text-base",
      icon: "h-11 w-11",
    };

    const classNameStr = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classNameStr}>
          {props.children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classNameStr} {...props} />
    );
  }
);
Button.displayName = "Button";
