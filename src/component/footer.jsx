import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const PortfolioFooter = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left - Name or Logo */}
        <div className="text-xl font-bold text-amber-400">Pushkar Vijay Patil</div>
        
        {/* Center - Navigation Links */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-amber-400 transition">About</a>
          <a href="#projects" className="hover:text-amber-400 transition">Projects</a>
          <a href="#skills" className="hover:text-amber-400 transition">Skills</a>
          <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
        </div>
        
        {/* Right - Social Media Icons */}
        <div className="flex gap-4 text-lg">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-amber-400 transition" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-amber-400 transition" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-amber-400 transition" />
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} Pushkar. All rights reserved.
      </div>
    </footer>
  );
};

export default PortfolioFooter;
