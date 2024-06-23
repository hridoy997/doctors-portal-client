import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment, setTreatment, selectedDate}) => {
    const {_id, name, slots} = treatment;

    const handelBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name,slot);
        setTreatment(null);
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
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;