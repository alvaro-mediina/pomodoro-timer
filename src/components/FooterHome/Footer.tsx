import { Link } from 'react-router-dom';
import Alarm from '@/assets/3d-alarm.png';

function Footer() {
  return (
    <div className="w-full flex justify-end items-center pr-6 pb-6 md:-translate-y-5">
      <Link to="/pomodoro">
        <div className="relative">
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
