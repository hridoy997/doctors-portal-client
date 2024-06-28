import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <div className="hero min-h-screen bg-custom-image bg-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=' flex-1 lg:px-10'>
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                </div>
                
                <div className=' flex-1 lg:px-10'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
