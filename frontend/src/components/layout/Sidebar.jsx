import React, { useState } from "react";
import styles from "../../styles/Sidebar.module.css";
import logo from "../../assets/logo/logo.jpg";
import { IoHomeOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";

const Sidebar = () => {
  const [isExpenseCollapsed, setIsExpenseCollapsed] = useState(false);
  const [isIncomeCollapsed, setIsIncomeCollapsed] = useState(false);

  const toggleExpenseCollapse = () => {
    setIsExpenseCollapsed(!isExpenseCollapsed);
  };

  const toggleIncomeCollapse = () => {
    setIsIncomeCollapsed(!isIncomeCollapsed);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <h2 className={styles.heading}>Expense Tracker</h2>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      <ul className={styles.sidebarMenu}>
        <li className={styles.menuItem}>
          <a href="#" className={styles.anchor}>
            <IoHomeOutline />
            &nbsp;&nbsp;&nbsp;Dashboard
          </a>
        </li>

        <li className={styles.menuItem} onClick={toggleExpenseCollapse}>
          <a href="#" className={styles.anchor}>
            <FaRupeeSign />
            &nbsp;&nbsp; Expense&nbsp;&nbsp;
            <FaArrowDown />
          </a>
          <span
            className={`arrow ${isExpenseCollapsed ? "rotated" : ""}`}
          ></span>
        </li>
        {isExpenseCollapsed && (
          <ul className={styles.submenu}>
            <li className={styles.submenuItem}>
              <a href="#" className={styles.anchor}>
                Expense Item 1
              </a>
            </li>
            <li className={styles.submenuItem}>
              <a href="#" className={styles.anchor}>
                Expense Item 2
              </a>
            </li>
          </ul>
        )}

        <li className={styles.menuItem} onClick={toggleIncomeCollapse}>
          <a href="#" className={styles.anchor}>
            <FaRegMoneyBillAlt />
            &nbsp;&nbsp; Income&nbsp;&nbsp;
            <FaArrowDown />
          </a>

          <span
            className={`arrow ${isIncomeCollapsed ? "rotated" : ""}`}
          ></span>
        </li>
        {isIncomeCollapsed && (
          <ul className={styles.submenu}>
            <li className={styles.submenuItem}>
              <a href="#" className={styles.anchor}>
                Income Item 1
              </a>
            </li>
            <li className={styles.submenuItem}>
              <a href="#" className={styles.anchor}>
                Income Item 2
              </a>
            </li>
          </ul>
        )}

        <li className={styles.menuItem}>
          <a href="#" className={styles.anchor}>
            <SlCalender />
            &nbsp;&nbsp; Calendar
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#" className={styles.anchor}>
            <IoSettingsOutline />
            &nbsp;&nbsp;Settings
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#" className={styles.anchor}>
            <CgProfile />
            &nbsp;&nbsp; Profile
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#" className={styles.anchor}>
            <AiOutlineLogout />
            &nbsp;&nbsp; Login/SignUp
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
