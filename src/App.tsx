import { Routes, Route } from "react-router-dom";
import Pomodoro from "./pages/Pomodoro";
import Homepage from "./pages/Homepage";
import "./styles/App.css";


function App() {

  return (
    <div className="bg-background flex flex-col overflow-x-hidden overflow-y-auto">
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/" element={<Pomodoro/>}/>
      </Routes>
    </div>
  );
}

export default App;
