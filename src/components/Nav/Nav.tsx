import Logo from "./Logo";
import Menu from "../../assets/menu-white.svg"

const Nav = () =>{
    return(
        <div className="h-16 bg-amber-400 flex flex-row justify-between">
            <Logo/>
            <div className="w-14 flex justify-center">
                <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    <img className="h-16 w-auto" src={Menu} alt="Menu" />
                </a>
            </div>
        </div>
    );
}

export default Nav