import React from 'react';

const Metrics = () => {
    return (
        <div>
            <div className="row mb-3 flex justify-center">
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
                            <div className="rotate">
                                <i className="fa fa-apple-alt fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Food Items Donated</h6>
                            <h1 className="display-4">134</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-danger h-100">
                        <div className="card-body bg-danger">
                            <div className="rotate">
                                <i className="fa fa-cutlery fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Meals Provided</h6>
                            <h1 className="display-4">87 </h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-info h-100">
                        <div className="card-body bg-info">
                            <div className="rotate">
                                <i className="fa fa-hands-helping fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Volunteers</h6>
                            <h1 className="display-4">125</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white bg-warning h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-users fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">Beneficiaries</h6>
                            <h1 className="display-4">36</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Metrics;
