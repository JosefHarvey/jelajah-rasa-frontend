import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Link, useParams } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();
  const [picture, setPicture] = useState([])  


  const debouncedFetch = useDebouncedCallback((searchQuery) => {
    if (searchQuery.length > 2) {
      setIsLoading(true);
      fetch(`http://localhost:3000/api/foods/search?q=${searchQuery}`)
        .then(res => res.json())
        .then(data => setResults(data))
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false));
    } else {
      setResults([]);
    }
  }, 500);

      useEffect((searchQuery) => {

          fetch('/picture-api.json')
          .then(response => {
              if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
              }
              return response.json();
          })
          .then(data => {  
              const foundPicture = data.find(pic => pic.name === searchQuery);
  
              if (foundPicture) {
              setPicture(foundPicture);
              } else {
              console.error(`Gambar dengan id ${id} tidak ditemukan di dalam file JSON.`);
              }
          })
          .catch(error => {
              console.error("Gagal memuat atau mem-parsing data gambar:", error);
          });
      }, [id]);

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debouncedFetch(newQuery);
  };

  return (

    <div className="relative w-full">

      <div className="relative">
        <input
          type="text"
          placeholder="Cari makanan atau kota..."
          value={query}
          onChange={handleInputChange}
          className=" bg-[#F5F0E8] w-80 h-8 rounded-2xl text-xs text-[#4A3521] font-Montserrat font-medium tracking-tight p-3 md:w-150 md:h-10 md:rounded-3xl md:text-sm lg:w-225 lg:h-12 lg:rounded-3xl lg:text-sm"
        />
        <IoSearchOutline 
          className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-400 text-2xl pointer-events-none"
        />
      </div>


      {query.length > 2 && (
        <div className="absolute top-full mt-2 w-full bg-[#F5F0E8] rounded-2xl shadow-xl overflow-hidden z-20">
          {isLoading && <div className="p-4 text-gray-500">Mencari...</div>}
          
          {!isLoading && results.length > 0 && (
            <ul>
              {results.map(food => (
                <li key={food.id}>
                  <Link 
                    to={`/Foodpage/${food.id}`} 
                    className="flex items-center gap-4 p-3 hover:bg-gray-100 transition-colors"
                  >

                    <img src={picture.heroUrl} className="w-12 h-12 bg-gray-200 rounded-md flex-shrink-0"> 
                        
                    </img>
                    <div>
                      <p className="font-bold text-gray-800">{food.name}</p>
   
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {!isLoading && results.length === 0 && (
            <div className="p-4 text-gray-500">Tidak ada hasil ditemukan.</div>
          )}
        </div>
      )}
    </div>
  );
}