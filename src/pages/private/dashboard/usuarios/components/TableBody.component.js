import React from "react";
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEraser,faUserEdit } from "@fortawesome/free-solid-svg-icons";

export default function TableBody({data}) {
  console.log(data)

  const RenderItem = ({ key, obj }) => (
    <tr>
      <th scope="row">{obj.ID_USUARIO}</th>
      <td>{obj.ID_ESTADO}</td>
      <td>{obj.ID_ROL}</td>
      <td>{obj.EMAIL}</td>
      <td>{obj.PRIMER_NOMBRE}</td>
      <td>{obj.SEGUNDO_NOMBRE}</td>
      <td>{obj.PRIMER_APELLIDO}</td>
      <td>{obj.SEGUNDO_APELLIDO}</td>
      <td>{obj.TIPO_DOCUMENTO}</td>
      <td>{obj.NUMERO_DOCUMENTO}</td>
      <td>{obj.SEXO}</td>
      <td>{obj.TELEFONO}</td>
      <td>{obj.CELULAR}</td>
      <td>{obj.DIRECCION}</td>
      <td>{obj.ID_BARRIO}</td>
      <td>{obj.ID_COMUNA}</td>
      <td>{obj.ID_CIUDAD}</td>
      <td>{obj.ID_DEPARTAMENTO}</td>
      <td>{obj.ID_NACIONALIDAD}</td>
      
      
      {/* <td>{!obj.DESCRIPCION_ENTIDAD? "Sin datos" : obj.DESCRIPCION_ENTIDAD}</td>
      <td>{!obj.EMAIL ? "Sin datos" : obj.EMAIL}</td> */}
      <td>
        <Link to={`/auth/admin/dashboard/usuarios/mostrar/${obj.ID_USUARIO}`}>
          <button className="btn btn-info"
           style={{
            marginTop: "10px"
          }}
          >
            <FontAwesomeIcon icon={faEye}/> </button>
        </Link>
          <button className="btn btn-warning"
          style={{
            marginTop: "10px"
          }}
          >
          <FontAwesomeIcon icon={faUserEdit} /></button>
          <button className="btn btn-danger"
          style={{
            marginTop: "10px"
          }}
          >
          <FontAwesomeIcon icon={faEraser}/></button>

      </td>
    </tr>
  );


  
  return (
    <>
      {data.map((item, index) => (
        <RenderItem key={index + 1} obj={item} />
      ))}
    </>
  );
}
