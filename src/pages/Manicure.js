import React from 'react';
import './Manicure.css';
import PriceCard from "../components/PriceCard";

export default function Manicure(){
    return(
        <>
            <h1 className='manicure-title'>MANICURE</h1>
            <div className='manicure-container'>
                <div className='container-pricecards'>
                    <PriceCard
                        title= 'MANICURE MET PARAFFINE HANDPAKKING'
                        price= '€27'
                    />
                </div>
            </div>    </>
    );
};