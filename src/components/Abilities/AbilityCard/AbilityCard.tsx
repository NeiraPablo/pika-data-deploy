import React from 'react';
import './AbilityCard.css';

const AbilityCard: React.FC<{ ability: any }> = ({ ability }) => {
  return (
    <div className="ability-card">
      <div className="ability-card-content">
        <div className="ability-name">{ability.name}</div>
        <div className="ability-effect">
          {ability.effect_entries && ability.effect_entries.length > 0
            ? ability.effect_entries[1].short_effect
            : 'No effect description available'}
        </div>
      </div>
    </div>
  );
};

export default AbilityCard;
