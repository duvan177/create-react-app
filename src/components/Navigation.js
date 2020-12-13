import {useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
 const Navigation = (props) => {
  //  console.log('navegacion',props)
   const { history } = props;
  const [userData, setUserData] = useState(null)
  const [user, setUser] = useState(null)
  // useEffect(() => {
  //     var data = localStorage.getItem('userData');
  //   setUser((JSON.parse(data)))
  //   data ? setUserData ('/private/dashboardAdmin') : setUserData('/auth/userLoginAdmin');
  // }, [])
  const goLogin = () => history.push('/auth/admin/login');
  return(

  <div style={
    {
      marginRight:0,marginLeft:0,
       height: "2.8vw", position: "absolute", width: "100%", zIndex: 1000 }
  } className="row justify-content-between">
    <nav className="navbar navbar-expand-lg navbar-light align-items-center flex-row col-md-3 bg-light shadow-lg" style={{
      borderBottomRightRadius: 20
    }}>
      <a className="navbar-brand" href="#">
      <img
          src="/img/geolocalizacion.svg"
          alt="Picture of the author"
          width={30}
          height={30}
        />
        <span style={{fontSize:24}}>  SAT-SGRED-CALI </span>
        </a>
    </nav>

    <nav className="navbar navbar-expand-lg navbar-light align-items-center flex-row col-md-4 bg-light d-none d-lg-block shadow-lg" style={{
      borderBottomLeftRadius: 20
    }}>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active  ">
          {/* <Link  href={ `${userData}`} >  */}
          <a onClick={goLogin} className="d-flex justify-content-center align-items-center" href='#'>

      
              {/* <img
                src="/img/usuario.png"
                alt="Picture of the author"
                width={30}
                height={30}
              /> */}
             {/* <h5 className="mr-4">{user && user.data[0].PRIMER_NOMBRE}</h5> */}
        </a>
      
            {/* </Link> */}
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          {/* <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="palabra clave..."
            aria-label="Search"
          /> */}
            <h5 className="mr-4">{user && user.data[0].PRIMER_NOMBRE}</h5>
             <img
                src="/img/usuario.png"
                alt="Picture of the author"
                width={30}
                height={30}
              />
             <h5 className="mr-4">{user && user.data[0].PRIMER_NOMBRE}</h5>
          <Link to="/auth/admin/login">
          <button
            className="btn btn-success my-2 my-sm-0"
            type="submit"
            >
            Iniciar Sesión
            </button>
          </Link>
        </div>
      </div>
    </nav>
  </div>

)};

export default Navigation;
