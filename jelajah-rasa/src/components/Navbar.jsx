import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

export default function Navbar(){
    const[isMenuOpen, setIsMenuOpen] = useState(false)
    const navLinks = [
        { href: "#", title: "Peta"},
        { href: "#", title: "Tentang Kami"}
    ]

    return(
        <>
            <div className="navbar sticky top-0">
                <div className="font-Lora flex justify-between items-center pl-[8px] pr-[12px]  text-[#4A3521] shadow-lg md:px-10 ">
                    <button onClick={() => setIsMenuOpen(true)} className="text-xl text-[#AAAAAA] md:hidden">
                        <RxHamburgerMenu />
                    </button>
                    <div className="h-[50px] ">
                        <img src="/jelajah-rasa-logo.png" className="w-full h-full"/>
                    </div>
                    <nav className="hidden md:flex font-Lora gap-10">
                        {navLinks.map((link) => (
                        <a 
                            key={link.title}
                            href={link.href}
                            className=""
                        >
                            {link.title}
                        </a>
                    ))}
                    </nav>
                    <div className="flex md:gap-2">
                        <p className="hidden md:block capitalize">masuk</p>
                        <button className="text-xl text-[#AAAAAA] ">
                            <MdOutlinePersonOutline />
                        </button>
                    </div>

                </div>
            </div>

            <div
                className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-[#F5F0E8] z-50 py-[40px] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-end px-5 mb-10">
                    <button onClick={() => setIsMenuOpen(false)} className="text-2xl text-[#AAAAAA] ">
                        <RxCross1 />
                    </button>
                </div>
               
               <div className="flex flex-col">
                    <div className="w-[200px] pl-[8px] mb-10">
                        <img src="/jelajah-rasa-logo.png" className="w-full h-full"/>
                    </div>
                    <hr className="text-[#AAAAAA]/50 mb-10" />

                    <nav className="flex flex-col">
                    {navLinks.map((link) => (
                        <a 
                            key={link.title}
                            href={link.href}
                            className="font-Montserrat text-xl  py-5 px-10"
                        >
                            {link.title}
                        </a>
                    ))}
                    </nav>

                   <div className="mx-10 mt-5 mb-10">
                        <button className=" border border-[#AAAAAA]/20 uppercase text-md text-[#AAAAAA] px-6 py-7 font-medium">
                            unggah cerita anda
                        </button>    
                   </div>

                   <div className="mx-10 text-xl text-[#4A3521] font-medium">
                    abcdefgh123@gmail.com
                   </div>
                    
               </div>
            </div>
        </>
    )
}