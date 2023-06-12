import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AbilityCard from './AbilityCard/AbilityCard';
import './Abilities.css';

const Abilities: React.FC = () => {
  const [abilities, setAbilities] = useState<any[]>([]);

  useEffect(() => {
    const fetchAbilities = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/ability?limit=52');
      const abilities = response.data.results;
      const detailedAbilities = await Promise.all(
        abilities.map(async (ability: any) => {
          const abilityDetails = await axios.get(ability.url);
          return abilityDetails.data;
        })
      );
      setAbilities(detailedAbilities);
    };
    fetchAbilities();
  }, []);

  return (
    <div className='abilities-container'>
      <h1 className='title'>Abilities</h1>
      <div className="abilities-grid">
      
      {abilities.map((ability, index) => (
        <AbilityCard key={index} ability={ability} />
      ))}
    </div>
    </div>
    
  );
};

export default Abilities;
