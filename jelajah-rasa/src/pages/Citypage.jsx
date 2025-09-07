
import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import RestoCityCard from "../components/RestoCityCard";
import { useParams } from "react-router-dom";

export default function Citypage (){
        const [cityData, setCityData] = useState(null);   
        const [error,setError] = useState(null)
        const [loading,setLoading] = useState(true)
        const {id} = useParams()
    
        useEffect(() => {
            const fetchAndCombineData = async () => {
            try {

                const [regionResponse, picturesResponse] = await Promise.all([
                fetch(`http://localhost:3000/api/regions/${id}`),
                fetch('/cityPage.json') 
                ]);

                if (!regionResponse.ok || !picturesResponse.ok) {
                throw new Error('Gagal mengambil data dari salah satu sumber');
                }

                const regionFromDB = await regionResponse.json(); 
                const picturesFromJSON = await picturesResponse.json(); 
                const idDariUrl = parseInt(id);
                const pictureData = picturesFromJSON.find(
                pic => pic.id === idDariUrl
                );

                const mergedData = {
                ...regionFromDB, 
                
                heroImg: pictureData ? pictureData.heroImg : '/placeholder-hero.jpg',
                mapImg: pictureData ? pictureData.mapImg : '/placeholder-map.jpg',
                foodsWithImages: pictureData ? pictureData.food : [] ,
                restoWithImages: pictureData ? pictureData.resto : [] 
                };
                
                setCityData(mergedData); 

            } catch (err) {
                setError(err.message);
                console.error("Gagal melakukan fetch atau menggabungkan data: ", err);
            } finally {
                setLoading(false);
            }
            };
            
            if (id) { 
                fetchAndCombineData();
            }
        }, [id]); 
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;
        if (!cityData) return <div>Data tidak ditemukan.</div>;
    return(
        <>
        
           <div className="relative flex items-center justify-center">
                <img src={cityData.heroImg} alt="" className="md:h-100 lg:h-125 w-full object-cover"/>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="font-Lora text-[#F5F0E8] text-2xl font-bold absolute md:text-5xl">
                    {cityData.name}
                </div>
            </div>

            <div className="my-5 mx-2 text-[#4A3521]  md:mx-10 md:my-5 lg:mx-20 lg:my-10">
                <div className="flex flex-col items-start lg:shadow-xl lg:shadow-[#AAAAAA] lg:p-9">
                    <div className="text-sm/4 font-Montserrat md:text-base/5">
                        {cityData.description}
                    </div>
                    <div className="flex justify-around lg:my-10" >
                        <div className="flex-1 flex flex-col lg:gap-y-10">
                            <h2 className="font-Lora text-2xl my-2 font-bold md:text-4xl">
                                Profil Citarasa: <span className="text-[#D71515]">{cityData.name}</span>
                            </h2>
                            <div className="text-sm/4 font-Montserrat md:text-base/5 ">
                                {cityData.cuisine_characteristics}
                            </div>    
                        </div>
                        <div className="hidden h-60  lg:block ">
                            <img src={cityData.mapImg} alt="" className="w-full h-full"/>
                        </div>
                        
                    </div>
                    
                </div>
                <hr className="my-5 text-[#AAAAAA] lg:hidden"/>
                <div className="flex flex-col items-start text-[#4A3521]">
                    <h3 className="font-Lora text-xl my-2 font-bold md:text-2xl lg:self-center lg:text-4xl lg:my-10">
                        Wajib Dicoba dari <span className="text-[#D71515]">{cityData.name}</span>
                    </h3>
                    <div className="grid w-full grid-cols-1 place-content-between gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <FoodCard cityData={cityData}/>
                        <FoodCard cityData={cityData}/>
                        <FoodCard cityData={cityData}/>
                        <FoodCard cityData={cityData}/>
                    </div>
                    {/* <div className="border-b-2 border-[#D71515] uppercase font-Lora font-bold self-center mt-4 text-lg">lebih banyak</div>            */}
                </div>
                <div className="text-[#4A3521] my-5 lg:my-20 flex flex-col">
                    <div className="font-Lora font-bold text-xl md:text-2xl lg:text-3xl lg:self-center">Tempat Makan Wajib di <span className="text-[#D71515]">{cityData.name}</span></div>
                    <RestoCityCard cityData={cityData}/>
                    {/* <div className="hidden lg:block border-b-2 border-[#D71515] uppercase font-Lora font-bold self-center mt-4 text-lg">lebih banyak</div>                   */}
                </div>
            </div>         

        </>
    )
}