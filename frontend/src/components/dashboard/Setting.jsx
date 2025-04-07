import React from "react";
import styles from "../../styles/Settings.module.css";
import Sidebar from "../layout/Sidebar";
const Setting = () => {
  return (
    <>
      <Sidebar />
      <div className={styles.mainContent}>
        <h1>Welcome Abhishek</h1>
        <p>This is your settings Page</p>
      </div>
    </>
  );
};
export default Setting;
