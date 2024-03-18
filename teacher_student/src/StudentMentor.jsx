import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const StudentMentor = () => {
  const [mentor, setMentor] = useState(null);
  const { studentId } = useParams();

  useEffect(() => {
    const fetchMentor = async () => {
      try {
        const response = await axios.get(
          `https://teacher-student-bbht.onrender.com/student/${studentId}/mentor`
        );
        setMentor(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMentor();
  }, [studentId]);

  return (
    <div>
      <h2>Mentor of Student</h2>
      {mentor ? (
        <p>Mentor: {mentor.name}</p>
      ) : (
        <p>No mentor assigned to this student.</p>
      )}
    </div>
  );
};

export default StudentMentor;
