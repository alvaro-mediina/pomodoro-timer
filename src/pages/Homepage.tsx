import Nav from "../components/Nav/Nav";
import Home from "../components/Home/Home";
import Info from "../components/Info/Info";
import { useState,useEffect } from "react";

function Homepage() {
    const [scrolledInfo, setScrolledInfo] = useState(false);

    useEffect(() => {
        const scrollContainer = document.getElementById("scroll-container");
        if (!scrollContainer) return;

        const infoSection = document.getElementById("info-section");
        if (!infoSection) return;

        const infoTop = infoSection.offsetTop;

        const handleScroll = () => {
        const scrollY = scrollContainer.scrollTop;
        setScrolledInfo(scrollY + 50 >= infoTop);
        };

        scrollContainer.addEventListener("scroll", handleScroll);
        handleScroll(); // Para estado inicial

        return () => scrollContainer.removeEventListener("scroll", handleScroll);
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

export default Homepage;
