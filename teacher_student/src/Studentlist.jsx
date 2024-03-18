import React, { useState, useEffect } from "react";
import "./studentlist.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Studentlist = () => {
  const [students, setStudent] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(
          "https://teacher-student-bbht.onrender.com/student/students"
        );
        setStudent(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <div className="teacher-list">
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name}{" "}
            <Link to={`/student/${student._id}/mentor`}>view mentor</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Studentlist;
