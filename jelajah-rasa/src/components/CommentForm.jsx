import { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom'; // 2. Impor useParams untuk mendapatkan foodId
import { useAuth } from '../Authcontext';

export default function CommentModal({ isOpen, onClose, initialData  }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  
  const { token } = useAuth(); 
  const { id: foodId } = useParams(); 

  useEffect(() => {
    if (initialData) {
      setRating(initialData.ratingValue || 0);
      setComment(initialData.content || '');
    } else {
      setRating(0);
      setComment('');
    }
  }, [initialData, isOpen]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Mohon berikan rating bintang terlebih dahulu.");
      return;
    }

    const isEditing = !!initialData;
    const method = isEditing ? 'PUT' : 'POST';
    const url = isEditing
      ?`http://localhost:3000/api/foods/${foodId}/reviews` // URL untuk update
      : `http://localhost:3000/api/foods/${foodId}/reviews`; // URL untuk buat baru

    try {
      const response = await fetch(url, {
        method: method,
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

      const responseData = await response.json();
      console.log('Komentar berhasil diproses:', responseData);
      
      onClose(); // Menutup modal setelah submit berhasil

    } catch (error) {
      console.error("Error saat mengirim komentar:", error);
      alert(error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-lg relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-800 transition-colors"
        >
          <RxCross1 />
        </button>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="font-Lora font-bold text-xl text-center text-[#4A3521]">
            {initialData ? 'Edit Pendapatmu' : 'Berikan Pendapatmu!'}
          </h3>

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
              {initialData ? 'Update Penilaian' : 'Kirim Penilaian'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}