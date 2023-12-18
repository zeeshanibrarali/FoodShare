import { useState } from "react";
// import { loginpgpic } from "../assets";
import "./css/login.css";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const switchToLogin = () => {
        setIsLogin(true);
    };

    const switchToSignup = () => {
        setIsLogin(false);
    };

    const switchToSignupFromLink = (e) => {
        e.preventDefault();
        switchToSignup();
    };

    return (
        <div className="loginMain">
            <div className="wrapper">
                <div className="title-text">
                    <div className={`title ${isLogin ? 'login' : 'signup'}`}>
                        {isLogin ? 'Login Form' : 'Signup Form'}
                    </div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input type="radio" name="slide" id="login" checked={isLogin} onChange={switchToLogin} />
                        <input type="radio" name="slide" id="signup" checked={!isLogin} onChange={switchToSignup} />
                        <label htmlFor="login" className="slide login">Login</label>
                        <label htmlFor="signup" className="slide signup">Signup</label>
                        <div className="slider-tab"></div>
                    </div>
                    <div className="form-inner">
                        <form action="#" className={isLogin ? 'login' : 'signup'}>
                            <div className="field">
                                <input type="text" placeholder="Email Address" required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" required />
                            </div>
                            {!isLogin && (
                                <div className="field">
                                    <input type="password" placeholder="Confirm password" required />
                                </div>
                            )}
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value={isLogin ? 'Login' : 'Signup'} />
                            </div>
                            {isLogin ? (
                                <div className="signup-link">
                                    Not a member? <a href="#" onClick={switchToSignupFromLink}>Signup now</a>
                                </div>
                            ) : (
                                <div className="signup-link">
                                    Already a member? <a href="#" onClick={switchToLogin}>Login</a>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;