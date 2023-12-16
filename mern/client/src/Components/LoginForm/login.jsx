import React, { useState } from 'react'
import './login.css'
// import './loginScript.js'


export default function login() {


    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        alert('Your Form Successfully Submitted');
        // Perform submission logic
    };

    // const slidePage = document.querySelector(".slide-page");
    // const nextBtnFirst = document.querySelector(".firstNext");
    // const prevBtnSec = document.querySelector(".prev-1");
    // const nextBtnSec = document.querySelector(".next-1");
    // const prevBtnThird = document.querySelector(".prev-2");
    // const nextBtnThird = document.querySelector(".next-2");
    // const prevBtnFourth = document.querySelector(".prev-3");
    // const submitBtn = document.querySelector(".submit");
    // const progressText = document.querySelectorAll(".step p");
    // const progressCheck = document.querySelectorAll(".step .check");
    // const bullet = document.querySelectorAll(".step .bullet");
    // let current = 1;

    // nextBtnFirst.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     slidePage.style.marginLeft = "-25%";
    //     bullet[current - 1].classList.add("active");
    //     progressCheck[current - 1].classList.add("active");
    //     progressText[current - 1].classList.add("active");
    //     current += 1;
    // });
    // nextBtnSec.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     slidePage.style.marginLeft = "-50%";
    //     bullet[current - 1].classList.add("active");
    //     progressCheck[current - 1].classList.add("active");
    //     progressText[current - 1].classList.add("active");
    //     current += 1;
    // });
    // nextBtnThird.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     slidePage.style.marginLeft = "-75%";
    //     bullet[current - 1].classList.add("active");
    //     progressCheck[current - 1].classList.add("active");
    //     progressText[current - 1].classList.add("active");
    //     current += 1;
    // });
    // submitBtn.addEventListener("click", function () {
    //     bullet[current - 1].classList.add("active");
    //     progressCheck[current - 1].classList.add("active");
    //     progressText[current - 1].classList.add("active");
    //     current += 1;
    //     setTimeout(function () {
    //         alert("Your Form Successfully Signed up");
    //         location.reload();
    //     }, 800);
    // });

    // prevBtnSec.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     slidePage.style.marginLeft = "0%";
    //     bullet[current - 2].classList.remove("active");
    //     progressCheck[current - 2].classList.remove("active");
    //     progressText[current - 2].classList.remove("active");
    //     current -= 1;
    // });
    // prevBtnThird.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     slidePage.style.marginLeft = "-25%";
    //     bullet[current - 2].classList.remove("active");
    //     progressCheck[current - 2].classList.remove("active");
    //     progressText[current - 2].classList.remove("active");
    //     current -= 1;
    // });
    // prevBtnFourth.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     slidePage.style.marginLeft = "-50%";
    //     bullet[current - 2].classList.remove("active");
    //     progressCheck[current - 2].classList.remove("active");
    //     progressText[current - 2].classList.remove("active");
    //     current -= 1;
    // });


    return (
        <>
            <div className="container">
                <header>Signup Form</header>
                <div className="progress-bar">
                    <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                        <div className="bullet">
                            <span>1</span>
                        </div>
                        <p>Verify E-mail Address</p>
                        <div className={`check fas fa-check ${currentStep >= 1 ? 'active' : ''}`}></div>
                    </div>
                    <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                        <div className="bullet">
                            <span>2</span>
                        </div>
                        <p>Verify Your Ph. No</p>
                        <div className={`check fas fa-check ${currentStep >= 1 ? 'active' : ''}`}></div>
                    </div>
                    <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                        <div className="bullet">
                            <span>3</span>
                        </div>
                        <p>Specify Your Location</p>
                        <div className={`check fas fa-check ${currentStep >= 1 ? 'active' : ''}`}></div>
                    </div>
                    <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
                        <div className="bullet">
                            <span>4</span>
                        </div>
                        <p>Submit</p>
                        <div className={`check fas fa-check ${currentStep >= 1 ? 'active' : ''}`}></div>
                    </div>
                </div>
                <div className="form-outer">
                    <form action="#">
                        {currentStep === 1 && (
                            <div className="page slide-page">
                                <div className="title">Email & Role Info:</div>
                                <div className="field">
                                    <div className="label">Email Address</div>
                                    <input type="text" />
                                </div>
                                <div className="field">
                                    <div className="label">Role</div>
                                    <select>
                                        <option>Select your Role</option>
                                        <option>Donor</option>
                                        <option>xxxxxx</option>
                                        <option>Volunteer</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <button className="firstNext next" onClick={handleNext}>Next</button>
                                </div>
                            </div>
                        )};

                        {currentStep === 2 && (
                            <div className="page">
                                <div className="title">Contact  Info:</div>
                                <div className="field">
                                    <div className="label">Full Name</div>
                                    <input type="text" />
                                </div>
                                <div className="field">
                                    <div className="label">Phone Number</div>
                                    <input type="text" />
                                </div>
                                <div className="field btns">
                                    <button className="prev-1 prev" onClick={handlePrev}>Previous</button>
                                    <button className="next-1 next" onClick={handleNext}>Next</button>
                                </div>
                            </div>
                        )};

                        {currentStep === 3 && (

                            <div className="page">
                                <div className="title">Address Info:</div>
                                <div className="field">
                                    <div className="label">Present Address</div>
                                    <input type="text" />
                                </div>
                                <div className="field">
                                    <div className="label">Postal Code</div>
                                    <input type="Number" />
                                </div>
                                <div className="field btns">
                                    <button className="prev-2 prev" onClick={handlePrev}>Previous</button>
                                    <button className="next-2 next" onClick={handleNext}>Next</button>
                                </div>
                            </div>
                        )};

                        {currentStep === 1 && (
                            <div className="page">
                                <div className="title">Login Details:</div>
                                <div className="field">
                                    <div className="label">Username</div>
                                    <input type="text" />
                                </div>
                                <div className="field">
                                    <div className="label">Password</div>
                                    <input type="password" />
                                </div>
                                <div className="field btns">
                                    <button className="prev-3 prev" onClick={handlePrev}>Previous</button>
                                    <button className="submit" onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>

                        )};
                    </form>
                </div >
            </div >
        </>
    )
}
