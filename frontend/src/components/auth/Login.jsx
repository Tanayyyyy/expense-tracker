import styles from "../../styles/Login.module.css";
import React, { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailPattern.test(value)) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  };

  const handleSubmit = (event) => {   
    event.preventDefault();
    console.log("User input:", userInput);  //backend api meh set karne ke liye
    console.log("Is email:", isEmail);
    console.log("Password:", password);
  };

  return (
    <center className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.form}>
          <h2>Login Form</h2>
          <input
            type="text"
            id="usernameOrEmail"
            name="usernameOrEmail"
            value={userInput}
            placeholder="Username/Email"
            required
            onChange={handleInputChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#">Forgot Password</a>
          <button type="submit">Login</button>
          <p>
            Not a Member?
            <a
              href="#"
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Register Now
            </a>
          </p>
        </div>
      </form>
    </center>
  );
}
