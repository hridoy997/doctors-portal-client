import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Services from './Services';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({selectedDate, setSelectedDate}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(selectedDate, 'PP');
    // console.log(formattedDate);
    const { data: services, isLoading, refetch } = useQuery({
        queryKey: ['available', formattedDate], 
        queryFn: () => 
            fetch(`http://localhost:5000/available?date=${formattedDate}`)
                .then(res => res.json())
    });

    if(isLoading){
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     // fetch('appointmentOptions.json')
    //     // fetch('http://localhost:5000/service')
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data))
    // },[formattedDate]);


    return (
        <div>
            <h4 className=' text-xl text-secondary text-center my-12'>Available Appountment on {selectedDate && format(selectedDate, 'PP')}</h4>

            <div className=' grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(services => <Services
                        key={services._id}
                        services = {services}
                        setTreatment = {setTreatment}
                    ></Services>)
                }
            </div>
            {treatment && <BookingModal
                key={treatment._id}
                selectedDate={selectedDate}  
                treatment={treatment}
                setTreatment={setTreatment}
                refetch = {refetch}
                />}
        </div>
    );
};

export default AvailableAppointments;