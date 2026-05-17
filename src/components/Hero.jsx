import { motion } from "framer-motion";
 
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});
 
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden text-white bg-[#08090A]">
 
      {/* Subtle glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
 
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-5 z-50 backdrop-blur-md bg-[#08090A]/80 border-b border-white/[0.07]"
      >
        <h1 className="text-xl font-extrabold tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
          Henrique<span className="text-[#7BC142]">.dev</span>
        </h1>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#sobre" className="hover:text-white transition duration-300">Sobre</a>
          <a href="#skills" className="hover:text-white transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-white transition duration-300">Projetos</a>
          <a
            href="https://github.com/Ghhenriquee"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/henrique-ferreira-690a13192"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="/curriculo.pdf"
            className="bg-[#7BC142] hover:opacity-90 text-[#0a1800] font-semibold px-5 py-2 rounded-lg transition duration-300 text-sm"
          >
            Currículo
          </a>
        </div>
      </motion.nav>
 
      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl w-full pt-24">
 
        {/* Badge */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-[#7BC142] animate-pulse" />
          <span className="text-[#7BC142] text-xs font-semibold uppercase tracking-widest">Disponível para estágio</span>
        </motion.div>
 
        {/* Heading */}
        <motion.h2
          {...fadeUp(0.2)}
          className="text-[clamp(52px,9vw,88px)] font-extrabold leading-none tracking-tight mb-6"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Front-End<br />
          <span className="text-[#3a3d38]">Developer</span>
        </motion.h2>
 
        {/* Description */}
        <motion.p {...fadeUp(0.3)} className="text-gray-500 text-lg font-light max-w-lg mb-12 leading-relaxed">
          Desenvolvedor focado em interfaces modernas e responsivas com
          React, Tailwind CSS e JavaScript. Buscando meu primeiro estágio na área.
        </motion.p>
 
        {/* Actions */}
        <motion.div {...fadeUp(0.4)} className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-[#7BC142] text-[#0a1800] font-semibold px-7 py-4 rounded-xl hover:opacity-90 transition duration-300 text-sm"
          >
            Ver projetos
          </a>
          <a
            href="https://github.com/Ghhenriquee"
            target="_blank"
            rel="noreferrer"
            className="border border-white/10 text-gray-400 hover:text-white hover:border-white/25 px-7 py-4 rounded-xl transition duration-300 text-sm"
          >
            GitHub
          </a>
        </motion.div>
 
        {/* Stats */}
        <motion.div {...fadeUp(0.55)} className="mt-20 grid grid-cols-3 border border-white/[0.07] rounded-2xl overflow-hidden">
          {[
            { num: "3+", label: "Projetos" },
            { num: "1 ano", label: "Estudando" },
            { num: "React", label: "Stack principal" },
          ].map((s, i) => (
            <div
              key={i}
              className={`py-7 text-center ${i < 2 ? "border-r border-white/[0.07]" : ""}`}
            >
              <p
                className="text-2xl font-extrabold text-white mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {s.num}
              </p>
              <p className="text-xs text-gray-600 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
 