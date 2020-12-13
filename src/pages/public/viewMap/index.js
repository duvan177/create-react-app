import React from "react";
import Map from "./components/Map";
import { ContentInfoPoint, Navigation, Menu } from "../../../components";
import "../../../style.css";
export default function index(props) {
  const { history } = props;
  console.log(history);
  const sendLogin = () => {
    history.push("/auth/admin/login");
  };

  return (
    <>
     <Navigation history={history} />
      <Menu/>
      <Map />
      <ContentInfoPoint />
    </>
  );
}
