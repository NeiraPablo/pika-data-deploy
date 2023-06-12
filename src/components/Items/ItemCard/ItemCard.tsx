import React, { useState, useEffect } from 'react';
import './ItemCard.css';

type ItemCardProps = {
    name: string;
    url: string;
};

const ItemCard: React.FC<ItemCardProps> = ({ name, url }) => {
    const [itemDescription, setItemDescription] = useState('');
    const [itemSprite, setItemSprite] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setItemDescription(data.effect_entries[0]?.effect || '');
                setItemSprite(data.sprites.default);
            });
    }, [url]);

    return (
        <div className={`item-card ${isOpen ? 'open' : 'closed'}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="item-header">
                {itemSprite && <img src={itemSprite} alt={name} className="item-sprite" />}
                <div className="item-name">{name}</div>
                <div className="item-toggle-icon">{isOpen ? '▲' : '▼'}</div>
            </div>
            {isOpen && <div className="item-description">{itemDescription}</div>}
        </div>
    );
};

export default ItemCard;
