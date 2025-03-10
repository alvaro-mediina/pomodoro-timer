import { Card } from '../../models/utils-models';
import InfoCardItem from '../../components/Info/InfoCardItem';

interface Props {
    infoCards: Card[];
}

const InfoCardGrid = ({ infoCards } : Props) => {
    return(
        <div className="flex items-center justify-center flex-col sm:flex-col md:flex-col lg:flex-row gap-6 overflow-hidden sm:px-6 lg:px-8">
            {infoCards.map((infoCard) => (                
            <InfoCardItem key={infoCard.id} {...infoCard}/>
            ))}
        </div>
    );
};

export default InfoCardGrid;