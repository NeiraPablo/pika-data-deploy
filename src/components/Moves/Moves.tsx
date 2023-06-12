import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovesCard from './MovesCard/MovesCard';
import './Moves.css';

const Moves: React.FC = () => {
    const [moves, setMoves] = useState<any[]>([]);

    useEffect(() => {
        const fetchMoves = async () => {
            const response = await axios.get('https://pokeapi.co/api/v2/move?limit=100');
            const movesData = await Promise.all(
                response.data.results.map(async (move: any) => {
                    const moveDetail = await axios.get(move.url);
                    return {
                        name: moveDetail.data.name,
                        type: moveDetail.data.type.name,
                        category: moveDetail.data.damage_class.name,
                        power: moveDetail.data.power,
                        accuracy: moveDetail.data.accuracy,
                        effect: moveDetail.data.effect_entries[0]?.short_effect || 'No effect information available'
                    };
                })
            );
            setMoves(movesData);
        };
        fetchMoves();
    }, []);

    return (
        <div className="moves-container">
            <h1 className='title'>Moves</h1>
            <div className="moves-grid">
                {moves.map((move, index) => (
                    <MovesCard
                    key={index}
                    name={move.name}
                    type={move.type}
                    category={move.category}
                    power={move.power}
                    accuracy={move.accuracy}
                    effect={move.effect} effectChance={null}                    />
                ))}
            </div>
        </div>
    );
};

export default Moves;
