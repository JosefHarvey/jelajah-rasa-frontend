import { TiStarFullOutline } from "react-icons/ti";
import { PiCowBold } from "react-icons/pi";

export default function Citypage (){
    return(
        <>
            <div className="relative flex items-center justify-center">
                <img src="/placeholdermap.webp" alt="" className="md:h-100 lg:h-125 w-full object-cover"/>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="font-Lora text-white text-2xl font-bold absolute">
                    Nama Kota
                </div>
            </div>

            <div className="my-5 mx-2 text-[#4A3521]  md:mx-10 md:my-5 lg:mx-20 lg:my-10">
                <div className="flex flex-col items-start">
                    <div className="text-sm/4 font-Montserrat">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                    </div>
                    <h2 className="font-Lora text-2xl my-2 font-bold">
                        Profil Citarasa: <span className="text-[#D71515]">Nama Daerah</span>
                    </h2>
                    <div className="text-sm/4 font-Montserrat">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
                    </div>
                </div>
                <hr className="my-5 text-[#AAAAAA]"/>
                <div className="flex flex-col items-start text-[#4A3521]">
                    <h3 className="font-Lora text-xl my-2 font-bold">
                        Wajib Dicoba dari <span className="text-[#D71515]">Nama Daerah</span>
                    </h3>
                    <div className="grid w-full grid-cols-2 place-content-between gap-4 ">
                        <div className="row-span-1 bg-white">
                            <img src="/placeholdermap.webp" alt="" />
                            <div className="px-2 py-4">
                                <div className="font-Lora font-bold uppercase text-lg">Nama Makanan</div>
                                <div className="font-Lora font-bold text-sm flex items-center gap-x-1">
                                    <div>5.0</div>
                                    <div className="flex text-[#FFBD16]">
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                    </div>
                                </div>
                                <div className="mt-9 flex justify-around">
                                    <PiCowBold />
                                    <PiCowBold />
                                    <PiCowBold />
                                    <PiCowBold />
                                </div>
                            </div>
                        </div>
                        <div className="row-span-1 bg-white">
                            <img src="/placeholdermap.webp" alt="" />
                            <div className="px-2 py-4">
                                <div className="font-Lora font-bold uppercase text-lg">Nama Makanan</div>
                                <div className="font-Lora font-bold text-sm flex items-center gap-x-1">
                                    <div>5.0</div>
                                    <div className="flex text-[#FFBD16]">
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                    </div>
                                </div>
                                <div className="mt-9 flex justify-around">
                                    <PiCowBold />
                                    <PiCowBold />
                                    <PiCowBold />
                                    <PiCowBold />
                                </div>
                            </div>
                        </div>
                        <div className="row-span-1 bg-white">
                            <img src="/placeholdermap.webp" alt="" />
                            <div className="px-2 py-4">
                                <div className="font-Lora font-bold uppercase text-lg">Nama Makanan</div>
                                <div className="font-Lora font-bold text-sm flex items-center gap-x-1">
                                    <div>5.0</div>
                                    <div className="flex text-[#FFBD16]">
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                    </div>
                                </div>
                                <div className="mt-9 flex justify-around">
                                    <PiCowBold />
                                    <PiCowBold />
                                    <PiCowBold />
                                    <PiCowBold />
                                </div>
                            </div>
                        </div>
                        <div className="row-span-1 bg-white">
                            <img src="/placeholdermap.webp" alt="" />
                            <div className="px-2 py-4">
                                <div className="font-Lora font-bold uppercase text-lg">Nama Makanan</div>
                                <div className="font-Lora font-bold text-sm flex items-center gap-x-1">
                                    <div>5.0</div>
                                    <div className="flex text-[#FFBD16]">
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                    </div>
                                </div>
                                <div className="mt-9 flex justify-around">
                                    <PiCowBold />
                                    <PiCowBold />
                                    <PiCowBold />
                                    <PiCowBold />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    )
}