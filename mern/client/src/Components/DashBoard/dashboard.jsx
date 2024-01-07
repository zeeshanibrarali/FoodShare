// import React from 'react' 
import { useState, useEffect } from 'react'
import Chart from './chart';
import { useNavigate } from "react-router-dom";

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
        <div className="container-fluid d-flex justify-content-between"
        // style="
        // padding-left: 0px;
        // padding-right: 0px;"
        >

            <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ backgroundColor: "#e9ecef" }}>
                <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                    <li className="nav-item mb-2 mt-3"><a className="nav-link text-secondary" href="#"><h5>{user.displayName}</h5></a></li>
                    <li className="nav-item mb-2 "><a className="nav-link text-secondary" href="#"><i className="fas fa-user font-weight-bold"></i> <span className="ml-3">Overview</span></a></li>
                    <li className="nav-item mb-2">
                        <a className="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i className="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Reports▾</span></a>
                        <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                            <li className="nav-item mb-2 "><a className="nav-link text-secondary" href=""><i className="fas fa-book-reader"></i> Data Report </a></li>
                            <li className="nav-item mb-2 "><a className="nav-link text-secondary" href=""> <i className="fas fa-book-medical"></i> File Report </a></li>
                        </ul>
                    </li>
                    <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Analytics</span></a></li>
                    <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fas fa-file-export font-weight-bold"></i><span className="ml-3">Export</span></a></li>
                    <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fas fa-tablet-alt font-weight-bold"></i><span className="ml-3">Snippets</span></a></li>
                    <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fas fa-atom font-weight-bold"></i> <span className="ml-3">Flex</span></a></li>
                    <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="far fa-folder font-weight-bold"></i> <span className="ml-3">Layouts</span></a></li>
                    <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#">Templates</a></li>
                    <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#">Themes</a></li>
                </ul>
            </div>

            <div className="col-10 pl-5 main ">
                <div aria-label="breadcrumb" className=' py-3'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </div>
                <p className="lead d-none d-sm-block">Add Employee Details and Records</p>

                <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <strong>Data and Records</strong> Learn more about employee
                </div>
                <div className="row mb-3">
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

                <div className="row ">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <h5 className="mt-3 mb-3 text-secondary">
                            Check More Records of Employees
                        </h5>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead className="thead-light">
                                    <tr>
                                        <th>No</th>
                                        <th>Label</th>
                                        <th>Header</th>
                                        <th>Column</th>
                                        <th>Record Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {record?.map((key, output) => (
                                        <tr key={output.id}>
                                            <td>{output.id}</td>
                                            <td>{output.name}</td>
                                            <td>{output.email}</td>
                                            <td>{output.username}</td>
                                            <td>{output.website}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                        <h4 className='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
                        <div className="mb-5" style={{ height: "300px", width: "400px" }}><Chart /> </div></div>
                </div>
            </div>

        </div>
    )
}
