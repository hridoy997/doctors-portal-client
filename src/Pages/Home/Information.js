import React from 'react';
import InformationCard from './InformationCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Information = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InformationCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}/>
            <InformationCard cardTitle="Opening Hours" bgClass="bg-neutral" img={marker}/>
            <InformationCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}/>
        </div>
    );
};

export default Information;