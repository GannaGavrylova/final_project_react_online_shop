import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MyLeafletMap() {
  const position = [52.512328, 13.403689];

  return (
    <MapContainer center={position} zoom={13} style={{ height: "350px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Магазин находится здесь!</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyLeafletMap;
