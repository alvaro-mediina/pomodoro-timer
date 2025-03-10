import { Card } from '../../models/utils-models'
import Fatiga from '../../assets/medium-shot-guy-expressing-victory.jpg'
import Gestion from '../../assets/defocused-smiley-woman-holding-light-bulb-clock.jpg'
import Memoria from '../../assets/young-man-writing-notebook-study-session.jpg'
import InfoCardGrid from './InfoCardGrid'
import {
        FATIGA_TITLE, 
        FATIGA_DESC,
        GESTION_TITLE,
        GESTION_DESC,
        MEMORIA_TITLE,
        MEMORIA_DESC
    } from "../../utils/Constants";


const DataCards: Card[] = [
    {    
        id: 1,
        title: FATIGA_TITLE,
        description: FATIGA_DESC,
        img: Fatiga,
    },
    {
        id: 2,
        title: GESTION_TITLE,
        description: GESTION_DESC,
        img: Gestion,
    },
    {
        id: 3,
        title: MEMORIA_TITLE,
        description: MEMORIA_DESC,
        img: Memoria,
    }
];


function Info(){
    return(
        <div className="bg-white min-h-screen">
            <InfoCardGrid infoCards={ DataCards } />
        </div>
    )
}

export default Info;