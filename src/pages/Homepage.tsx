import Nav from "../components/Nav/Nav";
import Home from "../components/Home/Home";
import Info from "../components/Info/Info";
import { useState,useEffect } from "react";

function Homepage() {
    const [scrolledInfo, setScrolledInfo] = useState(false);

    useEffect(() => {
    const infoSection = document.getElementById("info-section");
    if (!infoSection) return;

    const infoTop = infoSection.offsetTop;

    const handleScroll = () => {
        const scrollY = window.scrollY;
        setScrolledInfo(scrollY + 50 >= infoTop);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Estado inicial

    return () => window.removeEventListener("scroll", handleScroll); }, []);

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

export default Homepage;
