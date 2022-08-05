import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { icon, map } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import { GestureHandling } from "leaflet-gesture-handling";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import { JoinCleanModal, JoinCleanForm } from "../Forms/JoinClean";

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}
//stops map from scrolling while hovering over it (user must press ctrl to enable zoom scroll))
L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);

const ICON = icon({
  iconUrl: "/litter.svg",
  iconSize: [38, 38],
});

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 51.505, lng: -0.09 });
  const [mapData, setMapData] = useState({
  cleanname: "Loading...",
  date: "Loading...",
  endtime: "Loading...",
  host: "Loading...",
  id: 1,
  latitude: 52.817356506889425,
  location: "Loading...",
  longitude: 0.8199988022288017,
  notes: "Loading...",
  starttime: "Loading..."});

  const center = [geoData.lat, geoData.lng];

  const Search = (props) => {
    const map = useMap(); // access to leaflet map
    const { provider } = props;

    useEffect(() => {
      const searchControl = new GeoSearchControl({
        provider,
      });

      map.addControl(searchControl); // this is how you add a control in vanilla leaflet
      return () => map.removeControl(searchControl);
    }, [props]);

    return null; // don't want anything to show up from this comp
  };

  //map fetching
  const url = "http://localhost:5000/startclean";

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      console.log("original data", data);
      setMapData(data.payload[1]);
    }
    fetchData();
  }, []);

  console.log("new map data", mapData);

  return (
    <MapContainer
      zoomControl={false}
      center={center}
      zoom={12}
      gestureHandling={true}
      style={{ height: "60vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Search provider={new OpenStreetMapProvider()} />

      {/* this is for the standard marker on refresh that we dont want */}
      {/* {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )} */}
      <ChangeView coords={center} />
      <Marker icon={ICON} position={[Number(mapData.latitude), Number(mapData.longitude)]}>
        <Popup>
          <h3 className="text-xs sm:text-sm font-bold underline">
            {mapData.cleanname}
          </h3>

          <span className="text-[9px] sm:text-xs font-bold">Location: </span>
          <span className="text-[9px] sm:text-xs"> {mapData.location}</span>
          <br />

          <span className="text-[9px] sm:text-xs font-bold">Date: </span>
          <span className="text-[9px] sm:text-xs"> {mapData.date}</span>
          <br />

          <span className="text-[9px] sm:text-xs font-bold">Time: </span>
          <span className="text-[9px] sm:text-xs">
            {" "}
            {mapData.starttime} - {mapData.endtime}
          </span>
          <br />

          <span className="text-[9px] sm:text-xs font-bold">Host: </span>
          <span className="text-[9px] sm:text-xs">{mapData.host}</span>

          <br />
          <span className="text-[9px] sm:text-xs font-bold">Notes: </span>
          <span className="text-[9px] sm:text-xs">{mapData.notes}</span>
          <br />
          <JoinCleanModal />
        </Popup>
      </Marker>
    </MapContainer>
  );
}
