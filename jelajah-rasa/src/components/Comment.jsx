import { TiStarFullOutline } from "react-icons/ti";
import { IoPersonCircleSharp } from "react-icons/io5";
export default function Comment (){
    return (
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
    )
}