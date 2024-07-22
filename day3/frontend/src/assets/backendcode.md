import { useEffect, useState, useRef } from "react";
import "./App.css";
import axios from "axios";
import React from "react";

function App() {
  const [data, setData] = useState([]);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const admnRef = useRef(null);
  const studRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = parseInt(admnRef.current.value);
    const foundStudent = data.find(student => student.id === id);
    setStudent(foundStudent);
  };

  return (
    <>
      <form ref={studRef} className="stud" onSubmit={handleSubmit}>
        <label htmlFor="admn">Admn No.</label>
        <input className="admn" id="admn" type="text" ref={admnRef} />
        <button id="submit" type="submit">
          Check
        </button>
      </form>

      {student && (
        <div className="student-details">
          <h2>Student Details</h2>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Grade:</strong> {student.grade}</p>
          <p><strong>Subjects:</strong> {student.subjects.join(", ")}</p>
          <p><strong>Phone:</strong> {student.contact.phone}</p>
          <p><strong>Email:</strong> {student.contact.email}</p>
          <p><strong>Address:</strong> {`${student.address.street}, ${student.address.city}, ${student.address.state} ${student.address.zip}`}</p>
        </div>
      )}
    </>
  );
}

export default App;
