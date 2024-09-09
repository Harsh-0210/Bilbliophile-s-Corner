import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Thank you for contacting us!");
    navigate("/"); // Redirect to the homepage
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Get in <span className="text-blue-600">Touch</span> with Us!
          </h1>
          <p className="mt-12">
            We would love to hear from you. Whether you have questions, feedback, or
            just want to say hello, feel free to reach out to us!
          </p>
          <Link to="/">
            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 p-8 rounded-md shadow-md w-full md:w-1/2"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-left mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-200 focus:bg-gray-300 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-200 focus:bg-gray-300 focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-md bg-gray-200 focus:bg-gray-300 focus:outline-none"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
