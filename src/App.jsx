import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import { Contact } from "./Steps/Contact";
import { Plan } from "./Steps/Plan";
import { Addons } from "./Steps/Addons";
import { Confirm } from "./Steps/Confirm";
import { Stepper } from "./Steps/Stepper";
import { Thanks } from "./Steps/Thanks";
import "./App.css";

function App() {
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
