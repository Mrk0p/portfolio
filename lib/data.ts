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

export const projectsData = [
  {
    title: "UIUX Design Tools",
    description:
      "A collaborative Figma clone built with real-time canvas editing, drag-and-drop features, and live syncing using WebSockets. Built using React, Tailwind CSS, Node.js, and Socket.IO to mimic design tool functionality in the browser.",
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
    projectUrl: "https://zoom-clone-sigma-five.vercel.app/",
  },
  {
    title: "Kanban board",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: kanban,
    projectUrl: "https://kanban-board-seven-bice.vercel.app/",
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
