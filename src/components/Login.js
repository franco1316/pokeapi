import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import send from '../Assets/paper-plane-solid.svg'

const Login = () => {

    const [trainerName, setTrainerName] = useState("");
    const dispatch = useDispatch()

    const emptyInputs = () => {
        setTrainerName("")
    }       

    const navigate = useNavigate()


    const submit = ( e ) => {
        e.preventDefault();
        dispatch({
            type: "GET_TRAINERNAME",
            payload: trainerName
        })
        emptyInputs()
        navigate("/pokedex")
    }

    return (
        <div>
            <form action='' onSubmit={submit} className='login-bg'>
                
                <article className="login-hello">
                    <h1 className='login-title'>
                        Hello trainer!
                    </h1>
                    <div className="login-container-img-trainer">
                        <img
                            src="https://www.seekpng.com/png/full/201-2011786_red-by-xous-54-red-pokemon-trainer-png.png"
                            alt="img-trainer" className="login-img-trainer" />
                    </div>
                </article>
                <h2 className='login-text'>
                    Give me your name to start
                </h2>
                <label htmlFor="name"></label>
                <div className="login-container-input">
                    <input
                        id='name'
                        type="text"
                        onChange={e => setTrainerName(e.target.value)}
                        value={trainerName}
                        required
                        className='login-input'
                    />
                    <div className="login-apperience-submit-button">
                        <img src={send} alt="Send" className='login-submit-icon' />
                        <button className='login-submit-button'></button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;