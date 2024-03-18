import React, { useState, useEffect } from "react";
import axios from "axios";
import "./assignTeacherToStudent.css"; // Import the assignTeacherToStudent.css file
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AssignTeacherToStudent = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const notify = () =>
    toast.success("Mentor assigned successfully", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsResponse = await axios.get(
          "https://teacher-student-bbht.onrender.com/student/students"
        );
        setStudents(studentsResponse.data);

        const teachersResponse = await axios.get(
          "https://teacher-student-bbht.onrender.com/mentors/mentors"
        );
        setTeachers(teachersResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleAssignment = async () => {
    console.log(selectedStudent);
    console.log(selectedTeacher);
    try {
      await axios.post(
        `https://teacher-student-bbht.onrender.com/mentors/${selectedTeacher}/students/${selectedStudent}`
      );
      setSelectedStudent("");
      setSelectedTeacher("");
      console.log("Teacher assigned successfully");
      notify();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="assignment-container">
      <h2>Assign Teacher to Student</h2>
      <ToastContainer></ToastContainer>

      <div>
        <label>Select Teacher:</label>
        <select
          value={selectedTeacher}
          onChange={(e) => setSelectedTeacher(e.target.value)}
        >
          <option value="">Select Teacher</option>
          {teachers.map((teacher) => (
            <option key={teacher._id} value={teacher._id}>
              {teacher.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Student:</label>
        <select
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student._id} value={student._id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleAssignment}>Assign Teacher</button>
    </div>
  );
};

export default AssignTeacherToStudent;
