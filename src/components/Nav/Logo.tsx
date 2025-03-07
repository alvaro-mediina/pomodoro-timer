const Logo = () => {
    return(
        <div className="w-auto h-full ml-10 text-white flex flex-col  justify-center items-center select-none">
            <h1 className="w-full extrabold text-3xl text-center ">POMODORO</h1>
            <div className="w-full light text-xl flex flex-row justify-center items-center gap-3">
                <h2>🍅</h2>
                <h2 className="tracking-[.5em]">TIMER</h2>
                <h2>⏰</h2>
            </div>
        </div>
    );
}
export default Logo;