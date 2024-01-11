import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigateSidebar from './NavigateSidebar';
import RequestListing from './RequestListing';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';
import Footer from '../footer';
import GoogleMaps from './GoogleMaps';
import Metrics from './Metrixs';
import './dashboard.css';

export default function Dashboard() {
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    const [userName, setUserName] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const userData = JSON.parse(window.localStorage.getItem('user'));
        if (!userData) {
            navigate('/login');
        } else {
            setUser(userData);
        }
    }, [navigate]);

    useEffect(() => {
        // Listen for changes in authentication state
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
                const db = getDatabase();
                const userRef = ref(db, `users/${user.uid}`);
                onValue(userRef, (snapshot) => {
                    const userData = snapshot.val();

                    console.log(userData);
                    if (userData && userData.first_name) {
                        setUserName(capitalizeFirstLetter(userData.first_name));
                        setUserRole(capitalizeFirstLetter(userData.account_type));
                    }
                });
            } else {
                setUserId(null);
                setUserName(null);
            }
        });

        return () => unsubscribe();
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


    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="container-fluid m-0 p-0">
            <div className="container-fluid row p-0">
                {/* Sidebar */}
                <NavigateSidebar user={user} userName={userName}/>

                <div className="col-10">
                    <p className="lead d-none d-sm-block">{userRole}'s Dashboard</p>

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


