import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// const TitleForm = theme.Title;
// const TitleFormH5 = theme.TitleSecond;
import { apiUser } from "../../../../../../routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function FormSensor() {       
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
    




    //   RSPUESTA DE SERVIDOR
    const response = await apiUser.SaveEntidades(data);
    if(response.status == 200 ){
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
          );
    }
    notify(response.data.message)
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
          <Link to="/auth/admin/dashboard/sensores/">
            <a href="#">Sensores</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Registro sensores 
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
          <h1>Registro de sensor</h1>
        </div>
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
              <h5>Datos sensor</h5>
              {/* <label htmlFor="" className="btn btn"></label> */}
            </div>
            <hr classname="mb-4" />
            <div
              style={{
                // height: "calc(100vh)",
                padding: "20px",
                border: "0px solid red",
              }}
              className="col-lg-6 col-md-12  justify-content-center align-items-center float-left"
            >       
           

              <div className="form-group">
                <label htmlFor="nombreSenor">Nombre sensor:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="nombre sensor"
                  id="nombreSenor"
                  maxLength="45"
                  name="nombreSenor"
                  required
                  defaultValue={user.nombreSenor}
                />
              </div>
              <div className="form-group">
                <label htmlFor="codigoEntidad">Codigo entidad:</label>
                <select
                  className="form-control"
                  id="codigoEntidad"
                  name="codigoEntidad"
                  required
                  defaultValue={user.codigoEntidad}
                >
                  <option value="">Seleccione</option>
                  <option value="1">EMCALI</option>
                  <option value="2">CVC</option>
                  <option value="3">IDEAM</option>
                  <option value="4">DAGMA</option>
                  <option value="5">OSSO UNIVALLE</option>
                  <option value="6">CENICAÑA</option>
                </select>
              </div>
             
             
            </div>
            <div
              style={{
                // height: "calc(100vh)",
                padding: "20px",
                border: "0px solid red",
              }}
              className="col-lg-6 col-md-12  justify-content-center align-items-center float-left"
            >       
            <div className="form-group">
                <label htmlFor="codigoEstacion">Codigo estacion:</label>
                <select
                  className="form-control"
                  id="codigoEstacion"
                  name="codigoEstacion"
                  required
                  defaultValue={user.codigoEstacion}
                >
                  <option value="">Seleccione</option>
                  <option value="1">codestacion1</option>
                </select>
              </div>
              <div className="col-md-12">
              <div className="row">
              <div className="col-md-6"
              >

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
            
            <div className="col-sm-12 mt-5 row justify-content-center align-items-center">
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
               <button style={{
                    width:350,
                    backgroundColor:"#3EB4B8",
                    borderColor:"#3EB4B8",
                    alignContent: "center"
                }} type="submit" className="btn  btn-lg btn-primary ">
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
