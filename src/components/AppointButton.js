import './AppointButton.css';
import {Link} from "react-router-dom";
import React from 'react';

export default function AppointButton(){
    return (
        <Link to='contact'>
            <button className='btn'>
                Maak een afspraak
            </button>
        </Link>
    );
}