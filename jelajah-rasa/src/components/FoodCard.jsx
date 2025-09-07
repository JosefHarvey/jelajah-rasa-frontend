import { Link } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { PiCowBold } from "react-icons/pi";
import Averagerating from "./Averagerating";

export default function FoodCard ({cityData}){
    return(
        <>
            {console.log(cityData)}
            
                <Link to={`/Foodpage/${cityData.id}`} className="row-span-1 bg-white" key={cityData.id}>
                    {
                        cityData.foodsWithImages.map(foodItems => (
                        <img src={foodItems.image} alt="" />
                        ))
                    }

                        {
                            cityData.foods.map(food => (
                                 <div className="px-2 py-4 md:p-4">
                                <div className="font-Lora font-bold uppercase text-lg md:text-xl lg:text-2xl">{food.name}</div>
                                <div className="font-Lora font-bold text-sm flex items-center gap-x-1 md:text-base lg:text-lg">
                                    <div>{food.averageRating}</div>
                                    <div className="flex text-[#FFBD16]">
                                        <Averagerating rating={food.averageRating}/>
                                    </div>
                                </div>
                            </div>
                            ))
                        }    
                           
                </Link>


        </>

       
    )
}