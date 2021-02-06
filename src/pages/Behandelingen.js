import React from 'react';
import './Behandelingen.css'
import masker from '../assets/masker.jpg'
import harsen from '../assets/harsen.jpg'
import hennabrows from '../assets/hennabrows.jpg'
import acne_behandeling from '../assets/acne_behandeling.jpeg'
import massage from '../assets/massage.jpg'
import nails from '../assets/nails.jpg'
import {Link} from 'react-router-dom'


export default function Behandelingen(){
    return(
        <>
        <h1 className='treatment-title'>BEHANDELINGEN</h1>
        <div className='container-treatments-box'>
            <div className='treatments-box'>
                <Link to='gezichtsbehandelingen' className='links-treatment'>
                <img className='treatments-item-1' src={masker} alt="gezichtsmasker"/>
                </Link>
                <h3 className='treatments-item-1-1'>Gezichtsbehandelingen</h3>
                <Link to='massage' className='links-treatment'>
                <img className='treatments-item-2' src={massage} alt="massage"/>
                </Link>
                <h3 className='treatments-item-1-1'>Massage</h3>
                <Link to='harsen' className='links-treatment'>
                <img className='treatments-item-3' src={harsen} alt="harsen"/>
                </Link>
                <h3 className='treatments-item-1-1'>Harsen</h3>
                <Link to='gezichtsbehandelingen' className='links-treatment'>
                <img className='treatments-item-4' src={hennabrows} alt="henna brows"/>
                </Link>
                <h3 className='treatments-item-1-1'>Henna Brows</h3>
                <Link to='gezichtsbehandelingen' className='links-treatment'>
                <img className='treatments-item-5' src={acne_behandeling} alt="acne behandeling"/>
                </Link>
                <h3 className='treatments-item-1-1'>Acne Behandeling</h3>
                <Link to='manicure' className='links-treatment'>
                <img className='treatments-item-6' src={nails} alt="manicure"/>
                </Link>
                <h3 className='treatments-item-1-1'>Manicure</h3>
            </div>
        </div>
        </>
    );
};