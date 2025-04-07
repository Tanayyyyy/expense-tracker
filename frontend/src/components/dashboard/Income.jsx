import Sidebar from "../layout/Sidebar";
import styles from "../../styles/Income.module.css";
const Income = () => {
  return (
    <>
      <Sidebar />
      <div className={styles.mainContent}>
        <h1>Welcome Abhishek</h1>
        <p>This is income page</p>
      </div>
    </>
  );
};
export default Income;
