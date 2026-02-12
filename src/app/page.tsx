"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2,GraduationCap,Award, FolderGit2, } from "lucide-react";
import { Button } from "./components/button/button";
import { Card, CardContent } from "./components/card/card";
import profile from "@/public/generated_KPYkyIB.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useEffect, useState } from "react";
import React from "react";




import {
  Code,
  Layout,
  Server,
  Wrench,
} from "lucide-react";

// ================= Page =================

export default function Page() {

  const formRef = useRef<HTMLFormElement | null>(null);

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formRef.current) return;
  console.log("ENV CHECK", {
    service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  });
  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(
      (result) => {
        console.log("Email sent:", result.text);
        alert("Message sent successfully!");
        formRef.current?.reset();
      },
      (error) => {
        console.error("EmailJS error:", error.text || error);
        alert("Email failed to send. Please check setup.");
      }
    );
};


  return (
    <div className="flex">
      <SidePanel />

      <main className="flex-1 md:ml-80 min-h-screen bg-linear-to-b from-zinc-950 to-zinc-900 text-zinc-100">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-28 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Hi, I’m <span className="text-indigo-400">Precious</span>
              </h1>

              <p className="mt-6 text-lg text-zinc-300">
                React | TypeScript | Next.js | Python | HTML5 | CSS3 | JavaScript
              </p>

              <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
                I’m passionate about building scalable web applications and continuously improving my craft.
              </p>

              <div className="mt-8 flex gap-4">
                <Button className="rounded-2xl px-6 bg-indigo-500 hover:bg-indigo-400 text-white">
                  View Portfolio
                </Button>
                <Button
                  variant="outline"
                  className="rounded-2xl px-6 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10"
                >
                  Contact Me
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="h-64 w-64 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl">
                <Code2 size={96} className="text-white" />
              </div>
            </div>
          </motion.div>
        </section>

       <section id="education" className="max-w-5xl mx-auto px-6 py-20">
  {/* Section Title */}
  <div className="flex items-center gap-3 mb-3">
  
    <h2 className="text-3xl font-semibold">Education & Learning</h2>
  </div>

  {/* Purple strip card with subtitle */}
   <Card className="mb-10">
            <div className="flex">
              <div className="w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-l-xl" />
              <CardContent className="pl-6">
                <p className="text-zinc-400 max-w-3xl leading-relaxed">
          Formal Education | Bootcamps | Hackathons | Lifelong Learning | Self-Study
        </p>
      </CardContent>
    </div>
  </Card>
  <div className="flex items-center gap-2 mb-3">
          <Award className="text-purple-400" size={20} />
          <h3 className="text-xl font-semibold">
            Professional Qualification
          </h3>
        </div>
  {/* Professional Qualification Card */}
   <Card className="mb-10 max-w-4xl mx-auto">
    <div className="flex">
      <div className="w-1 bg-linear-to-b" />
      <CardContent className="pl-6">
       

        <p className="font-medium text-zinc-200">
          BSc in Computer Science & Infomatics
        </p>
        <p className="text-zinc-400">
          University of Johannesburg
        </p>

        <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400">
          Formal Education
        </span>
      </CardContent>
    </div>
  </Card>
</section>

        {/* Skills */}
        <section id="skills" className="bg-zinc-950/60">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-semibold mb-3">Technical Skills</h2>
            
 <Card className="mb-10">
            <div className="flex">
              <div className="w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-l-xl" />
              <CardContent className="pl-6">
                <p className="text-zinc-400 max-w-3xl leading-relaxed">
         Technical skills overview, continuously growing with modern web technologies.
        </p>
      </CardContent>
    </div>
  </Card>
            <SkillCategory
              title="Programming Languages"
               icon={<Code size={22} />}
              skills={[
                ["JavaScript", "Intermediate"],
                ["TypeScript", "Intermediate"],
                 ["Python", "Intermediate"],
                ["HTML5", "Intermediate"],
                ["C#", "Beginner"],
                 ["Java", "Intermediate"],
                 
              ]}
            />

            <SkillCategory
              title="Frontend Technologies"
               icon={<Layout size={22} />}
              skills={[
                ["React.js", "Intermediate"],
                ["Responsive Design", "Intermediate"],
                ["Tailwind CSS", "Intermediate"],
              ]}
            />

            <SkillCategory
              title="Backend & Databases"
              icon={<Server size={22} />}
              skills={[
                ["Node.js", "Intermediate"],
                ["Express.js", "Beginner"],
                ["SQL", "Intermediate"],
                ["MongoDB", "Intermediate"],
              ]}
            />

            <SkillCategory
              title="Tools & Workflow"
               icon={<Wrench size={22} />}
              skills={[
                ["Git & GitHub", "Intermediate"],
                ["Vitest", "Intermediate"],
                ["React Testing Library", "Intermediate"],
                ["Debugging", "Intermediate"],
                ["CI/CD", "Intermediate"],
              ]}
            />
          </div>
        </section>

        {/* Portfolio */}
 <section id="portfolio" className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold mb-6">Portfolio</h2>

          <Card className="mb-10">
            <div className="flex">
              <div className="w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-l-xl" />
              <CardContent className="pl-6">
                <p className="text-zinc-400 max-w-3xl leading-relaxed">
                  Showcasing my best work and projects. Each project demonstrates my
                  ability to build responsive, user-friendly applications with modern
                  technologies and best practices.
                </p>
              </CardContent>
            </div>
          </Card>

        <div className="grid md:grid-cols-2 gap-8">
  {/* Existing Apps */}
  <ProjectCard
    title="Medication Tapering App"
    description="PWA built with Next.js and Flask for medication scheduling and optimisation."
    href="#"
    tech="Next.js • Flask • PWA"
  />

  <ProjectCard
    title="Group Dashboard"
    description="Next.js + Django dashboard with JWT auth and role-based access control."
    href="#"
    tech="Next.js • Django • JWT"
  />

  {/* WordPress Websites */}
  <ProjectCard
    title="Blue Guardian Consulting"
    description="Professional business website built with WordPress, focused on corporate branding and conversions."
    href="https://blueguardianconsult.com/"
    tech="WordPress"
  />

  <ProjectCard
    title="Slim Batha Psychology"
    description="Psychology practice website with clean UX, service pages, and contact flows."
    href="https://slimbathapsychology.co.za/"
    tech="WordPress"
  />

  <ProjectCard
    title="True Yam Plumber"
    description="Local service business website optimised for mobile users and lead generation."
    href="https://trueyamplumber.co.za/"
    tech="WordPress"
  />

  <ProjectCard
    title="Benno Guenther"
    description="Personal brand and portfolio website with a minimalist layout."
    href="https://bennoguenther.com/"
    tech="WordPress"
  />

  <ProjectCard
    title="Private Pilates by IM"
    description="Fitness and pilates studio website with booking-focused design."
    href="https://privatepilatesbyim.de/"
    tech="WordPress"
  />
</div>

        </section>

      {/* Contact */}
<section id="contact" className="max-w-5xl mx-auto">
  <div className="max-w-6xl mx-auto px-6 py-20">
    <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>

    <Card className="mb-10">
            <div className="flex">
              <div className="w-1 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-l-xl" />
              <CardContent className="pl-6">
                <p className="text-zinc-400 max-w-3xl leading-relaxed">
            Looking for a Software Engineer? I’d be excited to contribute to your team.
            Feel free to reach out — I’m available for assessments, interviews, and opportunities.
          </p>
        </CardContent>
      </div>
    </Card>

    {/* FULL WIDTH LAYOUT */}
    <div className="space-y-12">
      {/* Contact Form */}
      <Card className="w-full">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6">Send me a Message</h3>

         <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
  <div>
    <label className="block text-sm mb-1">Full Name</label>
    <input
      type="text"
      name="name"
      required
      placeholder="Your full name"
      className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-2 text-zinc-100 focus:outline-none focus:border-indigo-500"
    />
  </div>

  <div>
    <label className="block text-sm mb-1">Email Address</label>
    <input
      type="email"
      name="email"
      required
      placeholder="your.email@example.com"
      className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-2 text-zinc-100 focus:outline-none focus:border-indigo-500"
    />
  </div>

  <div>
    <label className="block text-sm mb-1">Message</label>
    <textarea
      name="message"
      required
      placeholder="Write your message here..."
      rows={4}
      className="w-full rounded-xl bg-zinc-900 border border-zinc-800 px-4 py-2 text-zinc-100 focus:outline-none focus:border-indigo-500"
    />
  </div>

  <Button
    type="submit"
    className="w-full rounded-2xl bg-indigo-500 hover:bg-indigo-400 text-white"
  >
    Send Message
  </Button>
</form>

        </CardContent>
      </Card>

      {/* Contact Info */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Or Connect With Me</h3>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
  {/* Email */}
  <a
    href="mailto:tmadziva@icloud.com"
    className="group"
  >
    <Card className="h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:border-purple-500">
      <CardContent className="flex items-center gap-3 p-6">
        <Mail className="text-purple-400" />
        <span className="font-medium">tmadziva@icloud.com</span>
      </CardContent>
    </Card>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/Precious-Madzivadondo"
    target="_blank"
    rel="noopener noreferrer"
    className="group"
  >
    <Card className="h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:border-purple-500">
      <CardContent className="flex items-center gap-3 p-6">
        <Github className="text-purple-400" />
        <span className="font-medium">GitHub</span>
      </CardContent>
    </Card>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/precious-madzivadondo-125784216/"
    target="_blank"
    rel="noopener noreferrer"
    className="group"
  >
    <Card className="h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:border-purple-500">
      <CardContent className="flex items-center gap-3 p-6">
        <Linkedin className="text-purple-400" />
        <span className="font-medium">LinkedIn</span>
      </CardContent>
    </Card>
  </a>
</div>

        
      </div>




    </div>
  </div>
</section>



        <footer className="text-center text-zinc-500 py-10">
          © {new Date().getFullYear()} Precious Madzivadondo
        </footer>
      </main>
    </div>
  );
}

