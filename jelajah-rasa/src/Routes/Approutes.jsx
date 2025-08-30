import { Routes, Route, Navigate } from "react-router-dom";
import Landingpage from "../pages/Landingpage";
import Citypage from "../pages/Citypage";



export default function Approutes () {
    return(
        <Routes>
            <Route path="/" element={<Landingpage />}/>
            <Route path="/Citypage" element={<Citypage />} />
        </Routes>
    )
}