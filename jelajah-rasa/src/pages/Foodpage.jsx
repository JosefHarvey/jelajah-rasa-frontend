import { Link } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { useState } from "react";
import RestoFoodCard from "../components/RestoFoodCard";
import Comment from "../components/Comment";
import Commentform from "../components/CommentForm";

export default function Foodpage (){
    const [activeClick, setActiveSection] = useState('overview')
    const[isModalOpen,setIsModalOpen] = useState(false)
    
    const handleModalOpen =() => {
        setIsModalOpen(true)
    }
    const handleNavClick = (section) => {
        setActiveSection(section)
    }
    return(
        <>
            <div className="lg:hidden">
                <img src="/placeholdermap.webp" alt="" className="md:h-100 lg:h-125 w-full object-cover"/>
            </div>

            <div className="my-5 mx-2 text-[#4A3521] font-Montserrat md:mx-10 md:my-5 lg:mx-20 lg:my-10 ">
                <div className="flex justify-between lg:shadow-xl/lg  lg:p-25 lg:flex-col ">
                        <div className="hidden lg:block w-full mb-25">
                            <img src="/placeholdermap.webp" alt="" className="h-205 w-full object-cover"/>
                        </div>
                        <div className="lg:flex lg:justify-between items-center">
                            <div className="font-Lora text-2xl capitalize font-bold text-[#D71515] md:text-4xl lg:text-5xl">
                                nama makanan
                            </div>
                            <Link to="" className="capitalize md:text-xl">
                                asal kota
                            </Link>
                        </div>
                        <div id="overview" className="hidden lg:flex lg:justify-between items-start gap-30 my-20">
                            <div className="max-w-4xl mx-auto px-4 ">
                                <header className="text-center my">
                                    <p className="text-lg max-w-2xl mx-auto text-gray-600">
                                        Hidangan daging kaya rempah asal Minangkabau yang dinobatkan sebagai salah satu makanan terlezat di dunia.
                                    </p>
                                </header>
                                <figure className="my-12">
                                    <img src="/rendangImg.jpg" alt="Sepiring Rendang disajikan dengan nasi hangat" className="w-full h-96 object-cover rounded-lg shadow-xl" />
                                    <figcaption className="text-center text-sm text-gray-500 mt-2">
                                        Rendang kering yang dimasak sempurna dapat bertahan hingga berminggu-minggu.
                                    </figcaption>
                                </figure>
                                <blockquote className="border-l-4 border-[#D71515] pl-6 py-4 my-12 italic text-xl md:text-2xl font-lora text-gray-700">
                                    "Pada 2018, rendang secara resmi ditetapkan sebagai salah satu dari lima hidangan nasional Indonesia."
                                </blockquote>
                                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
                                    <article className="lg:col-span-2 space-y-6 text-base leading-relaxed">
                                        <h2 className="font-lora text-3xl font-bold border-b-2 border-[#D71515] pb-2">Kandungan dan Cara Memasak</h2>
                                        <p>
                                            Rendang adalah masakan yang kaya akan kandungan bumbu rempah. Selain bahan dasar daging, rendang menggunakan santan kelapa (karambia), dan campuran dari berbagai bumbu khas yang dihaluskan di antaranya cabai (lado), serai, lengkuas, kunyit, jahe, bawang putih, bawang merah, dan aneka bumbu lainnya yang biasanya disebut sebagai pemasak.
                                        </p>
                                        <p>
                                            Keunikan rendang adalah penggunaan bumbu-bumbu alami, yang bersifat antiseptik dan membunuh bakteri patogen sehingga bersifat sebagai bahan pengawet alami. Bawang putih, bawang merah, jahe, dan lengkuas diketahui memiliki aktivitas antimikroba yang kuat. Tidak mengherankan jika rendang dapat disimpan seminggu hingga empat minggu.
                                        </p>
                                        <p>
                                            Proses memasak rendang asli dapat menghabiskan waktu berjam-jam (biasanya sekitar empat jam), karena itulah memasak rendang memerlukan waktu dan kesabaran. Potongan daging dimasak bersama bumbu dan santan dalam panas api yang tepat, diaduk pelan-pelan hingga santan dan bumbu terserap daging. Setelah mendidih, apinya dikecilkan dan terus diaduk hingga santan mengental dan menjadi kering. Proses memasak ini dikenal dalam seni kuliner modern dengan istilah 'karamelisasi'.
                                        </p>
                                    </article>

                                    <aside className="mt-8 lg:mt-0 p-6 bg-white rounded-lg shadow-lg h-fit">
                                        <h3 className="font-lora text-2xl font-bold mb-4">Fakta Singkat</h3>
                                        <ul className="space-y-4 text-sm">
                                            <li className="flex items-start">
                                                <span className="font-bold text-[#A9442A] w-20 flex-shrink-0">Asal:</span>
                                                <span>Minangkabau, Sumatera Barat</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="font-bold text-[#A9442A] w-20 flex-shrink-0">Jenis:</span>
                                                <span>Lauk pauk (daging)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="font-bold text-[#A9442A] w-20 flex-shrink-0">Ciri Khas:</span>
                                                <span>Proses masak lambat (merendang), kaya rempah, dan awet.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="font-bold text-[#A9442A] w-20 flex-shrink-0">Tahapan:</span>
                                                <span>Gulai → Kalio → Rendang</span>
                                            </li>
                                        </ul>
                                    </aside>
                                </div>
                                <article className="my-16 space-y-6 text-base leading-relaxed">
                                    <h2 className="font-lora text-3xl font-bold border-b-2 border-[#D71515] pb-2">Sejarah dan Makna Rendang</h2>
                                    <p>
                                        Asal-usul rendang ditelusuri berasal dari tanah Minangkabau. Bagi masyarakat Minang, rendang sudah ada sejak dahulu dan telah menjadi masakan tradisi yang dihidangkan dalam berbagai acara adat. Sejarawan menduga, rendang telah menjadi masakan yang tersebar luas sejak orang Minang mulai merantau dan berlayar ke Malaka untuk berdagang pada awal abad ke-16. Hal ini karena rendang kering sangat awet, tahan disimpan hingga berbulan lamanya, sehingga tepat dijadikan bekal.
                                    </p>
                                    
                                    <div className="p-6 bg-white rounded-lg shadow-md my-8">
                                        <h3 className="font-lora text-2xl font-bold mb-2 text-center text-[#D71515]">Filosofi Empat Bahan Utama</h3>
                                        <p className="text-center text-sm mb-4 text-gray-600">
                                            Rendang melambangkan musyawarah dan mufakat dalam masyarakat Minang.
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                                            <div>
                                                <p className="font-bold">Dagiang (Daging)</p>
                                                <p className="text-gray-500">Niniak Mamak (Pemimpin Adat)</p>
                                            </div>
                                            <div>
                                                <p className="font-bold">Karambia (Kelapa)</p>
                                                <p className="text-gray-500">Cadiak Pandai (Intelektual)</p>
                                            </div>
                                            <div>
                                                <p className="font-bold">Lado (Cabai)</p>
                                                <p className="text-gray-500">Alim Ulama (Pemuka Agama)</p>
                                            </div>
                                            <div>
                                                <p className="font-bold">Pemasak (Bumbu)</p>
                                                <p className="text-gray-500">Masyarakat Minang</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p>
                                        Dalam tradisi Minangkabau, rendang adalah hidangan yang wajib disajikan dalam setiap perayaan adat, seperti berbagai upacara adat Minangkabau, kenduri, atau menyambut tamu kehormatan. Ketenarannya di seluruh dunia dibuktikan saat dinobatkan sebagai hidangan peringkat pertama dalam daftar World's 50 Most Delicious Foods versi CNN International pada tahun 2011.
                                    </p>
                                </article>

                            </div>
                            <div className="hidden lg:block max-w-125  flex-1">
                                <img src="/placeholdermap.webp" alt="" className="w-full object-cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-start lg:gap-y-5">
                            <div className="font-Lora font-bold flex  gap-1 items-center md:text-xl lg:text-4xl">
                                <p>5.0</p>
                                <div className="text-[#FFBD16] flex">
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                    <TiStarFullOutline />
                                </div>
                            </div>
                            <button className="border uppercase text-sm px-4 rounded-2xl text-[#aaaaaa] md:text-base">
                                beri nilai
                            </button>
                        </div>     
                </div>
                <hr className="text-[#AAAAAA] my-5 lg:hidden"/>
                <div className="font-Lora flex justify-between sticky top-12 bg-[#F5F0E8] py-2 md:text-lg lg:text-2xl lg:justify-center lg:gap-x-15 lg:mt-20">
                    <a href={"#overview"} onClick={() => handleNavClick('overview')} className={`transition-all duration-300 ${activeClick === 'overview'? 'border-b-2 border-[#D71515] font-bold py-1' :''}`}>Pengenalan</a>
                    <a href={"#Tempat Mencicipi"} onClick={() => handleNavClick('Tempat Mencicipi')} className={`transition-all duration-300 ${activeClick === 'Tempat Mencicipi'? 'border-b-2 border-[#D71515] font-bold py-1' :''}`}>Tempat Mencicipi</a>
                    <a href={"#komentar"} onClick={() => handleNavClick('komentar')} className={`transition-all duration-300 ${activeClick === 'komentar'? 'border-b-2 border-[#D71515] font-bold py-1' :''}`}>Komentar</a>
                </div>
                <div id="overview" className=" text-sm/4 my-2 flex flex-col gap-y-2 md:text-base/5 lg:hidden">
                    <div className="max-w-4xl mx-auto px-4 ">
                                <header className="text-center my">
                                    <p className="text-lg max-w-2xl mx-auto text-gray-600">
                                        Hidangan daging kaya rempah asal Minangkabau yang dinobatkan sebagai salah satu makanan terlezat di dunia.
                                    </p>
                                </header>
                                <figure className="my-12">
                                    <img src="/rendangImg.jpg" alt="Sepiring Rendang disajikan dengan nasi hangat" className="w-full h-96 object-cover rounded-lg shadow-xl" />
                                    <figcaption className="text-center text-sm text-gray-500 mt-2">
                                        Rendang kering yang dimasak sempurna dapat bertahan hingga berminggu-minggu.
                                    </figcaption>
                                </figure>
                                <blockquote className="border-l-4 border-[#D71515] pl-6 py-4 my-12 italic text-xl md:text-2xl font-lora text-gray-700">
                                    "Pada 2018, rendang secara resmi ditetapkan sebagai salah satu dari lima hidangan nasional Indonesia."
                                </blockquote>
                                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
                                    <article className="lg:col-span-2 space-y-6 text-base leading-relaxed">
                                        <h2 className="font-lora text-3xl font-bold border-b-2 border-[#D71515] pb-2">Kandungan dan Cara Memasak</h2>
                                        <p>
                                            Rendang adalah masakan yang kaya akan kandungan bumbu rempah. Selain bahan dasar daging, rendang menggunakan santan kelapa (karambia), dan campuran dari berbagai bumbu khas yang dihaluskan di antaranya cabai (lado), serai, lengkuas, kunyit, jahe, bawang putih, bawang merah, dan aneka bumbu lainnya yang biasanya disebut sebagai pemasak.
                                        </p>
                                        <p>
                                            Keunikan rendang adalah penggunaan bumbu-bumbu alami, yang bersifat antiseptik dan membunuh bakteri patogen sehingga bersifat sebagai bahan pengawet alami. Bawang putih, bawang merah, jahe, dan lengkuas diketahui memiliki aktivitas antimikroba yang kuat. Tidak mengherankan jika rendang dapat disimpan seminggu hingga empat minggu.
                                        </p>
                                        <p>
                                            Proses memasak rendang asli dapat menghabiskan waktu berjam-jam (biasanya sekitar empat jam), karena itulah memasak rendang memerlukan waktu dan kesabaran. Potongan daging dimasak bersama bumbu dan santan dalam panas api yang tepat, diaduk pelan-pelan hingga santan dan bumbu terserap daging. Setelah mendidih, apinya dikecilkan dan terus diaduk hingga santan mengental dan menjadi kering. Proses memasak ini dikenal dalam seni kuliner modern dengan istilah 'karamelisasi'.
                                        </p>
                                    </article>

                                    <aside className="mt-8 lg:mt-0 p-6 bg-white rounded-lg shadow-lg h-fit">
                                        <h3 className="font-lora text-2xl font-bold mb-4">Fakta Singkat</h3>
                                        <ul className="space-y-4 text-sm">
                                            <li className="flex items-start">
                                                <span className="font-bold text-[#A9442A] w-20 flex-shrink-0">Asal:</span>
                                                <span>Minangkabau, Sumatera Barat</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="font-bold text-[#A9442A] w-20 flex-shrink-0">Jenis:</span>
                                                <span>Lauk pauk (daging)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="font-bold text-[#A9442A] w-20 flex-shrink-0">Ciri Khas:</span>
                                                <span>Proses masak lambat (merendang), kaya rempah, dan awet.</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="font-bold text-[#A9442A] w-20 flex-shrink-0">Tahapan:</span>
                                                <span>Gulai → Kalio → Rendang</span>
                                            </li>
                                        </ul>
                                    </aside>
                                </div>
                                <article className="my-16 space-y-6 text-base leading-relaxed">
                                    <h2 className="font-lora text-3xl font-bold border-b-2 border-[#D71515] pb-2">Sejarah dan Makna Rendang</h2>
                                    <p>
                                        Asal-usul rendang ditelusuri berasal dari tanah Minangkabau. Bagi masyarakat Minang, rendang sudah ada sejak dahulu dan telah menjadi masakan tradisi yang dihidangkan dalam berbagai acara adat. Sejarawan menduga, rendang telah menjadi masakan yang tersebar luas sejak orang Minang mulai merantau dan berlayar ke Malaka untuk berdagang pada awal abad ke-16. Hal ini karena rendang kering sangat awet, tahan disimpan hingga berbulan lamanya, sehingga tepat dijadikan bekal.
                                    </p>
                                    
                                    <div className="p-6 bg-white rounded-lg shadow-md my-8">
                                        <h3 className="font-lora text-2xl font-bold mb-2 text-center text-[#D71515]">Filosofi Empat Bahan Utama</h3>
                                        <p className="text-center text-sm mb-4 text-gray-600">
                                            Rendang melambangkan musyawarah dan mufakat dalam masyarakat Minang.
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                                            <div>
                                                <p className="font-bold">Dagiang (Daging)</p>
                                                <p className="text-gray-500">Niniak Mamak (Pemimpin Adat)</p>
                                            </div>
                                            <div>
                                                <p className="font-bold">Karambia (Kelapa)</p>
                                                <p className="text-gray-500">Cadiak Pandai (Intelektual)</p>
                                            </div>
                                            <div>
                                                <p className="font-bold">Lado (Cabai)</p>
                                                <p className="text-gray-500">Alim Ulama (Pemuka Agama)</p>
                                            </div>
                                            <div>
                                                <p className="font-bold">Pemasak (Bumbu)</p>
                                                <p className="text-gray-500">Masyarakat Minang</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p>
                                        Dalam tradisi Minangkabau, rendang adalah hidangan yang wajib disajikan dalam setiap perayaan adat, seperti berbagai upacara adat Minangkabau, kenduri, atau menyambut tamu kehormatan. Ketenarannya di seluruh dunia dibuktikan saat dinobatkan sebagai hidangan peringkat pertama dalam daftar World's 50 Most Delicious Foods versi CNN International pada tahun 2011.
                                    </p>
                                </article>

                            </div>
                </div>
                <div id="Tempat Mencicipi" className="">
                    <div className="flex flex-col items-center font-Lora font-bold md:my-5 lg:my-10">
                        <div className="text-base md:text-lg lg:text-2xl">Tempat Mencicipi</div>
                        <div className="uppercase text-2xl md:text-3xl lg:text-4xl lg:mt-2">
                            <span className="text-[#D71515]">nama makanan</span> terbaik !
                        </div>
                    </div>
                    <div className="my-4 flex flex-col items-start ">
                        <RestoFoodCard />
                        <RestoFoodCard />
                        <RestoFoodCard />
                        <RestoFoodCard />

                    </div>
                </div>
                <div id="komentar" className="">
                    <div className="font-Lora flex flex-col ">
                        <div className="font-bold uppercase text-2xl self-center md:text-3xl lg:text-4xl lg:mt-10">apa kata mereka ?</div>
                    </div>
                    <div className="lg:flex lg:gap-20 lg:items-start">   
                        <div className="flex justify-between flex-col md:mt-5 lg:flex-none lg:w-125 lg:shadow-xl shadow-[#AAAAAA] lg:p-11">
                            <p className="hidden lg:block font-lora font-bold text-3xl capitalize mb-2">nilai keseluruhan</p>
                            <div className="flex justify-between">
                                <div className="flex gap-x-1 items-center my-2">
                                    <p className="text-2xl font-bold md:text-3xl">5.0</p>
                                    <div className="text-[#FFBD16] flex">
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                        <TiStarFullOutline />
                                    </div>
                                </div>
                                <div className="flex gap-x-2 items-center">
                                    <p className="uppercase font-bold text-sm md:text-base">Komentar</p>
                                    <p className="text-[#AAAAAA] md:text-lg">5</p>
                                </div>
                            </div>

                            <button onClick={() => handleModalOpen(true)} className="font-Montserrat text-sm text-[#AAAAAA] text-start border w-full py-1 px-3 rounded-2xl my-3 md:text-base md:py-3 md:px-5 md:rounded-3xl" >Berikan Pendapatmu!</button>
                            {isModalOpen && <Commentform isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>}
                        </div>   
                               
                        <div className="my-2 md:mt-5  w-full ">
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}