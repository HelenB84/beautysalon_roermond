import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom';
import Header from "../components/Header";
import masker from '../assets/masker.jpg'
import massage from '../assets/massage.jpg'
import harsen from '../assets/harsen.jpg'
import nails from '../assets/nails.jpg'
import ilsesalon from '../assets/ilsesalon.jpg'

export default function Home(){
    return(
        <>
            <Header/>
            <div className='behandelingen-container'>
                <h1 className='behandelingen-home'>BEHANDELINGEN</h1>
                    <h3 className='behandelingen-home-text1'>MAAK EEN AFSPRAAK EN IK REGEL DE REST</h3>
                <div className='pics-home'>
                    <Link to='gezichtsbehandelingen' className='links-treatment'>
                        <img className='masker' src={masker} alt="gezichtsmasker"/>
                    </Link>
                    <Link to='massage' className='links-treatment'>
                        <img className='massage' src={massage} alt="massage"/>
                    </Link>
                    <Link to='harsen' className='links-treatment'>
                        <img className='harsen' src={harsen} alt="harsen"/>
                    </Link>
                    <Link to='manicure' className='links-treatment'>
                        <img className='nails' src={nails} alt="nagels"/>
                    </Link>
                </div>
                <div className='texts-home'>
                    <h3 className='face-text'>GEZICHTSBEHANDELINGEN</h3>
                    <h3 className='massage-text'>MASSAGE</h3>
                    <h3 className='waxing-text'>HARSEN</h3>
                    <h3 className='nails-text'>MANICURE</h3>
                </div>
            </div>
            <div className='container-over-mij'>
                <img className='ilse-salon' src={ilsesalon} alt="ilse_salon"/>
                <div className='home-text-over_mij'>
                    <h3 className='over-mij-title'>OVER MIJ</h3>
                    <br/>
                    <p className='over-mij-p'>Persoonlijke aandacht, rust, kwaliteit, sfeer en hygiene staan bij mij
                    hoog in het vaandel. <br/><br/>
                    Op deze website kunt u in uw eigen tempo kennis maken met de
                    verschillende  behandelingen, die ik in mijn salon uitvoer. <br/><br/>
                    Als er vragen zijn, kunt u natuurlijk  altijd contact met mij opnemen.</p>
                </div>
            </div>
            </>
    );
};