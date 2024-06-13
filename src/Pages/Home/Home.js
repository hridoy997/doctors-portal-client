import React from 'react';
import Banner from './Banner';
import Information from './Information';
import Services from './Services';
import Section from './Section';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner/>
            <Information/>
            <Services/>
            <Section/>
            <MakeAppointment/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;