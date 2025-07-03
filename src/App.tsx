import { Routes, Route, useLocation } from "react-router-dom";
import Pomopage from "./pages/Pomopage";
import Homepage from "./pages/Homepage";
import "./styles/App.css";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative w-full bg-background scrollbar-hide">
      <div
        id="scroll-container"
        className={`fixed inset-0 w-full h-full overflow-y-auto scrollbar-hide transition-opacity duration-500 ${
          isHome ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ pointerEvents: isHome ? "auto" : "none" }}
      >
        <Homepage />
      </div>

      <main
        className={`relative z-10 min-h-screen transition-opacity duration-500 ${
          isHome ? "opacity-0 invisible pointer-events-none" : "opacity-100 visible"
        }`}
      >
        <Routes>
          <Route path="/pomodoro" element={<Pomopage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
