import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';


const Appointment = () => {

    const initiallySelectedDate = new Date();
    const [selectedDate, setSelectedDate] = useState(initiallySelectedDate);

    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <AvailableAppointments selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;