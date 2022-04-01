import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pokemonCard.css';
import '../styles/colorsTypes.css';

const PokemonCard = ({pokemonURL}) => {
    const [pokemon, setPokemon] = useState({});
    useEffect(() => {
        axios.get(pokemonURL)
        .then(res=>{
            setPokemon(res.data)
        })
    }, [pokemonURL]);
     const space= '\u00A0';
     console.log(pokemon)
    return (
        <li className='pokemon-card'>
            <Link to={`/pokedex/${pokemon.id}`}>
                <div className={`cards ${pokemon.types?.[0].type.name}`}>
                    <h3 className='pokemon-name color'>
                        {pokemon.name}
                    </h3>
                    <article className='horizontal'>
                        <h3 className='pokemon-types color'>Types:</h3>
                        {
                            pokemon.types?.map(type=>(
                                <p key={type.type.url} 
                                    className='pokemon-value color position-pokemon-value'>
                                        {space} {type.type.name}
                                </p>
                            ))
                        }
                    </article>
                    <section className='horizontal'>
                        <article>
                            {
                                // pokemon.stats
                                    <div className='pokemon-stats'>
                                        <section className="flex-stats">
                                            <h4 className='pokemon-statitics color'>hp: </h4>
                                            <p className="pokemon-value color">{space}{pokemon.stats?.[0].base_stat}</p>
                                        </section>
                                        <section className="flex-stats">
                                            <h4 className='pokemon-statitics color'>Attack:</h4>
                                            <p className="pokemon-value color">{space}{pokemon.stats?.[1].base_stat}</p>
                                        </section>
                                        <section className="flex-stats">
                                            <h4 className='pokemon-statitics color'>Defense:</h4>
                                            <p className="pokemon-value color">{space}{pokemon.stats?.[2].base_stat}</p>
                                        </section>
                                        <section className="flex-stats">
                                            <h4 className='pokemon-statitics color'>Speed:</h4>
                                            <p className="pokemon-value color">{space}{pokemon.stats?.[5].base_stat}</p>
                                        </section>
                                    </div>
                            }
                        </article>
                        <div className='img-container'>
                        <img
                            src={pokemon.sprites?.other["official-artwork"].front_default}
                            alt="Img pokemon"
                            className='img'
                        />
                    </div>
                    </section>
                    
                </div>
            </Link>

        </li>
    );
};

export default PokemonCard;