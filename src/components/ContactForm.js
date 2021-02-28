import React, { useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import './ContactForm.css'

export default function ContactForm() {
    const { register, handleSubmit, errors, reset } = useForm();

    const [createAppoinmentSuccess, setCreateAppointmentSuccess] = useState(false);
    const [loading, toggleLoading]= useState(false);
    const [error, setError]= useState('');

    async function onSubmit(data){
        console.log(data)
        toggleLoading(true);
        setError('');

        try {
            const response = await axios.post('https://beautysalonroermond-b2c5f-default-rtdb.firebaseio.com/afspraken.json', data);

            console.log(response)

            if (response.status === 200){
                setCreateAppointmentSuccess(true);
            }
        } catch (e) {
            console.error(e);
            if (e.message.includes('400')){
                setError('Er is iets misgegaan bij het verzenden. Probeer het opnieuw');
            }
        }
        toggleLoading(false);
        reset();
    }

    return (
        <>
        <div className='success'>
        {createAppoinmentSuccess === true && <p>Bedankt voor uw interesse. Ik neem zo snel mogelijk contact met u op.</p>}
        </div>
    <form onSubmit={handleSubmit(onSubmit)} className='contactform'>
        <label className='label-title' htmlFor="firstName">Voornaam</label>
        <input name={"firstName"} type='text' ref={register({required:true})} />
        {errors.firstName && <span>Dit veld is verplicht</span>}
        <label className='label-title' htmlFor="lastName">Achternaam</label>
        <input name={"lastName"} type='text' ref={register({ required: true })} />
        {errors.lastName && <span>Dit veld is verplicht</span>}
        <label className='label-title' htmlFor="phoneNumber">Telefoonnummer</label>
        <input name={'phoneNumber'} type="tel" ref={register({required:true})}/>
        {errors.phoneNumber && <span>Dit veld is verplicht</span>}
        <label className='label-title' htmlFor="email">Emailadres</label>
        <input name={'email'} type="email" ref={register({required:true})}/>
        {errors.email && <span>Dit veld is verplicht</span>}
        <label className='label-title' htmlFor="prefWeek">Voorkeursweek</label>
        <div className='prefWeek'>
            <input name={'prefWeek'} type="week" id="week" ref={register}/>
        </div>
        <label className='label-title' htmlFor="prefTime">Voorkeurstijd</label>
        <div className='prefTime'>
            <input name={'prefTime'} type="checkbox" id="option1" value="morning" ref={register}/>
            <label className='check-preftime' htmlFor="option1">Ochtend</label>
            <input name={'prefTime'} type="checkbox" id="option2" value="afternoon" ref={register}/>
            <label className='check-preftime' htmlFor="option2">Middag</label>
            <input name={'prefTime'} type="checkbox" id="option3" value="evening" ref={register}/>
            <label className='check-preftime' htmlFor="option3">Avond</label>
        </div>
        <div className='contactformbtn'>
        <button className='contact-form-button' type="submit" disabled={loading}>{loading ? 'Loading....' : 'Maak een afspraak'}</button>
            {error && <p>{error}</p>}
        </div>
    </form>
            </>
);
}

