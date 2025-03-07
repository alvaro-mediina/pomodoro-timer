import Nav from "../Nav/Nav";
import Tomato3D from "./Tomato3D";

function Home () {
    return(
        <div className="min-h-screen bg-background flex flex-col overflow-x-hidden overflow-y-auto">
            <Nav/>
            <main className="flex flex-grow items-center justify-center">
            <Tomato3D/> 
            </main>
        </div>
    );
}

export default Home;