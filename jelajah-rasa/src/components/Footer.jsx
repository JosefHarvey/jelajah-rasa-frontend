import { Link } from "react-router-dom";
import Forminput from "./Forminput";
import { useState } from "react";

export default function Footer (){
    const[isModalOpen,setIsModalOpen] = useState(false)
    
    const handleModalOpen =() => {
        setIsModalOpen(true)
    }
    return(
        <div id="Footer" className="bg-[#3A3A3A] text-[#F5F0E8] font-Montserrat flex flex-col px-2 ">
            <div className="flex flex-col items-center ">
                <div className="w-50 mt-5 lg:w-100 lg:mt-11">
                    <img src="/jelajah-rasa-logo.png" alt="" className="w-full h-full object-cover" />
                </div>
                <p className="uppercase text-xs text-[#F5F0E8]/50 mt-1 lg:text-[#F5F0E8] lg:text-xl">
                   jelajahi rasa,kenali negeri 
                </p>
            </div>
            <hr className="text-[#AAAAAA]/15 my-5"/>
            <div className="flex flex-col items-center justify-between gap-y-20 ">
                <div className="flex flex-col items-center text-center">
                    <div className=" ">
                        <p className="font-Lora text-lg capitalize font-bold md:text-2xl lg:text-3xl ">punya cerita rasa dari daerahmu?</p>
                        <p className="text-xs mt-3 md:text-base lg:w-290 ">Warisan kuliner Indonesia tak terhitung jumlahnya. Bantu kami  mendokumentasikan dan membagikan kisah di balik hidangan khas daerah  Anda. Bergabunglah dengan gerakan pelestarian rasa ini.</p>
                    </div>
                    <div className="flex items-center flex-col md:flex-row md:gap-x-10 lg:mt-5 ">
                        <button className="uppercase bg-[#F5F0E8]/5 px-17 py-6 border-1 border-[#F5F0E8]/10 my-5" onClick={() => handleModalOpen(true)}>
                            unggah cerita anda
                        </button>
                        {isModalOpen && <Forminput isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>}
                        <a href="mailto:editorjelajahrasa@gmail.com
                        " className="font-medium lg:font-bold"><span className="text-[#AAAAAA] font-Montserrat font-normal hidden lg:inline">hubungi kami pada </span>editorjelajahrasa@gmail.com</a>
                    </div>
                </div>
                <div className="flex gap-23 items-center text-sm font-medium md:hidden lg:hidden">
                    <Link to={"/About"} >Tentang Kami</Link>
                    <Link to={"/Map"} >Jelajah Peta</Link>
                </div>
            </div>
            <hr className="text-[#AAAAAA]/15 my-5 mb-9 md:hidden lg:hidden"/>
        </div>
    )
}