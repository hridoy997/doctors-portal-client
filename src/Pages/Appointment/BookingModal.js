import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({treatment, setTreatment, selectedDate, refetch}) => {
    const {_id, name, slots} = treatment;
    const [user] = useAuthState(auth);
    const formettedDate = format(selectedDate, 'PP');


    const handelBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name,slot);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formettedDate,
            slot,
            patient:user.email,
            patientName:user.displayName,
            phone: event.target.phone.value

        }

        fetch('https://doctors-portal-server-2b2c.onrender.com/booking', {
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res  => res.json())
        .then(data => {
            
            // console.log(data);
            if(data.success){
                toast.success(`Appointment is Set, ${formettedDate} at ${slot}`);
            }
            else{
                toast.error(`Already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`);
            }
            refetch();
            // to close the model
            setTreatment(null);

        })


        
    }

    return (
        <div>
            <input type="checkbox" id="booking_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <form method="dialog" className="modal-action">
                        <label htmlFor="booking_modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    </form>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handelBooking} action="" className=' grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={ selectedDate && format(selectedDate, 'PP')} className="input input-bordered w-full max-w-xs"/>
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot,index) => <option 
                                    key={index}
                                    value={slot}
                                    >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;