// ================= Sidebar =================

function SidePanel() {
  const [active, setActive] = React.useState("education");

  React.useEffect(() => {
    const sections = ["education", "skills", "portfolio", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "portfolio", label: "Portfolio", icon: FolderGit2 },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <aside
      className="
        fixed left-0 top-0 h-screen w-80
        bg-gradient-to-b from-zinc-950/90 via-zinc-900/95 to-zinc-950
        backdrop-blur-xl
        border-r border-zinc-800
        px-6 py-8
        hidden md:flex flex-col
      "
    >
      {/* Animated glow rail */}
      <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 opacity-70" />

      {/* Profile */}
      <div className="relative flex flex-col items-center text-center">
        <motion.div whileHover={{ scale: 1.05 }} className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 blur-xl opacity-70" />
          <div className="relative h-28 w-28 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px] shadow-2xl">
            <div className="h-full w-full rounded-xl overflow-hidden bg-zinc-900">
              <Image src={profile} alt="Precious Madzivadondo" />
            </div>
          </div>
        </motion.div>

        <h2 className="mt-5 text-lg font-semibold tracking-tight">
          Precious Madzivadondo
        </h2>

        <span className="mt-2 text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400">
          Software Engineer
        </span>

        <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for work
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      {/* Navigation */}
      <nav className="relative flex flex-col gap-2">
        {navItems.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;

          return (
            <motion.a
              key={id}
              href={`#${id}`}
              whileHover={{ x: 6 }}
              className={`
                relative flex items-center gap-4
                px-4 py-3 rounded-xl
                text-sm font-medium transition-all
                ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }
              `}
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 shadow-lg"
                />
              )}

              <span className="relative z-10 flex items-center gap-4">
                <Icon
                  size={18}
                  className={
                    isActive ? "text-indigo-400" : "text-zinc-500"
                  }
                />
                {label}
              </span>
            </motion.a>
          );
        })}
      </nav>

      {/* Footer CTA */}
      <div className="mt-auto pt-10">
        <a
          href="/Precious_Madzivadondo!.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="
            w-full rounded-xl
            bg-gradient-to-r from-indigo-500 to-purple-600
            hover:from-indigo-400 hover:to-purple-500
            text-white shadow-2xl
          ">
            Download CV
          </Button>
        </a>

        <p className="mt-4 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()}
        </p>
      </div>
    </aside>
  );
}



