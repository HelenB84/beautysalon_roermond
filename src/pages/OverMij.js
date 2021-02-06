import React from 'react';
import ilsesalon from "../assets/ilsesalon.jpg";
import './OverMij.css'
import spa from '../assets/spa.png'
import hayoun from '../assets/hayoun.png'
import chairsalon from '../assets/chairsalon.jpg'
import saloninside from '../assets/saloninside.jpg'

export default function OverMij(){
    return(
        <>
            <h1 className='about-me-title'>OVER MIJ</h1>
            <div className='about-me-container'>
                <img className='ilse-salon-about-me' src={ilsesalon} alt="ilse_salon"/>
                <div className='about-me-text'>
                    <h3 className='about-me-title-text'>MOOI BY ILSE</h3>
                    <br/>
                    <h3 className='about-me-undertitle-text'>Ilse Boomsluiter-Roubroeks</h3>
                    <p className='about-me-p'>Sinds 2008 ben ik gediplomeerd schoonheidsspecialiste
                        en beoefen ik mijn vak met veel passie  en ambitie. <br/><br/>
                        Persoonlijke aandacht, rust, kwaliteit, sfeer en hygiene staan bij mij
                        hoog in het vaandel. Mijn doel is klanten zich prettig laten voelen in
                        een relaxte, rustige omgeving. <br/><br/>
                        Op deze website kunt u in uw eigen tempo kennis maken met  de
                        verschillende behandelingen die ik in mijn salon uitvoer. <br/><br/>
                        Als er nog vragen zijn, kunt u natuurlijk altijd contact met mij
                        opnemen. <br/><br/>
                        Graag zie ik u terug in mijn schoonheidssalon!</p>
                    <h3 className='signature'>Ilse</h3>
                </div>
            </div>
            <h2 className='brands-title'>MERKEN</h2>
            <div className='brands-container'>
                <img className='image-brand-1' src={hayoun} alt="merk hayoun"/>
                <img className='image-brand-2' src={spa} alt="merk spa salonnepro"/>
                </div>
            <h2 className='salon-title'>SALON IMPRESSIE</h2>
            <div className='salon-container'>
                <img className='chair-salon' src={chairsalon} alt="stoel schoonheidssalon"/>
                <img className='salon-inside' src={saloninside} alt="salon impressie"/>
            </div>
            </>
    );
};
