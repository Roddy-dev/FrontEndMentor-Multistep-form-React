import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Button = forwardRef(
  // eslint-disable-next-line
  ({ children, variant = "primary", ...props }, ref) => {
    return (
      <button className={`btn btn-${variant}`} {...props}>
        {children}
      </button>
    );
  }
);
