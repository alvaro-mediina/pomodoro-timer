import { Routes, Route, useLocation } from "react-router-dom";
import Pomopage from "./pages/Pomopage";
import Homepage from "./pages/Homepage";
import "./styles/App.css";


function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isHome ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <Homepage />
          </div>
          <main className="relative z-10">
            <Routes>
              <Route path="/pomodoro" element={<Pomopage />} />
            </Routes>
          </main>
    </div>
  );
}

export default App;
