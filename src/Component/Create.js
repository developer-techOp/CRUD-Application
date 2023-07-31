import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./all-file.css";
import { useNavigate,Link } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://64855591a795d24810b6d9c1.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      });
  };

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
        <h1>Create Data</h1>
      </div>
      <form className="from-Crud" onSubmit={handleSubmit}>
        <div class="form-group">
          <label>Enter Name</label>
          <br />
          <input
            type="text"
            class="form-control"
            placeholder="Enter Name"
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
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
      {name}
      <br />
      {age}
      <br />
      {email}
    </>
  );
}

export default Create;
