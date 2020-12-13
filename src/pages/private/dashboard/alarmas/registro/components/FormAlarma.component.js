import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// const TitleForm = theme.Title;
// const TitleFormH5 = theme.TitleSecond;
import { apiAlarmas } from "../../../../../../routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormAlarma() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const form = useRef(null);
  const notify = (message) => toast(message);
  const notifyError = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);

  console.log(user);

  const [formValues, setFormValues] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const value = "";
  const name = "";

  const handleChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, value } = e.target;
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(form.current);

    let jsonObject = {};
    for (const [key, value]  of data) {
        jsonObject[key] = value;
        
        const valueKey = jsonObject[key]
        const valueName = key
        
        if(!jsonObject[key].length){
     
        //   // console.log(key +"-"+valueKey) 
       console.log(valueName +"-"+valueKey) 
          // validate({valueName: "error"})

        }else{
          console.log(valueName +"-"+valueKey) 
          //console.log(valueName+"-envio data BACK")
        }
    }

    //RSPUESTA DE SERVIDOR
    const response = await apiAlarmas.SaveAlarmas(data);
    if (response.status == 200) {
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
    }
    notify(response.data.message);
    setLoading(false);
    console.log(response);
  };

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
          <li className="breadcrumb-item">
            <Link to="/auth/admin/dashboard/alarmas/">
              <a href="#">Alarmas</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Registro Alarmas
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
            <h1>Registro de Alarmas</h1>
          </div>
          {/* <label htmlFor="" className="btn btn"></label> */}
          <hr classname="mb-4" />

          <div
            style={{
              // height: "calc(100vh)",
              padding: "20px",
              border: "0px solid yellow",
            }}
            className="col-lg-12 col-sm-12  w-100 justify-content-center align-items-center float-left"
          >
            <form ref={form} onSubmit={submit}>
              <div
                style={{
                  // padding: "20px",
                  border: "0px solid blue",
                }}
                className="col-md-12  d-flex justify-content-center align-items-center"
              >
                <h5>Datos de alarmas </h5>
                {/* <label htmlFor="" className="btn btn"></label> */}
              </div>
              <hr classname="mb-4" />
              <div
                style={{
                  // height: "calc(100vh)",
                  padding: "20px",
                  border: "0px solid red",
                }}
                className="col-lg-4 col-md-12  justify-content-center align-items-center float-left"
              >
                <div className="form-group">
                  <label htmlFor="estado">Estado:</label>
                  <select
                    className="form-control"
                    id="idEstado"
                    name="idEstado"
                    required
                    defaultValue={user.idEstado}
                  >
                    <option value="">Seleccione</option>
                    <option value="11">Activo</option>
                    <option value="12">Inactivo</option>
                    <option value="13">Propuesto</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="nombre"
                    id="nombre"
                    maxLength="45"
                    name="nombre"
                    required
                    defaultValue={user.nombre}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="descripcion">Descripcion:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="descripcion"
                    id="descripcion"
                    maxLength="45"
                    name="descripcion"
                    required
                    defaultValue={user.descripcion}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tipo">Tipo:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="tipo"
                    id="tipo"
                    maxLength="45"
                    name="tipo"
                    required
                    defaultValue={user.tipo}
                  />
                </div>
              </div>
              <div
                style={{
                  // height: "calc(100vh)",
                  padding: "20px",
                  border: "0px solid red",
                }}
                className="col-lg-4 col-md-12  justify-content-center align-items-center float-left"
              >
                <div className="form-group">
                  <label htmlFor="comuna">Barrio:</label>
                  <select
                    className="form-control"
                    id="idBarrio"
                    name="idBarrio"
                    required
                    defaultValue={user.barrio}
                  >
                    <option value="">Seleccione</option>
                    <option value="0101">barrio 1</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="idComuna">Comuna:</label>
                  <select
                    className="form-control"
                    id="idComuna"
                    name="idComuna"
                    required
                    defaultValue={user.comuna}
                  >
                    <option value="">Seleccione</option>
                    <option value="1">Comuna 1</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="corregimiento">Corregimiento:</label>
                  <select
                    className="form-control"
                    id="idCorregimiento"
                    name="idCorregimiento"
                    required
                    defaultValue={user.idCorregimiento}
                  >
                    <option value="">Seleccione</option>
                    <option value="1">Corregimiento 1</option>
                    <option value="2">Corregimiento 2</option>
                    <option value="3">Corregimiento 3</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="direccion">Direccion:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="direccion"
                    id="direccion"
                    maxLength="45"
                    name="direccion"
                    required
                    defaultValue={user.direccion}
                  />
                </div>
              </div>
              <div
                style={{
                  // height: "calc(100vh)",
                  padding: "20px",
                  border: "0px solid red",
                }}
                className="col-lg-4 col-md-12  justify-content-center align-items-center float-left"
              >
                <div className="form-group">
                  <label htmlFor="celular">Celular:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Celular"
                    id="celular"
                    maxLength="45"
                    name="celular"
                    required
                    defaultValue={user.celular}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="imei">IMEI:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="imei"
                    id="imei"
                    maxLength="12"
                    name="imei"
                    required
                    defaultValue={user.numeroDocumento}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="numSimcard">Número SIM:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Número SIM"
                    id="numSimcard"
                    maxLength="45"
                    name="numSimcard"
                    required
                    defaultValue={user.numSimcard}
                  />
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="latitud">Latitud:</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="latitud"
                          id="latitud"
                          maxLength="45"
                          name="latitud"
                          required
                          defaultValue={user.latitud}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="longitud">Longitud:</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Longitud"
                          id="longitud"
                          maxLength="45"
                          name="longitud"
                          required
                          defaultValue={user.longitud}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-sm-12 mt-5 row justify-content-center align-items-center"
                style={{
                  // padding: "20px",
                  border: "0px solid blue",
                }}
              >
                {/* <button
                disabled={loading}
                style={{
                  width: 350,
                  backgroundColor: "#3EB4B8",
                  borderColor: "#3EB4B8",
                }}
                type="submit"
                className="btn  btn-lg btn-primary "
              >
                  {!loading ? (
                  "Enviar"
                ) : (
                  <ReactLoading
                    className="d-inline-block justify-content-center align-items-center "
                    width={30}
                    height={30}
                    type={"bars"}
                    color="#ffffff"
                  />
                )}
              </button> */}
                <button
                  style={{
                    width: 350,
                    backgroundColor: "#3EB4B8",
                    borderColor: "#3EB4B8",
                  }}
                  type="submit"
                  className="btn  btn-lg btn-primary "
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
