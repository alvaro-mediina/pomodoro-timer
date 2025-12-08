import { useNavigate } from 'react-router-dom';
import Alarm from '@/assets/3d-alarm.png';
import { useAuthContext } from '@/contexts/AuthContext';

function Footer() {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleClick = () => {
    if (user) navigate('/pomodoro');
    else navigate('/login');
  };

  return (
    <div className="w-full flex justify-end items-center pr-6 pb-6">
      <div className="relative duration-300 hover:scale-105" onClick={handleClick}>
        <img
          className="absolute -top-4 -right-2 z-10 pointer-events-none"
          src={Alarm}
          width={80}
          alt="Alarm"
        />
        <button className="button lg:w-[350px] lg:h-[70px]">COMENZAR</button>
      </div>
    </div>
  );
}

export default Footer;
