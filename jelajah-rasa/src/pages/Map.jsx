import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link, useParams } from 'react-router-dom';
import L from 'leaflet';
import { useState, useEffect } from 'react';



const createCustomIcon = (imageUrl) => {
  return new L.Icon({
    iconUrl: imageUrl, 
    iconSize: [80, 80],
    iconAnchor: [30, 60],
    popupAnchor: [0, -60]
  });
};


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
    const [width] = useWindowSize(); 
    const [pins, setPins] = useState([])
    const [article, setArticle] = useState(null)
    const [error, setError] = useState(null)
    const {id} = useParams()
    const indonesiaBounds = [
    [6.9, 95.0],  
    [-11.0, 141.0]  
  ];
  
    const getZoomLevel = () => {
        if (width < 768) { 
        return 4.5; 
        }
        return 5.5; 
    };
    
  useEffect(() =>{
    fetch('/dummy-api.json')
    .then(Response => Response.json())
    .then(data =>{
        setPins(data.mapPins)
    })
    .catch(error => {
        console.error("Gagal memuat data" , error)
    })
  }, [])

    useEffect(() => {
    const fetchArticle = async () => {
        try{
            const response = await fetch(`http://localhost:3000/api/foods/${id}`)
            
        if (!response.ok){
            throw new Error(`HTTP error! status : ${response.status}`)
        }
        const data = await response.json()
        setArticle(data)
       
        } catch(error){
            setError(error.message)
            console.error("gagal melakukan fetch data: ", error)
        }
      }
      if (id) {
        fetchArticle();
    }
    },[id])
    
  
  return (
    <MapContainer
      center={[-2.5489, 118.0149]} 
      zoom={getZoomLevel()} 
      scrollWheelZoom={true}
      className="h-screen w-full" 
      maxBounds={indonesiaBounds} 
      minZoom={5}    
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://www.openstreetmap.cat" target="_blank">Breton OpenStreetMap Team</a>'
        url='https://tile.openstreetmap.bzh/ca/{z}/{x}/{y}.png'
      />
      
      {pins.map(pin => (
        <Marker key={pin.id} position={pin.koordinat} icon={createCustomIcon(pin.gambarUrl)}>
            <Popup>
                <div className="text-center">
                <img src={pin.gambarUrl}alt={pin.nama} className="w-24 h-24 object-cover mx-auto rounded-md" />
                <h3 className="font-bold my-2">{pin.nama}</h3>
                <Link to={pin.slug} className="text-blue-600 hover:underline">
                    Lihat Detail
                </Link>
                </div>
            </Popup>
        </Marker>
      ))
      }

    </MapContainer>
  );
}