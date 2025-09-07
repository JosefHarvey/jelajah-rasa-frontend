import { MdOutlineLocationOn } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";

export default function ValueProps() {
    const valueProps = [
        {
            icon: <MdOutlineLocationOn className="text-7xl text-[#D71515]"/>,
            title: "Jelajahi Peta Budaya",
            description: "Temukan kekayaan kuliner berdasarkan asal daerahnya, dari Sabang sampai Merauke.",
            href: "#map"
        },
        {
            icon: <IoBookOutline className="text-7xl text-[#D71515]"/>,
            title: "Ungkap Cerita & Sejarah",
            description: "Setiap hidangan memiliki latar belakang dan makna yang kami kupas tuntas.",
            href: "#article"
        },
        {
            icon: <GrGroup className="text-7xl text-[#D71515]"/>,
            title: "Berkontribusi & Berbagi",
            description: "Jadilah bagian dari komunitas untuk ikut melestarikan resep warisan.",
            href: "#Footer"
        }
    ];

    return (
        <div className="w-full my-10 flex flex-nowrap overflow-x-auto gap-4 px-4 md:grid md:grid-cols-3 md:gap-8 md:px-0 md:overflow-visible">
            {valueProps.map((prop) => (
                <a href={prop.href} key={prop.title} className="flex flex-col items-center text-center p-4 w-72 flex-shrink-0 md:w-full">
                    {prop.icon}
                    <p className="text-2xl font-bold font-Lora text-[#D71515] mt-2">
                        {prop.title}
                    </p>
                    <p className="font-Montserrat text-sm text-[#4A3521] mt-2">
                        {prop.description}
                    </p>
                </a>
            ))}
        </div>
    );
}
