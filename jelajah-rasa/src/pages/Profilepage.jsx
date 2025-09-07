import { IoPersonCircleSharp } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { useEffect, useState } from "react";
import ReviewCard from "../components/Reviewcard";
import EditProfileModal from "../components/EditProfileModal"; // 1. Impor modal

export default function Profilepage() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');
    

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            if (!token) {
                setLoading(false);
                return;
            }
            try {
                const response = await fetch('http://localhost:3000/api/users/me?include=reviews&limit=6', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (!response.ok) {
                   throw new Error(`HTTP error! status : ${response.status}`);
                }
                const data = await response.json();
                console.log("Data profile", data);
                setUser(data);
            } catch (error) {
                setError(error.message);
                console.error("gagal melakukan fetch data: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [token]);
    

    const handleProfileUpdate = (updatedUserData) => {
        setUser(prevUser => ({
            ...prevUser, 
            ...updatedUserData,
        }));
    };

    if (loading) {
        return <div className="text-center p-10">Memuat profil...</div>;
    }
    if (error) {
        return <div className="text-center p-10 text-red-500">Error: {error}</div>;
    }
    if (!user) {
        return <div className="text-center p-10">Silakan login untuk melihat profil Anda.</div>;
    }

    return (
        <div className="my-5 mx-2 text-[#4A3521] font-Montserrat md:mx-10 md:my-5 lg:mx-20 lg:my-10">
            <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-10">
                <div className="flex items-center justify-between p-4 lg:flex-col lg:justify-center lg:w-96 lg:py-8 lg:px-12 lg:shadow-xl lg:rounded-lg relative">
                    <div className="flex items-center gap-x-4 lg:flex-col lg:gap-y-2">
                        <div className="text-8xl text-gray-400">
                            <IoPersonCircleSharp />
                        </div>
                        <div className="font-Lora text-xl font-bold text-center"> 
                            <div>{user.firstName}</div>
                            <div>{user.lastName}</div>
                        </div>
                    </div>

                    <button onClick={() => setIsEditModalOpen(true)} className="text-2xl text-gray-400 lg:absolute lg:top-4 lg:right-4">
                        <MdOutlineEdit />
                    </button>
                </div>
                <div className="hidden lg:block font-Lora text-2xl font-bold uppercase mt-6">
                    {user.reviewCount || 0} Penilaian Dari Anda
                </div>
            </div>
            <hr className="text-[#AAAAAA] mb-5 lg:hidden" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {user.reviews && user.reviews.map(review => (
                    <ReviewCard key={review.foodId} review={review} />
                ))}
            </div>
            

            <EditProfileModal 
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                currentUser={user}
                onUpdateSuccess={handleProfileUpdate}
            />
        </div>
    );
}

