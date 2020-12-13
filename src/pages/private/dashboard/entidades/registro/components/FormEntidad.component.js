import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// const TitleForm = theme.Title;
// const TitleFormH5 = theme.TitleSecond;
import { apiEntidad } from "../../../../../../routes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function FormEntidad() {       
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
    
    let jsonObject = {};
    for (const [key, value]  of data) {
        jsonObject[key] = value;
        
        const valueKey = jsonObject[key]
        const valueName = key
        
        if(!jsonObject[key].length){
     
        //   // console.log(key +"-"+valueKey) 
         console.log(valueName +"-"+valueKey) 
        //  validate({valueName: "error"})

        }else{
          console.log(valueName +"-"+valueKey) 
          // console.log(valueName+"-envio data BACK")
        }
    }




      // RSPUESTA DE SERVIDOR
    const response = await apiEntidad.SaveEntidades(data);
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
            <Link href="/">
              <a to="#">Inicio</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
          <Link to="/auth/admin/dashboard/">
            <a to="#">Dashboard</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
          <Link to="/auth/admin/dashboard/entidades/">
            <a to="#">Entidades</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Registro entidades
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
          <h1>Registro de entidades</h1>
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
              <h5 primary>Datos entidad</h5>
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
                <label htmlFor="nombreCorto">Nombre corto:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="nombre corto"
                  id="nombreCorto"
                  maxLength="45"
                  name="nombreCorto"
                  required
                  defaultValue={user.nombreCorto}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nombreEntidad">Nombre entidad:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombe entidad"
                  id="nombreEntidad"
                  maxLength="45"
                  name="nombreEntidad"
                  required
                  defaultValue={user.nombreEntidad}
                />
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
                <label htmlFor="descripcionEntidad">Descripción entidad:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Descripción entidad"
                  id="descripcionEntidad"
                  maxLength="225"
                  name="descripcionEntidad"
                  required
                  defaultValue={user.descripcionEntidad}
                />
              </div>    
                <div className="form-group">
                <label htmlFor="correo">Correo:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo"
                  id="email"
                  maxLength="45"
                  name="email"
                  required
                  defaultValue={user.correo}
                />
           
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
