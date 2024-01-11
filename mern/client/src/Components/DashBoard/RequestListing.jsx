import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push, set, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './RequestForm.css';

const RequestListing = ({ setHighlightedLocation }) => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        expirationDate: '',
    });
    const [tableData, setTableData] = useState([]);
    const [userId, setUserId] = useState(null);
    const [userRole, setUserRole] = useState(null);

    const handleLocationClick = (location) => {
        setHighlightedLocation(location);
    };


    useEffect(() => {
        const db = getDatabase();
        const requestsRef = ref(db, 'donationRequests');

        // Fetch data from Firebase on component mount
        onValue(requestsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const requestsArray = Object.entries(data).map(([requestId, requestData]) => ({
                    requestId,
                    ...requestData
                }));
                setTableData(requestsArray);
            }
        });
    }, []);

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
                    if (userData && userData.account_type) {
                        setUserRole(userData.account_type);
                    }
                });
            } else {
                setUserId(null);
                setUserRole(null);
            }
        });

        return () => unsubscribe();
    }, []);



    const handleAccept = (requestId) => {
        if (userRole === "volunteer") {
            const db = getDatabase();
            const requestRef = ref(db, `donationRequests/${requestId}`);

            set(requestRef, {
                ...tableData.find(data => data.requestId === requestId),
                status: "pending"
            })
                .then(() => {
                    const updatedTableData = tableData.map((data) => {
                        if (data.requestId === requestId) {
                            return { ...data, status: "pending" };
                        }
                        return data;
                    });

                    setTableData(updatedTableData);
                })
                .catch((error) => {
                    console.error("Error updating status:", error);
                });
        }
    };


    const handlePending = (requestId) => {
        if (userRole === "recipient") {
            const db = getDatabase();
            const requestRef = ref(db, `donationRequests/${requestId}`);

            // Remove the entry from the 'donationRequests' node in Firebase
            set(requestRef, null);

            // Update the local state to remove the entry
            const updatedTableData = tableData.filter((data) => data.requestId !== requestId);
            setTableData(updatedTableData);

            // Show a message to the user (you can use a toast or any other UI component)
            alert("Delivery received! Entry removed from the list.");
        }
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const db = getDatabase();
        const requestsRef = ref(db, 'donationRequests');

        // Add the new data to the 'requests' node in Firebase
        const newRequestRef = push(requestsRef);
        set(newRequestRef, {
            ...formData,
            userId: userId,
            userRole: userRole,
        });

        // Reset the form data and hide the form
        setFormData({
            title: '',
            description: '',
            location: '',
            expirationDate: '',
        });
        setShowForm(false);
    };

    return (
        <div className="row row-md-10 row-sm-12">
            <h5 className="title mb-3 text-secondary" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Donation Requests
                {userRole === "donor" && (
                    <button
                        className="btn btn-primary mb-3 mt-3"
                        onClick={() => setShowForm(true)}
                    >
                        New Request
                    </button>
                )}
            </h5>
            {showForm && (
                <div className="form-popup">
                    <div className="form-container">
                        {/* Your form content */}
                        <form onSubmit={handleFormSubmit}>
                            <label>Title:</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                required
                            />
                            <label>Description:</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                            <label>Location:</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleInputChange}
                                required
                            />
                            <label>Expiration Date:</label>
                            <input
                                type="date"
                                name="expirationDate"
                                value={formData.expirationDate}
                                onChange={handleInputChange}
                                required
                            />
                            <button type="submit">Submit</button>
                            <button type="button" onClick={() => setShowForm(false)}>Close</button>
                        </form>
                    </div>
                </div>
            )}
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th>S.No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Location</th>
                            <th>Exp Date</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {tableData?.map((data, index) => (
                            <tr key={index}>
                                <td style={{ width: "50px" }} >{index + 1}</td>
                                <td style={{ width: "350px" }} >{data.title}</td>
                                <td style={{ width: "216px" }} >{data.description}</td>
                                <td style={{ width: "216px" }} >{data.location}</td>
                                <td style={{ width: "216px" }} >{data.expirationDate}</td>
                                <td style={{ width: "216px" }} >
                                    {userRole === "volunteer" && (
                                        <div className="btn-group" role="group">
                                            <button
                                                type="button"
                                                className={`btn ${data.status === "pending" ? "btn-warning" : "btn-success"}`}
                                                onClick={() => handleAccept(data.requestId)}
                                                disabled={data.status === "pending"}
                                            >
                                                {data.status === "pending" ? "Pending" : "Accept"}
                                            </button>
                                        </div>
                                    )}
                                    <div className="btn-group" role="group">
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={() => handleLocationClick(data.location)}
                                        >
                                            Location
                                        </button>
                                    </div>
                                    {userRole === "recipient" && (
                                        <div className="btn-group" role="group">
                                            <button
                                                type="button"
                                                className="btn btn-warning"
                                                onClick={() => handlePending(data.requestId)}
                                            >
                                                Pending
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-success"
                                                onClick={() => handleLocationClick(data.location)}
                                            >
                                                Location
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestListing;
