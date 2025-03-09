
import Tomato3D from "./Tomato3D";

function Home () {
    return(
        <div className="min-h-screen min-w-[400px] flex flex-col flex-start  sm:pb-10 lg:min-h-fit lg:pb-0 ">
            <main className="w-full flex flex-col flex-grow justify-center items-center sm:flex-col md:flex-col lg:flex-row ">
                <Tomato3D/>
                <div className="w-full flex flex-col items-center justify-between text-center lg:mr-30">
                    <h1 className="extrabold text-white text-5xl bg-CuteRed px-5 py-2 rounded-2xl mb-5 lg:px-10 lg:text-6xl lg:py-0">POMODORO</h1>
                    <h1 className="extrabold text-white text-4xl lg:text-5xl drop-shadow-[4px_4px_4px_rgba(0,0,0,0.5)]">CONCENTRACIÓN <br />EN SESIONES</h1>
                    <button className="button">COMENZAR</button>
                </div>
            </main>
        </div>
    );
}

export default Home;