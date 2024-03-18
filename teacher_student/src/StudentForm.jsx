import React, { useState } from "react";
import axios from "axios";
import "./studentForm.css"; // Import the studentForm.css file
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StudentForm = () => {
  const [name, setName] = useState("");

  const notify = () =>
    toast.success("Mentor added successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://teacher-student-bbht.onrender.com/student/", {
        name,
      });
      setName("");
      console.log("Student added successfully");
      notify();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="student-form">
      <h2>Add Student</h2>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
