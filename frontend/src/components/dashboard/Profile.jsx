import Sidebar from "../layout/Sidebar";
import styles from "../../styles/Settings.module.css";
const Profile = () => {
  return (
    <>
      <Sidebar />
      <div className={styles.mainContent}>
        <h1>Welcome Abhishek</h1>
        <p>This is your profile</p>
      </div>
    </>
  );
};
export default Profile;
