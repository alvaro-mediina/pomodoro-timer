import Nav from "../Nav/Nav";
import Tomato3D from "./Tomato3D";

function Home () {
    return(
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden overflow-y-auto">
            <Nav/>
            <main className="flex flex-column flex-grow items-center sm:flex-col lg:flex-column justify-center">
            <Tomato3D/>
            <div className="flex flex-col items-center justify-center">
                <h1 className="extrabold text-white text-3xl">CONCENTRACIÓN EN SESIONES</h1>
                <button className="button">COMENZAR</button>
            </div>
            </main>
        </div>
    );
}

export default Home;