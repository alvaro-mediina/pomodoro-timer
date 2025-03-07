const Logo = () => {
    return(
        <div className="w-60 h-full text-white flex flex-col  justify-center items-center">
            <h1 className="w-full extrabold text-3xl text-center">POMODORO</h1>
            <div className="w-full flex flex-row justify-center items-center gap-3">
                <h2 className="text-xl">🍅</h2>
                <h2 className="light text-xl tracking-[.5em]">TIMER</h2>
                <h2 className="text-xl">⏰</h2>
            </div>
        </div>
    );
}
export default Logo;