import React from 'react';
import './Contact.css'
import ContactForm from "../components/ContactForm";

export default function Contact(){
    return(
        <>
        <h1 className='contact-title'>CONTACT</h1>
        <div className='container-contact'>
            <div className='container-contact-details'>
                <h2 className='contact-details-titles-1'>ADRES</h2>
                <p className='contact-details-text'>Prof. Schreinemakersstraat 33 <br/>6042CG Roermond</p>
                <h3 className='contact-details-titles'>TELEFOONNUMMER</h3>
                <p className='contact-details-text'>+3161234567</p>
                <h3 className='contact-details-titles'>EMAILADRES</h3>
                <p className='contact-details-text'>info@mooibyilse.nl</p>
                <h3 className='contact-details-titles'>KVK</h3>
                <p className='contact-details-text'>64877485</p>
                <h3 className='contact-details-titles'>BANK</h3>
                <p className='contact-details-text'>NL21 RBRB 0706 4213 61</p>
            </div>
            <div className='container-contactform'>
                <h2 className='contactform-title'>AFSPRAAK MAKEN</h2>
                <ContactForm/>
            </div>
        </div>
        </>
    )
}