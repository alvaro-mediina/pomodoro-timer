import Logo from "./Logo";
import MenuWhite from "../../assets/menu-white.svg";
import MenuBlack from "../../assets/menu-black.svg";

interface NavProps {
  scrolledInfo: boolean;
}

const Nav = ({ scrolledInfo }: NavProps) => {
  return (
    <nav
      className={`w-full h-20 flex flex-row justify-center items-center sm:text-xl z-50 transition-all duration-300 ${
        scrolledInfo ? "bg-white text-black" : "bg-background text-white"
      }`}
    >
      <Logo className={scrolledInfo ? "text-black" : "text-white"} />

    </nav>
  );
};

export default Nav;
