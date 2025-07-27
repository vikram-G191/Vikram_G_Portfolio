import { motion } from 'framer-motion';
import "./Contact.css"

const About = () => {
  return (
    <section id="about" className="min-h-screen  bg-gradient-to-b from-white to-blue-100 flex items-center justify-center py-4 px-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <motion.img
          src="../assets/avatar.png" // replace with your image path
          alt="Profile"
          className="rounded-xl w-full max-w-sm mx-auto shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
          {/* <p className="text-lg text-gray-600 leading-relaxed mb-4">
            I'm <span className="text-indigo-600 font-semibold">Vikram G</span>, a frontend developer passionate about crafting intuitive, beautiful user experiences.
            With a strong foundation in React, React Native, and Js, I love building products that solve real-world problems.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm always curious to learn new technologies and improve my skills. When I’m not coding, you’ll find me exploring design, tech blogs, or traveling.
          </p> */}
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            I'm <span className="text-indigo-600 font-semibold">Vikram G</span>, a frontend developer with a passion for crafting intuitive and high-performing user experiences.
            With a strong foundation in <strong>React</strong>, <strong>React Native</strong>, and <strong>JavaScript</strong>, I enjoy building clean and responsive products that solve real-world problems.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            I'm always eager to explore new technologies and improve my skills. Outside of coding, I enjoy diving into UI design, reading tech blogs, and discovering new places.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;


// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-4xl mx-auto text-center"
//       >
//         <motion.h2
//           className="text-4xl font-bold text-gray-800 mb-4"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           👋 About Me
//         </motion.h2>

//         <motion.p
//           className="text-lg text-gray-600 leading-relaxed mb-6"
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.4 }}
//         >
//           I'm a passionate <span className="font-semibold text-blue-600">Full Stack Developer</span> with a love
//           for building clean and user-friendly experiences. My work is focused on blending design and technology to create meaningful digital products.
//         </motion.p>

//         <motion.div
//           className="flex justify-center gap-4 flex-wrap"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           <span className="px-4 py-2 bg-blue-100 text-blue-700 font-medium rounded-full shadow-md">
//             JavaScript
//           </span>
//           <span className="px-4 py-2 bg-green-100 text-green-700 font-medium rounded-full shadow-md">
//             React
//           </span>
//           <span className="px-4 py-2 bg-purple-100 text-purple-700 font-medium rounded-full shadow-md">
//             Node.js
//           </span>
//           <span className="px-4 py-2 bg-yellow-100 text-yellow-700 font-medium rounded-full shadow-md">
//             UI/UX
//           </span>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default About;

// import React from "react";
// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       when: "beforeChildren",
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const techBadgeVariants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { type: "spring", stiffness: 100 },
//   },
//   hover: {
//     scale: 1.1,
//     rotate: [0, 3, -3, 0],
//     transition: { type: "spring", stiffness: 300 },
//   },
// };

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-100 to-blue-50 px-4"
//     >
//       <motion.div
//         className="max-w-4xl mx-auto text-center"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         <motion.h2
//           className="text-5xl font-bold text-gray-800 mb-4"
//           variants={itemVariants}
//         >
//           👋 About Me
//         </motion.h2>

//         <motion.p
//           className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto"
//           variants={itemVariants}
//         >
//           I'm a passionate{" "}
//           <span className="font-semibold text-blue-600">Full Stack Developer</span>{" "}
//           who thrives on building elegant, interactive, and user-centered web experiences.
//           I love blending logic with creativity to craft digital solutions that matter.
//         </motion.p>

//         <motion.div
//           className="flex justify-center gap-4 flex-wrap"
//           variants={itemVariants}
//         >
//           {[
//             { label: "JavaScript", bg: "bg-blue-100", text: "text-blue-700" },
//             { label: "React", bg: "bg-green-100", text: "text-green-700" },
//             { label: "Node.js", bg: "bg-purple-100", text: "text-purple-700" },
//             { label: "UI/UX", bg: "bg-yellow-100", text: "text-yellow-700" },
//           ].map((tech, index) => (
//             <motion.span
//               key={index}
//               className={`px-5 py-2 rounded-full font-medium shadow-md ${tech.bg} ${tech.text}`}
//               variants={techBadgeVariants}
//               whileHover="hover"
//             >
//               {tech.label}
//             </motion.span>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default About;


