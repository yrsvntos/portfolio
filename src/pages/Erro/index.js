import React from 'react';
import { Link } from 'react-router-dom';
import './erro.css';

export default function Erro(){
    return(
        <>

            <main className="erro">
                <div className="container">
                    <div className="py-5 text-center">
                        <h1 className="text-verde fw-bold">404</h1>
                        <p className="lead"><span className='fw-bold text-verde'>Oppps! </span>Página não encontrada. Mas calma, você pode voltar para a página de <Link to="/" className='text-verde fw-bold'>
                            [início]
                        </Link> ou dar uma olhada nos meus <Link to="/projectos" className='text-verde fw-bold'>
                            [projectos]
                        </Link>.</p>
                        
                    </div>
                </div>
            </main>

        </>
    );
}