import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
// import PhoneImage from '../assets/phone.png'; // replace with correct path

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20 px-6 relative overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 📱 Mirrored Phone Image */}
        {/* <motion.img
          src={PhoneImage}
          alt="Phone"
          className="w-64 md:w-80 transform -scale-x-100 drop-shadow-xl"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        /> */}

        {/* 🧊 Contact Info Card */}
        <div className="bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full md:max-w-xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Contact Me</h2>
          <p className="text-gray-600 mb-8 text-center">
            {/* Let’s work together or just say hi 👋 */}
          </p>

          <div className="space-y-5 text-gray-700">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-indigo-600" />
              <span>vikramganesan111@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl text-indigo-600" />
              <span>+91 88708 12264</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-2xl text-indigo-600" />
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-2xl text-indigo-700">
            <a href="https://github.com/vikram-G191" target="_blank" rel="noreferrer" className="hover:text-indigo-900"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/vikram-g01/" target="_blank" rel="noreferrer" className="hover:text-indigo-900"><FaLinkedin /></a>
            <a href="mailto:vikramganesan111@gmail.com" className="hover:text-indigo-900"><FaEnvelope /></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
