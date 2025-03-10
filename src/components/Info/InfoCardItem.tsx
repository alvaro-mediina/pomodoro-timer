import { Card } from "../../models/utils-models";

const InfoCardItem = (card: Omit<Card, "id">) => {
    return (
        <div className="w-[350px] h-[400px] flex flex-col bg-CuteGray rounded-2xl overflow-hidden">
            <div className="w-full h-[50%] overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
            </div>
            <div className="mt-3 h-[10%] flex justify-center items-center">
                <h2 className="text-md font-bold mt-2 text-center">{card.title}</h2>
            </div>
            <div className="h-[30%] w-[100%] flex items-center justify-center">
                <p className="w-[80%] text-sm text-center text-gray-600">{card.description}</p>
            </div>
        </div>
    );
};


export default InfoCardItem