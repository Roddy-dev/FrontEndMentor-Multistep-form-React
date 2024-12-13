import React from "react";

export const Field = ({ children, label, error }) => {
  const id = getChildId(children);
  // console.log("form child", children);

  return (
    // <div className="col-sm-12 mb-3 is this bootstrap? remove">
    <div className="form-segment">
      <label htmlFor={id} className="form-label">
        {label}
        {error && <small className="error">{error.message}</small>}
      </label>
      {children}
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
