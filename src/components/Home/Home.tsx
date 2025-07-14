import { Link } from "react-router-dom";
import Tomato3D from "./Tomato3D";

function Home () {
    return(
        <div className="min-w-[300px] flex flex-col sm:pb-10 lg:pb-0 ">
            <main className="relative w-full flex flex-col flex-grow justify-center items-center sm:flex-col md:flex-col lg:flex-row">
                <div className="absolute z-0 -translate-x-80 -translate-y-20">
                    <div className="flex flex-col text-white font-extrabold drop-shadow-[5px_2px_2px_rgba(0,0,0,0.5)]">
                        <h1 className="text-[80px] m-0 leading-none">CONFIGURA</h1>
                        <h1 className="text-[70px] text-CuteRed leading-none mt-1 mb-4">PLANIFICA</h1>
                        <h1 className="text-[40px] leading-none">CONCÉNTRATE</h1>
                    </div>
                </div>
                <div className="z-10">
                    <Tomato3D />
                </div>
            </main>
                {/* <Link to="/pomodoro"><button className="button h-[50px] text-xl">COMENZAR</button></Link> */}
            
        </div>
    );
}

export default Home;