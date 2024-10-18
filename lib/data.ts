import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerce from "@/public/ecommerce.png";
import UIUX from "@/public/UIUX.png";
import videocall from "@/public/videocall.png";
import urlshortener from "@/public/urlshortener.png";
import kanban from "@/public/kanban.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "UIUX Design Tools",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Tailwind", "Framer motion","Figma"],
    imageUrl: UIUX,
    projectUrl: "https://figma-clone-ivory-eight.vercel.app/",
  },
  {
    title: "Ecommerce shop",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux","shadcn UI","Redis","Kinde Auth" ],
    imageUrl: ecommerce,
    projectUrl: "https://shop-seven-orcin.vercel.app/",
  },
  {
    title: "URL shortener",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Vite", "SQL", "Tailwind"],
    imageUrl: urlshortener,
    projectUrl: "https://url-shortener-blue-two.vercel.app/",
  },
  {
    title: "Video calling app",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Stream API", "Tailwind", "clerk Auth"],
    imageUrl: videocall,
    projectUrl: "https://zoom-clone-one-ashen.vercel.app/",
  },
  {
    title: "Kanban board",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: kanban,
    projectUrl: "https://zoom-clone-one-ashen.vercel.app/",
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "RESTful API",
  "Express",
  "PostgreSQL",
  "Figma",
  "Vercel",
  "Framer Motion",
] as const;