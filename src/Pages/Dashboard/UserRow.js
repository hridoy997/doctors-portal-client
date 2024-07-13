import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, index, refetch}) => {
    const {email, roll} = user;
    const makeAdmin = () => {
        fetch(`https://doctors-portal-server-2b2c.onrender.com/user/admin/${email}`, {
            method: 'put',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403) {
                toast.error('Falied to Make an Admin');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            if(data.matchedCount > 0) {
                refetch();
                toast.success('Successfully made an Admin');
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{roll !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs" >Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;