// ================= Skill Components =================

function SkillCategory({
  title,
  icon,
  skills,
}: {
  title: string;
  icon: React.ReactNode;
  skills: [string, string][];
}) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-indigo-400">{icon}</span>
        <h3 className="text-xl font-semibold text-indigo-400">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map(([name, level]) => (
          <SkillItem key={name} name={name} level={level} />
        ))}
      </div>
    </div>
  );
}


function SkillItem({
  name,
  level,
}: {
  name: string;
  level: string;
}) {
  const levelStyles =
    level === "Beginner"
      ? "text-blue-400 border-blue-400/40 bg-blue-400/10"
      : level === "Intermediate"
      ? "text-orange-400 border-orange-400/40 bg-orange-400/10"
      : "text-zinc-400 border-zinc-600";

  return (
    <Card
      className="
        group relative text-center
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]
        hover:border-purple-500/60
      "
    >
      {/* Glow overlay */}
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-br from-purple-500/15 via-indigo-500/10 to-transparent
          transition-opacity duration-300
        "
      />

      <CardContent className="relative py-6 flex flex-col items-center gap-3">
        <h4 className="font-semibold text-lg">{name}</h4>

        {/* Level badge */}
        <span
          className={`
            px-4 py-1 text-xs font-medium
            rounded-full border
            ${levelStyles}
          `}
        >
          {level}
        </span>
      </CardContent>
    </Card>
  );
}


// ================= Reusable =================

function ProjectCard({
  title,
  description,
  href,
  tech,
}: {
  title: string;
  description: string;
  href: string;
  tech?: string;
}) {
  return (
    <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:border-purple-500/60">
      <CardContent className="flex flex-col h-full">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {tech && (
          <span className="mb-3 inline-block w-fit text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400">
            {tech}
          </span>
        )}

        <p className="text-zinc-400 mb-6 flex-1">{description}</p>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="w-full rounded-xl border-indigo-500 text-indigo-400 hover:bg-indigo-500/10"
          >
            View Website
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}


function SocialLink({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Button
      variant="outline"
      className="rounded-2xl flex gap-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10"
    >
      {icon}
      {label}
    </Button>
  );
}
