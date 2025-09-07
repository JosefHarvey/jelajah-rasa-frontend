import { MdOutlineLocationOn } from "react-icons/md";

export default function RestoCityCard({cityData}){
    return(
        <>

        <div key={cityData.id}>
            <div className=" flex gap-4 overflow-auto lg:hidden">
        {
        cityData.restoWithImages.map(restoItems => ( 
            <a href={restoItems.mapUrl} className="flex flex-col items-start justify-center w-80 my-4 flex-shrink-0 bg-white">
                    <img src={restoItems.image} alt="" className="w-full h-full object-cover"/>
                    <div className="px-2 py-4">
                        <div className="font-Lora text-[#D71515] font-bold uppercase text-xl">{restoItems.name}</div>
                        <div className="mt-3 flex gap-x-1 items-center">
                            <MdOutlineLocationOn className="text-4xl"/> 
                            <div className="text-sm/4 font-Montserrat ">{restoItems.maps}</div>
                        </div>
                    </div>
            </a>
        ))
        
        }


        </div>
            <div className="hidden lg:grid w-full grid-cols-4 place-content-between gap-4 ">
        {
        cityData.restoWithImages.map(restoItems => (
                 <a href={restoItems.mapUrl} className="flex flex-col items-start justify-center my-4 flex-shrink-0 bg-white row-span-1">
                    <img src={restoItems.image} alt="" className="w-full h-full object-cover"/>
                    <div className="p-4">
                    <div className="font-Lora text-[#D71515] font-bold uppercase text-2xl">{restoItems.name}</div>
                        <div className="mt-3 flex gap-x-1 items-center">
                            <MdOutlineLocationOn className="text-6xl"/> 
                            <div className="text-base/4 font-Montserrat">{restoItems.maps}</div>
                        </div>
                    </div>
                </a>
        ))
        }


            </div>
        </div>


        </>
    )
}