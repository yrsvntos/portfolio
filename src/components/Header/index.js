import { NavLink } from "react-router-dom";
import logo from '../../assets/img/logo-v1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import 'aos/dist/aos.css'
import './header.css'



export default function Header(){

    return(
        <>
            <nav className="navbar navbar-expand-lg  border-bottom">
                <div className="container py-2">
                    <NavLink to='/' className="navbar-brand fw-bold">
                        <img src={logo} alt="logo" style={{width: '100%', height: '50px', objectFit: 'contain'}} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <nav className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            <NavLink to='/' className="nav-link fw-bold">Início</NavLink>
                            <NavLink to='/projectos' className="nav-link fw-bold">Projectos</NavLink>
                            <NavLink to='/servicos' className="nav-link fw-bold">Serviços</NavLink>
                            <NavLink to='/contactos' className="nav-link fw-bold">Contactos</NavLink>
                        </nav>
                    </div>
                </div>
            </nav>
        </>
        
    );
}