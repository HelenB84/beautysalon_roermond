import React from 'react';
import './Footer.css';
import logo from '../assets/logo.jpg'

export default function Footer() {
    return (
        <>
        <div className='container'>
        <footer className='ab'>
         <section className='ft-main'>
          <div className='ft-main-item'>
           <h2 className='ft-title'>CONTACT</h2>
            <p>Telefoon: +3161234567
                <br/>
                Email: info@mooibyilse.nl
                <br/>
                Adres: Prof. Schreinemakersstraat 33
                <br/>
                6042 CG Roermond
            </p>
          </div>
         <div className='ft-main-item'>
             <img src={logo} alt="Logo" className='bottom-logo'/>
         </div>
         <div className='ft-main-item'>
             <h2 className='ft-title'>OPENINGSTIJDEN (alleen op afspraak)</h2>
             <p>Ma-Wo: 09:00-21:00
                 <br/>
                 Do-Vr: 09:00-17:00
                 <br/>
                 Zat-Zon: GESLOTEN
             </p>
         </div>
         </section>
        </footer>
        </div>
            </>
    )
};
