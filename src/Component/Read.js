import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("https://64855591a795d24810b6d9c1.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      }).catch((err)=>{
        console.log("something went wrong")
      })
  }
  function handleDelete(id) {
    axios
      .delete(`https://64855591a795d24810b6d9c1.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }
  function setDataToLocalStorage(id,name,age,email){
   localStorage.setItem('id',id)
   localStorage.setItem('name',name)
   localStorage.setItem('age',age)
   localStorage.setItem('email',email)
  }
  useEffect(() => {
    
    getData();
  }, []);

  return (
    <>
      <div class="mb-2 mt-2 d-flex">
        <Link to="/create">
          <button type="button" class="btn btn-primary">
            Create New Data
          </button>
        </Link>
      </div>
      <table class="table table-bordered table-striped table-dark table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.e_name}</td>
                  <td>{item.e_age}</td>
                  <td>{item.e_email}</td>
                  <td>
                    <Link to="/edit">
                      <button type="button" class="btn btn-primary" onClick={()=>setDataToLocalStorage(item.id,item.e_name,item.e_age,item.e_email)}>
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you Sure Want to Delete this Data"
                          )
                        )
                          handleDelete(item.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Read;
