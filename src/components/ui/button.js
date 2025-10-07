import React from 'react';
import { clsx } from 'clsx';

const Button = React.forwardRef(({ className, variant = "default", size = "default", disabled, asChild, children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    default: "baby-pink-button",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline"
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10"
  };

  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  // If asChild is true, clone the child element and add our classes
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: clsx(children.props.className, classes),
      ref,
      disabled,
      ...props
    });
  }

  return (
    <button
      className={classes}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button };