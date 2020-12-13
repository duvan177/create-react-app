import React, { useRef, useState} from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";
// const TitleForm = theme.Title;
// const TitleFormH5 = theme.TitleSecond;
import { apiUser } from "../../../../../../routes";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function FormUserAdmin() {       
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
 
    if(name == "password" ){
      setFormValues({formValues, [name]: value });
      setFormErrors(validate(formValues));
    }else  if (name =='confirm_password') {
      // if(confirm_password.value.length >= 8){
     
      //   if (contrasena.value !== confirm_password.value) {   
      //     notifyError('Las contraseñas no coincide')
      //   } else {  
      //     notifySuccess("Las contraseñas coinciden")
      //   }
  
      // }
    }
    
}

    
    const validate = (values) => {
      //alert(values)

      const error = {}
      // validacion contraseña
      if (values.password) {
        if (values.password.length >= 7 ) {
          error.color = "green";
          error.password = "Minimo 8 caracteres";
        } else if(values.password.length < 7 ) {  
          error.color = "red";
          error.password = "Minimo 8 caracteres";
          error.red = "Minimo 8 caracteres";
        }
      }

      // if(values.value == "error"){
      //   const falta = values.value
      //  error.falta = "oiga este tamben*"
      // }

     
      return error
     
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
     
        console.log(key +"-"+valueKey) 
        
        // console.log(valueName +"-"+valueKey) 
         validate({valueName: "error"})

        }else{
          //console.log(valueName+"-envio data BACK")
        }
    }
    

    // if (contrasena.value !== confirm_password.value) {   
       //RSPUESTA DE SERVIDOR
        const response = await apiUser.SaveUserForAdmin(data);
        if(response.status == 200 ){
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
              );
        }
        notify(response.data.message)
        setLoading(false);
      // console.log(response);
       //alert(response.data)
    // } else {  
    //   notifySuccess("Las contraseñas coinciden")
    // }



     

    

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
            Registro usuarios 
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
          <h1>Registro de usuario</h1>
          <label htmlFor="" className="btn btn"></label>
        </div>

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
              {/* <TitleFormH5 primary>Datos de personales </TitleFormH5> */}
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
                <label htmlFor="primerNombre">Primer nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Primer nombre"
                  id="primerNombre"
                  maxLength="45"
                  name="primerNombre"
                  required
                  defaultValue={user.primerNombre}
                />
                  <span className="error" style={{ color: "red" }}>{formErrors.primerNombre}</span>
              </div>
              <div className="form-group">
                <label htmlFor="segunoNombre">Segundo nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Segundo nombre"
                  id="segundoNombre"
                  maxLength="45"
                  name="segundoNombre"
                  required
                  defaultValue={user.segundoNombre}
                />
              </div>
              <div className="form-group">
                <label htmlFor="primerApellido">Primer apellido:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Primer apellido"
                  id="primerApellido"
                  maxLength="45"
                  name="primerApellido"
                  required
                  defaultValue={user.primerApellido}
                />
              </div>
              <div className="form-group">
                <label htmlFor="segunoApellido">Segundo apellido:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Segundo apellido"
                  id="segundoApellido"
                  maxLength="45"
                  name="segundoApellido"
                  required
                  defaultValue={user.segundoApellido}
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Teléfono"
                  id="telefono"
                  maxLength="45"
                  name="telefono"
                  required
                  defaultValue={user.telefono}
                />
              </div>
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
                <label htmlFor="documento">Tipo documento:</label>
                <select
                  className="form-control"
                  id="tipoDocumento"
                  name="tipoDocumento"
                  required
                  defaultValue={user.tipoDocumento}
                >
                  <option value="">Seleccione</option>
                  <option value="3">Cédula de Ciudadania</option>
                  <option value="4">NIT</option>
                  <option value="5">Cédula extranjeria</option>
                  <option value="6">Pasaporte</option>
                  <option value="7">Registro civil</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="numeroDocumento">Número de documento:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Número de documento"
                  id="numeroDocumento"
                  maxLength="12"
                  name="numeroDocumento"
                  required
                  defaultValue={user.numeroDocumento}
                />
              </div>
              <div className="form-group">
                <label htmlFor="sexo">Sexo:</label>
                <select 
                className="form-control" 
                id="sexo" 
                name="sexo"
                required
                >
                  <option value="">Seleccione</option>
                  <option value="1">Masculino</option>
                  <option value="2">Femenino</option>
                </select>
              </div>
             
          
              <div className="form-group">
                <label htmlFor="idNacionalidad">Nacionalidad:</label>
                <select
                  className="form-control"
                  id="idNacionalidad"
                  name="idNacionalidad"
                  required
                  defaultValue={user.nacionalidad}
                >
                  <option value="">Seleccione</option>
                  <option value="1">Colombia</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="idDepartamento">Departamento:</label>
                <select
                  className="form-control"
                  id="idDepartamento"
                  name="idDepartamento"
                  required
                  defaultValue={user.departamento}
                >
                  <option value="">Seleccione</option>
                  <option value="76">departamento1</option>
                </select>
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
                <label htmlFor="idCiudad">Ciudad:</label>
                <select
                  className="form-control"
                  id="idCiudad"
                  name="idCiudad"
                  required
                  defaultValue={user.ciudad}
                >
                  <option value="">Seleccione</option>
                  <option value="001">ciudad1</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Dirrección:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="direccion"
                  id="direccion"
                  maxLength="45"
                  name="direccion"
                  required
                  defaultValue={user.dirreccion}
                />
              </div>
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
            
            </div>
            <div
              style={{
                // padding: "20px",
                border: "px solid blue",
              }}
              className="col-md-12  d-flex justify-content-center align-items-center"
            >
              {/* <TitleFormH5 primary>Datos de autentificación </TitleFormH5> */}
              <label htmlFor="" className="btn btn"></label>
            </div>
            <hr classname="mb-4" />
            <div className="col-sm-12 mt-5 row justify-content-center align-items-center"
             style={{
              // padding: "20px",
              border: "0px solid blue",
            }}
            >
                <div className="col-md-12">
                {/* <hr classname="mb-4" /> */}
                <div className="row">
                <div className="col-md-6">
               
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
            
              <div className="form-group">
                <label htmlFor="contrasena">Contraseña</label>
                <input
                  type="password"
                  className="form-control" 
                  placeholder="contraseña"
                  id="contrasena"
                  minLength="8"
                  maxLength="45"
                  name="password"
                  required
                  defaultValue={user.contrasena}
                  onChange={handleChange}
                />
               
          
            <span className="error" style={{ color: formErrors.color }}>{formErrors.password}</span>
      
              </div>
        

           
              <div className="form-group">
                <label htmlFor="file">Foto perfil</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="fotoPerfil"
                  name="fotoPerfil"
                  required
                />
              </div>
                    </div>
                    <div className="col-lg-6 md-12">
                    <div className="form-group">
                <label htmlFor="rol">Rol:</label>
                <select
                  required
                  className="form-control"
                  id="rol"
                  name="rol"
                  required
                  defaultValue={user.rol}
                >
                  <option value="">Seleccione</option>
                  <option value="1">Rol administrador</option>
                  <option value="2">Rol ciudadano</option>
                  <option value="3">Rol sensor humano</option>
                </select>
              </div>
                    <div className="form-group">
                <label htmlFor="confir_password">Confirmar contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="contraseña"
                  minLength="8"
                  maxLength="45"
                  name="confirm_password"
                  id="confirm_password"
                  required
                  defaultValue={user.contrasena}
                  onChange={handleChange}
                  />
              <span className="error" style={{ color: formErrors.colorConfirm_password }}>{formErrors.confirm_password}</span>
              </div>
  
      
                  </div>
                </div>
                </div>
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
                    borderColor:"#3EB4B8"
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
