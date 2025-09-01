import { Link } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useState } from "react";

export default function Foodpage (){
    const [activeClick, setActiveSection] = useState('overview')
    
    const handleNavClick = (section) => {
        setActiveSection(section)
    }
    return(
        <>
            <div className="lg:hidden">
                <img src="/placeholdermap.webp" alt="" className="md:h-100 lg:h-125 w-full object-cover"/>
            </div>

            <div className="my-5 mx-2 text-[#4A3521] font-Montserrat md:mx-10 md:my-5 lg:mx-20 lg:my-10 ">
                <div className="flex justify-between lg:shadow-xl/lg  lg:p-25 lg:flex-col ">
                    <div className="hidden lg:block w-full mb-25">
                        <img src="/placeholdermap.webp" alt="" className="h-205 w-full object-cover"/>
                    </div>
                        <div className="lg:flex lg:justify-between items-center">
                            <div className="font-Lora text-2xl capitalize font-bold text-[#D71515] md:text-4xl lg:text-5xl">
                                nama makanan
                            </div>
                            <Link to="" className="capitalize md:text-xl">
                                asal kota
                            </Link>
                        </div>
                        <div id="overview" className="hidden lg:flex lg:justify-between items-start gap-30 my-20">
                            <div className="text-base/5 flex-1 ">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="hidden lg:block max-w-125  flex-1">
                                <img src="/placeholdermap.webp" alt="" className="w-full object-cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-start lg:gap-y-5">
                            <div className="font-Lora font-bold flex  gap-1 items-center md:text-xl lg:text-4xl">
                                <p>5.0</p>
                                <div className="text-[#FFBD16] flex">
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                </div>
                            </div>
                            <button className="border uppercase text-sm px-4 rounded-2xl text-[#aaaaaa] md:text-base">
                                beri nilai
                            </button>
                        </div>     
                </div>
                <hr className="text-[#AAAAAA] my-5 lg:hidden"/>
                <div className="font-Lora flex justify-between sticky top-12 bg-[#F5F0E8] py-2 md:text-lg lg:text-2xl lg:justify-center lg:gap-x-15 lg:mt-20">
                    <a href={"#overview"} onClick={() => handleNavClick('overview')} className={`transition-all duration-300 ${activeClick === 'overview'? 'border-b-2 border-[#D71515] font-bold py-1' :''}`}>Pengenalan</a>
                    <a href={"#Tempat Mencicipi"} onClick={() => handleNavClick('Tempat Mencicipi')} className={`transition-all duration-300 ${activeClick === 'Tempat Mencicipi'? 'border-b-2 border-[#D71515] font-bold py-1' :''}`}>Tempat Mencicipi</a>
                    <a href={"#komentar"} onClick={() => handleNavClick('komentar')} className={`transition-all duration-300 ${activeClick === 'komentar'? 'border-b-2 border-[#D71515] font-bold py-1' :''}`}>Komentar</a>
                </div>
                <div id="overview" className=" text-sm/4 my-2 flex flex-col gap-y-2 md:text-base/5 lg:hidden">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div id="Tempat Mencicipi" className="">
                    <div className="flex flex-col items-center font-Lora font-bold md:my-5 lg:my-10">
                        <div className="text-base md:text-lg lg:text-2xl">Tempat Mencicipi</div>
                        <div className="uppercase text-2xl md:text-3xl lg:text-4xl lg:mt-2">
                            <span className="text-[#D71515]">nama makanan</span> terbaik !
                        </div>
                    </div>
                    <div className="my-4 flex flex-col items-start ">
                        <a href="" className="mt-4 ">
                            <div className="flex justify-center gap-x-4">
                                <div className="w-full flex-initial lg:w-125">
                                    <img src="/placeholdermap.webp" alt="" className="w-full h-full "/>
                                </div>
                                <div className=" font-Lora " >
                                    <div className="font-bold text-lg md:text-2xl lg:text-4xl">
                                        Nama Lokasi 
                                    </div>
                                    <div className="flex items-center uppercase ">
                                        <MdOutlineLocationOn className="text-base text-[#AAAAAA] md:text-2xl lg:text-4xl"/>
                                        <p className="text-xs font-medium md:text-base lg:text-xl">Asal kota</p>                                  
                                    </div>
                                    <div className="font-Montserrat text-xs/3 my-2 md:text-sm/4 lg:hidden">
                                        Di Rekomendasikan oleh <span className="text-[#FFBD16] font-medium">Josef Harvey Mangaratua</span> <span className="text-[#AAAAAA] ">dan 9 Jurnalis Kuliner lainnya.</span>
                                    </div>
                                    <div className="hidden lg:flex flex-col font-Montserrat text-lg mt-5">
                                        <p className="font-bold">Di Rekomendasikan oleh </p> 
                                        <p className="text-[#FFBD16] font-medium">Josef Harvey Mangaratua <span className="text-[#AAAAAA]">dan 9 Jurnalis Kuliner lainnya.</span></p> 
                                    </div>
                                </div>
                            </div>      
                            <hr className="text-[#AAAAAA] my-5 md:my-7 lg:hidden"/>
                        </a>
                        <a href="" className="mt-4 ">
                            <div className="flex justify-center gap-x-4">
                                <div className="w-full flex-initial lg:w-125">
                                    <img src="/placeholdermap.webp" alt="" className="w-full h-full "/>
                                </div>
                                <div className=" font-Lora " >
                                    <div className="font-bold text-lg md:text-2xl lg:text-4xl">
                                        Nama Lokasi 
                                    </div>
                                    <div className="flex items-center uppercase ">
                                        <MdOutlineLocationOn className="text-base text-[#AAAAAA] md:text-2xl lg:text-4xl"/>
                                        <p className="text-xs font-medium md:text-base lg:text-xl">Asal kota</p>                                  
                                    </div>
                                    <div className="font-Montserrat text-xs/3 my-2 md:text-sm/4 lg:hidden">
                                        Di Rekomendasikan oleh <span className="text-[#FFBD16] font-medium">Josef Harvey Mangaratua</span> <span className="text-[#AAAAAA] ">dan 9 Jurnalis Kuliner lainnya.</span>
                                    </div>
                                    <div className="hidden lg:flex flex-col font-Montserrat text-lg mt-5">
                                        <p className="font-bold">Di Rekomendasikan oleh </p> 
                                        <p className="text-[#FFBD16] font-medium">Josef Harvey Mangaratua <span className="text-[#AAAAAA]">dan 9 Jurnalis Kuliner lainnya.</span></p> 
                                    </div>
                                </div>
                            </div>      
                            <hr className="text-[#AAAAAA] my-5 md:my-7 lg:hidden"/>
                        </a>
                        <a href="" className="mt-4 ">
                            <div className="flex justify-center gap-x-4">
                                <div className="w-full flex-initial lg:w-125">
                                    <img src="/placeholdermap.webp" alt="" className="w-full h-full "/>
                                </div>
                                <div className=" font-Lora " >
                                    <div className="font-bold text-lg md:text-2xl lg:text-4xl">
                                        Nama Lokasi 
                                    </div>
                                    <div className="flex items-center uppercase ">
                                        <MdOutlineLocationOn className="text-base text-[#AAAAAA] md:text-2xl lg:text-4xl"/>
                                        <p className="text-xs font-medium md:text-base lg:text-xl">Asal kota</p>                                  
                                    </div>
                                    <div className="font-Montserrat text-xs/3 my-2 md:text-sm/4 lg:hidden">
                                        Di Rekomendasikan oleh <span className="text-[#FFBD16] font-medium">Josef Harvey Mangaratua</span> <span className="text-[#AAAAAA] ">dan 9 Jurnalis Kuliner lainnya.</span>
                                    </div>
                                    <div className="hidden lg:flex flex-col font-Montserrat text-lg mt-5">
                                        <p className="font-bold">Di Rekomendasikan oleh </p> 
                                        <p className="text-[#FFBD16] font-medium">Josef Harvey Mangaratua <span className="text-[#AAAAAA]">dan 9 Jurnalis Kuliner lainnya.</span></p> 
                                    </div>
                                </div>
                            </div>      
                            <hr className="text-[#AAAAAA] my-5 md:my-7 lg:hidden"/>
                        </a>
                        <a href="" className="mt-4 ">
                            <div className="flex justify-center gap-x-4">
                                <div className="w-full flex-initial lg:w-125">
                                    <img src="/placeholdermap.webp" alt="" className="w-full h-full "/>
                                </div>
                                <div className=" font-Lora " >
                                    <div className="font-bold text-lg md:text-2xl lg:text-4xl">
                                        Nama Lokasi 
                                    </div>
                                    <div className="flex items-center uppercase ">
                                        <MdOutlineLocationOn className="text-base text-[#AAAAAA] md:text-2xl lg:text-4xl"/>
                                        <p className="text-xs font-medium md:text-base lg:text-xl">Asal kota</p>                                  
                                    </div>
                                    <div className="font-Montserrat text-xs/3 my-2 md:text-sm/4 lg:hidden">
                                        Di Rekomendasikan oleh <span className="text-[#FFBD16] font-medium">Josef Harvey Mangaratua</span> <span className="text-[#AAAAAA] ">dan 9 Jurnalis Kuliner lainnya.</span>
                                    </div>
                                    <div className="hidden lg:flex flex-col font-Montserrat text-lg mt-5">
                                        <p className="font-bold">Di Rekomendasikan oleh </p> 
                                        <p className="text-[#FFBD16] font-medium">Josef Harvey Mangaratua <span className="text-[#AAAAAA]">dan 9 Jurnalis Kuliner lainnya.</span></p> 
                                    </div>
                                </div>
                            </div>      
                            <hr className="text-[#AAAAAA] my-5 md:my-7 lg:hidden"/>
                        </a>
                        <a href="" className="mt-4 ">
                            <div className="flex justify-center gap-x-4">
                                <div className="w-full flex-initial lg:w-125">
                                    <img src="/placeholdermap.webp" alt="" className="w-full h-full "/>
                                </div>
                                <div className=" font-Lora " >
                                    <div className="font-bold text-lg md:text-2xl lg:text-4xl">
                                        Nama Lokasi 
                                    </div>
                                    <div className="flex items-center uppercase ">
                                        <MdOutlineLocationOn className="text-base text-[#AAAAAA] md:text-2xl lg:text-4xl"/>
                                        <p className="text-xs font-medium md:text-base lg:text-xl">Asal kota</p>                                  
                                    </div>
                                    <div className="font-Montserrat text-xs/3 my-2 md:text-sm/4 lg:hidden">
                                        Di Rekomendasikan oleh <span className="text-[#FFBD16] font-medium">Josef Harvey Mangaratua</span> <span className="text-[#AAAAAA] ">dan 9 Jurnalis Kuliner lainnya.</span>
                                    </div>
                                    <div className="hidden lg:flex flex-col font-Montserrat text-lg mt-5">
                                        <p className="font-bold">Di Rekomendasikan oleh </p> 
                                        <p className="text-[#FFBD16] font-medium">Josef Harvey Mangaratua <span className="text-[#AAAAAA]">dan 9 Jurnalis Kuliner lainnya.</span></p> 
                                    </div>
                                </div>
                            </div>      
                            <hr className="text-[#AAAAAA] my-5 md:my-7 lg:hidden"/>
                        </a>


                    </div>
                </div>
                <div id="komentar" className="">
                    <div className="font-Lora flex flex-col ">
                        <div className="font-bold uppercase text-2xl self-center md:text-3xl lg:text-4xl lg:mt-10">apa kata mereka ?</div>
                    </div>
                    <div className="lg:flex lg:gap-20 lg:items-start">   
                        <div className="flex justify-between flex-col md:mt-5 lg:flex-none lg:w-125 lg:shadow-xl shadow-[#AAAAAA] lg:p-11">
                            <p className="hidden lg:block font-lora font-bold text-3xl capitalize mb-2">nilai keseluruhan</p>
                            <div className="flex justify-between">
                                <div className="flex gap-x-1 items-center my-2">
                                    <p className="text-2xl font-bold md:text-3xl">5.0</p>
                                    <div className="text-[#FFBD16] flex">
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                    </div>
                                </div>
                                <div className="flex gap-x-2 items-center">
                                    <p className="uppercase font-bold text-sm md:text-base">Komentar</p>
                                    <p className="text-[#AAAAAA] md:text-lg">5</p>
                                </div>
                            </div>

                            <button className="font-Montserrat text-sm text-[#AAAAAA] text-start border w-full py-1 px-3 rounded-2xl my-3 md:text-base md:py-3 md:px-5 md:rounded-3xl">Berikan Pendapatmu!</button>
                            
                        </div>   
                               
                        <div className="my-2 md:mt-5  w-full ">
                            <div className="flex flex-col items-start gap-y-5 my-3 w-full lg:mb-10">
                                <div className="flex gap-3 items-center">
                                    <div>
                                        <IoPersonCircleSharp  className="text-[#AAAAAA] text-6xl lg:text-8xl"/>
                                    </div>
                                    <div className="flex flex-col self-start">
                                        <p className="font-Lora capitalize font-bold text-lg md:text-xl lg:text-2xl">josef harvey mangaratua</p>
                                        <div className="flex items-center gap-x-2 -my-1 lg:my-2">
                                            <div className="text-[#FFBD16] flex lg:text-2xl">
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                            </div>
                                            <p className="text-[#AAAAAA] text-sm capitalize md:text-base lg:text-lg">19 november 2025</p>            
                                        </div>
                                    </div>
                                </div>
                                <div className="font-medium text-sm md:text-base lg:text-2xl">"Mantap enak sekali pasti akan mencoba lagi"</div>
                                <hr />
                            </div>
                            <div className="flex flex-col items-start gap-y-5 my-3 w-full lg:mb-10">
                                <div className="flex gap-3 items-center">
                                    <div>
                                        <IoPersonCircleSharp  className="text-[#AAAAAA] text-6xl lg:text-8xl"/>
                                    </div>
                                    <div className="flex flex-col self-start">
                                        <p className="font-Lora capitalize font-bold text-lg md:text-xl lg:text-2xl">josef harvey mangaratua</p>
                                        <div className="flex items-center gap-x-2 -my-1 lg:my-2">
                                            <div className="text-[#FFBD16] flex lg:text-2xl">
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                            </div>
                                            <p className="text-[#AAAAAA] text-sm capitalize md:text-base lg:text-lg">19 november 2025</p>            
                                        </div>
                                    </div>
                                </div>
                                <div className="font-medium text-sm md:text-base lg:text-2xl">"Mantap enak sekali pasti akan mencoba lagi"</div>
                                <hr />
                            </div>
                            <div className="flex flex-col items-start gap-y-5 my-3 w-full lg:mb-10">
                                <div className="flex gap-3 items-center">
                                    <div>
                                        <IoPersonCircleSharp  className="text-[#AAAAAA] text-6xl lg:text-8xl"/>
                                    </div>
                                    <div className="flex flex-col self-start">
                                        <p className="font-Lora capitalize font-bold text-lg md:text-xl lg:text-2xl">josef harvey mangaratua</p>
                                        <div className="flex items-center gap-x-2 -my-1 lg:my-2">
                                            <div className="text-[#FFBD16] flex lg:text-2xl">
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                            </div>
                                            <p className="text-[#AAAAAA] text-sm capitalize md:text-base lg:text-lg">19 november 2025</p>            
                                        </div>
                                    </div>
                                </div>
                                <div className="font-medium text-sm md:text-base lg:text-2xl">"Mantap enak sekali pasti akan mencoba lagi"</div>
                                <hr />
                            </div>
                            <div className="flex flex-col items-start gap-y-5 my-3 w-full lg:mb-10">
                                <div className="flex gap-3 items-center">
                                    <div>
                                        <IoPersonCircleSharp  className="text-[#AAAAAA] text-6xl lg:text-8xl"/>
                                    </div>
                                    <div className="flex flex-col self-start">
                                        <p className="font-Lora capitalize font-bold text-lg md:text-xl lg:text-2xl">josef harvey mangaratua</p>
                                        <div className="flex items-center gap-x-2 -my-1 lg:my-2">
                                            <div className="text-[#FFBD16] flex lg:text-2xl">
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                            </div>
                                            <p className="text-[#AAAAAA] text-sm capitalize md:text-base lg:text-lg">19 november 2025</p>            
                                        </div>
                                    </div>
                                </div>
                                <div className="font-medium text-sm md:text-base lg:text-2xl">"Mantap enak sekali pasti akan mencoba lagi"</div>
                                <hr />
                            </div>
                            <div className="flex flex-col items-start gap-y-5 my-3 w-full lg:mb-10">
                                <div className="flex gap-3 items-center">
                                    <div>
                                        <IoPersonCircleSharp  className="text-[#AAAAAA] text-6xl lg:text-8xl"/>
                                    </div>
                                    <div className="flex flex-col self-start">
                                        <p className="font-Lora capitalize font-bold text-lg md:text-xl lg:text-2xl">josef harvey mangaratua</p>
                                        <div className="flex items-center gap-x-2 -my-1 lg:my-2">
                                            <div className="text-[#FFBD16] flex lg:text-2xl">
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                            </div>
                                            <p className="text-[#AAAAAA] text-sm capitalize md:text-base lg:text-lg">19 november 2025</p>            
                                        </div>
                                    </div>
                                </div>
                                <div className="font-medium text-sm md:text-base lg:text-2xl">"Mantap enak sekali pasti akan mencoba lagi"</div>
                                <hr />
                            </div>
                            <div className="flex flex-col items-start gap-y-5 my-3 w-full lg:mb-10">
                                <div className="flex gap-3 items-center">
                                    <div>
                                        <IoPersonCircleSharp  className="text-[#AAAAAA] text-6xl lg:text-8xl"/>
                                    </div>
                                    <div className="flex flex-col self-start">
                                        <p className="font-Lora capitalize font-bold text-lg md:text-xl lg:text-2xl">josef harvey mangaratua</p>
                                        <div className="flex items-center gap-x-2 -my-1 lg:my-2">
                                            <div className="text-[#FFBD16] flex lg:text-2xl">
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                                <TiStarFullOutline />
                                            </div>
                                            <p className="text-[#AAAAAA] text-sm capitalize md:text-base lg:text-lg">19 november 2025</p>            
                                        </div>
                                    </div>
                                </div>
                                <div className="font-medium text-sm md:text-base lg:text-2xl">"Mantap enak sekali pasti akan mencoba lagi"</div>
                                <hr />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}