import { Navigate } from 'react-router-dom';
import { useAuth } from '../Authcontext';


export default function ProtectedRoute({ children }) {
  const { isLoggedIn, loading } = useAuth()


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Memeriksa autentikasi...
      </div>
    );
  }


  if (!isLoggedIn) {

    return <Navigate to="/" replace />;
  }


  return children;
}