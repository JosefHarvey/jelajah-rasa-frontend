import { MdOutlineLocationOn } from "react-icons/md";

export default function RestoFoodCard (){
    return (
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
    )
}