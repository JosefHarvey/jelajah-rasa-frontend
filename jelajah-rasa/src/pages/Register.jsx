import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx'; // Ikon close
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Ikon untuk password


export default function Register({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });
  
  // State untuk menampilkan/menyembunyikan password
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Data Registrasi:', formData);
    try{
      const response = await fetch("http://localhost:3000/api/auth/register",{
        method: "POST",
        headers: {
                'Content-Type': 'application/json',
            },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          password: formData.password
        })
      })
      if (response.ok) {
            const data = await response.json();
            console.log("Registrasi Berhasil:", data);
        } else {
            console.error("Registrasi Gagal:", response.statusText);
        }
    }
    catch(error){
      console.error("Pendaftaran error:", error);
      setErrorMessage("Terjadi kesalahan. Coba lagi.");
    }
    onClose(); // Menutup modal setelah submit
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative font-sans">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-800 transition-colors">
          <RxCross1 />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold font-Lora text-[#4A3521]">
            Buat Akun
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A9442A]"
            />
          </div>

          {/* Input First & Last Name (dalam satu baris) */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className='w-full md:w-1/2'>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-500 mb-1">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A9442A]"
              />
            </div>
            <div className='w-full md:w-1/2'>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-500 mb-1">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A9442A]"
              />
            </div>
          </div>

          {/* Input Password dengan ikon show/hide */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-500 mb-1">Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A9442A]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          
          {/* Bagian Tombol */}
          <div className="pt-4 space-y-3">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-md font-bold text-white bg-[#A9442A] hover:bg-opacity-90 transition-colors uppercase"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={onClose} // Atau arahkan ke halaman Login
              className="w-full py-3 px-4 rounded-md font-bold text-[#A9442A] border-2 border-[#A9442A] hover:bg-[#A9442A] hover:text-white transition-colors uppercase"
            >
              Return to Log In
            </button>
          </div>
        </form>

        {/* Legal Text */}
        <p className="text-center text-xs text-gray-400 mt-6">
          By creating or logging into an account, you agree to our{' '}
          <Link to="/terms" className="underline">Conditions of Use</Link> and{' '}
          <Link to="/privacy" className="underline">Privacy Policy</Link>.
        </p>

      </div>
    </div>
  );
}