import styles from "../../styles/Register.module.css";
import React, { useState } from "react";
const Register = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [newUserDetails, setNewUserDetails] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewUserDetails((prev) => ({ ...prev, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUserDetails.password !== newUserDetails.confirmPassword) {
            setErrorMessage("Passwords do not match");
        }
        else {
            console.log("Entered userdetails are:", newUserDetails);
            // api call that will submit the newuserdetails
            setNewUserDetails({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
            setErrorMessage("");
            return;
        }
    };
    return (
        <>
            <center className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <div className={styles.form}>
                        <h2>Register</h2>
                        {errorMessage && <div>{errorMessage}</div>}
                        <input
                            type="text"
                            id="username"
                            value={newUserDetails.username}
                            name="username"
                            placeholder="Enter Your Full Name"
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="email"
                            id="email"
                            value={newUserDetails.email}
                            name="email"
                            placeholder="Email Address"
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="password"
                            id="password"
                            value={newUserDetails.password}
                            name="password"
                            placeholder="Set Password"
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="password"
                            id="confirmPassword"
                            value={newUserDetails.confirmPassword}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleInputChange}
                            required
                        />
                        <button type="submit">Register</button>
                        {errorMessage}
                    </div>
                </form>
            </center>
        </>
    );
};
export default Register;
