import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Update() {
  const [id, setid] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate=useNavigate()

  const handleUpadte = (e) => {
    e.preventDefault();
    axios.put(`https://64855591a795d24810b6d9c1.mockapi.io/crud/${id}`, {
      e_name: name,
      e_age: age,
      e_email: email,
    }).then(()=>{
        navigate('/')
    })
  };

  useEffect(() => {
    setid(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <>
      <div class="mb-2 mt-2 d-flex  button-flex">
        <Link to="/">
          <button type="button" class="btn btn-primary">
            Read Data
          </button>
        </Link>
      </div>
      <div className="form-div">
        <h1>Update Data</h1>
      </div>
      <form className="from-Crud" onSubmit={handleUpadte}>
        <div class="form-group">
          <label>Enter Name</label>
          <br />
          <input
            type="text"
            class="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Age</label>
          <br />
          <input
            type="number"
            class="form-control"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Enter Email</label>
          <br />
          <input
            type="email"
            class="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <input type="submit" value="Update" className="btn btn-primary" />
      </form>
    </>
  );
}

export default Update;
