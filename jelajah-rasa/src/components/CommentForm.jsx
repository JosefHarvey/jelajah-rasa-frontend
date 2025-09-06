import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom'; // 2. Impor useParams untuk mendapatkan foodId
import { useAuth } from '../Authcontext';

export default function CommentModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  
  const { token } = useAuth(); 
  const { id: foodId } = useParams(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Mohon berikan rating bintang terlebih dahulu.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/foods/${foodId}/reviews`, {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },

        body: JSON.stringify({
          value: rating,
          content: comment
        })
      });

      if (!response.ok) {
        throw new Error('Gagal mengirim komentar. Silakan coba lagi.');
      }

      const newComment = await response.json();
      console.log('Komentar berhasil dikirim:', newComment);

      // Anda bisa menambahkan fungsi untuk update UI di halaman artikel di sini
      
      onClose(); // Menutup modal setelah submit berhasil

    } catch (error) {
      console.error("Error saat mengirim komentar:", error);
      alert(error.message); // Tampilkan pesan error ke pengguna
    }
  };

  if (!isOpen) return null;

  return (
    // ... (kode JSX Anda untuk tampilan modal tetap sama)
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-lg relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-800 transition-colors"
        >
          <RxCross1 />
        </button>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="font-Lora font-bold text-xl text-center text-[#4A3521]">Berikan Pendapatmu!</h3>

          <div className="flex items-center justify-center text-3xl md:text-4xl">
            {[1, 2, 3, 4, 5].map((starValue) => (
              <button
                type="button"
                key={starValue}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHoverRating(starValue)}
                onMouseLeave={() => setHoverRating(0)}
                className="cursor-pointer transition-colors"
              >
                <FaStar 
                  className={starValue <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'}
                />
              </button>
            ))}
          </div>

          <div>
            <textarea 
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tulis komentarmu di sini..."
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md font-sans focus:outline-none focus:ring-2 focus:ring-[#A9442A]"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={!rating}
              className="w-full py-2 px-4 rounded-md font-bold text-white bg-[#A9442A] hover:bg-opacity-90 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Kirim Penilaian
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}