// PokemonCard.tsx
import React from 'react';
import './PokemonCard.css'; // Asegúrate de importar el archivo CSS aquí

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
  height: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  stats: { // <-- Agrega esta propiedad
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

interface PokemonCardProps {
  pokemon: Pokemon;
  onSelect: (pokemon: Pokemon) => void;
}


const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onSelect }) => {
  const primaryType = pokemon.types[0].type.name;

  return (
    <div className={`pokemon-card type-${primaryType}`} onClick={() => onSelect(pokemon)}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="border"></div>
      <h5>#{pokemon.id}</h5>
      <h3>{pokemon.name}</h3>
      <ul>
        {pokemon.types.map((typeInfo, index) => (
          <li key={index}>{typeInfo.type.name}</li>
        ))}
      </ul>
    </div>
  );
}


export default PokemonCard;
