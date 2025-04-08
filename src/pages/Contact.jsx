import { LiaTelegramPlane } from "react-icons/lia";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Contact = () => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Load form data from localStorage on component mount
  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="font-[Lato-Thin] py-10 px-8 lg:px-10 md:px-16">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="font-funnel text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          style={{
            color: '#2563EB', // Equivalent to Tailwind's text-blue-600
          }}
        >
          Let's Connect
        </h2>

        <p className="text-gray-600 mb-6 text-lg"
          style={{
            color: '#4B5563', // Equivalent to Tailwind's text-gray-600
          }}
        >
          Got a question, an idea, or just want to say
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 ml-1 uppercase"
            style={{
              color: '#4F46E5', // Equivalent to Tailwind's text-indigo-500
            }}
          >
            Hello
          </span>? I'd love to chat! <br />
          <span className="text-base lg:text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 font-extrabold"
            style={{
              color: '#4F46E5', // Equivalent to Tailwind's text-indigo-500
            }}
          >
            Let’s build something awesome together.
          </span>
        </p>

      </div>

      <div className="max-w-3xl mx-auto p-10 md:p-14 rounded-xl shadow-xl border border-gray-200 relative overflow-hidden bg-white/30 backdrop-blur-lg"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)', // fallback for bg-white + bg-opacity-30
          border: '1px solid rgba(255, 255, 255, 0.2)', // fallback for border-white/20
          backdropFilter: 'blur(10px)',                // fallback for backdrop-blur-lg
          WebkitBackdropFilter: 'blur(10px)',          // Safari fallback
        }}
      >
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 4 }} 
          className="absolute -top-12 -left-12 w-36 h-36 bg-blue-500 opacity-30 rounded-full blur-3xl"
          style={{
            backgroundColor: 'rgba(37, 99, 235, 0.3)', // fallback for bg-blue-500 + opacity-30
          }}
        ></motion.div>

        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 4, delay: 1 }} 
          className="absolute -bottom-12 -right-12 w-36 h-36 bg-purple-500 opacity-30 rounded-full blur-3xl"
          style={{
            backgroundColor: 'rgba(139, 92, 246, 0.3)', // fallback for bg-purple-500 + opacity-30
          }}
        ></motion.div>
        
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <input 
            type="text" 
            name="name" 
            id="name"
            placeholder="Your Name" 
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-sm" 
            style={{
              backgroundColor: 'rgba(243, 244, 246, 0.5)', // fallback for bg-gray-100
              color: '#1F2937', // fallback for text-gray-800
            }}
          />
          <input 
            type="email" 
            name="email" 
            id="email"
            placeholder="Your Email" 
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-sm" 
            style={{
              backgroundColor: 'rgba(243, 244, 246, 0.5)', // fallback for bg-gray-100
              color: '#1F2937', // fallback for text-gray-800
            }}
          />
          <textarea 
            name="message" 
            id="message"
            placeholder="Your Message" 
            autoComplete="off"  // Prevent autofill for message fields
            rows="5" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 rounded-md bg-white/50 backdrop-blur-md text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-md transition duration-300 hover:shadow-lg"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)', // fallback for bg-white/50
              backdropFilter: 'blur(8px)',                // fallback for backdrop-blur-md
              WebkitBackdropFilter: 'blur(8px)',          // Safari fallback
            }}
          ></textarea>

          <motion.button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition p-4 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-purple-400"
            style={{
              background: "linear-gradient(to right, #3b82f6, #9333ea)",
              backgroundColor: "#2563eb", // Fallback solid color
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>

        <div className="flex justify-center gap-6 mt-10 text-gray-600 text-3xl relative z-10">
          <div className="hidden md:block lg:block">
            <motion.div whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
              <Link
                to="#"
                onClick={() => window.location.href = "mailto:kheavkienghok@gmail.com"}
                className="text-2xl text-red-600 hover:text-red-400 transition"
                style={{
                  color: '#dc2626', // Fallback for text-red-600
                }}
              >
                <SiGmail size={30} className="text-red-600" />
              </Link>
            </motion.div>
          </div>

          <div className="hidden md:block lg:block">
            <motion.div whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
              <Link
                to="#"
                onClick={() => window.open("https://t.me/anshishui", "_blank", "noopener,noreferrer")}
                className="text-2xl text-blue-700 hover:text-blue-500 transition"
                style={{
                  color: '#3b82f6', // Fallback for text-blue-700
                }}
              >
                <LiaTelegramPlane size={30} className="text-blue-700" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
