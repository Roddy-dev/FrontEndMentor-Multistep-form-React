import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import { Contact } from "./Steps/Contact";
import { Plan } from "./Steps/Plan";
import { Addons } from "./Steps/Addons";
import { Confirm } from "./Steps/Confirm";
import { Stepper } from "./Steps/Stepper";
import { Thanks } from "./Steps/Thanks";
// import { PriceContext } from "./PriceContext";
import "./App.css";

function App() {
  // const prices = [
  //   {
  //     type: "Arcade",
  //     price: {
  //       monthly: 10,
  //       yearly: 90,
  //     },
  //   },
  //   {
  //     type: "Advanced",
  //     price: {
  //       monthly: 12,
  //       yearly: 120,
  //     },
  //   },
  //   {
  //     type: "Pro",
  //     price: {
  //       monthly: 15,
  //       yearly: 150,
  //     },
  //   },
  //   {
  //     type: "hasService",
  //     title: "Online Service",
  //     price: {
  //       monthly: 1,
  //       yearly: 10,
  //     },
  //     tagline: "Access to multiplayer games",
  //   },
  //   {
  //     type: "hasStorage",
  //     title: "Additional Storage",
  //     price: {
  //       monthly: 2,
  //       yearly: 20,
  //     },
  //     tagline: "Extra 1TB of cloud save",
  //   },
  //   {
  //     type: "hasProfile",
  //     title: "Customizable Profile",
  //     price: {
  //       monthly: 2,
  //       yearly: 20,
  //     },
  //     tagline: "Custom theme on your profile",
  //   },
  // ];

  return (
    <div className="app container">
      <AppProvider>
        <Router>
          <div className="split">
            <Stepper />
            <Routes>
              <Route path="/" element={<Contact />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/addons" element={<Addons />} />
              <Route path="/confirm" element={<Confirm />} />
              <Route path="/thanks" element={<Thanks />} />
            </Routes>
          </div>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
