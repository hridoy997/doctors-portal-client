import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Services from './Services';
import BookingModal from './BookingModal';

const AvailableAppointments = ({selectedDate, setSelectedDate}) => {

    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <h4 className=' text-xl text-secondary text-center'>Available Appountment on {selectedDate && format(selectedDate, 'PP')}</h4>

            <div className=' grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(services => <Services
                        key={services._id}
                        services = {services}
                        setTreatment = {setTreatment}
                    ></Services>)
                }
            </div>
            {treatment && <BookingModal 
                selectedDate={selectedDate}  
                treatment={treatment}
                setTreatment={setTreatment}
                />}
        </div>
    );
};

export default AvailableAppointments;