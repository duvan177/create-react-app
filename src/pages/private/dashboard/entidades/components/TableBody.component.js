import React from "react";
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faEraser,faUserEdit } from "@fortawesome/free-solid-svg-icons";

export default function TableBody({data}) {
  console.log(data)

  const RenderItem = ({ key, obj }) => (
    <tr>
      <th scope="row">{obj.ID_ENTIDAD}</th>
      <td>{obj.NOMBRE_CORTO}</td>
      <td>{obj.NOMBRE_ENTIDAD}</td>
      <td>{!obj.DESCRIPCION_ENTIDAD? "Sin datos" : obj.DESCRIPCION_ENTIDAD}</td>
      <td>{!obj.EMAIL ? "Sin datos" : obj.EMAIL}</td>
      <td>
        <div className="d-flex justify-content-center align-items-center  col-md-12">
  
   
    <button className="btn btn-info"
           style={{
            marginTop: "10px"
          }}
          >
            <FontAwesomeIcon icon={faEye}/> </button>
  
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
      
        <Link to={`/auth/admin/dashboard/entidades/${obj.ID_ENTIDAD}`}>
      
     
        </Link>
          </div>
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
