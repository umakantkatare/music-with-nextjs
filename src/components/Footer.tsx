"use client";
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Music2 } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Music2 className="h-7 w-7 text-teal-400" />
              <h2 className="text-xl font-bold text-white">Music School</h2>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Empowering aspiring musicians through world-class education,
              expert mentorship, and hands-on learning experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {["Home", "About", "Courses", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="transition-colors hover:text-teal-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>

            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-teal-400" />
                <span>New Delhi, India</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-teal-400" />
                info@musicschool.com
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-teal-400" />
                +91 98765 43210
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>

            <p className="mt-5 text-sm text-gray-400">
              Stay connected for music tips, workshops, and latest updates.
            </p>

            <div className="mt-6 flex gap-4">
              {[
                {
                  id: 1,
                  icon: FaFacebook,
                  href: "#",
                },
                {
                  id: 2,
                  icon: FaInstagram,
                  href: "#",
                },
                {
                  id: 3,
                  icon: FaXTwitter,
                  href: "#",
                },
              ].map(({ icon: Icon, href, id }) => (
                <Link
                  key={id}
                  href={href}
                  className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-teal-400 hover:bg-teal-500 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row">
          <p>© {year} Music School. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/" className="hover:text-teal-400">
              Privacy Policy
            </Link>

            <Link href="/" className="hover:text-teal-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
