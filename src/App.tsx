import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const projetos = [
  {
    nome: "SISO",
    descricao:
      "Projeto criado com o objetivo de ser um sistema de gestão financeira para uma clínica odontológica. Site pessoal para apresentar meus projetos, habilidades e experiências.",
    tecnologias: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Git",
      "GitHub",
      "TypeScript",
      "TailwindCSS",
    ],
    link: "https://github.com/gabrielpandrade/SISO",
  },
  {
    nome: "App Financeiro",
    descricao:
      "Aplicativo web para controle financeiro pessoal, permitindo o gerenciamento de receitas, despesas e geração de relatórios. Focado em praticidade, segurança e acessibilidade para o usuário.",
    tecnologias: [
      "Next.js",
      "React",
      "PostgreSQL",
      "AWS",
      "Git",
      "GitHub",
      "TailwindCSS",
    ],
    link: "https://github.com/gabrielpandrade/financeiro",
  },
  {
    nome: "MDF",
    descricao:
      "Projeto para implementação numérica de métodos de diferenças finitas para solução computacional da equação do calor de ordem não inteira.",
    tecnologias: ["Python", "Git", "GitHub", "NumPy", "Matplotlib"],
    link: "https://github.com/gabrielpandrade/MDF",
  },
  {
    nome: "EDO",
    descricao:
      "Projeto para implementação numérica de métodos de diferenças finitas para solução computacional de equações diferenciais ordinárias, utilizando Python com Qt para interação em tempo real com a simulação.",
    tecnologias: ["Python", "Qt", "Git", "GitHub", "NumPy", "Matplotlib"],
    link: "https://github.com/gabrielpandrade/simulacao-edo-calor",
  },
  {
    nome: "Visão Computacional para Defeitos em Pavimentos",
    descricao:
      "Projeto desenvolvido para iniciação científica na UEPG, utilizando visão computacional para identificação de defeitos em pavimentos.",
    tecnologias: [
      "Python",
      "Keras",
      "TensorFlow",
      "scikit-learn",
      "Matplotlib",
    ],
  },
];

