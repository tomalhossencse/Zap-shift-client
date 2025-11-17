import React, { useRef } from "react";
import Container from "../../Utility/Container";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.356];
  const serviceCenter = useLoaderData();
  // console.log(serviceCenter);
  const mapRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenter.find((c) =>
      c.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const cord = [district.latitude, district.longitude];
      // console.log(cord);
      // go to the location
      mapRef.current.flyTo(cord, 14);
    }
  };
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="pt-24">
        <Container className="pt-20 bg-base-100 p-10 space-y-8 rounded-2xl ">
          <h1 className="text-3xl font-extrabold text-secondary">
            We are available in 64 districts
          </h1>
          <form onSubmit={handleSearch} className="join">
            <input
              className="input join-item"
              placeholder="search area here"
              name="location"
            />
            <button
              type="submit"
              className="btn bg-primary join-item rounded-r-full"
            >
              Search
            </button>
          </form>
          <div>
            <MapContainer
              className="h-[600px]"
              center={position}
              zoom={7}
              scrollWheelZoom={false}
              ref={mapRef}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {serviceCenter.map((center, index) => (
                <Marker
                  key={index}
                  position={[center.latitude, center.longitude]}
                >
                  <Popup>
                    <strong> {center.district}</strong>
                    <br /> service area : {center.covered_area.join(", ")}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Coverage;
