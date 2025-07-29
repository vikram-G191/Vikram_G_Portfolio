import { motion } from 'framer-motion';

const projects = [
  {
    title: 'thebusstand.com',
    description: 'Developed a responsive bus booking web platform with real-time seat availability. Implemented a sleek UI using Tailwind CSS and secure authentication with Firebase.',
    image: '../assets/webproject.png',
    demoLink: 'https://thebusstand.com/',
    codeLink: '#'
  },
  {
    title: 'thebusstand app(ios/android)',
    description: 'Built a cross-platform bus booking mobile app with React Native for booking and managing bus tickets. Integrated features like lazy loading, OTP-based login, and push notifications.',
    image: '../assets/mobile.png',
    demoLink: '',
    iosLink: 'https://apps.apple.com/app/id1234567890',
    AndLink: 'https://play.google.com/store/apps/details?id=com.thebusstandapp&hl=en',
    codeLink: '#'
  },
  {
    title: 'thebusstand Crm',
    description: 'Designed and developed an internal admin dashboard for managing users, trips, and transactions. Integrated dynamic charts with Chart.js and used Firebase for data management.',
    image: '../assets/crm.png',
    demoLink: '',
    codeLink: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen w-full  bg-gradient-to-b from-white to-blue-100 py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex gap-4">
                {/* {
                project.demoLink ? <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm">
                View Project
              </a> :"" 
              }  */}
                {/* {project.iosLink && (
                  <a href={project.iosLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm">
                    iOS
                  </a>
                )}
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm">
                    Android
                  </a>
                )} */}
<div className="flex flex-wrap gap-2 mt-2">
  {project.iosLink && (
    <a
      href={project.iosLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-3 py-1.5 rounded-full text-white bg-black hover:bg-gray-800 text-xs font-medium transition"
    >
      🍎 iOS
    </a>
  )}
  {project.AndLink && (
    <a
      href={project.AndLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-3 py-1.5 rounded-full text-white bg-green-600 hover:bg-green-700 text-xs font-medium transition"
    >
      🤖 Android
    </a>
  )}
  {project.demoLink && (
    <a
      href={project.demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-3 py-1.5 rounded-full text-white bg-blue-600 hover:bg-blue-700 text-xs font-medium transition"
    >
      🌐 Website
    </a>
  )}
</div>



                {/* <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm">
                  Source Code
                </a> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
