import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <section>
      <nav className='font-[Inter] text-black flex justify-end items-center max-w-[1300px] mx-auto h-18 lg:h-30'>
        
        {/* Desktop Navigation */}
        <ul className='hidden md:flex text-lg font-semibold lg:gap-10 justify-end cursor-pointer'>
          <li className='p-5'>
            <ScrollLink 
              to="home" 
              smooth={true} 
              offset={0} 
              duration={500} 
              spy={true} 
              hashSpy={true}
              activeClass="text-blue-500 font-bold"
            >
              Home
            </ScrollLink>
          </li>

          <li className='p-5'>
            <ScrollLink 
              to="skills" 
              smooth={true} 
              offset={100} 
              duration={500}
            >
              Skills
            </ScrollLink>
          </li>

          <li className='p-5'>
            <ScrollLink 
                to="projects" 
                smooth={true} 
                offset={50} 
                duration={500}
              >
                Projects
            </ScrollLink>
          </li>

          <li className='p-5'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className='absolute top-5 right-5 md:hidden' onClick={handleNav}>
          {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
