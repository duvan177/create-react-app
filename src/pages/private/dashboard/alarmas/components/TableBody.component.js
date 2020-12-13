import React from "react";
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEraser,faUserEdit } from "@fortawesome/free-solid-svg-icons";

export default function TableBody({data}) {
  console.log(data)

  const RenderItem = ({ key, obj }) => (
    <tr>
      <th scope="row">{obj.ID_ALARMA}</th>
      <td>{obj.NOMBRE}</td>
      <td>{obj.DESCRIPCION}</td>
      <td>{obj.TIPO}</td>
      <td>{obj.ID_BARRIO}</td>
      <td>{obj.ID_COMUNA}</td>
      <td>{obj.ID_CORREGIMIENTO}</td>
      <td>{obj.DIRECCION}</td>
      <td>{obj.CELULAR}</td>
      <td>{obj.IMEI}</td>
      <td>{obj.NUM_SIMCARD}</td>
      <td>{obj.LATITUD}</td>
      <td>{obj.LONGITUD}</td>
      {/* <td>{!obj.DESCRIPCION_ENTIDAD? "Sin datos" : obj.DESCRIPCION_ENTIDAD}</td>
      <td>{!obj.EMAIL ? "Sin datos" : obj.EMAIL}</td> */}
      <td>
        <Link to={`/auth/admin/dashboard/alarmas/${obj.ID_ALARMA}`}>
        <button className="btn btn-info"
           style={{
            marginLeft: "10px"
          }}
          >
            <FontAwesomeIcon icon={faEye}/> </button>
        </Link>
          <button className="btn btn-warning"
          style={{
            marginLeft: "10px"
          }}
          >
          <FontAwesomeIcon icon={faUserEdit} /></button>
          <button className="btn btn-danger"
          style={{
            marginLeft: "10px"
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
