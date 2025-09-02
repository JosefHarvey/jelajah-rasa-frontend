import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login ({ isOpen, onClose, onSwitchToRegister }) {
    const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Login:', formData);
    // Logika untuk mengirim data login ke backend
    onClose(); // Menutup modal setelah login berhasil
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
            Selamat Datang Kembali
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Masuk untuk melanjutkan petualangan rasamu.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Email */}
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
            <input
              id="login-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A9442A]"
            />
          </div>

          {/* Input Password */}
          <div>
            <label htmlFor="login-password" className="block text-sm font-medium text-gray-500 mb-1">Password</label>
            <div className="relative">
              <input
                id="login-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A9442A]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
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
              Log In
            </button>
            <button
              type="button"
              onClick={onSwitchToRegister} // Memanggil fungsi untuk pindah ke modal register
              className="w-full py-3 px-4 rounded-md font-bold text-[#A9442A] border-2 border-[#A9442A] hover:bg-[#A9442A] hover:text-white transition-colors uppercase"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}