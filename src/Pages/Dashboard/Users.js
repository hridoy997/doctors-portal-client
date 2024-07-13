import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('https://doctors-portal-server-2b2c.onrender.com/user',{
            method: 'GET',
            headers: {
                authorization : `Bearer ${localStorage.getItem('accessToken')}`,
            }
        }).then(res => res.json())
    });
    if(isLoading){
        return <Loading/>
    }

    return (
        <div>
            <h2 className="text-2xl">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="bg-base-200">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index) => <UserRow
                                key={index}
                                user={user}
                                index = {index}
                                refetch = {refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;