import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import { GestureHandling } from "leaflet-gesture-handling";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import { MapContext } from "../../context/MapContext";

export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords);
  return null;
}

export default function StartCleanMap() {
  const [geoData, setGeoData] = useState({ lat: 51.505, lng: -0.09 });
  const { setCoords, coords } = useContext(MapContext);
  console.log("co-ords from startMapClean component:", coords);

  const center = [coords[0], coords[1]];

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(true);

    const markerRef = useRef(null);
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
