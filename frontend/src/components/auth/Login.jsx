import styles from "../../styles/Login.module.css";
import React, { useState } from "react";


export default function Login() {

    const [userLoginCredentials, setUserLoginCredentials] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserLoginCredentials((prev) => ({ ...prev, [name]: value }))
    };

    const handleSubmit = (event) => {
        console.log("The User input data on login page is:", userLoginCredentials)
    };

    return (
        <center className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <div className={styles.form}>
                    <h2>Login</h2>
                    <input
                        type="email"
                        id="usernameOrEmail"
                        name="usernameOrEmail"
                        value={userLoginCredentials.usernameOrEmail}
                        placeholder="Enter Email"
                        required
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userLoginCredentials.password}
                        placeholder="Enter Your Password"
                        onChange={handleInputChange}
                        required
                    />
                    <a href="#">Forgot Password</a>
                    <button type="submit">Login</button>
                    <p>
                        Not a Member?
                        <a
                            href="#"

                        >
                            Register Now
                        </a>
                    </p>
                </div>
            </form>
        </center>
    );
}
