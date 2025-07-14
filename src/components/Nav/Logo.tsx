interface LogoProps {
    className?: string;
  }
  
  const Logo = ({ className }: LogoProps) => {
    return (
      <div className={`w-auto h-full flex flex-col justify-center items-center select-none ${className}`}>
        <h1 className={`w-full extrabold text-3xl text-center ${className}`}>POMODORO</h1>
        <div className={`w-full light text-xl flex flex-row justify-between items-center gap-3 ${className}`}>
          <h2>🍅</h2>
          <h2 className="tracking-[.5em]">TIMER</h2>
          <h2>⏰</h2>
        </div>
      </div>
    );
  };
  
  export default Logo;
  