import { Routes, Route, Navigate } from "react-router-dom";
import Landingpage from "../pages/Landingpage";
import Citypage from "../pages/Citypage";
import Foodpage from "../pages/Foodpage";
import Profilepage from "../pages/Profilepage";
import Register from "../pages/Register";
import Map from "../pages/Map";
import AboutPage from "../pages/About";
import ProtectedRoute from "./Proctectedroutes";



export default function Approutes () {
    return(
        <Routes>
            <Route path="/" element={<Landingpage />}/>
            <Route path="/Citypage/:id" element={<Citypage />} />
            <Route path="/Foodpage/:id" element={<Foodpage/>}/>
            <Route path="/Profile" 
            element={
                <ProtectedRoute>
                    <Profilepage />     
                </ProtectedRoute>
            }/>
            <Route path="/Map" element={<Map />} />
            <Route path="/About" element={<AboutPage />} />
        </Routes>
    )
}