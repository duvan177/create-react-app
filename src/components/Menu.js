export default function Menu() {
  return (
    <>
      <div style={{
        marginTop:67,
        "minWidth":"55px","padding":"0%","float":"left","position":"absolute","zIndex":"1000"}} className="row d-flex position-absolute justify-content-center align-self-center d-none d-sm-block ">
        <ul style={{borderBottomRightRadius:20}} className="list-group list-group-flush d-none d-none d-sm-block shadow-lg rounded">
          <li className="list-group-item list-group-item-action list-group-item-light">
            Inicio
          </li>
          <li className="list-group-item list-group-item-action list-group-item-light ">
          Filtro
          </li>
          <li className="list-group-item list-group-item-action list-group-item-light ">
          Capas
          </li>
          <li className="list-group-item list-group-item-action list-group-item-light">
          Información
          </li>
          <li style={{borderBottomRightRadius:20}} className="list-group-item list-group-item-action list-group-item-light ">
          Preguntas
          </li>
        </ul>
      </div>
    </>
  );
}
