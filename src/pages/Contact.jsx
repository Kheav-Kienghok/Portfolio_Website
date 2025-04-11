import { LiaTelegramPlane } from "react-icons/lia";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');

    emailjs
      // .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current, 
        'oL__cNPlxm3R0sWya'
        
      )
      .then(
        () => {
          setSuccessMsg("Thanks! Your message was sent successfully.");
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          setErrorMsg("Oops! Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="font-[Lato-Thin] py-10 px-8 lg:px-10 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-funnel text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          style={{ color: '#2563EB' }}
        >
          Let's Connect
        </h2>

        <p className="text-gray-600 mb-6 text-lg" style={{ color: '#4B5563' }}>
          Got a question, an idea, or just want to say
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 ml-1 uppercase"
            style={{ color: '#4F46E5' }}
          >
            Hello
          </span>? I'd love to chat! <br />
          <span className="text-base lg:text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 font-extrabold"
            style={{ color: '#4F46E5' }}
          >
            Let’s build something awesome together.
          </span>
        </p>
      </div>

      <div 
        // className="max-w-3xl mx-auto p-10 md:p-10 rounded-xl shadow-xl border border-gray-200 relative overflow-hidden bg-white/30 backdrop-blur-lg"
        style={{
          maxWidth: '48rem', // max-w-3xl equivalent
          margin: '0 auto', // mx-auto equivalent
          padding: '2.5rem', // p-10 equivalent
          borderRadius: '1rem', // rounded-xl equivalent
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // shadow-xl equivalent
          border: '1px solid #e5e7eb', // border-gray-200 equivalent
          position: 'relative', // relative equivalent
          overflow: 'hidden', // overflow-hidden equivalent
          backgroundColor: 'rgba(255, 255, 255, 0.3)', // bg-white/30 equivalent
          backdropFilter: 'blur(20px)', // backdrop-blur-lg equivalent (modern browsers)
          WebkitBackdropFilter: 'blur(20px)', // For Safari
        }}
      >
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 4 }} 
          className="absolute -top-12 -left-12 w-36 h-36 bg-blue-500 opacity-30 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(37, 99, 235, 0.3)' }}
        ></motion.div>

        <motion.div 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ repeat: Infinity, duration: 4, delay: 1 }} 
          className="absolute -bottom-12 -right-12 w-36 h-36 bg-purple-500 opacity-30 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(139, 92, 246, 0.3)' }}
        ></motion.div>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <input 
            type="text" name="user_name" placeholder="Your Name" required
            value={name} onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-sm"
            style={{
              backgroundColor: '#f3f4f6', // fallback for bg-gray-100
              color: '#1f2937', // fallback for text-gray-800
              borderRadius: '0.375rem', // rounded-md
            }}
          />
          <input 
            type="email" name="user_email" placeholder="Your Email" required
            value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-sm"
            style={{
              backgroundColor: '#f3f4f6',
              color: '#1f2937',
              borderRadius: '0.375rem',
            }}
          />
          <textarea 
            name="message" rows="5" placeholder="Your Message" required
            value={message} onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 rounded-md bg-white/50 backdrop-blur-md text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-md transition duration-300 hover:shadow-lg"
            style={{
              backgroundColor: 'rgba(255,255,255,0.85)', // fallback for bg-white/50
              color: '#1f2937',
              borderRadius: '0.375rem',
              backdropFilter: 'blur(4px)', // will be ignored in older iOS, graceful
              WebkitBackdropFilter: 'blur(4px)',
            }}
          ></textarea>

          <motion.button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition p-4 rounded-xl font-bold text-white text-lg shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-purple-400"
            style={{
              backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6)', // fallback for gradient
              borderRadius: '0.75rem',
              fontWeight: '700',
              fontSize: '1.125rem',
              color: '#ffffff',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {successMsg && (
            <p className="text-green-600 text-center mt-1 font-medium"
              style={{ color: '#16a34a' }}
            >
              {successMsg}
            </p>)}

          {errorMsg && (
            <p className="text-red-600 text-center mt-1 font-medium"
              style={{ color: '#dc2626' }}
            >
              {errorMsg}
            </p>)}

        </form>

        <div className="flex justify-center gap-6 lg:mt-5 md:mt-5 text-gray-600 text-3xl relative z-10">
          <div className="hidden md:block lg:block">
            <motion.div whileHover={{ scale: 1.3 }} transition={{ duration: 0.2 }}>
              <Link
                to="#"
                onClick={() => window.location.href = "mailto:kheavkienghok@gmail.com"}
                className="text-2xl text-red-600 hover:text-red-400 transition"
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
              >
                <LiaTelegramPlane size={30} className="text-blue-700" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
