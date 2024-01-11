import React from 'react';
import Chart from './chart'; // Assuming you have a Chart component

const Analytics = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ minHeight: '30vh' }}>
                    <h1 className='title mb-3 text-center text-secondary '>Analytics</h1>
                </div>
                <div className="row">
                    <Chart />
                </div>
            </div>
            {/* <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h2 className='title mb-3 text-center text-secondary '>Analytics</h2>
                    <div className="mb-5 d-flex justify-content-center align-items-center" style={{ height: "300px", width: "400px" }}>
                        <Chart />
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Analytics;
