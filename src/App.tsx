import { Routes, Route } from "react-router-dom";
import Pomopage from "./pages/Pomopage";
import Homepage from "./pages/Homepage";
import "./styles/App.css";


function App() {

  return (
    <div className="bg-background flex flex-col overflow-x-hidden overflow-y-auto">
      <Routes>
        {/* <Route path="/" element={<Homepage />} /> */}
        <Route path="/" element={<Pomopage/>}/>
      </Routes>
    </div>
  );
}

export default App;
