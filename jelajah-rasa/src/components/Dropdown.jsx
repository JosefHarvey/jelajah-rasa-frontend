import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Authcontext";
 // Sesuaikan path ke AuthContext Anda

export default function Dropdown({ isOpen, onClose }) {
  const { logout } = useAuth();
  const navigate = useNavigate();


  if (!isOpen) {
    return null;
  }
  
  const handleLogout = () => {
    logout();
    onClose();
    navigate('/');
  };

  return (
    <div className="absolute top-full right-0 mt-2 w-30 font-Lora bg-[#F5F0E8] rounded-md shadow-lg uppercase z-50"
    >
      <div className="py-1">
        <Link to={"/Profile"} onClick={onClose} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
        >
          Profil Saya
        </Link>


        <hr className="my-1 text-[#AAAAAA]/50"/>
        
        <button
          onClick={handleLogout}
          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
        >
          KELUAR
        </button>
      </div>
    </div>
  );
}