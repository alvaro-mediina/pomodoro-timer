import Logo from "./Logo";
import MenuWhite from "../../assets/menu-white.svg";
import MenuBlack from "../../assets/menu-black.svg";

interface NavProps {
  scrolledInfo: boolean;
}

const Nav = ({ scrolledInfo }: NavProps) => {
  return (
    <nav
      className={`fixed w-full h-20 flex flex-row justify-between items-center px-4 sm:text-xl z-50 transition-all duration-300 ${
        scrolledInfo ? "bg-white text-black" : "bg-background text-white"
      }`}
    >
      <Logo className={scrolledInfo ? "text-black" : "text-white"} />

      <div className="w-14 mr-7 flex justify-center items-center sm:mr-10 md:mr-15 lg:mr-20">
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <img
            className="h-16 w-auto transition-all duration-300"
            src={scrolledInfo ? MenuBlack : MenuWhite}
            alt="Menu"
          />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
