import React, { useState } from "react";
import axios from "axios";
import "./teacherForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TeacherForm = () => {
  const [name, setName] = useState("");
  const notify = () => toast.success('Mentor added successfully', {
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
      await axios.post("https://teacher-student-bbht.onrender.com/mentors", {
        name,
      });
      setName("");
      console.log("Teacher added successfully");
      notify();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="teacher-form">
      <h2>Add Teacher</h2>
      <ToastContainer />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Teacher Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
};

export default TeacherForm;
