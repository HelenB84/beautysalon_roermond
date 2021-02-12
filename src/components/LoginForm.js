import React, {useContext, useEffect,useState} from 'react';
import { useForm } from "react-hook-form";
import './LoginForm.css';
import axios from "axios";
import {useHistory} from 'react-router-dom'
import {AuthContext, useAuthState} from "../context/AuthContext";

const endpointLink = 'https://polar-lake-14365.herokuapp.com/api/auth/signin'

export default function Loginform (){
    const { register, handleSubmit, errors } = useForm();
    const {login} = useContext (AuthContext);
    const {isAuthenticated} =useAuthState();
    const history = useHistory();
    const [loading, toggleLoading] =useState(false);
    const [error, setError] = useState('');

    useEffect(()=>{
        if(isAuthenticated === true){
            history.push("/dashboard")
        }

    }, [isAuthenticated]);

    async function onSubmit(data){
        console.log(data);
        toggleLoading(true);
        setError('');

        try{
            const result = await axios.post(endpointLink, data)

            login(result.data);

        } catch(e){
            console.log(e);
            if (e.message.includes('401')){
                setError('Deze gebruikersnaam bestaat niet');
            } else {
                setError('Inloggen is mislukt.Probeer het opnieuw');
            }
        }
        toggleLoading(false);
    }


    return (
            <form onSubmit={handleSubmit(onSubmit)}>
            <label className='login-form' htmlFor="username">Gebruikersnaam</label>
            <input className='login-form' name={"username"} type="text" ref={register({required:true})}/>
            {errors.username && <span>Dit veld is verplicht</span>}
            <label className='login-form' htmlFor="password">Password</label>
            <input className='login-form' name={"password"} type="password" ref={register({required:true})}/>
            {errors.password && <span>Dit veld is verplicht</span>}
            <button className='login-form' type="submit" disabled={loading}>{loading ? 'Loading...' : 'Login'}</button>
            {error && <p>{error}</p>}
    </form>
)
};