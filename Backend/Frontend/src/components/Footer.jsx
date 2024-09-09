import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover" href="/about">About us</a>
          <a className="link link-hover" href="/contact">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <div className="mt-6 flex justify-center gap-6">
            <a
              href="/"
              target="_blank" // Opens the link in another tab
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        <aside>
          <p>Copyright © 2024 - All right reserved by ABC Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
