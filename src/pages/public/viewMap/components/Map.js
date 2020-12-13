import React, { Fragment , useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  WMSTileLayer
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { FeatureLayer } from "react-esri-leaflet";
import socketIOClient from "socket.io-client";
// const Capa = new L.tileLayer.wms(
//   "http://idesc.cali.gov.co:8081/geoserver/wms?",
//   {
//     layers: "idesc:mc_barrios",
//     attribution: "Barrios Cali",
//     format: "image/png",
//     transparent: true,
//   }
// );



const customMarker = new L.icon({
  iconUrl: "img/icons/alarma.png",
  iconSize: [40, 40],
  iconAnchor: [26, 72],
});

const MyPopupMarker = ({ content, position }) => (
  <Marker position={position} icon={customMarker}>
    <Popup onOpen={(hola = content) => console.log(hola)}>
      <PopTest texto={content} />
    </Popup>
  </Marker>
);

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ));
  return <Fragment>{items}</Fragment>;
};

const PopTest = ({ texto }) => (
  <>
    <h3>{texto}</h3>
  </>
);

export default function Map() {

    const props = {
        token: "public",
        version: "1.3",
        format: "image/png",
        transparent: true,
        tiles: true,
        uppercase: true,
        layers: "background,named_cyclones,named_cyclones_tracks,foreground",
        foo: [123, 5566]
      };
  
    
  const position = [3.42158, -76.5205];
  const markers = [
    {
      key: "marker1",
      position: [3.37250708420043, -76.54526547688752],
      content: "My first popup",
    },
    {
      key: "marker2",
      position: [3.387150821933861, -76.51208244590397],
      content: "My second popup",
    },
    {
      key: "marker3",
      position: [3.415023542985143, -76.560724407271806],
      content: "My third popup",
    },
  ];

  useEffect(() => {
    const socket = socketIOClient('http://localhost:5000');
    socket.on("FromAPI", data => {
      // setResponse(data);
      console.log(data)
    });
    socket.on("sesion", data => {
      // setResponse(data);
      console.log(data)
    });
  }, []);

  return (
    <MapContainer id="mapId" center={position} zoom={13} scrollWheelZoom={true}>
      <LayersControl  position="bottomleft" hideSingleBase="true">
        <LayersControl.Overlay  name="OpenStreetMap.Mapnik">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="OpenStreetMap.BlackAndWhite">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
          />
        </LayersControl.Overlay >
        <FeatureLayer url={'https://www.geo.cvc.gov.co/arcgis/rest/services/Cartografia_Base/division_politica/MapServer'}  />
       
       
        <LayersControl.Overlay name="OpenStreetMap.rios" checked>
        <FeatureLayer checked url="https://www.geo.cvc.gov.co/arcgis/rest/services/AGUA/Red_Hidrica/MapServer/0">

        </FeatureLayer>
     </LayersControl.Overlay>
        
     <LayersControl.Overlay name="OpenStreetMap. satelite">

<TileLayer
   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
 />
</LayersControl.Overlay>
     
        <LayersControl.Overlay name="OpenStreetMap.otro">
        <WMSTileLayer
                checked
                format= "image/png"
                transparent="true"
                layers={'idesc:mc_barrios'}
                attribution='&copy; <a href="https://pnoa.ign.es/">IGN</a>'
                url="http://idesc.cali.gov.co:8081/geoserver/wms?"
              />
              </LayersControl.Overlay>
     
      </LayersControl>
  
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyMarkersList markers={markers} />
    </MapContainer>
  );
}
