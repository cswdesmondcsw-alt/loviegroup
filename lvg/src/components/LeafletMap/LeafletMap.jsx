import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import PropTypes from "prop-types";

// Custom marker icon (same as your GoogleMap version)
const customIcon = L.icon({
  iconUrl: "/assets/img/icon-img/2.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const LeafletMap = ({ lat, lng, zoom }) => {
  return (
    <div style={{ height: "390px", width: "100%", borderRadius: "10px", overflow: "hidden" }}>
      <MapContainer
        center={[lat, lng]}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        {/* This is OpenStreetMap — FREE FOREVER */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© OpenStreetMap contributors'
        />

        {/* Marker */}
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>My Marker</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

LeafletMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number,
};

LeafletMap.defaultProps = {
  lat: -3.745,
  lng: -38.523,
  zoom: 12,
};

export default LeafletMap;
