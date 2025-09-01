import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";

export default function Profilepage () {
   
    return (
        <div className="my-5 mx-2 text-[#4A3521] font-Montserrat md:mx-10 md:my-5 lg:mx-20 lg:my-10">
            <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-10">
                <div className="flex items-center justify-between p-4  lg:flex-col lg:justify-center lg:w-96 lg:py-8 lg:px-12 lg:shadow-xl lg:rounded-lg relative">
                    <div className="flex items-center gap-x-4 lg:flex-col lg:gap-y-2">
                        <div className="text-8xl ">
                            <IoPersonCircleSharp />
                        </div>
                        <div className="font-Lora text-xl font-bold text-center"> 
                            <div>First Name</div>
                            <div>Last Name</div>
                        </div>
                    </div>
                    <Link to={""} className="text-2xl text-gray-400 lg:absolute lg:top-4 lg:right-4">
                        <MdOutlineEdit />
                    </Link>
                </div>
                <div className="hidden lg:block font-Lora text-2xl font-bold uppercase mt-6">
                    6 Penilaian Dari Anda
                 </div>
            </div>
            <hr className="text-[#AAAAAA] mb-5 lg:hidden" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5">
                <div className="w-full my-5 flex items-start gap-x-4 lg:flex-col lg:p-6 lg:shadow-xl lg:rounded-lg lg:bg-white">

                    <div className="w-25 bg-gray-200  flex-shrink-0 overflow-hidden lg:w-32 lg:h-32 lg:rounded-full lg:mx-auto">
                        <img src="/placeholdermap.webp" alt="Nama Makanan"className="w-full h-full object-cover"/>
                    </div>

                    <div className="flex flex-col lg:w-full flex-grow l:items-start lg:mt-4">
                        <p className="font-Lora capitalize font-bold text-base text-[#D71515] lg:text-2xl lg:mt-4">
                        Nama Makanan
                        </p>
                        <p className="hidden lg:block font-Montserrat text-gray-500 text-base mt-1">
                        Asal kota, Asal provinsi
                        </p> 
                        <div className="flex items-center lg:justify-between lg:w-full gap-x-2 lg:my-5">
                            <div className="text-yellow-500 flex text-sm lg:text-lg">
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                            </div>
                            <p className="text-gray-400 text-sm capitalize lg:text-base">
                                19 November 2025
                            </p>
                        </div>

                        <div className="font-Montserrat font-medium text-sm mt-2 lg:text-start lg:text-lg lg:italic">
                        "Mantap enak sekali pasti akan mencoba lagi"
                        </div>
                    </div>
                </div>  
                <div className="w-full my-5 flex items-start gap-x-4 lg:flex-col lg:p-6 lg:shadow-xl lg:rounded-lg lg:bg-white">

                    <div className="w-25 bg-gray-200  flex-shrink-0 overflow-hidden lg:w-32 lg:h-32 lg:rounded-full lg:mx-auto">
                        <img src="/placeholdermap.webp" alt="Nama Makanan"className="w-full h-full object-cover"/>
                    </div>

                    <div className="flex flex-col lg:w-full flex-grow l:items-start lg:mt-4">
                        <p className="font-Lora capitalize font-bold text-base text-[#D71515] lg:text-2xl lg:mt-4">
                        Nama Makanan
                        </p>
                        <p className="hidden lg:block font-Montserrat text-gray-500 text-base mt-1">
                        Asal kota, Asal provinsi
                        </p> 
                        <div className="flex items-center lg:justify-between lg:w-full gap-x-2 lg:my-5">
                            <div className="text-yellow-500 flex text-sm lg:text-lg">
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                            </div>
                            <p className="text-gray-400 text-sm capitalize lg:text-base">
                                19 November 2025
                            </p>
                        </div>

                        <div className="font-Montserrat font-medium text-sm mt-2 lg:text-start lg:text-lg lg:italic">
                        "Mantap enak sekali pasti akan mencoba lagi"
                        </div>
                    </div>
                </div>  
                <div className="w-full my-5 flex items-start gap-x-4 lg:flex-col lg:p-6 lg:shadow-xl lg:rounded-lg lg:bg-white">

                    <div className="w-25 bg-gray-200  flex-shrink-0 overflow-hidden lg:w-32 lg:h-32 lg:rounded-full lg:mx-auto">
                        <img src="/placeholdermap.webp" alt="Nama Makanan"className="w-full h-full object-cover"/>
                    </div>

                    <div className="flex flex-col lg:w-full flex-grow l:items-start lg:mt-4">
                        <p className="font-Lora capitalize font-bold text-base text-[#D71515] lg:text-2xl lg:mt-4">
                        Nama Makanan
                        </p>
                        <p className="hidden lg:block font-Montserrat text-gray-500 text-base mt-1">
                        Asal kota, Asal provinsi
                        </p> 
                        <div className="flex items-center lg:justify-between lg:w-full gap-x-2 lg:my-5">
                            <div className="text-yellow-500 flex text-sm lg:text-lg">
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                            </div>
                            <p className="text-gray-400 text-sm capitalize lg:text-base">
                                19 November 2025
                            </p>
                        </div>

                        <div className="font-Montserrat font-medium text-sm mt-2 lg:text-start lg:text-lg lg:italic">
                        "Mantap enak sekali pasti akan mencoba lagi"
                        </div>
                    </div>
                </div>  
                <div className="w-full my-5 flex items-start gap-x-4 lg:flex-col lg:p-6 lg:shadow-xl lg:rounded-lg lg:bg-white">

                    <div className="w-25 bg-gray-200  flex-shrink-0 overflow-hidden lg:w-32 lg:h-32 lg:rounded-full lg:mx-auto">
                        <img src="/placeholdermap.webp" alt="Nama Makanan"className="w-full h-full object-cover"/>
                    </div>

                    <div className="flex flex-col lg:w-full flex-grow l:items-start lg:mt-4">
                        <p className="font-Lora capitalize font-bold text-base text-[#D71515] lg:text-2xl lg:mt-4">
                        Nama Makanan
                        </p>
                        <p className="hidden lg:block font-Montserrat text-gray-500 text-base mt-1">
                        Asal kota, Asal provinsi
                        </p> 
                        <div className="flex items-center lg:justify-between lg:w-full gap-x-2 lg:my-5">
                            <div className="text-yellow-500 flex text-sm lg:text-lg">
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                                <TiStarFullOutline />
                            </div>
                            <p className="text-gray-400 text-sm capitalize lg:text-base">
                                19 November 2025
                            </p>
                        </div>

                        <div className="font-Montserrat font-medium text-sm mt-2 lg:text-start lg:text-lg lg:italic">
                        "Mantap enak sekali pasti akan mencoba lagi"
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}