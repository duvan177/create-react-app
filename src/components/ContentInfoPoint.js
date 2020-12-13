import React from 'react'

export default function ContentInfoPoint() {
    return (
        <div
        style={{ position: "absolute" }}
        className="col-md-4 offset-md-8  d-none d-lg-block"
      >
        <div
          className="card pt-5 shadow-lg text-center"
          style={{ width: "100%", marginTop: 100, height: 200 }}
        >
          <div className="card-body">
            <h5 className="card-title">Informacion</h5>
          </div>
        </div>
        <div
          className="card text-center shadow-lg"
          style={{ width: "100%", height: 200 }}
        >
          <div className="card-body">
            <h5 className="card-title">Graficos</h5>
          </div>
        </div>
        <div
          className="card  shadow-lg text-center "
          style={{ width: "100%", height: 200 }}
        >
          <div className="card-body">
            <h5 className="card-title">Recomendaciones</h5>
          </div>
        </div>
      </div>
    )
}
