import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import {Link} from "react-router-dom";
import './SignupForm.css';


export default function SignupForm (){
    const { register, handleSubmit, errors } = useForm();

    const [createUserSuccess, setCreateUserSuccess] = useState(false);
    const [loading, toggleLoading] =useState(false);
    const [error, setError] = useState('');


    async function onSubmit(data) {
        console.log(data)
        toggleLoading(true);
        setError('');

        try {
            const response = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/signup', data
            );

            console.log(response.data)

            if (response.status === 200){
                setCreateUserSuccess(true);
            }
        } catch (e) {
            console.error(e);
            if (e.message.includes('400')){
                setError('Er bestaat al een account met deze gebruikersnaam');
            } else {
                setError('Er is iets misgegaan bij het verzenden. Probeer het opnieuw');
            }
        }
        toggleLoading(false);
    }

    return (
        <div>
            {createUserSuccess === true && <p>Het is gelukt! Klik <Link to="/login">hier</Link> om in te loggen</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='signup-form' htmlFor="username">Username</label>
                <input className='signup-form' name={"username"} type="text" ref={register({required:true})}/>
                {errors.username && <span>This field is required</span>}
                <label className='signup-form' htmlFor="password">Password</label>
                <input className='signup-form' name={"password"} type="password" ref={register({required:true})}/>
                {errors.password && <span>This field is required</span>}
                <label className='signup-form' htmlFor="email">Email</label>
                <input className='signup-form' name={"email"} type="email" ref={register({required:true})}/>
                {errors.email && <span>This field is required</span>}
                <button className='signup-form' type="submit" disabled={loading}>{loading ? 'Loading...' : 'Maak account aan'}</button>
                {error && <p>{error}</p>}
            </form>
        </div>)
};