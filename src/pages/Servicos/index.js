
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPencilRuler } from '@fortawesome/free-solid-svg-icons';

import './servicos.css';

export default function Servicos(){

    const servicosData = [
        {
            id: 1,
            titulo: 'Desenvolvimento de Websites',
            icone: faCode,
            descricaoCompleta: `Criação de sites com foco em código limpo, responsividade e SEO. Utilizo tecnologias como HTML, CSS, JavaScript, PHP e React JS para desenvolver soluções web eficientes — desde portfólios dinâmicos, sites institucionais a landing pages otimizadas para conversão.`,
            link: 'https://www.ptum.co.mz',
        },
        {
            id: 2,
            titulo: 'Design UI/UX para Web e Mobile',
            icone: faPencilRuler,
            descricaoCompleta: `Crio interfaces modernas, responsivas e intuitivas utilizando Figma como principal ferramenta de design. Cada layout é planejado com foco em usabilidade (UX), estética (UI) e viabilidade técnica para desenvolvedores.`,
            link: 'https://www.ptum.co.mz',
        }
    ]

    return(
        <>
            <main className="servicos">
                <div className="container py-5">
                    <div className="servicos-header">
                        <h1 className="text-verde fw-bold">Serviços.</h1>
                        <p className='pt-2 fw-light'>Com mais de 3 anos de experiência, transformo ideias em interfaces funcionais, modernas e responsivas, aliando estética, usabilidade e performance.</p>

                        <div className='row mt-5'>
                        {servicosData.map(({ id, titulo, icone, descricaoCompleta, link }) => (
                            <div className='col-md-6 mb-4'>
                                <div className='servicos-box p-4 border rounded text-center'>
                                        <FontAwesomeIcon icon={icone} className='text-verde fs-3'/>
                                        <h4 className='my-3 fw-bold'>{titulo}</h4>
                                        <p>{descricaoCompleta}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );

}