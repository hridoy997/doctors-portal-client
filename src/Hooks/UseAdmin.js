import { useEffect, useState } from 'react';

const UseAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoding] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if(email){
            fetch(`https://doctors-portal-server-2b2c.onrender.com/admin/${email}`,{
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
                setAdminLoding(false);
            })
        }
    }, [user]);
    return [admin, adminLoading];
};

export default UseAdmin;