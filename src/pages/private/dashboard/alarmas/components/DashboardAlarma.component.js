import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { apiAlarmas } from "../../../../../routes";
import TableBody from "./TableBody.component";

export default function DashboardAlarma() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const form = useRef(null);
  const notify = (message) => toast(message);
  const notifyError = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);

  const [alarmas, setAlarmas] = useState([]);


  function search() {

  }

  
  const GetAlarmas = async () => {
    const response = await  apiAlarmas.ReadAlarmas();

   // setTimeout(() => {
     // console.log(response.data)
     setAlarmas(response.data);
     setLoading(false);
   // }, 5000);
 };

 useEffect(async () => {
   await GetAlarmas();
 }, []);
  function desactivarUser() {
    alert("desactivarUser");
  }

  function editarUser() {
    alert("editarUser");
  }

  function verUser() {
    alert("verUser");
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
            Alarmas
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
            <h1>Consulta de alarmas</h1>
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
                  <Link to="/auth/admin/dashboard/alarmas/registro/">
                    <a href="#">
                      {" "}
                      <FontAwesomeIcon icon={faPlus} /> Nuevo
                    </a>
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
                      style={{
                        width: "400px",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-1">
                  <button
                    style={{
                      width: 100,
                      margin: "5px",
                      backgroundColor: "#3EB4B8",
                      borderColor: "#3EB4B8",
                    }}
                    type="button"
                    className="btn  btn-lg btn-primary "
                    onClick={search}
                  >
                    Buscar
                  </button>
                </div>
              </div>
            </div>
             <table class="table table-bordered table-hover text-center" width="100%">
             {/* <table class="table table-responsive table-bordered table-hover text-center "> */}
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Barrio</th>
                  <th scope="col">Comuna</th>
                  <th scope="col">Corregimiento</th>
                  <th scope="col">Direccion</th>
                  <th scope="col">Celular</th>
                  <th scope="col">IMEI</th>
                  <th scope="col">Simcard</th>
                  <th scope="col">Latitud</th>
                  <th scope="col">Longitud</th>
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
                  <TableBody data={alarmas} />
                )}
              </tbody>
            </table>

            {/* <table bordered hover responsive size="lg">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Estado</th>
                  <th>Rol</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Tipo</th>
                  <th>Barrio</th>
                  <th>Comuna</th>
                  <th>Corregimiento</th>
                  <th>Direccion</th>
                  <th>Celular</th>
                  <th>IMEI</th>
                  <th>Simcard</th>
                  <th>Latitud</th>
                  <th>Longitud</th>
                  <th> Acciones </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Id</td>
                  <td>Estado</td>
                  <td>Rol</td>
                  <td>Nombre</td>
                  <td>Descripcion</td>
                  <td>Tipo</td>
                  <td>Barrio</td>
                  <td>Comuna</td>
                  <td>Corregimiento</td>
                  <td>Direccion</td>
                  <td>Celular</td>
                  <td>IMEI</td>
                  <td>Simcard</td>
                  <td>Latitud</td>
                  <td>Longitud</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faEraser}
                      style={{
                        marginRight: "10px",
                      }}
                      onClick={desactivarUser}
                    />
                    <FontAwesomeIcon
                      icon={faUserEdit}
                      style={{
                        marginRight: "10px",
                      }}
                      onClick={editarUser}
                    />
                    <FontAwesomeIcon
                      icon={faEye}
                      style={{}}
                      onClick={verUser}
                    />
                  </td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </>
  );
}
