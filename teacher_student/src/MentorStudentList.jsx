import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const MentorStudentList = () => {
  const [students, setStudents] = useState([]);
  const { mentorId } = useParams();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `https://teacher-student-bbht.onrender.com/mentors/${mentorId}/students`
        );
        setStudents(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStudents();
  }, [mentorId]);

  return (
    <div>
      <h2>Students of Mentor</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name}
            <Link to={`/student/${student._id}/mentor`}>See Mentor</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentorStudentList;
