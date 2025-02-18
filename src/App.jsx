import { useState } from "react";
import Homepage from "./Homepage";
import TicketSelection from "./TicketSelection";
import AttendeeDetails from "./AttendeeDetails";
import FinalStep from "./FinalStep";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ticket-selection" element={<TicketSelection />} />
        <Route path="/" element={<TicketSelection />} />
        <Route path="/attendee-details" element={<AttendeeDetails />} />
        <Route path="/" element={<AttendeeDetails />} />
        <Route path="/final-step" element={<FinalStep />} />
      </Routes>
    </Router>
  );
}

export default App;
