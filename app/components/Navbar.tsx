"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
import logo from "@/public/Jarr-Transparent-Logo.webp";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full flex px-2 justify-between items-center backdrop-blur-sm">
      <div className="flex items-center justify-between w-full sm:w-[70%] mx-auto">
        <div>
          <Image
            src={logo}
            alt="JARR Logo"
            width={400}
            height={400}
            priority
            className="h-32 sm:h-44 md:h-44 w-auto"
          />
        </div>

        {/* Social media icons + About link */}
        <nav className="flex items-center gap-4 sm:gap-6 text-white">
          <a
            href="https://www.instagram.com/jarr.cm0/"
            target="_blank"
            rel="noreferrer"
            aria-label="Jarr on Instagram"
          >
            <FaInstagram className="text-xl sm:text-2xl" />
          </a>

          <a
            href="https://x.com/Jarr_cm"
            target="_blank"
            rel="noreferrer"
            aria-label="Jarr on Twitter"
          >
            <FaTwitter className="text-xl sm:text-2xl" />
          </a>

          <a
            href="https://www.linkedin.com/company/jarr-cm/"
            target="_blank"
            rel="noreferrer"
            aria-label="Jarr on LinkedIn"
          >
            <FaLinkedin className="text-xl sm:text-2xl" />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61584765691734"
            target="_blank"
            rel="noreferrer"
            aria-label="Jarr on Facebook"
          >
            <FaFacebook className="text-xl sm:text-2xl" />
          </a>

          <a
            href="https://www.tiktok.com/@jarr.cm0"
            target="_blank"
            rel="noreferrer"
            aria-label="Jarr on Tiktok"
          >
            <FaTiktok className="text-xl sm:text-2xl" />
          </a>
        </nav>
      </div>
    </header>
  );
}