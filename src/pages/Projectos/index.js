import mgnLogo from '../../assets/img/clientes/magna-mockup.png';
import ptumImg from '../../assets/img/clientes/ptum-mockup-1.png';
import mechanicalImg from '../../assets/img/clientes/mechanical-mockup.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import './projectos.css';
import '../../index.css';

export default function Projectos() {
  const projetosData = [
    {
      id: 1,
      titulo: 'PTUM — Projecto de Transformação Urbana de Maputo',
      imagem: ptumImg,
      descricaoCompleta: `Tive a oportunidade de desenvolver e fazer o design da interface no Figma do website institucional do PTUM, utilizando HTML, CSS e JavaScript no frontend, com integração ao WordPress via PHP no backend para a fácil gestão de conteúdo. O projeto teve como objetivo apresentar de forma clara e acessível as ações de requalificação urbana em Maputo.`,
      tecnologias: ['HTML', 'CSS', 'JS', 'PHP', 'FIGMA'],
      link: 'https://www.ptum.gov.mz',
    },
    {
      id: 2,
      titulo: 'Magna Marketing e Publicidade, SA',
      imagem: mgnLogo,
      descricaoCurta: 'Site institucional desenvolvido com foco em design responsivo e UX.',
      descricaoCompleta: `Tive a oportunidade de desenvolver e fazer o design da interface no Figma do website institucional da Magna Marketing e Publicidade, SA, criando um site moderno usando HTML, CSS, JS e com integração ao WordPress via PHP, visando facilidade de edição e comunicação clara com os clientes. O resultado final é um website moderno, responsivo e orientado à experiência do usuário, capaz de transmitir com clareza a qualidade e os serviços que a Magna oferece ao mercado moçambicano. 🌍✨`,
      tecnologias: ['HTML', 'CSS', 'JS', 'PHP', 'FIGMA'],
      link: 'https://www.mgn.co.mz',
    },
    {
        id: 3,
        titulo: 'Mechanical Tecnologia',
        imagem: mechanicalImg,
        descricaoCompleta: `Tive a oportunidade de desenvolver e fazer o design da interface no Figma, criando uma experiência visual moderna e intuitiva. Em seguida, implementei o site utilizando HTML, CSS, JavaScript e PHP, integrando ao CMS WordPress para garantir facilidade na gestão de conteúdo. Este projeto reforça o compromisso em oferecer soluções tecnológicas completas e personalizadas, que elevam a presença digital de empresas moçambicanas.`,
        tecnologias: ['HTML', 'CSS', 'JS', 'PHP', 'FIGMA'],
        link: 'https://www.mechanical.co.mz',
      },
    // Pode adicionar mais projetos aqui
  ];

  return (
    <main className="projectos">
      <div className="container py-5">
        <h1 className="fw-bold text-verde">Projectos.</h1>
        <p className="my-3 fw-light">
          Trabalhei em vários projetos ao longo dos anos, e todos eles me orgulham bastante, porque marcam a minha jornada desde o primeiro projecto até ao mais atual.
        </p>

        <div className="row mt-5">
          {projetosData.map(({ id, titulo, imagem, descricaoCurta, descricaoCompleta, tecnologias, link }) => (
            <div key={id} className="col-md-4 mb-4">
              <div className="border rounded card-generico shadow-sm h-100 text-white d-flex flex-column">
                <div className="projecto-img">
                  <img
                    src={imagem}
                    alt={`Imagem do projeto - ${titulo}`}
                    className="logo"
                    style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '8px' }}
                  />
                </div>
                <div className="p-4 projecto-body flex-grow-1">
                  <h5 className="mb-3 fw-bold text-verde">{titulo}</h5>
                  <div className="mb-3">
                    <p>
                      {descricaoCompleta}
                    </p>
                  </div>
                  <small>
                    <b>Tecnologias:</b>
                  </small>
                  <div className="d-flex align-items-center mt-2 flex-wrap gap-2">
                    {tecnologias.map((tech, idx) => (
                      <span key={idx} className="badge bg-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="link d-flex align-items-center mt-4">
                    <div className="icone me-2">
                      <FontAwesomeIcon icon={faLink} className="ms-2 text-white" />
                    </div>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-verde">
                      {link.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
