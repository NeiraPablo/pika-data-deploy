import React, { useState } from 'react';
import './MovesCard.css';

type MovesCardProps = {
    name: string;
    type: string;
    category: string;
    power: number | null;
    accuracy: number | null;
    effect: string;
    effectChance: number | null;
};

const MovesCard: React.FC<MovesCardProps> = ({ name, type, category, power, accuracy, effect, effectChance }) => {
    const [isHovered, setIsHovered] = useState(false);

    // const formatEffectText = (effectText: string, effectChance: number | null) => {
    //     if (effectChance) {
    //         return effectText.replace(/\$effect_chance/g, effectChance.toString());
    //     }
    //     return effectText;
    // };
    

    return (
        <div
            className="move-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <div className="move-effect">
                    {/* {formatEffectText(effect, effectChance)} */}
                    {(effect)}
                </div>
            )}
            <div className="move-content">
                <div className="move-name">{name}</div>
                <div className="move-type">Type: {type}</div>
                <div className="move-category">Category: {category}</div>
                <div className="move-power">Power: {power || 'N/A'}</div>
                <div className="move-accuracy">Accuracy: {accuracy || 'N/A'}</div>
            </div>
        </div>
    );
};

export default MovesCard;
