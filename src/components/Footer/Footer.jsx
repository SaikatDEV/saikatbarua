import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaDonate } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 pt-8">
      <section className="container mx-auto px-6 lg:px-20">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Services</h3>
            <ul>
              <li className="mb-2 flex items-center gap-2 hover:text-gray-100">
                <FaDonate className="text-orange-400" />
                <a href="#">Day Visits</a>
              </li>
              <li className="mb-2 flex items-center gap-2 hover:text-gray-100">
                <FaDonate className="text-orange-400" />
                <a href="#">Overnight Visits</a>
              </li>
              <li className="mb-2 flex items-center gap-2 hover:text-gray-100">
                <FaDonate className="text-orange-400" />
                <a href="#">Ordination as a Monk</a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Useful Links</h3>
            <ul>
              <li className="mb-2 flex items-center gap-2 hover:text-gray-100">
                <FaDonate className="text-orange-400" />
                <a href="#">Donate Online</a>
              </li>
              <li className="mb-2 flex items-center gap-2 hover:text-gray-100">
                <FaPhone className="text-orange-400" />
                <a href="#">Contact Info</a>
              </li>
              <li className="mb-2 flex items-center gap-2 hover:text-gray-100">
                <FaPhone className="text-orange-400" />
                <a href="#">Phone: +ph</a>
              </li>
              <li className="mb-2 flex items-center gap-2 hover:text-gray-100">
                <FaEnvelope className="text-orange-400" />
                <a href="mailto:info@domain.com">Email</a>
              </li>
            </ul>
          </div>

          {/* Copyright Section */}
          <div className="lg:col-span-1 sm:col-span-2 text-center lg:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Copyright</h3>
            <p className="text-gray-400">© 2008 - Buddhist Campus</p>
            <p className="text-gray-400">All Rights Reserved</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
