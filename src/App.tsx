import { Routes, Route, useLocation } from "react-router-dom";
import Pomopage from "./pages/Pomopage";
import Homepage from "./pages/Homepage";
import "./styles/App.css";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="app-container">
      <div className={`homepage-container ${isHome ? "active" : ""}`}>
        <Homepage />
      </div>

      <main className={`main-container ${!isHome ? "active" : ""}`}>
        <Routes>
          <Route path="/pomodoro" element={<Pomopage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
