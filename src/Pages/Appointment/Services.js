import React from 'react';

const Services = ({services, setTreatment}) => {
    const {name, slots} = services;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length > 0
                    ?
                    <span>{slots[0]}</span>
                    :
                    <span className=' text-red-500'>Try Another Date</span>
                    }</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces':'Space'} Available</p>
                <div className="card-actions justify-center">
                    <label 
                        htmlFor="booking_modal"
                        disabled={slots.length === 0} 
                        onClick={() => setTreatment(services)}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Services;