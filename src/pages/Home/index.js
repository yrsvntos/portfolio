import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

export default function Home(){
    const texto = "Desenvolvedor Web Front-End & UI/UX Designer.";
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let i = 0;
        let escreverTimeout;
        let cursorInterval;

        const escrever = () => {
        if (i < texto.length) {
            setDisplayedText((prev) => prev + texto.charAt(i));
            i++;
            escreverTimeout = setTimeout(escrever, 50);
        } else {
            // Inicia o piscar do cursor apenas uma vez
            cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
            }, 500);
        }
        };

        escrever(); // inicia a escrita uma única vez

        // Cleanup: evita duplicações ao desmontar
        return () => {
        clearTimeout(escreverTimeout);
        clearInterval(cursorInterval);
        };
    }, []);


    return(
        <>
            <section className="sobre">
                <div className="container">
                    <div className="py-5">
                        <div className="col-12">
                            <h1 className="fw-bold text-verde" id="typewriter-text">
                                {displayedText}
                                <span style={{ visibility: showCursor ? "visible" : "hidden", color: "#00A191"}}>|</span>
                            </h1>
                            <p className="my-3 fw-ligth">Sou Desenvolvedor Web Front-End e UI/UX Designer com mais de 3 anos de experiência na criação de interfaces modernas, responsivas e centradas no usuário. Tenho domínio em HTML, CSS, JavaScript, PHP, React JS e Figma, aliando performance, acessibilidade e estética. Meu trabalho combina design estratégico com desenvolvimento sólido para entregar experiências digitais funcionais, intuitivas e visualmente impactantes.</p>
                            <div className="cv-button text-verde">
                                <a href="/CV.pdf"  target="_blank" className="text-verde fw-bold">Ver Curriculum Vitae  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-2 text-verde'/></a>
                            </div>
                            <div className="social-media d-flex align-items-center mt-3">
                                <Link className="text-white fs-6" to="https://linkedin.com/in/yanik-dos-santos-49918b1b3" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Link>
                                <Link className="fs-6 text-white mx-4" to="https://github.com/yrsvntos" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </Link>
                                <Link className="text-white fs-6" to="https://www.instagram.com/yrsvntos/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                                <Link className="text-white fs-6 ms-4" to="mailto:yrsvntos@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
        
    );
}