import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-shadow-blue">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p>
              I'm currently available for freelance projects and full-time
              opportunities. If you're interested in collaborating or just want
              to say hi, feel free to reach out to me using the form below or
              through my social media profiles.
            </p>
            <div className="mb-4 mt-8">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-green-400 mr-2"
              />
              <a
                href="mailto:selvakumarthushanthan5@gmail.com"
                className="hover:underline">
                selvakumarthushanthan5@gmail.com
              </a>
            </div>
            <div className="mb-4 mt-8">
              <FontAwesomeIcon icon={faPhone} className="text-green-400 mr-2" />
              <span>+94789586877</span>
            </div>
            <div className="mb-4 mt-8">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-green-400 mr-2"
              />
              <span>Telbedde, Badulla, Sri Lanka</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form action="" className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded bg-gray-800 border-gray-600 focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="mail"
                  className="block mb-2 focus:border-green-400">
                  Your E-mail
                </label>
                <input
                  type="email"
                  id="mail"
                  name="email"
                  className="w-full p-2 rounded bg-gray-800 border-gray-600  focus:border-green-400"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter Your Message Here...."
                  rows={5}
                  className="w-full p-2 rounded bg-gray-800 border-gray-600  focus:border-green-400"></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
