import { Link } from 'react-router-dom';
import Alarm from '@/assets/3d-alarm.png';

function Footer() {
  return (
    <div className="w-full flex justify-end items-center pr-6 pb-6">
      <Link to="/pomodoro">
        <div className="relative duration-300 hover:scale-105">
          <img
            className="absolute -top-4 -right-2 z-10 pointer-events-none"
            src={Alarm}
            width={80}
            alt="Alarm"
          />
          <button className="button">COMENZAR</button>
        </div>
      </Link>
    </div>
  );
}

export default Footer;
