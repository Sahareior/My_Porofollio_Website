import { Link, animateScroll as scroll } from "react-scroll";
import { FaBeer, FaDownload } from 'react-icons/fa';
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    document.title = "Portfolio"; // Update the title here
  }, []);
  return (
    <div className="navbar z-10 bg-black fixed">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
          <li className="">      <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              About
              </Link></li>
       
          <li> <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
             Skills
              </Link></li>
          <li> <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Projects
              </Link></li>
          <li> <Link
                activeClass="active"
                to="test"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Testimonial
              </Link></li>
          <li> <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link></li>
        </ul>
      </div>
      <a className="btn btn-ghost ml-52 md:ml-0 normal-case text-xl"><img className="w-20 rounded-full" src="https://i.ibb.co/F6DDcWq/logo.png" alt="" /></a>
    </div>
    <div className="navbar-center hidden md:visible lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li className="text-white">
        <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              About
              </Link>
          </li>
        <li className="text-white">
        <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
             Skills
              </Link>
          </li>
        <li className="text-white">
        <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Projects
              </Link>
          </li>
  
          <li className="text-white">
        <Link
                activeClass="active"
                to="test"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Testimonial
              </Link>
          </li>
          <li className="text-white">
        <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
          </li>
      </ul>
    </div>
    <div className="navbar-end">
    <a
  href="/Resume_8_2.pdf"
  download="Example-PDF-document"
  target="_blank"
  rel="noopener noreferrer"
>
<button className="btn btn-secondary"><FaDownload></FaDownload> My Resume</button>
</a>
      
    </div>
  </div>
  );
};

export default Navbar;