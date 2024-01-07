// import React from 'react' 
import { useState, useEffect } from 'react'
import Chart from './chart';
import { useNavigate } from "react-router-dom";
import './dashboard.css';

export default function Dashboard() {

    const [record, setRecord] = useState();
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(window.localStorage.getItem("user"));
        if (!userData) {
            navigate("/login");
        }
    }, [])

    useEffect(() => {
        const userData = JSON.parse(window.localStorage.getItem("user"));
        console.log(userData, 'sadsa');
        setUser(userData);
    }, [])


    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
            .then(response => response.json())
            .then(result => setRecord(result))
            .catch(error => console.log('error', error));
    }, [])




    // useEffect(() => {
    //     console.log(record, 'ASD');
    // }, [record])


    return (
        <div className='container-fluid m-0 p-0'>
            <div className="container-fluid row p-0">

                <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef" }}>
                    <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                        <li className="nav-item mb-2 mt-3"><a className="nav-link text-secondary" href="#"><h5>{user.displayName}</h5></a></li>
                        <li className="nav-item mb-2 "><a className="nav-link text-secondary" href="#"><i className="fas fa-user font-weight-bold"></i> <span className="ml-3">  Home</span></a></li>
                        <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fas fa-file-export font-weight-bold"></i><span className="ml-3">  New Request</span></a></li>
                        <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">  Personal Info.</span></a></li>
                        <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fa fa-chart-bar font-weight-bold"></i> <span className="ml-3">  Analytics</span></a></li>
                        <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">  Map</span></a></li>
                        <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i class="fa fa-sign-out" aria-hidden="true"></i> <span className="ml-3">Sign Out</span></a></li>
                        <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i class="fa fa-info-circle" aria-hidden="true"></i> About</a></li>
                        <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i class="fa-solid fa-address-book"></i> Contact</a></li>
                    </ul>
                </div>

                <div className="col-10 pl-5 main customPadding">
                    <div aria-label="breadcrumb" className=' pt-3'>
                        <ol className="breadcrumb mb-1">
                            <li className="breadcrumb-item"><a href="#">Main</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Volunteer</li>
                        </ol>
                    </div>
                    <p className="lead d-none d-sm-block">Quick Overview</p>

                    <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            <span className="sr-only">Close</span>
                        </button>
                        <strong>Data and Records</strong> Learn more about employee
                    </div>
                    <div className="row mb-3 flex justify-center">
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card bg-success text-white h-100">
                                <div className="card-body bg-success" style={{ backgroundColor: "#57b960" }}>
                                    <div className="rotate">
                                        <i className="fa fa-user fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Users</h6>
                                    <h1 className="display-4">134</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-danger h-100">
                                <div className="card-body bg-danger">
                                    <div className="rotate">
                                        <i className="fa fa-list fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Posts</h6>
                                    <h1 className="display-4">87</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-info h-100">
                                <div className="card-body bg-info">
                                    <div className="rotate">
                                        <i className="fab fa-twitter fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Tweets</h6>
                                    <h1 className="display-4">125</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 py-2">
                            <div className="card text-white bg-warning h-100">
                                <div className="card-body">
                                    <div className="rotate">
                                        <i className="fa fa-share fa-4x"></i>
                                    </div>
                                    <h6 className="text-uppercase">Shares</h6>
                                    <h1 className="display-4">36</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row row-md-10 row-sm-12">
                        <h5 className="mt-3 mb-3 text-secondary">
                            Check More Records of Employees
                        </h5>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead className="thead-light">
                                    <tr>
                                        <th>S.No</th>
                                        <th>Title</th>
                                        <th>Due Date</th>
                                        <th>Proposal</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {record?.map((key, output) => (
                                        <tr key={output.id}>
                                            <td style={{width: "50px"}} >{output.id}</td>
                                            <td style={{width: "350px"}} >{output.name}</td>
                                            <td style={{width: "216px"}} >{output.email}</td>
                                            <td style={{width: "216px"}} ><div class="btn-group" role="group">
                                            <button type="button" class="btn btn-success">Accept</button>
                                            <button type="button" class="btn btn-success">Location</button>
                                            </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                    <div className="row ">
                        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                            <h4 className='title mt-3 mb-3 text-secondary'>Data in Chart</h4>
                            <div className="mb-5" style={{ height: "300px", width: "400px" }}><Chart /> </div></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
