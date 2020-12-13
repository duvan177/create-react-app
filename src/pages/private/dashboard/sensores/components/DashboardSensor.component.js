import React, { useRef, useState , useEffect} from "react";
import { Link } from "react-router-dom";
// const TitleForm = theme.Title;
// const TitleFormH5 = theme.TitleSecond;
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEraser,
  faUserEdit,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

import { apiUser } from "../../../../../routes";











export default function DashboardSensor() {       
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const form = useRef(null);
  const notify = (message) => toast(message);
  const notifyError = (message) => toast.error(message);
  const notifySuccess= (message) => toast.success(message);

  console.log(user)
 
  const [formValues, setFormValues] = useState(false);
  const [formErrors, setFormErrors] = useState({});

 
  
  
  const value = "";
  const name = "";


  const handleChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, value } = e.target; 
 
    
    
}

    
    
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(form.current);
    

      //RSPUESTA DE SERVIDOR
    // const response = await apiUser.SaveUserForAdmin(data);
    // if(response.status == 200 ){
    //     Array.from(document.querySelectorAll("input")).forEach(
    //         input => (input.value = "")
    //       );
    // }
    // notify(response.data.message)
    // setLoading(false);
    // console.log(response);

    

  };


    
  function search() {
    const searchUser = ""
    // const data = new FormData(form.current);
    if(searchUser.value !== ""){
      alert(searchUser.value)

    
      //RSPUESTA DE SERVIDOR
    // const response = await apiUser.SaveUserForAdmin(data);
    // if(response.status == 200 ){
    //     Array.from(document.querySelectorAll("input")).forEach(
    //         input => (input.value = "")
    //       );
    // }
    // notify(response.data.message)
    // setLoading(false);
    // console.log(response);

    }else{
      alert("vacio")
    }

    alert(searchUser.value)
}


function desactivarUser() {
  alert("desactivarUser")
 
}

function editarUser() {
  alert("editarUser")
 
}

function verUser() {
  alert("verUser")
 
}


  return (
      <>
              <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item active" aria-current="page">
          BACKOFFICE - SATIC
          </li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb mt-0">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <a href="#">Inicio</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
          <Link to="/auth/admin/dashboard/">
            <a href="#">Dashboard</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Sensores 
          </li>
        </ol>
      </nav>
    <div className="container-fluid">
    
<ToastContainer />

      <div
        className="row  h-100 "
        style={{
          padding: "50px",
          border: "0px solid green",
        }}
      >
        <div
          style={{
            // padding: "20px",
            border: "0px solid blue",
          }}
          className="col-md-12  d-flex justify-content-center align-items-center"
        >
          <h1>Consulta de sensores</h1>
      
        </div>

        <div
          style={{
            padding: "20px",
            border: "0px solid yellow",
          }}
          className="col-lg-12 col-sm-12  w-100 justify-content-center align-items-center float-left"
        >
                <hr classname="mb-4" />
        <div
          style={{
            padding: "20px",
            border: "0px solid yellow",
          }}
          className="col-lg-12 col-sm-12  w-100 justify-content-center align-items-center float-left"
        >
            <div className="row">
            <div className="col-md-1">
         
              <Link to="/auth/admin/dashboard/sensores/registro/">
                <a href="#"> <FontAwesomeIcon icon={faPlus} /> Nuevo</a> 
              </Link>
            </div>
      
              
                <div className="col-md-10">

              <div className="form-group float-right">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese número"
                  id="searchUser"
                  maxLength="45"
                  name="searchUser"
                  required
                  defaultValue={user.searchUser}
                  style = {{
                    width: "400px"
                  }}
                />
          
              </div>
              </div>
              <div className="col-md-1">
              <button style={{
                    width:100,
                    margin: "5px",
                    backgroundColor:"#3EB4B8",
                    borderColor:"#3EB4B8"
                }} type="button" className="btn  btn-lg btn-primary " onClick={search}>
                    Buscar
                </button>
              </div>
              </div>
     

         </div>
          
 
         <table class="table  table-bordered table-hover text-center ">
            <thead>
                <tr>
                <th>Id</th>
                <th>Estado</th>
                <th>Nombre sensor</th>
                <th>Codigo entidad</th>
                <th>codigo estacion</th>
                <th>Latitud</th>
                <th>Longitud</th>
                <th> Acciones </th>                   
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Id</td>
                <td>Estado</td>
                <td>Nombre sensor</td>
                <td>Codigo entidad</td>
                <td>codigo estacion</td>
                <td>Latitud</td>
                <td>Longitud</td>
                <td>
                <button className="btn btn-info"
                style={{
                  marginLeft: "10px"
                }}
                >
                  <FontAwesomeIcon icon={faEye}/> </button>
                <button className="btn btn-warning"
                style={{
                  marginLeft: "10px"
                }}
                >
                <FontAwesomeIcon icon={faUserEdit} /></button>
                <button className="btn btn-danger"
                style={{
                  marginLeft: "10px"
                }}
                >
                <FontAwesomeIcon icon={faEraser}/></button>
                </td>
                </tr>
               
            </tbody>
            </table>
 
 
        </div>
      </div>
    </div>
    </>
  );

}
