import {
  frontend,
  backend,
  ux,
  mobile_dev,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  dart,
  python,
  flutter,
  figma,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  resume,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: mobile_dev,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },

  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },

  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "",
    icon: frontend,
    iconBg: "#333333",
    date: "Aug 2022 - June 2023",
  },
  {
    title: "UI/UX Designer",
    company_name: "",
    icon: ux,
    iconBg: "#333333",
    date: "Aug 2023 - Jan 2024",
  },
  {
    title: "Mobile App Development (Flutter)",
    company_name: "",
    icon: mobile_dev,
    iconBg: "#333333",
    date: "Feb 2024 - June 2024",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Chat App",
    description:
      "A lightweight chat app built with Flutter and Firebase, offering fast, secure messaging with real-time sync and simple, clean design. Perfect for a streamlined, no-frills communication experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/birukmaru/ChatApp_Flutter_Firebase",
    // demo: "https://shaqdeff.github.io/KomiKult/",
  },
  {
    id: "project-2",
    name: "Pizzare",
    description:
      "A sleek and responsive pizza ordering website built with React, offering users a seamless and interactive experience to customize and order their favorite pizzas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/birukmaru/react-order-pizza-website",
    // demo: "https://shaqdeff.github.io/Leaderboard/",
  },
  {
    id: "project-3",
    name: "Bet Ebet",
    description:
      "The BetEbet app is an online casino application developed using Flutter, Riverpod, and Node.js for the backend. It is a collaborative group project designed to deliver a seamless and engaging user experience for online gaming.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/Teklez/flutter_riverpod/tree/final_riverpod",
    // demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  },
  {
    id: "project-4",
    name: "Bete Book",
    description: `Bete Book is an online bookstore web app developed using the MERN stack (MongoDB, Express.js, React, and Node.js), offering a seamless experience for browsing, purchasing, and managing books.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/birukmaru/Book-Store-using-MERN",
    // demo: "https://movie-metro.netlify.app/",
  },
  {
    id: "project-5",
    name: "Translator App",
    description:
      "The Translator app is a Flutter-based application that supports seamless and accurate translation across multiple languages, making communication easier in diverse linguistic contexts.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: nyeusi,
    repo: "https://github.com/birukmaru/Translator_Flutter",
    // demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  },
];

export { services, technologies, experiences, projects };
