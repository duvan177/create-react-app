import styled from "styled-components";
// import { theme } from "../../../../utils";
// import { useRouter } from 'next/router'
import { useRef, useState } from "react";
import { apiUser } from '../../../../routes';
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
// const TitleForm = theme.Title;

export default function FormLogin(props) {
  // console.log(props);
  const { history } = props;
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = (message) => toast(message);

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
      try {
        const response = await apiUser.Login({ email: email, password: password });
        setLoading(false);
        if(response.status != 200) {
          notify(response.data.message)
          return
        }
        localStorage.setItem('userData' , JSON.stringify(response.data))
        localStorage.setItem('token' , JSON.stringify(response.data.token))
        history.push('/auth/admin/dashboard')
      } catch (error) {
        setLoading(false);
        notify('error en conexion a servidor')
          console.log(error);
      } 
  };
  return (
    <div className="card w-75 shadow-sm mt-5 bg-white rounded-lg border-0">
      <ToastContainer />
      <div className="card-body justify-content-center mt-5">
        <form ref={form} onSubmit={login} className="">
          {/* <TitleForm className="mb-4" primary>
            Identificate
          </TitleForm> */}
          <div className="col-sm-12 row justify-content-center align-items-center">
            <div className="col-md-9 mb-5">
              <input
                required
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="correo"
                className="form-control"
                name="email"
                id="inputEmail3"
              />
            </div>
            <div className="col-sm-9">
              <input
                required
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="contraseña"
                className="form-control"
                id="inputEmail3"
                name="password"
              />
            </div>
            <div className="col-sm-12 mt-5 row justify-content-center align-items-center">
              <div className="col-md-12 row justify-content-center align-content-center ">
                <button
                  disabled={loading}
                  style={{
                    width: 350,
                    backgroundColor: "#3EB4B8",
                    borderColor: "#3EB4B8",
                  }}
                  type="submit"
                  className="btn btn-lg btn-primary justify-content-center align-content-center "
                >
                  {!loading ? (
                    "Ingresar"
                  ) : (
                    <ReactLoading
                      className="d-inline-block justify-content-center align-items-center "
                      width={30}
                      height={30}
                      type={"bars"}
                      color="#ffffff"
                    />
                  )}
                </button>
              </div>
              <div className="col-md-12 text-center">
                <Link to="/">
                <a
                  style={{
                    color: "#F24744",
                  }}
                  className="btn-lg font-weight-bold "
                  href="#"
                  >
             
                  Regresar
                </a>
                  </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
