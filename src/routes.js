import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projectos from "./pages/Projectos";
import Servicos from "./pages/Servicos";
import Contactos from "./pages/Contacto";
import Erro from "./pages/Erro";

import Header from "./components/Header";
import Footer from "./components/Footer";


export default function RoutesApp(){
    return(
        <>

            <BrowserRouter>
                <Header />
                <Routes>

                    <Route path="/" element={<Home/>}/>
                    <Route path="/projectos" element={<Projectos/>}/>
                    <Route path="/servicos" element={<Servicos/>}/>
                    <Route path="/contactos" element={<Contactos/>}/>
                    <Route path="*" element={<Erro />} />

                </Routes>
                <Footer />
            </BrowserRouter>
        
        </>
    );
}