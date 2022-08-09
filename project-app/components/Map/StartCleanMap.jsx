//Import packages
import {
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";

//Import Leaflet packages
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
// import { GestureHandling } from "leaflet-gesture-handling"; -NOT USED?

//Import context
import { MapContext } from "../../context/MapContext";

//Define Functions
export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords);
  return null;
}

//Component
export default function StartCleanMap() {
  //Defining state and context
  const [geoData, setGeoData] = useState({ lat: 51.505, lng: -0.09 });
  const { setCoords, coords } = useContext(MapContext);
  console.log("co-ords from startMapClean component:", coords);

  //Initialising other constants
  const center = [coords[0], coords[1]];

  //Defining functions
  function DraggableMarker() {
    //Function-scoped state
    const [draggable, setDraggable] = useState(true);

    //Function-scoped constants
    const markerRef = useRef(null);

    //Function-scoped functions
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            console.log("MarkerGetLatLng:", marker.getLatLng());
            setCoords([marker.getLatLng().lat, marker.getLatLng().lng]);
          }
        },
      }),
      []
    );

    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d);
    }, []);

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={coords}
        ref={markerRef}
      ></Marker>
    );
  }

  //Returning the map
  return (
    <MapContainer
      center={center}
      zoom={12}
      zoomControl={false}
      style={{ height: "50vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeView coords={center} />
      <DraggableMarker />
    </MapContainer>
  );
}
