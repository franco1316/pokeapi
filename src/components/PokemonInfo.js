import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imgEncounters from '../Assets/pin.png';
import '../styles/pokemonInfo.css';
import '../styles/colorsTypes.css';

const PokemonInfo = () => {
    
    const {id}=useParams()

    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=>{
            setPokemon(res.data)
        })
    }, [id]);
    const speed=pokemon.stats?.[5].base_stat
    const attack=pokemon.stats?.[1].base_stat
    const defense=pokemon.stats?.[2].base_stat
    const hp=pokemon.stats?.[0].base_stat

    const xhp=hp*15/4 
    const xspeed=speed*15/4 
    const xattack=attack*15/4 
    const xdefense=defense*15/4

    return (
        <div className={`pokemon-info ${pokemon.types?.[0].type.name}`}>
            <div className='container-logo-pokemon'>
                <img src="https://logos-marcas.com/wp-content/uploads/2020/05/Pokemon-Logo.png" alt="pokemon-img" 
                    className='logo-pokemon'
                />
            </div>

            <div className="container-pokemon-values">
                <div className="container-pokemon-flex-vertical">
                    <section className="pokemon">
                        <div className='container-pokemon-sprite'>
                            <img src={pokemon.sprites?.other["official-artwork"].front_default} alt=""
                                className='pokemon-sprite'
                            />
                        </div>
                        <div className="row">
                            <div>
                                <section className="column statitics">
                                    <p className='statitics-value font-value'>
                                        {pokemon.weight}
                                    </p>
                                    <h3 className='font-statitics'>Weight</h3>
                                </section>
                            </div>
                            <div>
                                <section className="statitics column">
                                    <p className='statitics-value font-value'>
                                        {pokemon.height}
                                    </p>
                                    <h3 className='font-statitics'>Height</h3>
                                </section>
                            </div>
                        </div>
                        <div className="line">
                            <div className='br left'></div>
                            <div className='container-id-pokemon'>
                                <h1 className='pokemon-name text-shadow'>{pokemon.name}</h1>
                                <div className="flex-center">
                                    <h4 className='border pokemon-id'>#{pokemon.id}</h4>
                                </div>
                            </div>
                            <div className='br right'></div>
                        </div>
                        <footer className='line br '></footer>
                    
                    </section>
                    <div className="flex-container height">
                        <section className="section">
                            <header className="section-container">
                                <div className="header-br header-left"></div>
                                <h2 className="section-title text-shadow">Type</h2>
                                <div className="header-br header-right"></div>
                            </header>
                            <div className='container-body'>
                                {
                                    pokemon.types?.map(type=>(
                                        <div className={`container-type ${type.type.name}`}>
                                            <h3 className='type-name color-white'>
                                                {type.type.name}
                                            </h3>
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                        <section className="section">
                            <header className="section-container">
                                <div className="header-br"></div>
                                <h2 className="section-title text-shadow">Abilities</h2>
                                <div className="header-br"></div>
                            </header>
                            <div className='container-body'>
                                {
                                    pokemon.abilities?.map(ability=>(
                                        <div className='container-type border'>
                                            <h3 className='type-name'>
                                                {ability.ability.name}
                                            </h3>
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                    </div>
                    <section className="section margin-top width-abilities">
                            <header className="section-container">
                                <div className="header-br width-br-abilities"></div>
                                <h2 className="section-title text-shadow">Stats Base</h2>
                                <div className="header-br width-br-abilities"></div>
                            </header>
                            <div className='container-body-vertical'>
                                <article className="flex-article">
                                    <div className="container-ability">
                                        <h3 className='name-ability'>HP:</h3>
                                    </div>
                                    <div className="bar-stats">
                                        <div className="xbar"
                                            style={(
                                                {
                                                    width:  `${xhp}px`,
                                                    backgroundColor:
                                                        `${
                                                            (hp<150*25/100)?'red':
                                                            (hp<150*55/100)?'orange':
                                                            (hp<150*75/100)?'yellow':'green'
                                                        }`
                    
                                                }
                                            )}
                                        >
                                            <h3 className="stats-amount color-white">
                                                {hp}/150
                                            </h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="flex-article">
                                    <div className="container-ability">
                                        <h3 className='name-ability'>Speed:</h3>
                                    </div>
                                    <div className="bar-stats">
                                        <div className="xbar"
                                            style={(
                                                {
                                                    width:  `${xspeed}px`,
                                                    backgroundColor:
                                                        `${
                                                            (speed<150*25/100)?'red':
                                                            (speed<150*55/100)?'orange':
                                                            (speed<150*75/100)?'yellow':'green'
                                                        }`
                    
                                                }
                                            )}
                    
                                        >
                                            <h3 className="stats-amount color-white">
                                                {speed}/150
                                            </h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="flex-article">
                                    <div className="container-ability">
                                        <h3 className='name-ability'>Attack:</h3>
                                    </div>
                                    <div className="bar-stats">
                                        <div className="xbar"
                                            style={(
                                                {
                                                    width: `${xattack}px`,
                                                    backgroundColor:
                                                        `${
                                                            (attack<150*25/100)?'red':
                                                            (attack<150*55/100)?'orange':
                                                            (attack<150*75/100)?'yellow':'green'
                                                        }`
                                                }
                                            )}
                                        >
                                            <h3 className="stats-amount color-white">
                                                {attack}/150
                                            </h3>
                                        </div>
                                    </div>
                                </article>
                                <article className="flex-article">
                                    <div className="container-ability">
                                        <h3 className='name-ability'>Defense:</h3>
                                    </div>
                                    <div className="bar-stats">
                                        <div className="xbar"
                                            style={(
                                                {
                                                    width: `${xdefense}px`,
                                                    backgroundColor:
                                                        `${
                                                            (defense<150*25/100)?'red':
                                                            (defense<150*55/100)?'orange':
                                                            (defense<150*75/100)?'yellow':'green'
                                                        }`
                                                }
                                            )}
                                            >
                                            <h3 className="stats-amount color-white">
                                                {defense}/150
                                            </h3>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </section>
                </div>
                <div className="container-pokemons-vertical-flex">
                    <button className='button-encounters'>
                        <div className='container-encounter-img'>
                            <img className='encounter-img' src={imgEncounters} alt="location" />
                        </div>
                        <h4 className='title-encounter'>Encounters</h4>
                    </button>
                    <section className="movements">
                        <header className="section-container">
                            <div className="header-br width-br-abilities"></div>
                            <h2 className="section-title text-shadow">Movements</h2>
                            <div className="header-br width-br-abilities"></div>
                        </header>
                        <div className='container-body-vertical'>
                            {
                                pokemon.moves?.map(movements=>(
                                    <div className='center'>
                                        <h3 className='move-name'>{movements.move.name}</h3>
                                        <div className="header-br width-br-movements"></div>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                </div>

            </div>

        </div>
    );
};

export default PokemonInfo;