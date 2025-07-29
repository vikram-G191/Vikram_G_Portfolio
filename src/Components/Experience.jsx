// components/WorkExperience.js
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="bg-[#f5f9ff] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <motion.div
          className="bg-white rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Nubiznez Private Limited, Coimbatore, Tamil Nadu
              </h3>
              <p className="text-sm text-purple-600">Front-End Developer</p>
            </div>
            <p className="text-sm text-gray-500 mt-2 sm:mt-0">June 2024 – Present</p>
          </div>

          <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>
              Built and maintained customer-facing web and mobile apps using <span className="font-medium text-gray-900">React.js</span> and <span className="font-medium text-gray-900">React Native</span>.
            </li>
            <li>
              Developed <span className="font-medium text-gray-900">internal admin tools and dashboards</span> to manage bookings, users, and analytics.
            </li>
            <li>
              Optimized performance with lazy loading, code splitting, and memoization — <span className="font-semibold text-purple-600">reduced load times by ~30%</span>.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
