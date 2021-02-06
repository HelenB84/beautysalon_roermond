import React from 'react';
import PriceCard from "../components/PriceCard";
import './Massage.css'

export default function Massage(){
    return(
        <>
            <h1 className='massage-title'>HARSEN</h1>
            <div className='massage-container'>
                <div className='container-pricecards'>
                    <PriceCard
                        title= 'ONTSPANNINGSMASSAGE INCL> HOTSTONE'
                        price= '€42'
                    />
                </div>
            </div>
        </>
    );
};