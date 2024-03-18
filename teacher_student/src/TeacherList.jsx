import React, { useState, useEffect } from "react";
import "./teacherlist.css";
import axios from "axios";
import { Link } from "react-router-dom";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(
          "https://teacher-student-bbht.onrender.com/mentors/mentors"
        );
        setTeachers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <div className="teacher-list">
      <h2>Teacher List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>
            {teacher.name}{" "}
            <Link to={`/mentors/${teacher._id}/students`}>view students</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
