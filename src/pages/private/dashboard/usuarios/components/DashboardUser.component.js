import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { apiUser } from "../../../../../routes";
import TableBody from "./TableBody.component";







export default function DashboardUser() {       
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const form = useRef(null);
  const notify = (message) => toast(message);
  const notifyError = (message) => toast.error(message);
  const notifySuccess= (message) => toast.success(message);

  const [usuarios, setUsuarios] = useState([]);
    
  function search() {
    // const data = new FormData(form.current);
    // if(searchUser.value !== ""){
    //   alert(searchUser.value)

    
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

    // }else{
    //   alert("vacio")
    // }

    // alert(searchUser.value)
}


const GetUsuarios = async () => {
  const response = await  apiUser.ReadUsuarios();

 // setTimeout(() => {
   console.log(response.data.message)
   setUsuarios(response.data);
   setLoading(false);
 // }, 5000);
};

useEffect(async () => {
 await GetUsuarios();
}, []);



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
          <li className="breadcrumb-item active" aria-current="page">
            Usuarios 
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
          <h1>Consulta de usuarios</h1>
      
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
         {/* <table class="table table-striped  table-bordered table-hover text-center"> */}
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
                {loading ? (
                  <ReactLoading
                    type={"cubes"}
                    color={"#3EB4B8"}
                    width={100}
                    height={50}
                  />
                ) : (
                  <TableBody data={usuarios} />
                )}
              </tbody>
            </table>
          
{/*  
          <Table bordered hover responsive size="lg">
            <thead>
                <tr>
                <th>Id</th>
                <th>Estado</th>
                <th>Rol</th>
                <th>Email</th>
                <th>Primer nombre</th>
                <th>Segundo nombre</th>
                <th>Primer apellido</th>
                <th>Segundo apellido</th>
                <th>Tipo documento</th>
                <th>Número documento</th>
                <th>Sexo</th>
                <th>Telefono</th>
                <th>Celular</th>
                <th>Direccion</th>
                <th>Barrio</th>
                <th>Comuna</th>
                <th>Ciudad</th>
                <th>Departamento</th>
                <th>Nacionalidad</th> 
                <th> Acciones </th>                   
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Id</td>
                <td>Estado</td>
                <td>Rol</td>
                <td>Email</td>
                <td>Primer nombre</td>
                <td>Segundo nombre</td>
                <td>Primer apellido</td>
                <td>Segundo apellido</td>
                <td>Tipo documento</td>
                <td>Numero documento</td>
                <td>Sexo</td>
                <td>Telefono</td>
                <td>Celular</td>
                <td>Direccion</td>
                <td>Barrio</td>
                <td>Comuna</td>
                <td>Ciudad</td>
                <td>Departamento</td>
                <td>Nacionalidad</td> 
                <td>
                <FontAwesomeIcon icon={faEraser}
                style={{
                  marginRight: "10px"
                }} 
                onClick ={()=>desactivarUser(id)}/> 
                <FontAwesomeIcon icon={faUserEdit}  
                style={{
                  marginRight: "10px"
                }} 
                onClick ={editarUser}/> 
                <FontAwesomeIcon icon={faEye}  
                style={{
            
                }} 
                onClick ={verUser}/> 
                </td>
                </tr>
               
            </tbody>
            </Table> */}
 
 
        </div>
      </div>
    </div>
    </>
  );

}
