import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="h-screen w-full bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        className="text-center max-w-2xl text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm <span className="text-yellow-300">Vikram G</span>
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-white/90">
        I'm a Front-End Developer specializing in React and React Native. I build fast, responsive, and user-friendly web and mobile applications with a strong focus on clean design and performance.
          {/* I'm a Frontend Developer passionate about building modern, clean, and user-friendly interfaces. */}
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <a href="#projects" className="bg-yellow-300 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
            View Projects
          </a>
          <a href="#contact" className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
            Contact Me
          </a>
        </div>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://github.com/vikram-G191" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/vikram-g01/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition"><FaLinkedin /></a>
          <a href="mailto:vikramganesan111@gmail.com" className="hover:text-yellow-300 transition"><FaEnvelope /></a>
        </div>
      </motion.div>

      {/* Optional floating image */}
      {/* <motion.img
        src="/your-avatar.png"
        alt="avatar"
        className="absolute bottom-0 right-10 w-48 hidden md:block"
        initial={{ y: 30 }}
        animate={{ y: [30, 20, 30] }}
        transition={{ repeat: Infinity, duration: 3 }}
      /> */}
    </section>
  );
};

export default Hero;
