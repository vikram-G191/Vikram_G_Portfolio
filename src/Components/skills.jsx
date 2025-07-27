import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiRedux } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'React Native', icon: <FaReact className="text-purple-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'Redux Toolkit', icon: <SiRedux className="text-purple-600" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-blue-200 py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl flex flex-col items-center justify-center transition duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <p className="text-lg font-semibold text-gray-700">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
