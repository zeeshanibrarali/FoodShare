// import { useState } from 'react'
import './personal_Info.css'
// import './loginScript.js'


export default function Login() {

    return (
        <>
            <div className="formbold-main-wrapper">
                <h1>Profile Information</h1>
                <div className="formbold-form-wrapper">
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="formbold-input-flex">
                            <div>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    placeholder="Abdul"
                                    className="formbold-form-input"
                                />
                                <label htmlFor="firstname" className="formbold-form-label"> First name </label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastname"
                                    id="lastname"
                                    placeholder="Sameer"
                                    className="formbold-form-input"
                                />
                                <label htmlFor="lastname" className="formbold-form-label"> Last name </label>
                            </div>
                        </div>

                        <div className="formbold-input-flex">
                            <div>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Home, Street, area, etc."
                                    className="formbold-form-input"
                                />
                                <label htmlFor="address" className="formbold-form-label"> Address </label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="XXXX XXXXXXX"
                                    className="formbold-form-input"
                                />
                                <label htmlFor="phone" className="formbold-form-label"> Phone Number </label>
                            </div>
                        </div>

                        <div className="formbold-input-flex">
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="jhon@mail.com"
                                    className="formbold-form-input"
                                />
                                <label htmlFor="email" className="formbold-form-label"> Mail </label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="telephone"
                                    id="telephone"
                                    placeholder="XXX-XXX-XXXX (Optional)"
                                    className="formbold-form-input"
                                />
                                <label htmlFor="telephone" className="formbold-form-label"> Telephone No.</label>
                            </div>
                        </div>

                        <div className="formbold-input-flex">
                            <div>
                                <select className="formbold-form-input">
                                    <option value="Select Gender">Select Gender</option>
                                    <option value="Armenia">Male</option>
                                    <option value="Russia">Female</option>
                                    <option value="Germany">Prefer Not to say</option>
                                </select>
                                <label htmlFor="gender" className="formbold-form-label"> Gender </label>
                            </div>
                            <div>
                                <select className="formbold-form-input">
                                    <option value="Select Gender">Select Account Type</option>
                                    <option value="Armenia">Volunteer</option>
                                    <option value="Russia">Donor</option>
                                    {/* <option value="Germany">Prefer Not to say</option> */}
                                </select>
                                <label htmlFor="accType" className="formbold-form-label"> Account Type </label>
                            </div>
                        </div>

                        <a href="" className="formbold-btn">Proceed</a>
                    </form>
                </div>
            </div>
        </>
    )
}
