import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";
import { GestureHandling } from "leaflet-gesture-handling";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";

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

  const center = [geoData.lat, geoData.lng];

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(false);
    const [position, setPosition] = useState([
      52.817356506889425, 0.8199988022288017,
    ]);
    console.log(position);
    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
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
        position={position}
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
      gestureHandling={true}
      style={{ height: "70vh" }}
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
      <Marker icon={ICON} position={[50.764687233616314, 0.282817434969637]}>
        <Popup>
          <h3 className="text-base font-bold underline">
            Eastbourne Pier Cleanup
          </h3>

          <span className="text-sm font-bold">Location: </span>
          <span className="text-xs"> Eastbourne Pier</span>
          <br />

          <span className="text-sm font-bold">Date: </span>
          <span className="text-xs"> 22.08.22</span>
          <br />

          <span className="text-sm font-bold">Time: </span>
          <span className="text-xs"> 09:00 - 12:00</span>
          <br />

          <span className="text-sm font-bold">Host: </span>
          <span className="text-xs"> Blake Lawrence</span>

          <br />
          <span className="text-sm font-bold">Notes: </span>
          <span className="text-xs">
            Easy walk, no hills, will be collecting on sand and pavement
          </span>
          <br />
          <button className="p-2 border rounded bg-[#004F54] p-2 border rounded bg-[#004F54] text-white mt-4">
            Join
          </button>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
