import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import '../styles/pokedex.css';

const Pokedex = () => {
    const trainerName = useSelector(state => state.trainerName)
    const [search, setSearch] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [color, setColor] = useState("yellow");
    const [direction, setDirection] = useState("left");
    const [show, setShow] = useState(true);
    const [page, setPage]=useState(1);
    const pokemonsNumber = 16;
    const lastIndex = page * pokemonsNumber;
    const firstIndex = lastIndex - pokemonsNumber;
    const pokemonPaginated = pokemons?.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(pokemons?.length / pokemonsNumber)
    const [selectPage, setSelectPage] = useState(1);
    const [currentRow, setCurrentRow] = useState(1);
    const rowsNumber = 9;
    const totalRows = Math.ceil(totalPages / rowsNumber)
    const lastPage = currentRow * rowsNumber
    const firstPage = lastPage-rowsNumber + 1;
    const pagesNumbers = []
    for(let i = (firstPage?firstPage:1); i <= lastPage && i <= totalPages; i++){
        pagesNumbers.push(i)
    }
    
    const html={
        menor: '<',
        mayor: '>',
        espace: ' '
    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1126&offset=0/`)
        .then(res => setPokemons(res.data.results))

        axios.get(`https://pokeapi.co/api/v2/type/?offset=0&limit=1126/`)
        .then(res => {
            setTypes(res.data.results)
        })
    }, []);

    const navigate=useNavigate()

    const submit = (e) => {
        e.preventDefault()
        navigate(`/pokedex/${search}/`)
        setSearch("")
    }
    const handleTypes=(e) => {
        axios.get(e.target.value)
        .then(res => setPokemons(res.data.pokemon))
    }

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    return (
        <form onSubmit = {submit} className='pokedex'>
            <div ref = {myRef}></div>
            <h1 className = 'title'>
                Pokedex
            </h1>
            <h2 className = 'hello-trainer'>
                Welcome {trainerName}, here you can find your favorite pokemon
            </h2>

            <div className = "container-check-button">
                <span className = 'span-toggle'>type</span>
                <div className = 'container-toggle-button'>
                    <button 
                        className = {`toggle-button ${color} ${direction}`}
                        onClick = {() => {
                            setToggle(!toggle)
                            setColor(toggle?"yellow":"blue")
                            setDirection(toggle?"left":"right")
                            setShow(!show)
                            }
                        }
                    >
                        <div className = "circle"></div>
                    </button>
                </div>
                <span className = 'span-toggle'>pokemon</span>
            </div>
            
            <div className = "select-search-container">
                
                <div className = "search-container">
                    <label htmlFor = "search"></label>
                    <input
                        id = 'search'
                        type = "text"
                        onChange = {e => setSearch(e.target.value)}
                        value = {search}
                        className = 'search-submit'
                     />
                     <button className = 'button-search-submit'></button>

                     <div className = "select-container">
                     <select onChange = {handleTypes}
                        className = {`select-type ${show?"show":"hide"}`}>
                            <option value = {pokemons.url} selected = "All pokemons">All pokemons</option>
                            {
                                types.map(type => (
                                    <option value = {type.url} key = {type.url} 
                                        className = 'option-type'>
                                        {type.name}
                                    </option>
                                ))
                            }
                    </select>
                </div>
                </div>
            </div>
            <ul className = 'card'>
                {
                    pokemonPaginated.map(pokemon => (
                        <PokemonCard
                            pokemonURL = {pokemon.url?pokemon.url:pokemon.pokemon.url}
                            key = {pokemon.url?pokemon.url:pokemon.pokemon.url}
                        />
                    ))
                }
            </ul>
            <div className = 'container-pages'>

                <button onClick = {() => setCurrentRow(currentRow-1)}
                    disabled = {currentRow <= 1}
                    className = {`button-pages ${currentRow <= 1?'none':'block'} bg-purple font-button-pages`}>
                    {html.menor}
                </button>
                {pagesNumbers.map(page =>
                        <button onClick = {() => {
                            setPage(page)
                            setSelectPage(page)
                        }} key={page}
                        className = {`button-pages ${selectPage === page?'bg-green':'bg-purple'} border`}>
                            <button onClick = {executeScroll} className = 'transparent'>
                                <div className = 'font-button-pages'>{page}</div>
                            </button>
                        </button>
                )}
                <button onClick = {() => setCurrentRow(currentRow + 1)}
                    disabled = {currentRow >= totalRows}
                    className = {`button-pages ${currentRow >= totalRows?'none':'block'} bg-purple font-button-pages`}>
                    {html.mayor}
                </button>
            </div>
        </form>
    );
};

export default Pokedex;