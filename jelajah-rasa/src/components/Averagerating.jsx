import { TiStarOutline,TiStarHalfOutline,TiStarFullOutline } from "react-icons/ti";
export default function Averagerating ({rating}){
    const stars = Array.from({length: 5}, (_,index) => {
        const starNumber = index + 1

        if (rating >= starNumber){
            return<TiStarFullOutline key={index}/>
        }
        else if(rating >= starNumber - 0.5){
            return <TiStarHalfOutline key={index}/>
        }
        else{
            return <TiStarOutline key={index}/>
        }
    })
    return(
        <div className="text-[#FFBD16] flex">
            {stars}
        </div>
    )
}