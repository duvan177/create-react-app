import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


export default function DashboardUser() {       
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const form = useRef(null);
  const notify = (message) => toast(message);
  const notifyError = (message) => toast.error(message);
  const notifySuccess= (message) => toast.success(message);

  const [usuarios, setUsuarios] = useState([]);
    
  function search() {
    
}


const GetUsuarios = async () => {
 // const response = await  apiUser.ReadUsuarios();

 // setTimeout(() => {
   // console.log(response.data)
   //setUsuarios(response.data);
   setLoading(false);
 // }, 5000);
};

useEffect(async () => {
 await GetUsuarios();
}, []);

function desactivarUser(id) {
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
            <Link href="/">
              <a href="#">Inicio</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
          <Link to="/auth/admin/dashboard">
            <a href="#">Dashboard</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
          <Link to="/auth/admin/dashboard/usuarios">
            <a href="#">Usuarios</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Mostrar 
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
            border: "0px solid blue",
          }}
          className="col-md-12  d-flex justify-content-center align-items-center"
        >
          <h1>Visualizador de usuarios</h1>
      
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
         
              <Link to="/auth/admin/dashboard/usuarios/registro">
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
         <table class="table table-responsive table-bordered table-hover text-center ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Email</th>
                  <th scope="col">Primer nombre</th>
                  <th scope="col">Segundo nombre</th>
                  <th scope="col">Primer apellido</th>
                  <th scope="col">Segundo apellido</th>
                  <th scope="col">Tipo documento</th>
                  <th scope="col">Número documento</th>
                  <th scope="col">Sexo</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">Celular</th>
                  <th scope="col">Direccion</th>
                  <th scope="col">Barrio</th>
                  <th scope="col">Comuna</th>
                  <th scope="col">Ciudad</th>
                  <th scope="col">Departamento</th>
                  <th scope="col">Nacionalidad</th> 
                  <th scope="col"> Acciones </th>    
                </tr>
              </thead>
              <tbody>
                {/* {loading ? (
                  <ReactLoading
                    type={"cubes"}
                    color={"#3EB4B8"}
                    width={100}
                    height={50}
                  />
                ) : (
                  <TableBody data={usuarios} />
                )} */}
              </tbody>
            </table> 
        </div>
      </div>
    </div>
    </>
  );

}
