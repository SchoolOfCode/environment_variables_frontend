import { createContext, useContext, useState, useEffect, useMemo, useCallback, useRef } from "react";
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
  map.setView(coords, 12);
  return null;
}

export default function StartCleanMap() {
  const [geoData, setGeoData] = useState({ lat: 51.505, lng: -0.09 });
  const { setCoords, coords } = useContext(MapContext);

  L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);
  const center = [geoData.lat, geoData.lng];

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(false);
    //const [position, setPosition] = useState([51.51035091584348, -0.11112390032246118,]); - this was from the original map copy/paste

    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            console.log("MarkerGetLatLng:", marker.getLatLng())
            setCoords([marker.getLatLng().lat, marker.getLatLng().lng]);
            //setPosition([marker.getLatLng().lat, marker.getLatLng().lng]); - this was from the original map copy/paste
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
      >
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? "Marker is now draggable"
              : "Click here to enable drag"}
          </span>
        </Popup>
      </Marker>
    );
  }
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

  return (
    <MapContainer
      center={center}
      zoom={12}
      zoomControl={false}
      gestureHandling={true}
      style={{ height: "50vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Search provider={new OpenStreetMapProvider()} />

      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )}
      <ChangeView coords={center} />
      <DraggableMarker />
    </MapContainer>
  );
}
