import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
 
// Componente que anima ao entrar na tela
function FadeInSection({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
 
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
 
export default function Projects() {
  const projects = [
    {
      title: "Finance Dashboard",
      description:
        "Dashboard financeiro com gráficos interativos, visualização de dados em tempo real e interface responsiva e moderna.",
      tags: ["React", "Tailwind", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      github: "https://github.com/Ghhenriquee",
      demo: "#",
    },
    {
      title: "Task Manager",
      description:
        "Gerenciador de tarefas focado em produtividade, com organização por prioridade, status e categorias.",
      tags: ["React", "Vite", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      github: "https://github.com/Ghhenriquee",
      demo: "#",
    },
    {
      title: "Netflix Clone",
      description:
        "Clone da interface da Netflix com consumo de API de filmes e séries, hero dinâmico, categorias e layout responsivo fiel ao original.",
      tags: ["React", "API", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200&auto=format&fit=crop",
      github: "https://github.com/Ghhenriquee/netflix-clone",
      demo: "https://netflix-clone-omega-wine.vercel.app",
    },
  ];
 
  const skills = [
    { icon: "⚛️", label: "React" },
    { icon: "🟨", label: "JavaScript" },
    { icon: "🎨", label: "Tailwind CSS" },
    { icon: "🌐", label: "HTML5 & CSS3" },
    { icon: "⚡", label: "Vite" },
    { icon: "🐙", label: "Git & GitHub" },
  ];
 
  return (
    <>
      {/* About Section */}
      <section id="sobre" className="max-w-5xl mx-auto px-6 py-24">
        <FadeInSection>
          <p className="text-[#7BC142] text-xs font-semibold uppercase tracking-widest mb-4">
            Sobre mim
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-14 text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Quem sou eu
          </h2>
        </FadeInSection>
 
        <div className="grid md:grid-cols-2 gap-6">
          <FadeInSection delay={0.1}>
            <div className="bg-[#0F1114] border border-white/[0.07] rounded-2xl p-8 flex flex-col justify-center h-full gap-6">
              <div className="flex items-center gap-5">
                <img
                  src="/foto.jpg"
                  alt="Henrique"
                  className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-[#7BC142]/30 shrink-0"
                />
                <div>
                  <p className="text-white font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>Henrique Ferreira</p>
                  <p className="text-[#7BC142] text-xs font-semibold uppercase tracking-widest mt-1">Front-End Developer</p>
                </div>
              </div>
              <p className="text-gray-400 text-base leading-relaxed font-light">
                Sou estudante de <span className="text-white font-medium">Análise e Desenvolvimento de Sistemas</span> na{" "}
                <span className="text-white font-medium">Uninassau</span>, no 4º período, com formatura prevista para{" "}
                <span className="text-white font-medium">2026</span>. Tenho facilidade de aprendizado, sou organizado e estou sempre buscando evoluir na prática.{" "}
                Cada projeto que desenvolvi me ensinou algo novo — e é exatamente esse tipo de crescimento que busco numa oportunidade de estágio.
              </p>
            </div>
          </FadeInSection>
 
          <div className="flex flex-col gap-4">
            {[
              { icon: "🎓", title: "Análise e Desenvolvimento de Sistemas", sub: "Uninassau · 4º Período · Formatura em 2026" },
              { icon: "💻", title: "Foco em Front-End", sub: "React · Tailwind CSS · JavaScript" },
              { icon: "🚀", title: "Disponível para estágio", sub: "Buscando primeira oportunidade na área" },
            ].map((item, i) => (
              <FadeInSection key={i} delay={0.1 + i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#0F1114] border border-white/[0.07] rounded-2xl p-6 flex items-center gap-5 hover:border-green-500/25 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
 
      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
        <FadeInSection>
          <p className="text-[#7BC142] text-xs font-semibold uppercase tracking-widest mb-4">
            Tecnologias
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-14 text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            O que eu sei fazer
          </h2>
        </FadeInSection>
 
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {skills.map((s, i) => (
            <FadeInSection key={i} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(123,193,66,0.35)" }}
                transition={{ duration: 0.2 }}
                className="bg-[#0F1114] border border-white/[0.07] rounded-xl p-4 flex flex-col gap-2 cursor-default"
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="text-xs text-gray-500 font-medium">{s.label}</span>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </section>
 
      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 pb-24">
        <FadeInSection>
          <p className="text-[#7BC142] text-xs font-semibold uppercase tracking-widest mb-4">
            Portfolio
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-14 text-white"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Projetos em destaque
          </h2>
        </FadeInSection>
 
        <div className="flex flex-col gap-5">
          {projects.map((project, index) => (
            <FadeInSection key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="group bg-[#0F1114] border border-white/[0.07] hover:border-green-500/25 rounded-2xl overflow-hidden transition-colors duration-300 grid md:grid-cols-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden min-h-[220px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-[#7BC142] text-[#0a1800] text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wide">
                      {project.tags.join(" · ")}
                    </span>
                  </div>
                </div>
 
                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-semibold text-[#7BC142] bg-green-500/10 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3
                    className="text-2xl font-extrabold text-white mb-3 tracking-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                  <div className="flex gap-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#7BC142] text-sm font-semibold hover:opacity-75 transition flex items-center gap-1.5"
                    >
                      ↗ Código
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 text-sm hover:text-white transition flex items-center gap-1.5"
                      >
                        ↗ Ver ao vivo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </section>
 
      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-6 pb-28">
        <FadeInSection>
          <div className="bg-[#0F1114] border border-white/[0.07] rounded-2xl p-16 text-center">
            <h2
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Vamos trabalhar juntos?
            </h2>
            <p className="text-gray-500 font-light mb-10 text-base">
              Estou buscando minha primeira oportunidade como desenvolvedor front-end.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.a
                href="mailto:givanildoh27@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#7BC142] text-[#0a1800] font-semibold px-7 py-4 rounded-xl hover:opacity-90 transition text-sm"
              >
                givanildoh27@gmail.com
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/henriqueferreira-dev"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/10 text-gray-400 hover:text-white hover:border-white/25 px-7 py-4 rounded-xl transition text-sm"
              >
                LinkedIn
              </motion.a>
            </div>
          </div>
        </FadeInSection>
      </section>
 
      {/* Footer */}
      <footer className="border-t border-white/[0.07] py-8 text-center">
        <p className="text-xs text-gray-700">
          Feito por <span className="text-[#7BC142]">Henrique</span> com React & Tailwind CSS
        </p>
      </footer>
    </>
  );
}
 