import { Link, useNavigate, useParams } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import RestoFoodCard from "../components/RestoFoodCard";
import Comment from "../components/Comment";
import Commentform from "../components/CommentForm";
import { useInView } from 'react-intersection-observer';
import { IoBookOutline, IoFlameOutline, IoTrophyOutline } from 'react-icons/io5'
import Averagerating from "../components/Averagerating";
import { useAuth } from "../Authcontext";

export default function Foodpage (){
    const [activeClick, setActiveSection] = useState('overview')
    const [isModalOpen,setIsModalOpen] = useState(false)
   // const [activeSession, setActiveSesion] = useState('pengenalan')
    const [article, setArticle] = useState(null)
    const [error, setError] = useState(null)
    const [picture, setPicture] = useState([])
    const {id} = useParams();
    const {isLoggedIn} = useAuth()


    const handleModalOpen =() => {
        if (isLoggedIn) {
        setIsModalOpen(true);
        } else {
        alert("Anda harus login untuk dapat memberikan komentar.");  
        }
    };
    const handleNavClick = (section) => {
        setActiveSection(section)
    }

    const {ref: overview, inView: overviewInView} = useInView({threshold: 0.5})
    const {ref: restaurant, inView: restaurantInView} = useInView({threshold: 0.5})
    const {ref: comment, inView: commentInView} = useInView({threshold: 0.5})

    useEffect(() => {
       if(overviewInView){
        setActiveSection('overview')
       } else if(restaurantInView){
        setActiveSection('Tempat Mencicipi')
       }else if(commentInView){
        setActiveSection('komentar')
       }
    },[commentInView, restaurantInView, overviewInView])
    
    useEffect(() => {
    const fetchArticle = async () => {
        try{
            const response = await fetch(`http://localhost:3000/api/foods/${id}  `)
            
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

    useEffect(() => {
        // 1. Ambil seluruh data dari file picture-api.json
        fetch('/picture-api.json')
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => { // 'data' sekarang adalah sebuah ARRAY
            console.log("Data gambar yang diterima:", data);

            // Ubah 'id' dari URL (yang berupa string) menjadi angka
            const idDariUrl = parseInt(id); 

            // 2. Gunakan metode .find() untuk mencari objek yang id-nya cocok
            const foundPicture = data.find(pic => pic.id === idDariUrl);

            // 3. Simpan objek yang ditemukan ke dalam state
            if (foundPicture) {
            setPicture(foundPicture);
            } else {
            console.error(`Gambar dengan id ${id} tidak ditemukan di dalam file JSON.`);
            }
        })
        .catch(error => {
            console.error("Gagal memuat atau mem-parsing data gambar:", error);
        });
    }, [id]); // Tetap gunakan [id] sebagai dependency
    

    if (error) {
    return <div className="text-center p-10 text-red-500">Error: {error}</div>;
    }

    if (!article) {
        return <div className="text-center p-10">Artikel tidak ditemukan.</div>
    }
    
    return(
        <>     
                <div  className="lg:hidden">
                    <img src={picture.heroUrl} alt="" className="md:h-100 lg:h-125 w-full object-cover"/>
                </div>      
            <div className="my-5 mx-2 text-[#4A3521] font-Montserrat md:mx-10 md:my-5 lg:mx-20 lg:my-10 ">
                <div className="flex justify-between lg:shadow-xl/lg  lg:p-25 lg:flex-col ">
    
                        <div className="hidden lg:block w-full mb-25">
                            <img src={picture.heroUrl} alt="" className="h-205 w-full object-cover"/>
                        </div> 
                            <div className="lg:flex lg:justify-between items-center">
                                <div className="font-Lora text-2xl capitalize font-bold text-[#D71515] md:text-4xl lg:text-5xl">
                                    {article.name}
                                </div>
                                <Link to={`/Citypage/${article.region.id}`} className="capitalize md:text-xl">
                                    {article.region.name}
                                </Link>
                            </div>

                            <div id="overview"  ref={overview} className="hidden lg:flex lg:justify-between items-start gap-30 my-20">
                                <div className="md: max-w-3xl mx-auto space-y-6">
                                    <div>
                                        <h2 className="font-Lora text-3xl font-bold text-[#4A3521] mb-4">
                                        Sejarah & Makna di Balik Rasa
                                        </h2>
                                        <p className="font-sans text-lg text-gray-700 leading-relaxed">
                                        {article.historyAndMeaning}
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="font-Lora text-3xl font-bold text-[#4A3521] mb-4">
                                        Proses Memasak yang Unik
                                        </h2>
                                        <p className="font-sans text-lg text-gray-700 leading-relaxed">
                                        {article.cookingMethod}
                                        </p>
                                    </div>

                                    {/* --- 3. Fakta Menarik (Info Box yang Menonjol) --- */}
                                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#A9442A] my-8">
                                        <div className="flex items-start gap-x-4">
                                        <div className="text-3xl text-[#A9442A] mt-1">
                                            <IoTrophyOutline />
                                        </div>
                                        <div>
                                            <h3 className="font-Lora font-bold text-xl text-[#4A3521] mb-1">Fakta Juara</h3>
                                            <p className="font-sans text-base text-gray-600">
                                            {article.quickFacts}
                                            </p>
                                        </div>
                                        </div>
                                    </div>

                                </div>
                                    <div className="hidden lg:block max-w-125  flex-1">
                                        <img src={picture.mapUrl} alt="" className="w-full object-cover"/>
                                    </div>   

                            </div>            
        

                        <div className="flex flex-col items-start lg:gap-y-5">
                            <div className="font-Lora font-bold flex  gap-1 items-center md:text-xl lg:text-4xl">
                                <p className="text-2xl font-bold md:text-3xl">{article.averageRating}</p>
                                <Averagerating rating={article.averageRating}/>
                            </div>
                            <button className="border uppercase text-sm px-4 rounded-2xl text-[#aaaaaa] md:text-base" onClick={() => handleModalOpen(true)}>
                                beri nilai
                            </button>
                            {isModalOpen && <Commentform isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>}
                        </div>     
                </div>
                <hr className="text-[#AAAAAA] my-5 lg:hidden"/>
                <div className="font-Lora flex justify-between sticky top-12 bg-[#F5F0E8] py-2 md:text-lg lg:text-2xl lg:justify-center lg:gap-x-15 lg:mt-20">
                    <a href={"#overview"} onClick={() => handleNavClick('overview')} className={`transition-all duration-300 ${activeClick === 'overview'? 'border-b-2 border-[#D71515] font-bold py-1' :''}`}>Pengenalan</a>
                    <a href={"#Tempat Mencicipi"} onClick={() => handleNavClick('Tempat Mencicipi')} className={`transition-all duration-300 ${activeClick === 'Tempat Mencicipi'? 'border-b-2 border-[#D71515] font-bold py-1' :''}`}>Tempat Mencicipi</a>
                    <a href={"#komentar"} onClick={() => handleNavClick('komentar')} className={`transition-all duration-300 ${activeClick === 'komentar'? 'border-b-2 border-[#D71515] font-bold py-1' :''}`}>Komentar</a>
                </div>
                <div id="overview" ref={overview} className=" text-sm/4 my-2 flex flex-col gap-y-2 md:text-base/5 lg:hidden">
                    <div className="md: max-w-3xl mx-auto space-y-6">
                        <div>
                            <h2 className="font-Lora text-3xl font-bold text-[#4A3521] mb-4">
                            Sejarah & Makna di Balik Rasa
                            </h2>
                            <p className="font-sans text-lg text-gray-700 leading-relaxed">
                            {article.historyAndMeaning}
                            </p>
                        </div>
                        <div>
                            <h2 className="font-Lora text-3xl font-bold text-[#4A3521] mb-4">
                            Proses Memasak yang Unik
                            </h2>
                            <p className="font-sans text-lg text-gray-700 leading-relaxed">
                            {article.cookingMethod}
                            </p>
                        </div>

                        {/* --- 3. Fakta Menarik (Info Box yang Menonjol) --- */}
                        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#A9442A] my-8">
                            <div className="flex items-start gap-x-4">
                            <div className="text-3xl text-[#A9442A] mt-1">
                                <IoTrophyOutline />
                            </div>
                            <div>
                                <h3 className="font-Lora font-bold text-xl text-[#4A3521] mb-1">Fakta Juara</h3>
                                <p className="font-sans text-base text-gray-600">
                                {article.quickFacts}
                                </p>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="Tempat Mencicipi" ref={restaurant} className="">
                    <div className="flex flex-col items-center font-Lora font-bold md:my-5 lg:my-10">
                        <div className="text-base md:text-lg lg:text-2xl">Tempat Mencicipi</div>
                        <div className="uppercase text-2xl md:text-3xl lg:text-4xl lg:mt-2">
                            <span className="text-[#D71515]">{article.name}</span> terbaik !
                        </div>
                    </div>
                    <div className="my-4 flex flex-col items-start ">
                        <RestoFoodCard resto={article}/>
                    </div>
                </div>
                <div id="komentar" ref={comment} className="">
                    <div className="font-Lora flex flex-col ">
                        <div className="font-bold uppercase text-2xl self-center md:text-3xl lg:text-4xl lg:mt-10">apa kata mereka ?</div>
                    </div>
                    <div className="lg:flex lg:gap-20 lg:items-start">   
                        <div className="flex justify-between flex-col md:mt-5 lg:flex-none lg:w-125 lg:shadow-xl shadow-[#AAAAAA] lg:p-11">
                            <p className="hidden lg:block font-lora font-bold text-3xl capitalize mb-2">nilai keseluruhan</p>
                            <div className="flex justify-between">
                                <div className="flex gap-x-1 items-center my-2">
                                    <p className="text-2xl font-bold md:text-3xl">{article.averageRating}</p>
                                    <Averagerating rating={article.averageRating}/>
                                </div>
                                <div className="flex gap-x-2 items-center">
                                    <p className="uppercase font-bold text-sm md:text-base">Komentar</p>
                                    <p className="text-[#AAAAAA] md:text-lg">{article.comments.length}</p>
                                </div>
                            </div>

                            <button onClick={() => handleModalOpen(true)} className="font-Montserrat text-sm text-[#AAAAAA] text-start border w-full py-1 px-3 rounded-2xl my-3 md:text-base md:py-3 md:px-5 md:rounded-3xl" >Berikan Pendapatmu!</button>
                            {isModalOpen && <Commentform isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>}
                        </div>   
                               
                        <div className="my-2 md:mt-5  w-full ">
                            <Comment article={article}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}