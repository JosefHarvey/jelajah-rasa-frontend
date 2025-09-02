import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import ReactDOM from 'react-dom';

export default function Forminput ({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    namaMakanan: '',
    kota: '',
    provinsi: '',
    komentar: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data yang Dikirim:', formData);
    // Di sini Anda akan menambahkan logika untuk mengirim data ke backend
    onClose(); 
  };
  

  if (!isOpen) return null;

  return ReactDOM.createPortal(

    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-[#F5F0E8] p-6 md:p-8 rounded-lg shadow-xl w-full max-w-lg relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-800 transition-colors">
          <RxCross1 />
        </button>

        <div className="text-center">
          <h2 className="font-Lora font-bold text-2xl md:text-3xl text-[#4A3521]">
            Kirimkan cerita Anda
          </h2>
          <p className="font-sans text-sm text-gray-500 mt-2">
            atau hubungi kami langsung di <a href="mailto:abcdefgh123@gmail.com" className="underline">abcdefgh123@gmail.com</a>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Input Nama Makanan */}
          <div>
            <input 
              type="text" 
              name="namaMakanan"
              value={formData.namaMakanan}
              onChange={handleChange}
              placeholder="Nama Makanan (Contoh: Ayam Betutu)"
              className="w-full p-3 border border-gray-300 rounded-md font-sans focus:ring-2 focus:ring-[#A9442A] focus:border-transparent outline-none"
              required
            />
          </div>

          {/* Input Kota & Provinsi (dalam satu baris) */}
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              name="kota"
              value={formData.kota}
              onChange={handleChange}
              placeholder="Asal Kota"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md font-sans focus:ring-2 focus:ring-[#A9442A] focus:border-transparent outline-none"
              required
            />
            <select
              name="provinsi"
              value={formData.provinsi}
              onChange={handleChange}
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md font-sans focus:ring-2 focus:ring-[#A9442A] focus:border-transparent outline-none"
              required
            >
              <option value="">Pilih Provinsi</option>
              <option value="Bali">Bali</option>
              <option value="Jawa Barat">Jawa Barat</option>
              <option value="DKI Jakarta">DKI Jakarta</option>
              {/* Tambahkan provinsi lainnya di sini */}
            </select>
          </div>
          
          {/* Input Komentar/Cerita */}
          <div>
            <textarea 
              name="komentar"
              value={formData.komentar}
              onChange={handleChange}
              placeholder="Komentar atau cerita Anda..."
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md font-sans focus:ring-2 focus:ring-[#A9442A] focus:border-transparent outline-none"
            ></textarea>
          </div>

          {/* Tombol Submit */}
          <button 
            type="submit"
            className="w-full bg-[#A9442A] text-white py-3 rounded-md font-bold uppercase hover:bg-opacity-90 transition-colors"
          >
            Kirim
          </button>
        </form>

      </div>
    </div>,
    document.getElementById('modal-root')
    )
}