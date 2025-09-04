import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import { useState, useEffect } from 'react';


import customMarkerIconUrl from "/rendang.png";


const customMarkerIcon = new L.Icon({
  iconUrl: customMarkerIconUrl,
  iconSize: [60, 60],   // Ukuran ikon sedikit dikecilkan untuk mobile
  iconAnchor: [30, 60],   // Setengah lebar, tinggi penuh
  popupAnchor: [0, -60]
});

// Hook kustom untuk mendeteksi ukuran layar (opsional tapi sangat berguna)
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}

export default function Map() {
  const position = [-0.945567, 100.3641]; // Koordinat Rendang
  const [width] = useWindowSize(); // Ambil lebar layar saat ini

  // Tentukan level zoom berdasarkan lebar layar
  const getZoomLevel = () => {
    if (width < 768) { 
      return 4.5; 
    }
    return 5.5; 
  };

  return (
    // Gunakan class Tailwind untuk ukuran, bukan inline style
    <MapContainer
      center={[-2.5489, 118.0149]} // Tetap berpusat di Indonesia
      zoom={getZoomLevel()} // Gunakan zoom level yang dinamis
      scrollWheelZoom={true}
      className="h-screen w-full" // Cara standar Tailwind untuk full screen
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Marker position={position} icon={customMarkerIcon}>
        <Popup>
          <div className="text-center">
            {/* Ganti dengan gambar thumbnail yang relevan */}
            <img src="/rendang.png" alt="Rendang" className="w-24 h-24 object-cover mx-auto rounded-md" />
            <h3 className="font-bold my-2">Rendang</h3>
            <Link to={"/Foodpage"} className="text-blue-600 hover:underline">
              Lihat Detail
            </Link>
          </div>
        </Popup>
      </Marker>
      
      {/* Anda bisa me-looping data pin lainnya di sini */}

    </MapContainer>
  );
}