import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard/PokemonCard';
import PokemonDetails from './PokemonDetails/PokemonDetails';
import './Pokedex.css';

// en Pokedex.tsx
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


const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [lastClickedPokemon, setLastClickedPokemon] = useState<number | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonIds = Array.from({ length: 151 }, (_, i) => i + 1);
      const fetchedPokemons: Pokemon[] = [];

      for (let id of pokemonIds) {
        try {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const pokemon: Pokemon = response.data;
          fetchedPokemons.push(pokemon);
        } catch (error) {
          console.error(`Error fetching pokemon with id ${id}: `, error);
        }
      }

      setPokemons(fetchedPokemons);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="pokedex-container">
      <h1 className='title'>Pokedex</h1>
      <div className="pokedex-grid">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onSelect={(clickedPokemon: Pokemon) => {
              if (selectedPokemon && lastClickedPokemon === clickedPokemon.id) {
                setSelectedPokemon(null);
              } else {
                setSelectedPokemon(clickedPokemon);
                setLastClickedPokemon(clickedPokemon.id);
              }
            }}
          />
        ))}
      </div>

      {selectedPokemon && (
        <PokemonDetails
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
};

export default Pokedex;