// Navbar Component
function Navbar() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShow(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } bg-black/70 backdrop-blur border-b border-green-400/20`}
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-green-400 font-mono font-bold text-xl">
          Gabriel Andrade
        </span>
        <div className="space-x-6 md:flex items-center hidden">
          <a
            href="#sobre"
            className="text-white/80 hover:text-green-400 font-mono transition-colors"
          >
            Sobre
          </a>
          <a
            href="#habilidades"
            className="text-white/80 hover:text-green-400 font-mono transition-colors"
          >
            Habilidades
          </a>
          <a
            href="#projetos"
            className="text-white/80 hover:text-green-400 font-mono transition-colors"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="text-white/80 hover:text-green-400 font-mono transition-colors"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#18181b] via-[#23272e] to-[#18181b] scroll-smooth">
      <Navbar />
      {/* Card central com transparência */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg p-10 flex flex-col items-center my-24">
        {/* Nome com efeito de digitação */}
        <h1 className="text-2xl md:text-7xl font-mono font-bold text-green-400 mb-4 drop-shadow-[0_0_10px_#22c55e]">
          <Typewriter
            words={["Gabriel Pinto Andrade"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-lg md:text-2xl font-mono text-white/80 bg-black/40 px-4 py-2 rounded shadow-inner mb-6">
          $ Engenharia de Computação | Desenvolvedor Full Stack | Cloud
          Computing
        </p>

        <div
          id="sobre"
          className="bg-black/60 border border-green-400/30 rounded-lg p-6 shadow-lg backdrop-blur-sm max-w-xl"
        >
          <h2 className="text-green-300 font-mono text-xl mb-4">Sobre mim</h2>
          <p className="text-white/80 font-mono mb-3">
            Sou estudante do último ano de Engenharia de Computação na
            Universidade Estadual de Ponta Grossa (UEPG), apaixonado por
            tecnologia e inovação.
          </p>
          <p className="text-white/80 font-mono mb-3">
            Tenho experiência prática em desenvolvimento web full stack, atuando
            tanto no front-end quanto no back-end, além de vivência sólida em
            computação em nuvem utilizando{" "}
            <span className="text-green-400 font-semibold">AWS</span>, minha
            principal tecnologia de interesse.
          </p>
          <ul className="list-disc list-inside text-white/80 font-mono mb-3 pl-4">
            <li>
              Domínio avançado de <span className="text-green-400">Excel</span>{" "}
              e ferramentas de produtividade
            </li>
            <li>
              Elaboração de documentos seguindo normas{" "}
              <span className="text-green-400">ABNT</span> e outras normas
              técnicas
            </li>
            <li>
              Otimização de processos e apoio a equipes em diferentes contextos
            </li>
          </ul>
          <p className="text-white/80 font-mono mb-3">
            Minhas tecnologias preferidas são{" "}
            <span className="text-green-400 font-semibold">AWS</span> e{" "}
            <span className="text-green-400 font-semibold">
              Java Spring Boot
            </span>
            , que utilizo para criar soluções robustas, escaláveis e alinhadas
            com as melhores práticas do mercado.
          </p>
          <p className="text-white/80 font-mono">
            Estou sempre em busca de novos desafios e oportunidades para
            aprender e contribuir com projetos inovadores.
          </p>
        </div>
        {/* Seção de Projetos */}
        <div id="projetos" className="w-full max-w-5xl mt-24 mb-12">
          <h2 className="text-green-300 font-mono text-2xl mb-8 text-center">
            Projetos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto, i) => (
              <div
                key={i}
                className="bg-white/5 border border-green-400/20 rounded-lg p-6 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:-rotate-2 hover:scale-105 flex flex-col h-full"
                style={{ willChange: "transform" }}
              >
                <h3 className="text-green-400 font-mono text-xl mb-2">
                  {projeto.nome}
                </h3>
                <p className="text-white/80 font-mono mb-4 text-sm">
                  {projeto.descricao}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.tecnologias.map((tech, idx) => {
                    // Cores temáticas padronizadas conforme a seção de habilidades
                    let colorClass = "bg-gray-400/20 text-gray-300";
                    if (tech === "JavaScript")
                      colorClass = "bg-yellow-400/20 text-yellow-400";
                    if (tech === "TypeScript")
                      colorClass = "bg-blue-500/20 text-blue-500";
                    if (tech === "Java")
                      colorClass = "bg-orange-600/20 text-orange-600";
                    if (tech === "Python")
                      colorClass = "bg-indigo-800/20 text-indigo-300";
                    if (tech === "HTML")
                      colorClass = "bg-orange-500/20 text-orange-500";
                    if (tech === "CSS")
                      colorClass = "bg-blue-400/20 text-blue-400";
                    if (tech === "TailwindCSS")
                      colorClass = "bg-sky-400/20 text-sky-400";
                    if (tech === "React")
                      colorClass = "bg-cyan-400/20 text-cyan-300";
                    if (tech === "Next.js")
                      colorClass = "bg-neutral-900/80 text-white";
                    if (tech === "Node.js")
                      colorClass = "bg-lime-600/20 text-lime-600";
                    if (tech === "Vite")
                      colorClass = "bg-violet-500/20 text-violet-500";
                    if (tech === "Redux")
                      colorClass = "bg-purple-700/20 text-purple-700";
                    if (tech === "Axios")
                      colorClass = "bg-sky-700/20 text-sky-700";
                    if (tech === "Pandas")
                      colorClass = "bg-purple-900/20 text-purple-200";
                    if (tech === "NumPy")
                      colorClass = "bg-yellow-300/20 text-yellow-600";
                    if (tech === "Keras")
                      colorClass = "bg-red-300/20 text-red-400";
                    if (tech === "TensorFlow")
                      colorClass = "bg-orange-500/20 text-orange-500";
                    if (tech === "scikit-learn")
                      colorClass = "bg-yellow-900/20 text-yellow-200";
                    if (tech === "PostgreSQL")
                      colorClass = "bg-blue-800/20 text-blue-200";
                    if (tech === "MySQL")
                      colorClass = "bg-blue-600/20 text-blue-400";
                    if (tech === "MongoDB")
                      colorClass = "bg-green-700/20 text-green-700";
                    if (tech === "Arduino")
                      colorClass = "bg-cyan-700/20 text-cyan-700";
                    if (tech === "Espressif")
                      colorClass = "bg-red-800/20 text-red-800";
                    if (tech === "Git")
                      colorClass = "bg-orange-500/20 text-orange-500";
                    if (tech === "GitHub")
                      colorClass = "bg-gray-900/80 text-gray-100";
                    if (tech === "IntelliJ IDEA")
                      colorClass = "bg-blue-900/20 text-blue-300";
                    if (tech === "Webstorm")
                      colorClass = "bg-cyan-400/20 text-cyan-400";
                    if (tech === "ESLint")
                      colorClass = "bg-purple-400/20 text-purple-400";
                    if (tech === "Prettier")
                      colorClass = "bg-pink-400/20 text-pink-400";
                    if (tech === "Figma")
                      colorClass = "bg-pink-500/20 text-pink-500";
                    if (tech === "UML")
                      colorClass = "bg-gray-700/20 text-gray-300";
                    if (tech === "DrawIO")
                      colorClass = "bg-orange-300/20 text-orange-700";
                    if (tech === "Linux")
                      colorClass = "bg-yellow-700/20 text-yellow-700";
                    if (tech === "Docker")
                      colorClass = "bg-blue-400/20 text-blue-400";
                    if (tech === "AWS")
                      colorClass = "bg-orange-400/20 text-orange-400";
                    if (tech === "Google Cloud")
                      colorClass = "bg-blue-300/20 text-blue-400";
                    if (tech === "Spring Boot")
                      colorClass = "bg-green-600/20 text-green-600";
                    if (tech === "Chart.js")
                      colorClass = "bg-pink-500/20 text-pink-500";
                    if (tech === "Stripe")
                      colorClass = "bg-indigo-600/20 text-indigo-600";
                    if (tech === "MUI")
                      colorClass = "bg-blue-900/20 text-blue-300";
                    if (tech === "Qt")
                      colorClass = "bg-teal-800/20 text-teal-300";
                    return (
                      <span
                        key={idx}
                        className={`${colorClass} font-mono text-xs px-2 py-1 rounded`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                {projeto.link && (
                  <div className="mt-auto">
                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-400/20 text-blue-300 font-mono text-xs px-4 py-2 rounded hover:bg-blue-400/40 hover:text-blue-900 transition-colors"
                    >
                      Saiba mais
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Seção de Habilidades */}
        <div
          id="habilidades"
          className="w-full max-w-5xl mt-24 mb-12 bg-black/60 border border-green-400/30 rounded-lg p-8 shadow-lg backdrop-blur-sm"
        >
          <h2 className="text-green-300 font-mono text-2xl mb-6 text-center flex items-center gap-2 justify-center">
            <span role="img" aria-label="ferramentas">
              🛠️
            </span>{" "}
            Minhas Skills
          </h2>

          {/* Linguagens e Frameworks */}
          <div className="mb-8">
            <h3 className="text-green-200 font-mono text-xl mb-2">
              💻 Linguagens e Frameworks
            </h3>

            <div className="mb-4">
              <h4 className="text-green-400 font-mono text-lg mb-1">
                Linguagens de Programação
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-400/20 text-yellow-400 font-mono text-xs px-3 py-1 rounded">
                  JavaScript
                </span>
                <span className="bg-blue-500/20 text-blue-500 font-mono text-xs px-3 py-1 rounded">
                  TypeScript
                </span>
                <span className="bg-orange-600/20 text-orange-600 font-mono text-xs px-3 py-1 rounded">
                  Java
                </span>
                <span className="bg-indigo-800/20 text-indigo-300 font-mono text-xs px-3 py-1 rounded">
                  Python
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-green-400 font-mono text-lg mb-1">
                Desenvolvimento WEB
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-500/20 text-orange-500 font-mono text-xs px-3 py-1 rounded">
                  HTML
                </span>
                <span className="bg-blue-400/20 text-blue-400 font-mono text-xs px-3 py-1 rounded">
                  CSS
                </span>
                <span className="bg-sky-400/20 text-sky-400 font-mono text-xs px-3 py-1 rounded">
                  TailwindCSS
                </span>
                <span className="bg-cyan-400/20 text-cyan-300 font-mono text-xs px-3 py-1 rounded">
                  React
                </span>
                <span className="bg-neutral-900/80 text-white font-mono text-xs px-3 py-1 rounded">
                  Next.js
                </span>
                <span className="bg-lime-600/20 text-lime-600 font-mono text-xs px-3 py-1 rounded">
                  Node.js
                </span>
                <span className="bg-violet-500/20 text-violet-500 font-mono text-xs px-3 py-1 rounded">
                  Vite
                </span>
                <span className="bg-purple-700/20 text-purple-700 font-mono text-xs px-3 py-1 rounded">
                  Redux
                </span>
                <span className="bg-sky-700/20 text-sky-700 font-mono text-xs px-3 py-1 rounded">
                  Axios
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-green-400 font-mono text-lg mb-1">
                Análise e Tratamento de Dados
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-900/20 text-purple-200 font-mono text-xs px-3 py-1 rounded">
                  Pandas
                </span>
                <span className="bg-yellow-300/20 text-yellow-600 font-mono text-xs px-3 py-1 rounded">
                  NumPy
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-green-400 font-mono text-lg mb-1">
                Machine Learning
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-300/20 text-red-400 font-mono text-xs px-3 py-1 rounded">
                  Keras
                </span>
                <span className="bg-orange-500/20 text-orange-500 font-mono text-xs px-3 py-1 rounded">
                  TensorFlow
                </span>
                <span className="bg-yellow-900/20 text-yellow-200 font-mono text-xs px-3 py-1 rounded">
                  scikit-learn
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-green-400 font-mono text-lg mb-1">
                Banco de Dados
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-800/20 text-blue-200 font-mono text-xs px-3 py-1 rounded">
                  PostgreSQL
                </span>
                <span className="bg-blue-600/20 text-blue-400 font-mono text-xs px-3 py-1 rounded">
                  MySQL
                </span>
                <span className="bg-green-700/20 text-green-700 font-mono text-xs px-3 py-1 rounded">
                  MongoDB
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-green-400 font-mono text-lg mb-1">
                Sistemas Embarcados
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-cyan-700/20 text-cyan-700 font-mono text-xs px-3 py-1 rounded">
                  Arduino
                </span>
                <span className="bg-red-800/20 text-red-800 font-mono text-xs px-3 py-1 rounded">
                  Espressif
                </span>
              </div>
            </div>
          </div>

          {/* Ferramentas */}
          <div>
            <h3 className="text-green-200 font-mono text-xl mb-2">
              🔧 Ferramentas
            </h3>

            <div className="mb-4">
              <h4 className="text-green-400 font-mono text-lg mb-1">
                Versionamento
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-500/20 text-orange-500 font-mono text-xs px-3 py-1 rounded">
                  Git
                </span>
                <span className="bg-gray-900/80 text-gray-100 font-mono text-xs px-3 py-1 rounded">
                  GitHub
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-green-400 font-mono text-lg mb-1">
                Desenvolvimento
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-900/20 text-blue-300 font-mono text-xs px-3 py-1 rounded">
                  IntelliJ IDEA
                </span>
                <span className="bg-cyan-400/20 text-cyan-400 font-mono text-xs px-3 py-1 rounded">
                  Webstorm
                </span>
                <span className="bg-purple-400/20 text-purple-400 font-mono text-xs px-3 py-1 rounded">
                  ESLint
                </span>
                <span className="bg-pink-400/20 text-pink-400 font-mono text-xs px-3 py-1 rounded">
                  Prettier
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-green-400 font-mono text-lg mb-1">
                Modelagem
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-pink-500/20 text-pink-500 font-mono text-xs px-3 py-1 rounded">
                  Figma
                </span>
                <span className="bg-gray-700/20 text-gray-300 font-mono text-xs px-3 py-1 rounded">
                  UML
                </span>
                <span className="bg-orange-300/20 text-orange-700 font-mono text-xs px-3 py-1 rounded">
                  DrawIO
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-green-400 font-mono text-lg mb-1">
                Ambiente
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-700/20 text-yellow-700 font-mono text-xs px-3 py-1 rounded">
                  Linux
                </span>
                <span className="bg-blue-400/20 text-blue-400 font-mono text-xs px-3 py-1 rounded">
                  Docker
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-green-400 font-mono text-lg mb-1">Nuvem</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-400/20 text-orange-400 font-mono text-xs px-3 py-1 rounded">
                  AWS
                </span>
                <span className="bg-blue-300/20 text-blue-400 font-mono text-xs px-3 py-1 rounded">
                  Google Cloud
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Seção de Contato */}
        <div
          id="contato"
          className="w-full max-w-5xl mt-24 mb-12 bg-black/60 border border-green-400/30 rounded-lg p-8 shadow-lg backdrop-blur-sm"
        >
          <h2 className="text-green-300 font-mono text-2xl mb-6 text-center flex items-center gap-2 justify-center">
            <span role="img" aria-label="envelope">
              ✉️
            </span>{" "}
            Contato
          </h2>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-green-400 font-mono">Email:</span>
              <a
                href="mailto:pintoandradegabriel@gmail.com"
                className="text-white/80 hover:text-green-400 font-mono transition-colors underline"
              >
                pintoandradegabriel@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 font-mono">GitHub:</span>
              <a
                href="https://github.com/gabrielpandrade/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-green-400 font-mono transition-colors underline"
              >
                github.com/gabrielpandrade
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 font-mono">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/gabriel-pinto-andrade-4414a6215/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-green-400 font-mono transition-colors underline"
              >
                linkedin.com/in/gabriel-pinto-andrade-4414a6215
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
