import React from "react";

export const Field = ({ children, label, error }) => {
  const id = getChildId(children);

  return (
    <div className="col-sm-12 mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {children}
      {error && <small className="error">{error.message}</small>}
    </div>
  );
};

export const getChildId = (children) => {
  const child = React.Children.only(children);

  // ?. is called optional chaining, if not found it just short circuits
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

  if ("id" in child?.props) {
    return child.props.id;
  }
};
