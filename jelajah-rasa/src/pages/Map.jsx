import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { Link } from 'react-router-dom';
import customMarkerIconUrl from "/rendang.png";

const customMarkerIcon = new L.Icon({
  iconUrl: customMarkerIconUrl,
  iconSize: [80, 80], 
  iconAnchor: [19, 38], 
  popupAnchor: [0, -40] 
});

export default function Map (){
    const position = [-0.9455674828176737, 100.36414413221065];
    return(
        <>
            <div className='max-h-100'>
                <MapContainer
                center={[-2.5489, 118.0149]}
                zoom={5.5}
                scrollWheelZoom={true}
                style={{ minHeight: "100vh", minWidth: "100vw" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={customMarkerIcon} >
                        <Popup>
                            <div className="text-center">
                                <img src="/placeholdermap.webp" alt="" className="w-24 h-24 object-cover mx-auto rounded-md" />
                                <h3 className="font-bold my-2">Rendang</h3>
                                <Link to={"/Foodpage"} className="text-blue-600 hover:underline">
                                    Lihat Detail
                                </Link>
                            </div>
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </>
    )
}