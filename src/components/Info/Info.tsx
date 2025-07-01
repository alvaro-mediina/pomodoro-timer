import InfoCardGrid from './InfoCardGrid'
import { DataCards } from "../../utils/Constants";


function Info(){
    return(
        <div className=" min-h-screen flex flex-col items-center justify-around pt-10 bg-white">
            <h1 className="extrabold text-4xl text-center">¿Por qué concentrarse por sesiones?</h1>
            <InfoCardGrid infoCards={ DataCards } />
        </div>
    )
}

export default Info;