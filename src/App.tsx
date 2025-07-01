import { useState, useEffect, useRef } from "react";
import "./styles/App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";

function App() {
  const [scrolledInfo, setScrolledInfo] = useState(false);

  //Manejar el color de la navbar
  useEffect(() => {
    const infoSection = document.getElementById("info-section");
    if (!infoSection) return;

    const infoTop = infoSection.offsetTop;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolledInfo(scrollY + 50 >= infoTop);
    };

    window.addEventListener("scroll", handleScroll);
    
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background flex flex-col overflow-x-hidden overflow-y-auto">
      <Nav scrolledInfo={scrolledInfo} />
      <Home />
      <div id="info-section">
        <Info />
      </div>
    </div>
  );
}

export default App;
