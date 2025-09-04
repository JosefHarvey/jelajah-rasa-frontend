
import { useState } from "react";
import FoodCard from "../components/FoodCard";
import RestoCityCard from "../components/RestoCityCard";

export default function Citypage (){

    
    return(
        <>
            <div className="relative flex items-center justify-center">
                <img src="/placeholdermap.webp" alt="" className="md:h-100 lg:h-125 w-full object-cover"/>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="font-Lora text-white text-2xl font-bold absolute md:text-5xl">
                    Nama Kota
                </div>
            </div>

            <div className="my-5 mx-2 text-[#4A3521]  md:mx-10 md:my-5 lg:mx-20 lg:my-10">
                <div className="flex flex-col items-start lg:shadow-xl lg:shadow-[#AAAAAA] lg:p-9">
                    <div className="text-sm/4 font-Montserrat md:text-base/5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                    </div>
                    <div className="flex justify-around lg:my-10" >
                        <div className="flex-1 flex flex-col">
                            <h2 className="font-Lora text-2xl my-2 font-bold md:text-4xl">
                                Profil Citarasa: <span className="text-[#D71515]">Nama Daerah</span>
                            </h2>
                            <div className="text-sm/4 font-Montserrat md:text-base/5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                            </div>    
                        </div>
                        <div className="hidden h-60  lg:block ">
                            <img src="/placeholdermap.webp" alt="" className="w-full h-full"/>
                        </div>
                        
                    </div>
                    
                </div>
                <hr className="my-5 text-[#AAAAAA] lg:hidden"/>
                <div className="flex flex-col items-start text-[#4A3521]">
                    <h3 className="font-Lora text-xl my-2 font-bold md:text-2xl lg:self-center lg:text-4xl lg:my-10">
                        Wajib Dicoba dari <span className="text-[#D71515]">Nama Daerah</span>
                    </h3>
                    <div className="grid w-full grid-cols-1 place-content-between gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                    </div>
                    <div className="border-b-2 border-[#D71515] uppercase font-Lora font-bold self-center mt-4 text-lg">lebih banyak</div>           
                </div>
                <div className="text-[#4A3521] my-5 flex flex-col">
                    <div className="font-Lora font-bold text-xl md:text-2xl lg:text-3xl lg:self-center">Tempat Makan Wajib di <span className="text-[#D71515]">Nama Daerah</span></div>
                    <RestoCityCard />
                    <div className="hidden lg:block border-b-2 border-[#D71515] uppercase font-Lora font-bold self-center mt-4 text-lg">lebih banyak</div>                  
                </div>
            </div>
        </>
    )
}