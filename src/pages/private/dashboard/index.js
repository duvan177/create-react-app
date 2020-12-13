import React from 'react'

import { SimpleChart, PieChar } from "./components";
import {Link} from "react-router-dom";
export default function dashboard () {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item active" aria-current="page">
            SACTIC
          </li>
        </ol>
      </nav>
      <nav aria-label="breadcrumb mt-0">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">
              <a href="#">Inicio</a>
            </Link>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Admin</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Data
          </li>
        </ol>
      </nav>
      {/* <NavDinamic /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 h-50">
            <ul className="list-group list-group-flush  w-100">
              <Link to="/auth/admin/dashboard/usuarios">
                <li className="list-group-item list-group-item-action list-group-item-light">
                  <a href="#"><label htmlFor="">Gestionar usuarios</label></a>
                </li>
              </Link>
              <Link to="/auth/admin/dashboard/alarmas">
                <li className="list-group-item list-group-item-action list-group-item-light">
                  <a href="#"><label htmlFor="">Gestionar Alarmas</label></a>
                </li>
              </Link>
              <Link to="/auth/admin/dashboard/entidades">
                <li className="list-group-item list-group-item-action list-group-item-light">
                  <a href="#"><label htmlFor="">Gestionar Entidades</label></a>
                </li>
              </Link>
              <Link to="/auth/admin/dashboard/sensores">
                <li className="list-group-item list-group-item-action list-group-item-light">
                  <a href="#"><label htmlFor="">Gestionar sensores</label></a>
                </li>
              </Link>
               <Link to="/auth/admin/dashboard/estaciones">
                <li className="list-group-item list-group-item-action list-group-item-light">
                  <a href="#"><label htmlFor="">Gestionar estaciones</label></a>
                </li>
              </Link>
            </ul>
          </div>

          <div className="col-md-10  h-50">
            <div className="row">
              <div className="col-md-6">
              <SimpleChart/>
                {/* <DataInfo /> */}
              </div>
              <div className="col-md-6">
                  <PieChar/>
                {/* <PieData /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
