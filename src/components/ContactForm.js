import React from "react";
import { useForm } from "react-hook-form";
import './ContactForm.css'

export default function ContactForm() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);


    return (
    <form onSubmit={handleSubmit(onSubmit)} className='contactform'>
        <label className='label-title' htmlFor="firstName">Voornaam</label>
        <input name={"firstName"} type='text' ref={register} />
        <label className='label-title' htmlFor="lastName">Achternaam</label>
        <input name={"lastName"} type='text' ref={register({ required: true })} />
        <label className='label-title' htmlFor="phoneNumber">Telefoonnummer</label>
        <input name={'phoneNumber'} type="tel" ref={register}/>
        <label className='label-title' htmlFor="email">Emailadres</label>
        <input name={'email'} type="email" ref={register}/>
        <label className='label-title' htmlFor="prefDay">Voorkeursdag</label>
        <div className='prefDays'>
            <input name={'prefDay'} type="checkbox" id="dag1" value="Monday" ref={register}/>
            <label className='check-prefday' htmlFor="dag1">Maandag</label>
            <input name={'prefDay'} type="checkbox" id="dag2" value="Tuesday" ref={register}/>
            <label className='check-prefday' htmlFor="dag2">Dinsdag</label>
            <input name={'prefDay'} type="checkbox" id="dag3" value="Wednesday" ref={register}/>
            <label className='check-prefday' htmlFor="dag3">Woensdag</label>
            <input name={'prefDay'} type="checkbox" id="dag4" value="Thursday" ref={register}/>
            <label className='check-prefday' htmlFor="dag4">Donderdag</label>
            <input name={'prefDay'} type="checkbox" id="dag5" value="Friday" ref={register}/>
            <label className='check-prefday' htmlFor="dag5">Vrijdag</label>
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
        <button className='contact-form-button' type="submit">Maak een afspraak</button>
        </div>
    </form>
);
}

