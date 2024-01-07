import React, { useState } from 'react';
import './RequestForm.css';

const RequestListing = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        location: '',
        expirationDate: '',
    });
    const [tableData, setTableData] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add the new data to the tableData
        const newTableData = [
            ...tableData,
            { ...formData, id: tableData.length + 1 },
        ];
        setTableData(newTableData);

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
                <button
                    className="btn btn-primary mb-3 mt-3"
                    onClick={() => setShowForm(true)}
                >
                    New Request
                </button>
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
                                    <div className="btn-group" role="group">
                                        <button type="button" className="btn btn-success">Accept</button>
                                        <button type="button" className="btn btn-success">Location</button>
                                    </div>
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
