import React, { useState } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import WebpageContent from './Webpage';
import { useNavigate } from "react-router-dom";
import '../styles/login.css';

const LoginScreen = () => {
    const navigation = useNavigate();

    const [showLoginPage, setShowLoginPage] = useState(true);
    const [showRegistrationPage, setShowRegistrationPage] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLoginSubmit = async (event) => {
        event.preventDefault();

        const handleLoginSubmit = async (event) => {
            event.preventDefault();
            // try {
            //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
            //     if (!emailPattern.test(email)) {
            //         setLoginError('Please enter a valid email address');
            //         return;
            //     }
    
            //     if (email === 'sabarinathan@gmail.com' && password === 'Guna2710') {
            //         setLoggedIn(true);
            //     } else {
            //         setLoginError('Please enter correct email and password to login');
            //     }
            // } catch (error) {
            //     console.error('Login failed:', error);
            // }
            // setLoggedIn(true);
        };
        setLoggedIn(false);
    };



    const handleRegistrationSubmit = async (event) => {
        event.preventDefault();
        
    };

    const handleSignUpClick = () => {
        setShowLoginPage(false);
        setShowRegistrationPage(true);
    };

    const handleLoginClick = () => {

        setShowLoginPage(true);
        setShowRegistrationPage(false);
    };

    const handleRegister = () => {

        if(showLoginPage) {

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
                if (!emailPattern.test(email)) {
                    setLoginError('Please enter a valid email address');
                    return;
                }
    
                if (email === 'sabarinathan@gmail.com' && password === 'Guna2710') {
                    setLoggedIn(true);
                    navigation('/asset-management')
                } else {
                    setLoginError('Please enter correct email and password to login');
                }
        } else {
            try {
                setShowLoginPage(true);
                setShowRegistrationPage(false);
    
            } catch (error) {
                console.error('Registration failed:', error);
            }
        }
    }

    return (
        <div className="login-container">
                <div className='insidePage'>
                    <div className="header">
                        <div className="header-content">
                            <div className="logo-text">
                                <span className="logo-text-main">AMS</span>
                                
                                <br />
                                <span className="logo-text-sub">Asset Management System</span>
                            </div>
                            {showLoginPage && <h2 className="subheading-right">Login</h2>}
                            {showRegistrationPage && <h2 className="subheading-right">Register</h2>}
                        </div>
                        <hr />
                        {showRegistrationPage && (
                                <>
                                    <label htmlFor="username">Username:</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                            style={{ width: '97%' }}
                                        />
                                    </div>
                                    <label htmlFor="mobileNumber">Mobile Number:</label>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            id="mobileNumber"
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value)}
                                            required
                                            style={{ width: '97%' }}
                                        />
                                    </div>
                                </>
                            )}
                        <label htmlFor="email">Email</label>

                        <form onSubmit={showLoginPage ? handleLoginSubmit : handleRegistrationSubmit}>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    style={{ width: '97%' }}
                                />
                            </div>
                            <label htmlFor="password">Password:</label>
                            <div className="input-group">
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    style={{ width: '97%' }}
                                />
                                {loginError && (
                            <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
                                {loginError}
                            </div>
                        )}
                            </div>
                            <Button type="primary" htmlType="submit" className="login-btn" onClick={handleRegister}>
                                {showLoginPage ? "Login" : "Register"}
                            </Button>
                        </form>
                        <div style={{ textAlign: 'center', marginTop: '10px' }}>
                            {showLoginPage ? (
                                <Button type="link" onClick={handleSignUpClick}>Sign Up / Register</Button>
                            ) : (
                                <Button type="link" onClick={handleLoginClick}>Login</Button>
                            )}
                        </div>
                        
                    </div>
                </div>
            
        </div>
    );
}

export default LoginScreen;
