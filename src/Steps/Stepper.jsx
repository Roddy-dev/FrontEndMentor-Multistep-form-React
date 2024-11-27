// Steps/Stepper.js

import { useLocation } from "react-router-dom";

export const Stepper = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return (
      "nav-link disabled " + (path === location.pathname ? "active" : undefined)
    );
  };

  return (
    <nav className="stepper navbar navbar-expand-lg">
      <div className="navbar-collapse collapse">
        <ol className="navbar-nav">
          <li className="step nav-item">
            <span className={getLinkClass("/")}>Your Info</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/plan")}>Select Plan</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/addons")}>Add-ons</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/summary")}>Summary</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};
