import React from 'react';
import PriceCard from "../components/PriceCard";
import './Harsen.css'

export default function Harsen(){
    return(
        <>
            <h1 className='waxing-title'>HARSEN</h1>
            <div className='waxing-container'>
                <div className='container-pricecards'>
                    <PriceCard
                        title= 'BOVENLIP HARSEN'
                        price= '€6,50'
                    />
                    <PriceCard
                        title= 'KIN HARSEN'
                        price= '€8'
                    />
                    <PriceCard
                        title= 'BOVENLIP & KIN HARSEN'
                        price= '€12'
                    />
                    <PriceCard
                        title= 'OKSELS HARSEN'
                        price= '€16'
                    />
                    <PriceCard
                        title= 'LIEZEN HARSEN'
                        price= '€16'
                    />
                    <PriceCard
                        title= 'ARMEN HARSEN'
                        price= '€18,50'
                    />
                    <PriceCard
                        title= 'ONDERBENEN HARSEN'
                        price= '€24'
                    />
                    <PriceCard
                        title= 'BOVEN- EN ONDERBENEN HARSEN'
                        price= '€44'
                    />
                </div>
            </div>
        </>
    );
};