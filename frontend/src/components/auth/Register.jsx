import styles from "../../styles/Register.module.css";
import React, { useState } from "react";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required");
      return;
    }

    setErrorMessage("");

    console.log("Form submitted");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <>
      <center className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.form}>
            <h2>Registration Form</h2>
            {errorMessage && <div>{errorMessage}</div>}
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Your Full Name"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Set Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Register</button>
          </div>
        </form>
      </center>
    </>
  );
};
export default Register;
