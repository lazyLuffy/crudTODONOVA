import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import DeleteModel from "./model/Delete";
import AddModel from "./model/AddModel";
import UpdateModel from "./model/UpdateModel";

function TableData() {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(true);
  const [updateData,setUpdateData]=useState()
  const [query,setQuery]=useState()
  const [idData,setIdData]= useState()

  const getData = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    const resData = res.data;
    setData(resData);
    setLoader(false);
  };

  const handleSearch =(e)=>{
    e.preventDefault()
    const newSearchData = data.filter((v)=>{
        return v.name.toLowerCase().includes(query.toLowerCase())
    })
    if(newSearchData)
    {
        console.log(newSearchData,'ine the if')
        setData(newSearchData)
    }
    else {
        setData(data)
    }
        
  }

  useEffect(() => {
    getData();
    return()=>{
        console.log('cleanUpFunction')
    }
  }, []);

  console.log(data , 'aftersetting')

  return (
    <div className="container my-2 bg-light d-flex flex-column  align-items-center justify-content-center" style={{overflowX:'auto'}}>
    <div className=" d-flex align-items-center justify-content-between">
    <form class="d-flex m-4">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setQuery(e.target.value)}/>
    <button class="btn btn-outline-success" type="submit" onClick={(e)=>handleSearch(e)}>Search</button>
  </form>
        <button className="btn btn-success my-2"  type="button"
        data-bs-toggle="modal"
        data-bs-target="#Addmodel">
            Add Data
        </button>
    </div>
    <div className="table-responsive-lg container-fluid">
    
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Phone No</th>
          <th scope="col">email</th>
          <th scope="col">action</th>
        </tr>
      </thead>
      <tbody>
        {data && !loader ? (
          data?.map((v) => (
            <tr>
              <th scope="row">{v.id?v.id:'-'}</th>
              <td>{v.name}</td>
              <td>{v.phone}</td>
              <td>{v.email}</td>
              <td>
                <span className="d-flex  align-items-center justify-content-evenly">
                  <i
                  type="button"
                    class="btn btn-primary bi bi-pencil-square"
                    data-bs-toggle="modal"
                    data-bs-target="#UpdateModel"
                    onClick={()=>setUpdateData(v)}
              
                  ></i>

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={()=>setIdData(v.id)}
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </span>
              </td>
            </tr>
          ))
        ) : (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </tbody>
    </table>
    </div>
      <DeleteModel idData={idData} postData={data} handler={setData} />
      <AddModel postData={data} handler={setData}  />
      <UpdateModel currentData={updateData} postData={data} handler={setData} />
    </div>
  );
}

export default TableData;
