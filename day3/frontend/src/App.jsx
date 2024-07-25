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
  
  
   

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = parseInt(document.querySelector("#admn").value);
    console.log(id)
    // const studentdata = data.find(stud => stud.id === id );
    // setStudent(studentdata)
    const studentdata = data.filter((item)=>{
      return item.id === id
    })
    setStudent(studentdata[0])


  }; 
  

  return (
    <>
      <form className="stud" onSubmit={handleSubmit}>
        <label htmlFor="admn">Admn number</label>
        <input className="admn" id="admn" type="text" />

        <button id="submit" type="submit">
          Check
        </button>
        
      </form>
      {student&&(
        <div className="student-details">
          <h2>Students <Details></Details></h2>
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
