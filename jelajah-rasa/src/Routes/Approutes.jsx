import { Routes, Route, Navigate } from "react-router-dom";
import Landingpage from "../pages/Landingpage";
import Citypage from "../pages/Citypage";
import Foodpage from "../pages/Foodpage";
import Profilepage from "../pages/Profilepage";
import Register from "../pages/Register";
import Map from "../pages/Map";



export default function Approutes () {
    return(
        <Routes>
            <Route path="/" element={<Landingpage />}/>
            <Route path="/Citypage" element={<Citypage />} />
            <Route path="/Foodpage" element={<Foodpage/>}/>
            <Route path="/Profile" element={<Profilepage />}/>
            <Route path="/Map" element={<Map />} />
        </Routes>
    )
}