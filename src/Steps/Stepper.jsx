// Steps/Stepper.js

import { useLocation } from "react-router-dom";

export const Stepper = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return (
      "nav-link nav-circle " + (path === location.pathname ? "active" : "")
    );
  };

  // const getLinkClass = ({ isActive }) =>
  //   `nav-link ${isActive ? "active" : undefined}`;

  return (
    <nav className="stepper navbar">
      <ol className="navbar-nav flow-content flow-content--large">
        <li className="step nav-item">
          <div className={getLinkClass("/")}>1</div>
          <div className="nav-details">
            <div className="nav-step-no">Step 1</div>
            <div className="nav-desc">Your Info</div>
          </div>
        </li>
        <li className="step nav-item">
          <div className={getLinkClass("/plan")}>2</div>
          <div className="nav-details">
            <div className="nav-step-no">Step 2</div>
            <div className="nav-desc">Select Plan</div>
          </div>
        </li>
        <li className="step nav-item">
          <span className={getLinkClass("/addons")}>3</span>
          <div className="nav-details">
            <div className="nav-step-no">Step 3</div>
            <div className="nav-desc">Add-ons</div>
          </div>
        </li>
        <li className="step nav-item">
          <span className={getLinkClass("/confirm")}>4</span>
          <div className="nav-details">
            <div className="nav-step-no">Step 4</div>
            <div className="nav-desc">Summary</div>
          </div>
        </li>
      </ol>
    </nav>
  );
};
