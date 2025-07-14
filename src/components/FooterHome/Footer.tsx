import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="h-full bg-white flex justify-center items-center">
      <Link to="/pomodoro">
        <button className="button">COMENZAR</button>
      </Link>
    </div>
  );
}

export default Footer;
