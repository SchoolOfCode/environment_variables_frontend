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
  map.setView(coords);
  return null;
}
//stops map from scrolling while hovering over it (user must press ctrl to enable zoom scroll))
L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);

// custom map marker
const ICON = icon({
  iconUrl: "/litter.svg",
  iconSize: [38, 38],
});

// default start location of map
export default function Map() {
  const [geoData, setGeoData] = useState({
    lat: 51.50602246978329,
    lng: -0.10508367551547762,
  });

  // where map centers for the start
  const center = [geoData.lat, geoData.lng];

  // state for our backends Map marker and popup data
  const [mapData, setMapData] = useState([
    {
      cleanname: "Loading...",
      date: "Loading...",
      endtime: "Loading...",
      host: "Loading...",
      id: 1,
      latitude: 52.817356506889425,
      location: "Loading...",
      longitude: 0.8199988022288017,
      notes: "Loading...",
      starttime: "Loading...",
    },
  ]);

  // our maps search bar
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

    return null;
  };

  //Fetch request for Map markers/popup info
  const url = process.env.NEXT_PUBLIC_DATABASE_URL || "http://localhost:5000";

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${url}/startclean`);
      const data = await response.json();
      /* MAP COORDS CONSOLE - DELETE AFTER BUILD */
      // console.log("original data", data);
      setMapData(data.payload);
    }
    fetchData();
  }, []);

  /* MAP COORDS CONSOLE - DELETE AFTER BUILD */
  // console.log("new map data", mapData);

  // This is the Mian map render
  return (
    <MapContainer
      zoomControl={false}
      center={center}
      zoom={9}
      gestureHandling={true}
      style={{ height: "70vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Search provider={new OpenStreetMapProvider()} />
      <ChangeView coords={center} />

      {/* data from backend being mapped over and rendered into individual map markers on the map */}
      {mapData.map((data) => {
        return (
          <Marker
            key={data.id}
            icon={ICON}
            position={[Number(data.latitude), Number(data.longitude)]}
          >
            <Popup>
              <h3 className="text-xs sm:text-sm font-bold underline text-[#004F54]">
                {data.cleanname}
              </h3>

              <span className="text-[9px] sm:text-xs font-bold text-[#004F54]">
                Location:{" "}
              </span>
              <span className="text-[9px] sm:text-xs text-[#004F54]">
                {" "}
                {data.location}
              </span>
              <br />

              <span className="text-[9px] sm:text-xs font-bold text-[#004F54]">
                Date:{" "}
              </span>
              <span className="text-[9px] sm:text-xs text-[#004F54]">
                {" "}
                {data.date}
              </span>
              <br />

              <span className="text-[9px] sm:text-xs font-bold text-[#004F54]">
                Time:{" "}
              </span>
              <span className="text-[9px] sm:text-xs text-[#004F54]">
                {" "}
                {data.starttime} - {data.endtime}
              </span>
              <br />

              <span className="text-[9px] sm:text-xs font-bold text-[#004F54]">
                Host:{" "}
              </span>
              <span className="text-[9px] sm:text-xs text-[#004F54]">
                {data.host}
              </span>

              <br />
              <span className="text-[9px] sm:text-xs font-bold text-[#004F54]">
                Notes:{" "}
              </span>
              <span className="text-[9px] sm:text-xs text-[#004F54]">
                {data.notes}
              </span>
              <br />
              <JoinCleanModal />
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
