import React, { useState } from 'react';
import './BlackBorder.css';

const BlackBorder: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const buttonClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 200);
  };

  return (
    <div className='nav-decor'>
      <button 
        className={`circular-button ${clicked ? 'clicked' : ''}`} 
        onClick={buttonClick}
      />
    </div>
  );
}

export default BlackBorder;
