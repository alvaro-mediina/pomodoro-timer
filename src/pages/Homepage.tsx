import Nav from "../components/Nav/Nav";
import Home from "../components/Home/Home";
import Info from "../components/Info/Info";

import { useState,useEffect } from "react";

function Homepage() {
    const [scrolledInfo, setScrolledInfo] = useState(false);

    // Manejo del cambio de color del Nav
    useEffect(() => {
        const scrollContainer = document.getElementById("scrollbar-hide") ||
            document.querySelector(".homepage-container");
        if (!scrollContainer) return;

        const infoSection = document.getElementById("info-section");
        if (!infoSection) return;

        const infoTop = infoSection.offsetTop;

        const handleScroll = () => {
            // scrollY relativo al scrollContainer
            const scrollY = scrollContainer.scrollTop;
            setScrolledInfo(scrollY + 50 >= infoTop);
        };

        scrollContainer.addEventListener("scroll", handleScroll);
        handleScroll(); // Estado inicial

        return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <div className="bg-background flex flex-col min-h-screen">
        <Nav scrolledInfo={scrolledInfo} />
        <Home />
    </div>
    );
}

export default Homepage;
