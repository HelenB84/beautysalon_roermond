import React from 'react';
import './AppointBar.css';
import AppointButton from "./AppointButton";

export default function Appointbar(){
    return(
        <>
        <div>
            <section className='ab-main'>
                <div className='ab-main-item'>
                    <h2 className='ab-title'>MAAK EEN AFSPRAAK</h2>
                    <p className='ab-p'>Maak nu een afspraak online of bel +3161234567</p>
                    <AppointButton/>
                </div>
            </section>
        </div>
        </>
    )
}
