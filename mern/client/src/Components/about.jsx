import React from 'react';
import { brandLogo } from "../assets";
import Footer from "./footer";
import './css/about.css'

const About = () => {
    return (
        <>
            <section className="AboutNavheader">
                <nav>
                    <a href="index.html"><img src={brandLogo} alt="" /></a>
                    <div className="nav-links" id="navlink">
                        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">ABOUT US</a></li>
                            <a href="/login" className="logInBtn">Log In</a>
                        </ul>
                    </div>
                </nav>
            </section>
            <section className='Mission'>
                        <div className='innerDiv'>
                            <h2>Our Mission</h2>
                            <div className="content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae omnis soluta laudantium impedit ex qui officia unde ipsam earum quam voluptates aliquam sint consectetur, voluptas, consequuntur amet dolorum magni? Impedit, voluptatum quaerat? Aliquid at sit provident voluptatum ipsa necessitatibus, sapiente beatae omnis doloribus, sunt possimus, impedit id unde. Deleniti, tenetur.
                            </div>
                        </div>
            </section>
            <section className='Vision'>
                        <div className='innerDiv'>
                            <h2>Our Vision</h2>
                            <div className="content">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae omnis soluta laudantium impedit ex qui officia unde ipsam earum quam voluptates aliquam sint consectetur, voluptas, consequuntur amet dolorum magni? Impedit, voluptatum quaerat? Aliquid at sit provident voluptatum ipsa necessitatibus, sapiente beatae omnis doloribus, sunt possimus, impedit id unde. Deleniti, tenetur.
                            </div>
                        </div>
            </section>
            <section>
                <Footer />
            </section>
        </>
    );
};

export default About;
