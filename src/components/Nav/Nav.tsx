import Logo from "./Logo";
import Menu from "../../assets/menu-white.svg";

const Nav = () => {
    return (
        <nav className="fixed w-full h-20 bg-background flex flex-row justify-between items-center px-4 sm:text-xl z-50">
            <Logo />
            <div className="w-14 mr-7 flex justify-center items-center sm:mr-10 md:mr-15 lg:mr-20">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    <img className="h-16 w-auto" src={Menu} alt="Menu" />
                </a>
            </div>
        </nav>
    );
};

export default Nav;
