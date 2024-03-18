import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TeacherList from "./TeacherList";
import StudentForm from "./StudentForm";
import TeacherForm from "./TeacherForm";
import AssignTeacherToStudent from "./AssignTeacherToStudent";
import MentorStudentList from "./MentorStudentList";
import StudentMentor from "./StudentMentor";
import Studentlist from "./Studentlist";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/student" className="nav-link">
                Student list
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/teachers" className="nav-link">
                Teachers list
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/students/new" className="nav-link">
                Add Student
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/teachers/new" className="nav-link">
                Add Teacher
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/assign" className="nav-link">
                Assign Teacher
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/teachers" element={<TeacherList />} />
          <Route path="/students/new" element={<StudentForm />} />
          <Route path="/teachers/new" element={<TeacherForm />} />
          <Route path="/assign" element={<AssignTeacherToStudent />} />
          <Route
            path="/mentors/:mentorId/students"
            element={<MentorStudentList />}
          />
          <Route
            path="/student/:studentId/mentor"
            element={<StudentMentor />}
          />
          <Route path="/student" element={<Studentlist></Studentlist>}>
            {" "}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
