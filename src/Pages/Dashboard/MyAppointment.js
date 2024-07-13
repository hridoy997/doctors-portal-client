import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointment = () => {

    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(user){
            fetch(`https://doctors-portal-server-2b2c.onrender.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization : `Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
            .then(res => {
                // console.log('res', res);
                if(res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })
            .then(data => {

                setAppointments(data);
            })
        }
    }, [user]);

    return (
        <div>
            <h2 className="text-2xl">My Appointment: {appointments?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-base-200">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appointment, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                                <td>{appointment.treatment}</td>
                            </tr>)
                        }
                        
                        </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;