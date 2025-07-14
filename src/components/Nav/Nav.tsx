import Logo from './Logo';

function Nav() {
  return (
    <nav
      className="w-full h-20 flex flex-row justify-center items-center sm:text-xl z-50 
      transition-all duration-300"
    >
      <Logo className="text-white" />
    </nav>
  );
}

export default Nav;
