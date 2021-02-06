import React from 'react';
import './Cadeaubon.css';
import cadeaubon from '../assets/cadeaubon.jpg'

export default function Cadeaubon(){
    return(
        <>
            <div className='gift-container'>
                <h1 className='gift-title'>CADEAUBON MOOI BY ILSE</h1>
            </div>
            <div className='gift-container-1'>
                <p className='gift-text'>De cadeaubon van schoonheidssalon MOOI by Ilse is leuk om te geven en te krijgen.
                De cadeaubon is verkrijgbaar vanaf €10,- en is in wisselbaar tegen alle behandelingen.
                Tevens zal de cadeaubon leuk verpakt worden, waardoor het een perfect cadeau is om te geven.
                </p>
            <div className='gift-container-3'>
                <img className='gift-image' src={cadeaubon} alt="cadeaubon"/>
            </div>
        </div>

            <div className='gift-container-2'></div>
        </>
    )
}