import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";

export default function Landingpage (){
    const [article, setArticle] = useState([])
    const [setError] = useState(null)
    useEffect(() => {
        const fetchArticle = async () => {
            try{
                const response = await fetch ('http://localhost:3000/api/foods/featured')
            
            if (!response.ok){
                throw new Error(`HTTP error! status : ${response.status}`)
            }
            const data = await response.json()
            setArticle(data)
            }catch(error){
                setError(error.message)
            console.error("gagal melakukan fetch data: ", error)
        }
        }
        fetchArticle()
    },[])
    
    const featuredArticle = {
        id: 1,
        name: "Rendang",
        slug: "rendang-padang" // Atau Anda bisa menggunakan slug
    };

    return(
        <>
        
            <div id="map" className="capitalize relative flex flex-col items-center ">
                <img src="/placeholdermap.webp" alt="" className="md:h-100 lg:h-125 w-full object-cover"/>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute top-5 text-white font-Lora text-2xl font-bold md:hidden">
                    jelajahi rasa,
                </div>
                <div className="absolute top-11 text-white font-Lora text-2xl font-bold tracking-tighter md:hidden">
                    Kenali negeri.
                </div>
                <div className="hidden absolute top-25 text-white font-Lora text-5xl font-bold tracking-tighter md:block md:top-30 lg:text-7xl">Jelajahi Rasa, Kenali Negeri</div>
                {/* <input type="text" placeholder="Cari makanan atau kota" className="absolute top-25 w-80 bg-white h-8 rounded-2xl text-xs text-[#4A3521] font-Montserrat font-medium tracking-tight p-3 md:w-150 md:top-50 md:h-10 md:rounded-3xl md:text-sm lg:w-225 lg:top-60  lg:h-12 lg:rounded-3xl lg:text-sm" /> */}
                <div className="absolute top-25 md:top-50 lg:top-60">
                    <div className="relative ">
                        <Searchbar />
                    </div>
                </div>

                <Link to={"/Map"} className="uppercase absolute bottom-3 text-white text-lg font-semibold font-Lora border-b-2 border-[#D71515] md:bottom-15 md:text-2xl lg:bottom-30 lg:text-3xl">jelajahi peta</Link>
                
            </div>
            {
            article.map(food => (
            <div className="my-5 mx-2 md:mx-10 md:my-5 lg:mx-20 lg:my-10">
                <div id="article" className="flex flex-col  text-[#4A3521] items-start md:w-full lg:w-290">
                    <div className="hidden md:grid md:h-150 lg:grid grid-cols-2 grid-rows-2 gap-x-2 gap-y-1 mt-3 h-200 w-full">
                        <div className="col-span-2 row-span-1 overflow-hidden">
                            <img src="/placeholdermap.webp" alt="" className="h-full w-full object-cover"/>
                        </div>
                        <div className="row-span-1 overflow-hidden">
                            <img src="/placeholdermap.webp" alt="" className="h-full w-full object-cover"/>
                        </div>
                        <div className="row-span-1 overflow-hidden">
                            <img src="/placeholdermap.webp" alt="" className="h-full w-full object-cover"/>
                        </div>
                    </div>  
                    <h2 className="font-Lora text-[#D71515] font-bold text-2xl capitalize -mb-2 md:text-5xl md:mt-10">Referensi kuliner lokal</h2>
                    <h3 className="font-Lora font-bold text-xl md:text-4xl lg:mt-2">{food.name}</h3>
                    <div className="font-Montserrat flex items-center gap-1 text-[#AAAAAA] text-xs md:text-base">
                        <MdOutlineLocationOn />
                        <Link to="/Citypage">{food.region.name}</Link>
                    </div>

                    <div className="font-Montserrat text-sm/4 mt-1 md:hidden">{food.historyAndMeaning}</div>
                    <Link to={`/Foodpage/${food.id}`} className="hidden font-Montserrat text-sm/4 mt-2 md:text-xl lg:block line-clamp-3">{food.historyAndMeaning}</Link>
                    <Link to={`/Foodpage/${featuredArticle.id}`} className="inline-block font-Montserrat mt-2 uppercase text-base border-b-2 border-[#D71515] font-medium w-60 md:hidden">baca selengkapnya</Link>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1  w-full mt-3 md:hidden">
                        <div className="col-span-2 row-span-1 overflow-hidden">
                            <img src="/placeholdermap.webp" alt="" className="h-full w-full object-cover"/>
                        </div>
                        <div className="row-span-1 overflow-hidden">
                            <img src="/placeholdermap.webp" alt="" className="h-full w-full object-cover"/>
                        </div >
                        <div className="row-span-1 overflow-hidden">
                            <img src="/placeholdermap.webp" alt="" className="h-full w-full object-cover"/>
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

                <div className="w-full m-2 flex flex-nowrap overflow-x-auto gap-20 md:justify-evenly md:my-10">
                    <a href="#map" className="flex flex-col items-center justify-center max-w-75 my-4 flex-shrink-0">
                        <MdOutlineLocationOn className="text-7xl text-[#D71515]"/>
                        <p className="text-2xl font-bold font-Lora text-[#D71515]">Jelajahi Peta Budaya</p>
                        <p className="font-Montserrat text-sm text-[#4A3521] text-center">Temukan kekayaan kuliner berdasarkan asal daerahnya, dari Sabang sampai Merauke.</p>
                    </a>
                    <a href="#article" className="flex flex-col items-center justify-center max-w-75 my-4 flex-shrink-0">
                        <IoBookOutline className="text-7xl text-[#D71515]"/>
                        <p className="text-2xl font-bold font-Lora text-[#D71515]">Ungkap Cerita & Sejarah</p>
                        <p className="font-Montserrat text-sm text-[#4A3521] text-center">Setiap hidangan memiliki latar belakang dan makna yang kami kupas tuntas.</p>
                    </a>
                    <a href="#Footer" className="flex flex-col items-center justify-center max-w-75 my-4 flex-shrink-0">
                        <GrGroup className="text-7xl text-[#D71515]"/>
                        <p className="text-2xl font-bold font-Lora text-[#D71515]">Berkontribusi & Berbagi</p>
                        <p className="font-Montserrat text-sm text-[#4A3521] text-center">Jadilah bagian dari komunitas untuk ikut melestarikan resep warisan.</p>
                    </a>             
                </div>

           
        </>
    )
}