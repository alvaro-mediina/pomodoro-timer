import Nav from "../Nav/Nav";
import Tomato3D from "./Tomato3D";

function Home () {
    return(
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden overflow-y-auto sm:pb-10">
            <Nav/>
            <main className="flex flex-row flex-grow  justify-center items-center sm:flex-col md:flex-row lg:flex-row ">
                <Tomato3D/>
                <div className="w-full flex flex-col items-center justify-center text-center lg:mr-20">
                    <h1 className="extrabold text-white text-5xl drop-shadow-[4px_4px_4px_rgba(0,0,0,0.5)]">CONCENTRACIÓN <br />EN SESIONES</h1>
                    <button className="button">COMENZAR</button>
                </div>
            </main>
        </div>
    );
}

export default Home;