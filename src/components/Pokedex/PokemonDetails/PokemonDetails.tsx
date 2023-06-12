import React, { useEffect, useRef, useState } from 'react';
import './PokemonDetails.css';

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
    stats: {
        base_stat: number;
        stat: {
            name: string;
        };
    }[];
}

interface PokemonDetailsProps {
    pokemon: Pokemon;
    onClose: () => void;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon, onClose }) => {
    const detailsRef = useRef<HTMLDivElement>(null);

    const [activeSection, setActiveSection] = useState<'general' | 'stats'>('general');

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    return (
        <div>
            <div className="overlay" onClick={onClose}></div>

            <div className={`pokemon-details ${pokemon.types[0].type.name}`} ref={detailsRef}>
                <div className='header-section'>
                    <div className="header-text">
                        <h4>#{pokemon.id}</h4>
                        <h2>{pokemon.name}</h2>
                        <ul>
                            {pokemon.types.map((typeInfo, index) => (
                                <li key={index}>{typeInfo.type.name}</li>
                            ))}
                        </ul>
                    </div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>


                <div className="info-section">
                    <div className="section-headers">
                        <h4 className={activeSection === 'general' ? 'active' : ''} onClick={() => setActiveSection('general')}>
                            General Info
                        </h4>
                        <h4 className={activeSection === 'stats' ? 'active' : ''} onClick={() => setActiveSection('stats')}>
                            Stats
                        </h4>
                    </div>

                    <div className="section-content">
                        {activeSection === 'general' && (
                            <div className="general-info">
                                <p> <strong>Weight: </strong>{pokemon.weight}</p>
                                <p> <strong>Height: </strong>{pokemon.height}</p>
                                <strong>Abilities:</strong>
                                <ul>
                                    {pokemon.abilities.map((ability, index) => (
                                        <li key={index}>{ability.ability.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeSection === 'stats' && (
                            <div className="stats">
                                <ul>
                                    {pokemon.stats.map((stat, index) => (
                                        <li key={index}>
                                            <span>
                                                <strong>{stat.stat.name}</strong> : {stat.base_stat}
                                            </span>
                                            <div className="stats-bar-container">
                                                <div
                                                    className="stats-bar"
                                                    style={{ width: `${(stat.base_stat / 200) * 255}px` }}
                                                ></div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <button onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PokemonDetails;
