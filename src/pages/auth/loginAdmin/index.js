import React from "react";
import { FormLoginComponent, ImageLogin } from "./components";
function index(props) {
//    console.log('index' , props)
   const { history } = props;
    return (
     
            <div className="container-fluid">
                <div className="row h-100 ">
                    <div
                        style={{
                            height: "calc(100vh)"
                        }}
                        className="col-md-7 d-flex justify-content-center align-items-end"
                    >
                        <ImageLogin />
                    </div>
                    <div
                        style={{
                            height: "calc(100vh)"
                        }}
                        className="col-md-5 row justify-content-center align-items-center"
                    >
                        <FormLoginComponent history={history} />
                        <div className="col-md-12 row justify-content-center align-items-center">

                        <img src='img/alcaldia/ungrd.png' class="img-fluid " alt="" 
                        width="60"
                        />
                        <img
                          width="140"
                        src='img/alcaldia/puro orazon.png' class="img-fluid" alt=""/>
                        <img
                        width="80"
                        src='img/alcaldia/logo alcaldia santiago.png' class="img-fluid" alt=""/>
                    </div>
                        </div>
                </div>
            </div>
   
    );
}



  export default index



