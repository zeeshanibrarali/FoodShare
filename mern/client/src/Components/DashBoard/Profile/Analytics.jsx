import React, { useState, useEffect } from 'react';
import Chart from './chart';
import NavigateSidebar from '../Sidebar/NavigateSidebar';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Footer from '../../Footer/footer';
const Analytics = () => {
    const [userName, setUserName] = useState(null);
    const [userRole, setUserRole] = useState(null);

    const [userId, setUserId] = useState(null);

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

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <>
            <div className="container-fluid pb-3">
                <div className="row">
                    <NavigateSidebar userName={userName} />
                    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {/* User Information */}
                        <div className="row mt-2 ">
                            <div className="col-md-12">
                                <h2 className='title mb-3 text-center text-secondary '>Personal Information</h2>
                                <div className="user-info">
                                    <p>
                                        <strong>Name:</strong> {userName} <br />
                                        <strong>Account Type:</strong> {userRole} <br />
                                        {/* Add other user information fields */}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Educational Content */}
                        <div className="row ">
                            <div className="col-md-12">
                                <h2 className='title mb-3 text-center text-secondary '>Educational Content</h2>
                                <p>
                                    Learn about the impact of food waste and the benefits of donations. Explore tips for more sustainable living.
                                </p>
                            </div>
                        </div>
                        <main>
                            {/* Chart Section */}
                            <div className="row mt-5">
                                <div className="col-md-12">
                                    <h2 className='title mb-3 text-center text-secondary '>{userName}'s Analytics</h2>
                                    <Chart />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Analytics;
