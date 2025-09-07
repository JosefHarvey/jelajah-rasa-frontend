import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { Link, } from 'react-router-dom';
import {  useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import ValueProps from "../components/ValueProps";

export default function Landingpage (){
    const [setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [featuredArticles, setFeaturedArticles] = useState([]);

    useEffect(() => {
    const fetchAndCombineData = async () => {
      try {
        const [articlesResponse, picturesResponse] = await Promise.all([
          fetch('http://localhost:3000/api/foods/featured'),
          fetch('/landingPage.json') 
        ]);

        if (!articlesResponse.ok || !picturesResponse.ok) {
          throw new Error('Gagal mengambil data dari salah satu sumber');
        }

        const articlesFromDB = await articlesResponse.json();
        const picturesFromJSON = await picturesResponse.json();

        const pictureMap = new Map(picturesFromJSON.map(pic => [pic.id, pic]));

 
        const mergedData = articlesFromDB.map(article => {
          const pictureData = pictureMap.get(article.id);
          return {
            ...article, 
            gambar1: pictureData ? pictureData.gambar1 : '/placeholder.jpg', 
            gambar2: pictureData ? pictureData.gambar2 : '/placeholder.jpg', 
            gambar3: pictureData ? pictureData.gambar3 : '/placeholder.jpg', 
          };
        });
        

        setFeaturedArticles(mergedData);

      } catch (err) {
        setError(err.message);
        console.error("Gagal melakukan fetch atau menggabungkan data: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAndCombineData();
  }, []);

    if (loading) {
        return <div className="text-center p-10">Memuat article</div>;
    }
    return(
        <>
        
            <div id="map" className="capitalize relative flex flex-col items-center ">
                <img src="/images/landingPage/landingHero.png" alt="" className="md:h-100 lg:h-125 w-full object-cover"/>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute top-5 text-[#F5F0E8] font-Lora text-2xl font-bold md:hidden">
                    jelajahi rasa,
                </div>
                <div className="absolute top-11 text-[#F5F0E8] font-Lora text-2xl font-bold tracking-tight md:hidden">
                    Kenali negeri.
                </div>
                <div className="hidden absolute top-25 text-[#F5F0E8] font-Lora text-5xl font-bold tracking-tight md:block md:top-30 lg:text-7xl">Jelajahi Rasa, Kenali Negeri</div>
               
                <div className="absolute top-25 md:top-50 lg:top-60">
                    <div className="relative ">
                        <Searchbar />
                    </div>
                </div>

                <Link to={"/Map"} className="uppercase absolute bottom-3 text-[#F5F0E8] text-lg font-semibold font-Lora border-b-2 border-[#D71515] md:bottom-15 md:text-2xl lg:bottom-30 lg:text-3xl">jelajahi peta</Link>
                
            </div>
            {
            featuredArticles.map(food => (
            <div key={food.id} className="my-5 mx-2 md:mx-10 md:my-5 lg:mx-20 lg:my-10">
                <div id="article" className="flex flex-col  text-[#4A3521] items-start md:w-full lg:w-290">
                    <div key={food.id} className="hidden md:grid md:h-150 lg:grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-1 mt-3 h-200 w-full">
                        <div className="col-span-2 row-span-1 overflow-hidden">
                            <img src={food.gambar1} alt="" className="h-full w-full object-cover"/>
                        </div>
                        <div className="row-span-1 overflow-hidden">
                            <img src={food.gambar2} alt="" className="h-full w-full object-cover"/>
                        </div>
                        <div className="row-span-1 overflow-hidden">
                            <img src={food.gambar3}alt="" className="h-full w-full object-cover"/>
                        </div>
                    </div>  
                    <h2 className="font-Lora text-[#D71515] font-bold text-2xl capitalize -mb-2 md:text-5xl md:mt-10">Referensi kuliner lokal</h2>
                    <h3 className="font-Lora font-bold text-xl md:text-4xl lg:mt-2">{food.name}</h3>
                    <div className="font-Montserrat flex items-center gap-1 text-[#AAAAAA] text-xs md:text-base">
                        <MdOutlineLocationOn />
   
                        <Link to={`/Citypage/${food.id}`}>{food.region_name}</Link>
                    </div>

                    <div className="font-Montserrat text-sm/4 mt-1 md:text-xl lg:hidden">{food.intro}</div>
                    <Link to={`/Foodpage/${food.id}`} className="hidden font-Montserrat text-sm/4 mt-2 md:text-xl lg:block line-clamp-3">{food.intro}</Link>
                    <Link to={`/Foodpage/${food.id}`} className="inline-block font-Montserrat mt-2 uppercase text-base border-b-2 border-[#D71515] font-medium w-60 md:hidden">baca selengkapnya</Link>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1  w-full mt-3 md:hidden">
                        <div className="col-span-2 row-span-1 overflow-hidden">
                            <img src={food.gambar1} alt="" className="h-full w-full object-cover"/>
                        </div>
                        <div className="row-span-1 overflow-hidden">
                            <img src={food.gambar2} alt="" className="h-full w-full object-cover"/>
                        </div >
                        <div className="row-span-1 overflow-hidden">
                            <img src={food.gambar3} alt="" className="h-full w-full object-cover"/>
                        </div>
                    </div>  
                </div>    
                <hr className="my-10 text-[#AAAAAA]"/>
            </div>
            ))
           }
                <div className="flex flex-col ">
                    <h2 className="font-Lora text-2xl text-[#F1B522] font-bold capitalize self-center md:text-5xl">lebih dari sekedar resep</h2>
                </div>

           <ValueProps />

           
        </>
    )
}