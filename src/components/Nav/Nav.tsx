import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useAuthContext } from '@/contexts/AuthContext';
import { logout } from '@/lib/authService';

function Nav() {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleLogout = () => logout();

  return (
    <nav
      className="w-full h-20 flex flex-row justify-between items-center pt-2 pl-10 sm:text-xl z-50 
      transition-all duration-300"
    >
      <Logo />
      {!user ? (
        <>
          <div className="pr-10 flex gap-3">
            <button
              type="submit"
              className="border-3 border-CuteRed text-white py-4 px-10 mt-2 rounded-xl 
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] duration-300 hover:scale-105"
              onClick={() => {
                navigate('/login');
              }}
            >
              Iniciar Sesión
            </button>
            <button
              className="bg-CuteRed text-white py-4 px-10 mt-2 rounded-xl 
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] duration-300 hover:scale-105"
              onClick={() => {
                navigate('register');
              }}
            >
              Registrarse
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="pr-10">
            <button
              className="bg-CuteRed text-white py-4 px-10 mt-2 rounded-xl 
          drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] duration-300 hover:scale-105"
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          </div>
        </>
      )}
    </nav>
  );
}

export default Nav;
