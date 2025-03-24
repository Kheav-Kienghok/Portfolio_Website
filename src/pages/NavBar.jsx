import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (

    <section>

      <nav className='text-black flex justify-end items-center max-w-[1300px] mx-auto h-24'>

        <ul className='font-[Inter] hidden md:flex text-lg font-semibold lg:gap-10 justify-end cursor-pointer'>
          <li className='p-5'>
            <Link 
              to="home" 
              smooth={true} 
              offset={50} 
              duration={500} 
              spy={true} 
              hashSpy={true}
              activeClass="text-blue-500 font-bold"
            >
              Home
            </Link>
          </li>
          <li className='p-5'><Link to="about" smooth={true} offset={50} duration={500}>About</Link></li>
          <li className='p-5'><Link to="projects" smooth={true} offset={50} duration={500}>Projects</Link></li>
          <li className='p-5'><Link to="skills" smooth={true} offset={50} duration={500}>Skills</Link></li>
          <li className='p-5'><Link to="contact" smooth={true} offset={50} duration={500}>Contact</Link></li>
        </ul>

        <div className='absolute top-5 right-5 md:hidden' onClick={handleNav}>
          {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
        </div>

      </nav>

    </section>
  )
}

export default NavBar