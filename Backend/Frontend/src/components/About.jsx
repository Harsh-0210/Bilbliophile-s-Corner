import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            About <span className="text-blue-600">Us</span>
          </h1>
          <p className="mt-12">
            Welcome to our platform! We are dedicated to providing high-quality
            educational resources and courses to help you achieve your goals. Our mission is to offer a wide range of learning opportunities that cater to various interests and skill levels.
          </p>
          <p className="mt-6">
            At our core, we believe in the power of knowledge and its ability to transform lives. Our team is passionate about curating valuable content and providing an exceptional learning experience. Whether you're looking to master new skills, advance your career, or explore new subjects, we're here to support you every step of the way.
          </p>
          <p className="mt-6">
            Thank you for being part of our community. We look forward to helping you reach new heights and achieve your aspirations.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-xl md:text-2xl font-semibold">Connect with Us</h2>
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
        </div>

        <div className="mt-12 text-center">
          <Link to="/">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
