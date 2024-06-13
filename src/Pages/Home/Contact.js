import React from 'react';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-cente" style={{background: `url(${appointment})`}}>
            <div className="bg-cover bg-center w-full max-w-md mx-auto p-8">
                <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg">
                    <h2 className="text-center text-2xl font-semibold text-white mb-4">Contact Us</h2>
                    <h3 className="text-center text-xl font-light text-white mb-6">Stay connected with us</h3>
                    <form>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-2 bg-gray-800 bg-opacity-50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-2 bg-gray-800 bg-opacity-50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                placeholder="Your message"
                                className="w-full p-2 bg-gray-800 bg-opacity-50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;