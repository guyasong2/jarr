"use client";

import type React from "react";
import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaTiktok } from "react-icons/fa";
import logo from "@/public/Jarr-Transparent-Logo.webp";
import afriback from "@/public/green-geometric-patterned-background.svg";


const TARGET_DATE = new Date("2026-02-05T00:00:00Z").getTime(); 
type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calculateTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = TARGET_DATE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}


export default function Home() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "already" | "error"
  >("idle");


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const email = formData.get("email");

  try {
    setStatus("loading");

    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json().catch(() => ({} as any));

    if (!res.ok) {
      console.error("Newsletter API error:", res.status, data);
      setStatus("error");
      return;
    }

    if (data.already) {
      setStatus("already");
    } else {
      setStatus("success");
    }

    form.reset();
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};

  const timerBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <main className="bg-linear-to-b from-green-400 via-green-500 to-green-950 relative overflow-hidden">
      {/* Full‑screen pattern image */}
      <div className="absolute inset-0 z-10">
        <Image
          src={afriback}
          alt="Geometric pattern"
          fill
          className="object-cover opacity-30 pointer-events-none"
          priority
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center text-center mx-auto w-[90%] sm:w-[70%] mt-[50px] sm:mt-0 md:mt-12">
        {/* Header / Navbar (centered) */}
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

            {/* Social media icons */}
            <nav className="flex items-center gap-6 sm:gap-6 text-white">
              {/* Replace `#` with your actual URLs */}
              <a
                href="https://www.instagram.com/jarr.cm0/"
                target="_blank"
                rel="noreferrer"
                aria-label="Jarr on Instagram"
              >
                <FaInstagram className="text-3xl sm:text-2xl" />
              </a>
              <a
                href="https://x.com/Jarr_cm"
                target="_blank"
                rel="noreferrer"
                aria-label="Jarr on Twitter"
              >
                <FaTwitter className="text-3xl sm:text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/jarr-cm/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BKfIZilhJTKKA2fmrONid2Q%3D%3D"
                target="_blank"
                rel="noreferrer"
                aria-label="Jarr on LinkedIn"
              >
                <FaLinkedin className="text-3xl sm:text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584765691734"
                target="_blank"
                rel="noreferrer"
                aria-label="Jarr on Facebook"
              >
                <FaFacebook className="text-3xl sm:text-2xl" />
              </a>

              <a
                href="https://www.tiktok.com/@jarr.cm0"
                target="_blank"
                rel="noreferrer"
                aria-label="Jarr on Tiktok"
              >
                <FaTiktok className="text-3xl sm:text-2xl" />
              </a>
              
            </nav>
          </div>
        </header>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Countdown */}
          <div className="flex gap-3 justify-center">
            {timerBlocks.map((item) => (
              <div
                key={item.label}
                className="bg-[#2D5A3D] text-white px-4 py-3 min-w-[72px] mb-10 flex flex-col items-center justify-center"
              >
                <span className="text-xl md:text-2xl font-extrabold">
                  {String(item.value).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wide">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Heading */}
          <h1 className="text-center text-[36px] sm:text-[48px] md:text-[64px] font-black text-[#322F2F] leading-tight mb-4">
            We are coming soon
          </h1>

          {/* Subheading */}
          <p className="text-center text-xl md:text-2xl text-[#1A3A28] max-w-xl mb-8">
            Almost there! If you want to be notified when the website goes live,
            subscribe to our mailing list.
          </p>

          {/* Email form */}
          {/* Email form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-xl items-stretch justify-center"
          >
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 bg-transparent border-[3px] border-[#1A3A28] px-4 py-2 text-[#1A3A28] placeholder-[#1A3A28] font-semibold focus:outline-none text-sm md:text-base"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#2D5A3D] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-2 font-bold text-sm md:text-base tracking-wide shadow-[0_4px_0_0_rgba(0,0,0,0.4)] hover:bg-[#1A3A28] transition whitespace-nowrap"
            >
              {status === "loading" ? "Submitting..." : "NOTIFY ME!"}
            </button>
          </form>

          {status === "success" && (
            <p className="mt-3 text-sm text-emerald-900 bg-emerald-100 border border-emerald-300 px-4 py-2 rounded">
              Thanks for subscribing! We&apos;ll let you know when Jarr
              launches.
            </p>
          )}

          {status === "already" && (
            <p className="mt-3 text-sm text-amber-900 bg-amber-100 border border-amber-300 px-4 py-2 rounded">
              You&apos;re already on the list. We&apos;ll keep you posted!
            </p>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-red-900 bg-red-100 border border-red-300 px-4 py-2 rounded">
              Something went wrong. Please try again.
            </p>
          )}
        </div>

        {/* Footer */}
        <footer className="pb-6 text-center text-[#1A3A28] font-semibold text-xs">
          Jarr. All Rights Reserved 2025
        </footer>
      </div>
    </main>
  );
}
