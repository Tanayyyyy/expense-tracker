import React, { useState } from "react";
import styles from "../../styles/Invoice.module.css";
function Invoice() {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Handle form submission (you can upload to a backend server here)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    // Example: Creating a FormData object and sending it to a backend (using fetch or axios)
    const formData = new FormData();
    formData.append("invoice", selectedFile);

    // Replace the URL with the endpoint where you want to upload the invoice
    const uploadUrl = "/upload"; // This is a placeholder URL.

    try {
      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Invoice uploaded successfully!");
      } else {
        alert("Error uploading invoice.");
      }
    } catch (error) {
      console.error("Error during file upload:", error);
      alert("Error uploading invoice.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="invoice">Choose invoice file:</label>
        <input
          type="file"
          id="invoice"
          name="invoice"
          accept=".pdf, .docx, .jpg, .png, .jpeg"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Upload</button>
      </form>
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
    </div>
  );
}

export default Invoice;
