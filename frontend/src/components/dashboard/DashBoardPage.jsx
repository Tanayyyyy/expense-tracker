import React from "react";
import styles from "../../styles/Dashboard.module.css";
import Sidebar from "../layout/Sidebar";

const DashBoardPage = () => {
  return <>
    <Sidebar />
    <div className={styles.mainContent}>
      <h1>Welcome to dashboard</h1>
    </div>
  </>;
};

export default DashBoardPage;
