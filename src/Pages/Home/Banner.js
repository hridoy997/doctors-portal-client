import React from 'react';
import chair from '../../assets/images/chair.png';
import '../../App.css';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-custom-image bg-center">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div>
                    <img src={chair} alt="Chair"/>
                </div>
                <div>
                    <h1 className="text-5xl lg:text-6xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;