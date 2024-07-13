import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../../Hooks/UseAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [ user ] = useAuthState(auth);
    const [admin] = UseAdmin(user);
    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className="text-2xl font-bold text-purple-500">Welcome to youe Dashboard</h2>
                <Outlet/>
                
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
                {/* Sidebar content here */}
                <li><Link to='/dashboard'>My Appointment</Link></li>
                <li><Link to='/dashboard/review'>My Review</Link></li>
                <li><Link to='/dashboard/history'>My History</Link></li>
                {admin && <li><Link to='/dashboard/users'>All Users</Link></li>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;