import React from 'react';
import logo from '../assets/logo/logo.jpg';
import '../styles/LoginRegister.css';
import { Link } from 'react-router-dom'

function LoginRegister() {
    return (
        <div className="container">
            <img src={logo} alt="Logo" className="logo" />
            <div className="buttons">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        </div>
    );
}

export default LoginRegister;
