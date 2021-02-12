import React from 'react';
import SignupForm from '../components/SignupForm'
import './Signup.css'
import {Link} from "react-router-dom";

export default function Signup(){
    return <div className='signup-container'>
        <h1 className='signup-title'>SIGNUP</h1>
        <SignupForm/>
        <p>Heb je al een account? Je kunt je <Link to="/login">hier</Link> inloggen.</p>
    </div>;
}