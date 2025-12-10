import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import afriback from "@/public/green-geometric-patterned-background.svg";

export const metadata: Metadata = {
  title: "About Jarr - AI Study App for Past Papers & Exam Prep",
  description:
    "Learn about Jarr, an AI-powered study platform that helps students in Africa prepare for exams using past papers, AI summaries, flashcards and quizzes.",
};

export default function AboutPage() {
  return (
    <main className="bg-linear-to-b from-green-400 via-green-500 to-green-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-10">
        <Image
          src={afriback}
          alt="Geometric pattern"
          fill
          className="object-cover opacity-30 pointer-events-none"
          priority
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Main content container */}
        <section className="flex-1">
          <div className="mx-auto w-[90%] sm:w-[70%] pt-32 sm:pt-48 pb-16">
            {/* Breadcrumb / back link */}
            <div className="mb-6 text-xs text-[#1A3A28]/80">
              <Link href="/" className="underline hover:text-[#2D5A3D]">
                ← Back to home
              </Link>
            </div>

            {/* Hero */}
            <section className="mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A3A28] mb-4">
                About Jarr
              </h1>
              <p className="text-base sm:text-lg text-[#243b30] max-w-3xl leading-relaxed">
                Jarr is an{" "}
                <strong>
                  AI-powered study platform built around past exam papers
                </strong>
                . We help students turn PDFs and questions into clear summaries,
                flashcards, quizzes and step‑by‑step solutions so exam prep
                feels focused instead of overwhelming.
              </p>
            </section>

            {/* Mission / why we exist */}
            <section className="mb-10 grid gap-6 md:grid-cols-2">
              <div className="bg-white/90 backdrop-blur border border-[#2D5A3D]/10 rounded-xl p-5 md:p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[#1A3A28] mb-2">
                  Our mission
                </h2>
                <p className="text-sm sm:text-base text-[#243b30] leading-relaxed">
                  Jarr is built for students at every level, from secondary
                  school to university and professional exams, with a strong
                  focus on learners across Africa. Our mission is simple:
                  <br />
                  <span className="font-semibold">
                    make exam preparation more accessible, more engaging, and
                    less stressful.
                  </span>
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur border border-[#2D5A3D]/10 rounded-xl p-5 md:p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[#1A3A28] mb-2">
                  Why we&apos;re building Jarr
                </h2>
                <p className="text-sm sm:text-base text-[#243b30] leading-relaxed">
                  Across campuses and schools, students already rely on{" "}
                  <strong>past exam papers</strong> to revise. But finding the
                  right paper, organising PDFs, and turning questions into real
                  understanding takes a lot of time.
                  <br />
                  <br />
                  Jarr uses AI to take that same material and turn it into
                  <strong> explanations, summaries and practice tools</strong>,
                  saving time so students can focus on actually learning.
                </p>
              </div>
            </section>

            {/* How it works */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#1A3A28] mb-4">
                How Jarr works
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white/90 border border-[#2D5A3D]/10 rounded-xl p-5 shadow-sm">
                  <p className="text-xs font-semibold text-[#2D5A3D] uppercase mb-1">
                    Step 1
                  </p>
                  <h3 className="font-semibold text-[#1A3A28] mb-2">
                    Collect past papers
                  </h3>
                  <p className="text-sm text-[#243b30] leading-relaxed">
                    We collect and organise past exam papers by{" "}
                    <strong>school, level, course and year</strong>. Students
                    and clubs will also be able to upload and share papers in
                    the future.
                  </p>
                </div>

                <div className="bg-white/90 border border-[#2D5A3D]/10 rounded-xl p-5 shadow-sm">
                  <p className="text-xs font-semibold text-[#2D5A3D] uppercase mb-1">
                    Step 2
                  </p>
                  <h3 className="font-semibold text-[#1A3A28] mb-2">
                    Turn them into AI study tools
                  </h3>
                  <p className="text-sm text-[#243b30] leading-relaxed">
                    Using modern AI models, Jarr generates{" "}
                    <strong>concise summaries</strong>,{" "}
                    <strong>flashcards</strong>, <strong>quizzes</strong> and{" "}
                    <strong>step‑by‑step solutions</strong> from those papers.
                  </p>
                </div>

                <div className="bg-white/90 border border-[#2D5A3D]/10 rounded-xl p-5 shadow-sm">
                  <p className="text-xs font-semibold text-[#2D5A3D] uppercase mb-1">
                    Step 3
                  </p>
                  <h3 className="font-semibold text-[#1A3A28] mb-2">
                    Help students study smarter
                  </h3>
                  <p className="text-sm text-[#243b30] leading-relaxed">
                    Students can practise with real exam questions, review AI
                    explanations, and use flashcards and quizzes to reinforce
                    what they&apos;ve learned on <strong>web and mobile</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Who it's for */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#1A3A28] mb-4">
                Who Jarr is for
              </h2>
              <div className="bg-white/90 border border-[#2D5A3D]/10 rounded-xl p-5 md:p-6 shadow-sm">
                <ul className="list-disc pl-5 text-sm sm:text-base text-[#243b30] space-y-1">
                  <li>
                    <strong>Secondary school students</strong> revising for
                    major exams and mock tests.
                  </li>
                  <li>
                    <strong>University students</strong> preparing for semester
                    exams, resits and continuous assessment.
                  </li>
                  <li>
                    <strong>Professional learners</strong> studying for
                    certifications and competitive exams.
                  </li>
                  <li>
                    <strong>Clubs & departments</strong> who want a better way
                    to share and manage past papers for their members.
                  </li>
                </ul>
              </div>
            </section>

            {/* Founder / team angle */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-[#1A3A28] mb-4">
                Built by students, for students
              </h2>
              <p className="text-sm sm:text-base text-[#243b30] max-w-2xl leading-relaxed">
                Jarr started as a simple idea:{" "}
                <em>
                  what if we could take the way students already revise with
                  past papers and supercharge it with AI?
                </em>{" "}
                It&apos;s being built by someone who has been through the same
                exam pressure and understands how important good past papers and
                clear explanations are.
                <br />
                <br />
                As we grow, we&apos;ll be working closely with{" "}
                <strong>IT clubs, student communities and educators</strong> to
                shape the product and make sure it actually fits the way
                students study in real life.
              </p>
            </section>

            {/* CTA */}
            <section className="mb-10">
              <div className="bg-[#1A3A28] text-white rounded-xl p-6 md:p-7 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">
                    Want to be part of the early access?
                  </h2>
                  <p className="text-sm md:text-base text-white/90 max-w-md">
                    Join the Jarr waitlist to get updates on our progress and be
                    one of the first to try the platform when we roll out
                    pilots on real campuses.
                  </p>
                </div>
                <Link
                  href="/"
                  className="inline-block bg-white text-[#1A3A28] font-semibold px-5 py-2 rounded-md text-sm shadow hover:bg-gray-100 transition"
                >
                  Go to waitlist
                </Link>
              </div>
            </section>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-6 text-center text-[#1A3A28] text-xs flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="font-semibold">Jarr. All Rights Reserved 2025</span>
          <Link
            href="/about"
            className="underline hover:text-[#2D5A3D] font-medium"
          >
            About Jarr
          </Link>
        </footer>
      </div>
    </main>
  );
}