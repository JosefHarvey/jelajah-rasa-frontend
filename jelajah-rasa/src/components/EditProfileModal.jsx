import { useState, useEffect } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { useAuth } from '../Authcontext'; 

export default function EditProfileModal({ isOpen, onClose, currentUser, onUpdateSuccess }) {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });
  const { token } = useAuth();


  useEffect(() => {
    if (currentUser) {
      setFormData({
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
      });
    }
  }, [currentUser, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/users/me', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Gagal memperbarui profil.');
      }

      const updatedUser = await response.json();
      console.log('Profil berhasil diperbarui:', updatedUser);
      
      onUpdateSuccess(updatedUser); 
      onClose(); 

    } catch (error) {
      console.error("Error saat update profil:", error);
      alert(error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-800">
          <RxCross1 />
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="font-Lora font-bold text-xl text-center text-[#4A3521]">Edit Profil</h3>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nama Depan</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nama Belakang</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md font-bold text-white bg-[#A9442A] hover:bg-opacity-90"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}