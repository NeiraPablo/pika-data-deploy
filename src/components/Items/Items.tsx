// Items.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard/ItemCard';
import './Items.css';

const Items: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/item', { params: { limit: 60 } });
        setItems(response.data.results);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className='items-container'>
      <h1 className='title'>Items</h1>
      <div className="items-container-grid">
        {items.map((item, index) => (
          <ItemCard key={index} name={item.name} url={item.url} />
        ))}
      </div>
    </div>
  );

}

export default Items;
