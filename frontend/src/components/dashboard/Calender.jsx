import styles from "../../styles/Calendar.module.css";
import Sidebar from "../layout/Sidebar";
const Calender = () => {
  return (
    <>
      <Sidebar />
      <div className={styles.mainContent}>
        <h1>Welcome Abhishek</h1>
        <p>This is calendar</p>
      </div>
    </>
  );
};
export default Calender;
