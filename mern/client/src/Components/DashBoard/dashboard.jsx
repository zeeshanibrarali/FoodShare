import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigateSidebar from './NavigateSidebar';
import RequestListing from './RequestListing';
import Footer from '../footer';
import GoogleMaps from './GoogleMaps';
import Metrics from './Metrixs';
import './dashboard.css';

export default function Dashboard() {
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(window.localStorage.getItem('user'));
        if (!userData) {
            navigate('/login');
        }
    }, []);

    useEffect(() => {
        const userData = JSON.parse(window.localStorage.getItem('user'));
        setUser(userData);
    }, []);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
            .then((response) => response.json())
            .then((result) => setRecord(result))
            .catch((error) => console.log('error', error));
    }, []);

    return (
        <div className="container-fluid m-0 p-0">
            <div className="container-fluid row p-0">
                {/* Sidebar */}
                <NavigateSidebar user={user} />

                <div className="col-10">
                    <p className="lead d-none d-sm-block">Quick Overview</p>

                    {/* Metrics */}
                    <Metrics />
                    <hr />

                    {/* Request Listing */}
                    <RequestListing />
                    <hr />

                    {/* Google Maps */}
                    <GoogleMaps />
                </div>



            </div>

            <div className='mt-3'>
                <Footer />
            </div>
        </div>
    );
}


