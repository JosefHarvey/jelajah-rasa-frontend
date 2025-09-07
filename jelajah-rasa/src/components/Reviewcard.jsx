import { Link } from "react-router-dom";
import Averagerating from "./Averagerating";

export default function ReviewCard({ review}) {
    return (
        <Link to={`/Foodpage/${review.foodId}`} className="w-full my-5 flex items-start gap-x-4 lg:flex-col lg:p-6 lg:shadow-xl lg:rounded-lg lg:bg-white transition-transform hover:scale-105">
            <div className="w-24 h-24 bg-gray-200 flex-shrink-0 overflow-hidden rounded-lg lg:w-full lg:h-48 lg:rounded-md">
                <img src={"/images/landingPage/rendang1.jpg"} alt={review.foodName} className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-col flex-grow min-w-0 lg:w-full lg:mt-4">
                <p className="font-Lora capitalize font-bold text-base text-[#D71515] lg:text-xl truncate">
                    {review.foodName}
                </p>
                <div className="flex items-center gap-x-2 my-1">
                    <div className="text-yellow-500 flex text-sm lg:text-base">
                        <Averagerating rating={review.userRating} />
                    </div>
                    <p className="text-gray-400 text-xs capitalize lg:text-sm">
                        {new Date(review.reviewedAt).toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                </div>
                <div className="font-Montserrat font-medium text-sm mt-1 lg:text-start lg:text-base lg:italic line-clamp-2">
                    "{review.userComment}"
                </div>
            </div>
        </Link>
    );
}