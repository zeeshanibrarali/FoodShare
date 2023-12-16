import React, { useState } from "react";
import { loginpgpic } from "../assets";
import "./css/login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement login logic
    };

    return (
        <div className="login-page">
            <img src={loginpgpic} alt="" />
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /> <br />
                <input
                    className="remember"
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="rememberMe">Remember me</label><br />
                <button type="submit">Login</button>
                <button type="button">Cancel</button>
            </form>
        </div>
    );
};

export default Login;