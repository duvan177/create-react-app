import React, { useRef, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { apiEntidad } from "../../../../../routes";
import TableBody from "./TableBody.component";

//componentes tatable para gestion de las grillas
import { HeadComponent, SearchComponent } from '../../components/DataTable/index';
// const DATA = [
//   {
//     ID_ENTIDAD: 1,
//     NOMBRE_CORTO: "EMCALI",
//     NOMBRE_ENTIDAD: " EMPRESAS MUNICIPALES DE CALI E.I.C.E. E.S.P.",
//     DESCRIPCION_ENTIDAD:
//       "EMCALI presta sus servicios de electricidad a los municipios de Cali, Yumbo y Puerto Tejada, y de acueducto y alcantarillado en el casco urbano de Cali y Yumbo.",
//     EMAIL: null,
//   },
//   {
//     ID_ENTIDAD: 2,
//     NOMBRE_CORTO: "CVC",
//     NOMBRE_ENTIDAD: "Corporación Autonoma Regional del Valle del Cauca",
//     DESCRIPCION_ENTIDAD: null,
//     EMAIL: null,
//   },
//   {
//     ID_ENTIDAD: 3,
//     NOMBRE_CORTO: "IDEAM",
//     NOMBRE_ENTIDAD:
//       "Instituto de Hidrología, Meteorología y Estudios Ambientales",
//     DESCRIPCION_ENTIDAD: null,
//     EMAIL: null,
//   },
//   {
//     ID_ENTIDAD: 4,
//     NOMBRE_CORTO: "DAGMA",
//     NOMBRE_ENTIDAD: "Departamento Administrativo de Gestión del Medio Ambiente",
//     DESCRIPCION_ENTIDAD: null,
//     EMAIL: null,
//   },
//   {
//     ID_ENTIDAD: 5,
//     NOMBRE_CORTO: "OSSO UNIVALLE",
//     NOMBRE_ENTIDAD:
//       "Observatorio Sismológico y Geofísico del Suroccidente Colombiano",
//     DESCRIPCION_ENTIDAD: null,
//     EMAIL: null,
//   },
//   {
//     ID_ENTIDAD: 6,
//     NOMBRE_CORTO: "CENICAÑA",
//     NOMBRE_ENTIDAD: "Centro de investigacion de la caña de azucar de Colombia",
//     DESCRIPCION_ENTIDAD: null,
//     EMAIL: null,
//   },
// ];

export default function DashboardEntidad() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const form = useRef(null);
  const notify = (message) => toast(message);
  const notifyError = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);


  //Hooks para datatable
  const [search, setSearch] = useState("");

  const [entidades, setEntidades] = useState([]);
  // console.log("primero")
  // console.log(entidades)
/*
  function search() {
    // const data = new FormData(form.current);
    const searchUser = "";
    if (searchUser.value !== "") {
      alert(searchUser.value);

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
    } else {
      alert("vacio");
    }

    alert(searchUser.value);
  }*/

  const GetEntidades = async () => {
     const response = await  apiEntidad.ReadEntidades();

    // setTimeout(() => {
      // console.log(response.data)
      setEntidades(response.data);
      setLoading(false);
    // }, 5000);
  };

  useEffect(async () => {
    await GetEntidades();
  }, []);

  function desactivarUser() {
    alert("desactivarUser");
  }

  function editarUser(id) {
    // e.preventDefault();
    // setLoading(true);
    alert("editarUser" + id);
  }

  function verUser() {
    // e.preventDefault();
    // setLoading(true);
    // alert("verUser")
  }
  //Fncion que filtra por los criterios del dato
  const searchDataTable = useMemo(() => {
    let entidadesSearching = entidades;
    //console.log('xxxxxxxxxxxxx '.entidadesSearching)
        if (search) {
            entidadesSearching = entidadesSearching.filter( 
                MiEntidad =>                     
                    //MiEntidad.NOMBRE_CORTO != null ? MiEntidad.NOMBRE_CORTO.toLowerCase().includes(search.toLowerCase()) : ''                  ||
                    //MiEntidad.NOMBRE_ENTIDAD != null ? MiEntidad.NOMBRE_ENTIDAD.toLowerCase().includes(search.toLowerCase()) :  ''             ||
                    //MiEntidad.DESCRIPCION_ENTIDAD != null ? MiEntidad.DESCRIPCION_ENTIDAD.toLowerCase().includes(search.toLowerCase()) : ''  ||
                    //MiEntidad.EMAIL != null ? MiEntidad.EMAIL.toLowerCase().includes(search.toLowerCase())  :  ''     
                    MiEntidad.NOMBRE_CORTO.toLowerCase().includes(search.toLowerCase())        ||
                    MiEntidad.NOMBRE_ENTIDAD.toLowerCase().includes(search.toLowerCase())      ||
                    MiEntidad.DESCRIPCION_ENTIDAD.toLowerCase().includes(search.toLowerCase()) ||
                    MiEntidad.EMAIL.toLowerCase().includes(search.toLowerCase())       
            );
        }

        //Current Page slice
        return entidadesSearching;
  }, [entidades, search]);

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
            Entidades
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
            <h1>Consulta de entidades</h1>
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
                <div className="col-md-8">
                  <Link to="/auth/admin/dashboard/entidades/registro">
                    <a href="#">
                      {" "}
                      <FontAwesomeIcon icon={faPlus} /> Nuevo
                    </a>
                  </Link>
                </div>
         
                <div className="col-md-4 d-flex flex-row-reverse">
                    <SearchComponent 
                      onSearch={value => {setSearch(value);}}
                      nombreCampo='Rango de Busqueda'
                    />
                </div>
                  
                
          
              </div>
            </div>

            <table class="table table-bordered table-hover text-center ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre corto</th>
                  <th scope="col">Nombre entidad</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Email</th>
                  <th scope="col">opciones</th>
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
                  //<TableBody data={entidades} />
                  <TableBody data={searchDataTable} />
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
