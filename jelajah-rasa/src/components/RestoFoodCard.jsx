import { MdOutlineLocationOn } from "react-icons/md";

export default function RestoFoodCard ({resto, images}){
    return (
        <>
        {
            <a href={images.mapsResto} className="mt-4 ">
                <div className="flex justify-center  gap-x-4 md:gap-x-10 lg:gap-x-25">
                    <div className="w-full flex-initial lg:w-125">
                        <img src={images.resto1} alt="" className="w-full h-full "/>
                    </div>
                    <div className=" font-Lora " >
                        <div className="font-bold text-lg md:text-2xl lg:text-4xl">
                            {resto.restaurants?.[0].restaurant.name}
                        </div>
                        <div className="flex items-center capitalize ">
                            <MdOutlineLocationOn className="text-base text-[#AAAAAA] md:text-2xl lg:text-4xl"/>
                            <p className="text-xs font-medium md:text-base lg:text-xl">{resto.restaurants?.[0].restaurant.region.name}</p>                                  
                        </div>
                        <div className="font-Montserrat text-xs/3 my-2 md:text-sm/4 lg:hidden">
                            Di Rekomendasikan oleh <span className="text-[#FFBD16] font-medium">{resto.commentSource}</span> <span className="text-[#AAAAAA] ">dan 9 Jurnalis Kuliner lainnya.</span>
                        </div>
                        <div className="hidden lg:flex flex-col font-Montserrat text-lg mt-5">
                            <p className="font-bold">Di Rekomendasikan oleh </p> 
                            <p className="text-[#FFBD16] font-medium">{resto.commentSource} <span className="text-[#AAAAAA]">dan 9 Jurnalis Kuliner lainnya.</span></p> 
                        </div>
                    </div>
                </div>      
                <hr className="text-[#AAAAAA] my-5 md:my-7 lg:hidden"/>
            </a>

        }

        </>

    )
}