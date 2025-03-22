import { useNavigate } from "react-router-dom";
import styles from "../../styles/Expense.module.css";
const Expense = () => {
  const navigate = useNavigate();
  const newExpense = () => {
    console.log("New Expense");
    navigate("/addNewExpenses");
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <h1>Expenses</h1>
        <div className={styles.tag}>
          <button onClick={newExpense}>+ New Expense</button>
        </div>
      </div>
      <hr />
      <div className={styles.grid_container}>
        <div className="grid-item item1">DETAILS</div>
        <div className="grid-item">MERCHANT</div>
        <div className="grid-item">AMOUNT</div>
        <div className="grid-item">REPORT</div>
        <div className="grid-item">STATUS</div>
      </div>
    </div>
  );
};
export default Expense;
