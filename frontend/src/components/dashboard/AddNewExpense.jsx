import React, { useState } from "react";
import styles from "../../styles/AddNewExpense.module.css";
import { useNavigate } from "react-router-dom";

const NewExpense = () => {
  // State management for form inputs
  const navigate = useNavigate();
  const addNewExpense = () => {
    console.log("New Expense");
    navigate("/expense");
  };
  const [formData, setFormData] = useState({
    subject: "",
    merchant: "",
    date: "",
    total: "",
    reimbursable: false,
    category: "",
    description: "",
    employee: "",
    addToReport: "yes",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form data submitted:", formData);
  };

  return (
    <div className={styles.new_expense}>
      <div className={styles.new_expense_container}>
        <div className={styles.header}>
          <h2>New expense</h2>
          <button onClick={addNewExpense}>X</button>
        </div>
        <form onSubmit={handleSubmit} className={styles.expense_form}>
          <label>
            Subject*
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Merchant*
            <input
              type="text"
              name="merchant"
              value={formData.merchant}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date*
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Total*
            <input
              type="number"
              name="total"
              value={formData.total}
              onChange={handleChange}
              required
            />
            <select name="currency" onChange={handleChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              {/* Add more currencies as needed */}
            </select>
          </label>

          <label>
            Category*
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="Type">Type</option>
              {/* Add more categories as needed */}
            </select>
          </label>
          <label>
            Description
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>

          <label>
            Add to report
            <select
              name="addToReport"
              value={formData.addToReport}
              onChange={handleChange}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <div className={styles.button_container}>
            <button type="submit">Save draft</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewExpense;
