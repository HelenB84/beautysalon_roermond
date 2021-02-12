import React, {useState, useEffect} from 'react';
import './Dashboard.css'
import axios from 'axios';
import {useAuthState} from "../context/AuthContext";
import LoginSignupButton from "../components/SignupButton";

export default function Dashboard() {
    const [appointments, setAppointments] = useState(null);

    useEffect(()=>{

        async function fetchData() {
            try {
                const result = await axios.get('https://beautysalonroermond-b2c5f-default-rtdb.firebaseio.com/afspraken.json'
                );
                setAppointments(result.data)

        } catch (e) {
            console.error(e);
        }
    }

    fetchData();
    },[])

    const appointmentsArray= appointments && Object.values(appointments)
    console.log(appointmentsArray)


    return(
        <>
        <h1 className='dashboard-title'>DASHBOARD</h1>
        <LoginSignupButton/>
        <div className='container-dashboard'>
            <h3 className='dashboard-text'>VOORNAAM:{appointmentsArray && appointmentsArray.map(appointment => <h3 className='dashboard-firstname' key={appointment.firstName}>{appointment.firstName}</h3>)}</h3>
            <br/>
            <h3 className='dashboard-text'>ACHTERNAAM:{appointmentsArray && appointmentsArray.map(appointment => <h3 className='dashboard-lastname' key={appointment.lastName}>{appointment.lastName}</h3>)}</h3>
            <br/>
            <h3 className='dashboard-text'>EMAIL:{appointmentsArray && appointmentsArray.map(appointment => <h3 className='dashboard-email' key={appointment.email}>{appointment.email}</h3>)}</h3>
            <br/>
            <h3 className='dashboard-text'>TELNR:{appointmentsArray && appointmentsArray.map(appointment => <h3 className='dashboard-phonenumber' key={appointment.phoneNumber}>{appointment.phoneNumber}</h3>)}</h3>
            <br/>
            <h3 className='dashboard-text'>VOORKEURSWEEK:{appointmentsArray && appointmentsArray.map(appointment => <h3 className='dashboard-prefweek' key={appointment.prefDay}>{appointment.prefWeek}</h3>)}</h3>
            <br/>
            <h3 className='dashboard-text'>VOORKEURSTIJD:{appointmentsArray && appointmentsArray.map(appointment => <h3 className='dashboard-preftime' key={appointment.prefTime}>{appointment.prefTime}</h3>)}</h3>
        </div>
        </>
    )
}

