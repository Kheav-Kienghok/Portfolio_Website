import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>
        <p className="text-gray-600 mb-10 text-lg">
          Have a question or just want to say hi? Reach out below!
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-14 rounded-xl shadow-xl border border-gray-200 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
        
        <form className="space-y-6 relative z-10">
          <input type="text" placeholder="Your Name" className="w-full p-4 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-sm" />
          <input type="email" placeholder="Your Email" className="w-full p-4 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-sm" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-4 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-sm"></textarea>
          <motion.button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition p-4 rounded-md font-bold text-white text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
        
        <div className="flex justify-center gap-6 mt-10 text-gray-600 text-3xl relative z-10">
          <motion.a href="mailto:your@email.com" className="hover:text-blue-500 transition" whileHover={{ scale: 1.3 }}><FaEnvelope /></motion.a>
          <motion.a href="tel:+123456789" className="hover:text-blue-500 transition" whileHover={{ scale: 1.3 }}><FaPhone /></motion.a>
          <motion.a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-blue-500 transition" whileHover={{ scale: 1.3 }}><FaLinkedin /></motion.a>
          <motion.a href="https://github.com/yourgithub" target="_blank" className="hover:text-blue-500 transition" whileHover={{ scale: 1.3 }}><FaGithub /></motion.a>
        </div>
      </div>
    </section>
  );
}
