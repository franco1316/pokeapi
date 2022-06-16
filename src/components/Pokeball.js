import React from 'react';
import '../styles/pokeball.css';

const Pokeball = () => {
    return (
        <div className = "container-pokeball">
            <div className = 'pokeball'>
            <div className = "pokeball-red"></div>
            <div className = "pokeball-dark-circle">
                <div className = "pokeball-light-circle"></div>
            </div>
            <div className = 'pokeball-line'></div>
          </div>
        </div>
    );
};

export default Pokeball;