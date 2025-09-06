import { createContext ,useContext, useEffect, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export default function Authprovider ({ children }){
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('token') || null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    
    useEffect(() => {
    const  checkAuthStatus = async () => {
        const storedToken = localStorage.getItem('token')
        if(!storedToken) {
            setLoading(false)
            return
        }

        try{
            const response = await fetch('http://localhost:3000/api/users/me',{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${storedToken}`
                }
            })
            if(response.ok) {
                const userData = await response.json()
                setUser(userData)
                setToken(storedToken)
            }else{
                localStorage.removeItem(`token`)
            }
        }catch (error) {
        console.error("Error saat verifikasi token:", error);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    }
    checkAuthStatus()
    },[])

    const login = async (email, password) => {
        try{
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email,password})
            })
            if(!response.ok){
               throw new Error('Login gagal, periksa kembali email dan password Anda.')
            }
            const data = await response.json();
            console.log("RESPONS SUKSES DARI BACKEND:", data);


            localStorage.setItem('token', data.token);
            setToken(data.token);
            setUser(data.user);

            } catch (error) {
            console.error("Login gagal", error);
            throw error; // Lemparkan error agar bisa ditangkap di komponen login
            }
        }
    
    const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    navigate('/'); // Arahkan ke homepage setelah logout
    };

  
  const value = useMemo(() => ({
    user,
    token,
    isLoggedIn: !!token,
    loading,
    login,
    logout,
  }), [user, token, loading]);

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}