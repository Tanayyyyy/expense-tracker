import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styles from "../../styles/AppLayout.module.css";
const AppLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};
export default AppLayout;
