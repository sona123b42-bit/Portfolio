import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaGoogle,
} from "react-icons/fa";
export default function Contact() {
  return (
    <section className="bg-slate-50 py-20 px-2 md:px-0" id="contact">
      <div className="max-w-4xl mx-auto text-center space-y-6 ">
        <h2 className="text-4xl font-bold ">Let’s Connect</h2>
        <p className="text-slate-600 text-lg">
          I’m always open to new projects, collaborations, or just a friendly
          chat. Whether you’d like to build something together, discuss creative
          ideas, or simply say hello — feel free to reach out anytime.
        </p>

        <div className="flex justify-center space-x-6 text-3xl text-slate-600">
          <a
            href="https://www.facebook.com/sona.va.16"
            className="hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/sona123b42-bit"
            className="hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sona-va-b9719b332/"
            className="hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/Va_Sona"
            className="hover:text-sky-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
          </a>
          <a
            href="mailto:sona123.b42@gmail.com"
            className="hover:text-red-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogle />
          </a>
        </div>
      </div>
    </section>
  );
}
