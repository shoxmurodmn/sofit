import { BrowserRouter, Routes, Route } from "react-router-dom";
import Passwordlost from "../pages/Register/passwordlost/passwordlost";
import Register from "../pages/Register";
import Client from "../pages/uses/client";
import Admin from "../pages/admin/admin.tsx"


const Rooter = () => {

    return (
        
            <Routes>
                <Route path="/admin/register" element={<Register/>} />
                <Route path="/passwordlost" element={<Passwordlost />} />
                <Route path="/" element={<Client />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        
    );
};

export default Rooter;
