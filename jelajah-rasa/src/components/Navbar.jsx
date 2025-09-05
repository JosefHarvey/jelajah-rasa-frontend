import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlinePersonOutline } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
import Forminput from "./Forminput";
import Register from "../pages/Register";
import Login from "../pages/Login";


export default function Navbar(){
    const [user,setUser] = useState(null)
    const[isMenuOpen, setIsMenuOpen] = useState(false)
    const[isModalOpen,setIsModalOpen] = useState(false)
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const navLinks = [
        { href: "/Map", title: "Peta"},
        { href: "#", title: "Tentang Kami"}
    ]
    
    const handleModalOpen =() => {
        setIsModalOpen(true)
    }

        const switchToRegister = () => {
        setIsLoginOpen(false);
        setIsRegisterOpen(true);
    }



    return(
        <>
            <div className="sticky top-0  z-500 bg-[#F5F0E8]">
                <div className="font-Lora flex justify-between items-center pl-[8px] pr-[12px]  text-[#4A3521] shadow-lg md:px-10 ">
                    <button onClick={() => setIsMenuOpen(true)} className="text-xl text-[#AAAAAA] md:hidden">
                        <RxHamburgerMenu />
                    </button>
                    <Link to={"/"} className="h-[50px] ">
                        <img src="/jelajah-rasa-logo.png" className="w-full h-full"/>
                    </Link>
                    <nav className="hidden md:flex font-Lora gap-10">
                        {navLinks.map((link) => (
                        <Link 
                            key={link.title}
                            to={link.href}
                            className=""
                        >
                            {link.title}
                        </Link>
                    ))}
                    </nav>
                    <div className="flex md:gap-2">
                        <p className="hidden md:block capitalize">masuk</p>
                        <button className="text-xl text-[#AAAAAA] " onClick={() => setIsLoginOpen(true)}>
                            <MdOutlinePersonOutline />
                        </button>
                        <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} onSwitchToRegister={switchToRegister}/>
                        <Register isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}/>
                    </div>

                </div>
            </div>

            <div
                className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-[#F5F0E8] z-1000 py-[40px] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
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
                        <button className=" border border-[#AAAAAA]/20 uppercase text-md text-[#AAAAAA] px-6 py-7 font-medium" onClick={() => handleModalOpen(true)}>
                            unggah cerita anda
                        </button> 
                        {isModalOpen && <Forminput isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>}     
                   </div>
                     
                   <a href="mailto:abcdefgh123@gmail.com" className="mx-10 text-xl text-[#4A3521] font-medium">
                    abcdefgh123@gmail.com
                   </a>
                    
               </div>
            </div>
        </>
    )
}