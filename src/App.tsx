import { useState, useEffect, useRef } from "react";
import "./styles/App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";

function App() {
  const [scrolledInfo, setScrolledInfo] = useState(false);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (infoRef.current) {
        const rect = infoRef.current.getBoundingClientRect();
        setScrolledInfo(rect.top <= 50 && rect.bottom >= 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background flex flex-col overflow-x-hidden overflow-y-auto">
      <Nav scrolledInfo={scrolledInfo} />
      <Home />
      <div ref={infoRef}>
        <Info />
      </div>
    </div>
  );
}

export default App;
