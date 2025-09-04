import { Link } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { PiCowBold } from "react-icons/pi";

export default function FoodCard (){
    return(
        <Link to="/Foodpage" className="row-span-1 bg-white">
                            <img src="/placeholdermap.webp" alt="" />
                            <div className="px-2 py-4 md:p-4">
                                <div className="font-Lora font-bold uppercase text-lg md:text-xl lg:text-2xl">Nama Makanan</div>
                                <div className="font-Lora font-bold text-sm flex items-center gap-x-1 md:text-base lg:text-lg">
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
                        </Link>
       
    )
}