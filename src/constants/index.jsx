import endebete from "../assets/company/endebete.png";
import ICL from "../assets/company/ICL.jpeg";
import IE from "../assets/company/IE.png";

import endebetecomp from "../assets/tech/endebete.png";
import dashboard from "../assets/tech/dashboard.png";
import agency from "../assets/tech/agencyy.png";

import java from "../assets/tech/java.png";
import jenkins from "../assets/tech/jenkins.png";
import springboot from "../assets/tech/springboot.jpeg";
import nest from "../assets/tech/nest.png";
import express from "../assets/tech/express.png";
import symfony from "../assets/tech/symfony.png";
import yii2 from "../assets/tech/yii2.jpeg";
// import aws from "../assets/tech/aws.jpeg";

import stockydashboard from "../assets//tech/stockydashboard.png";
import agriconnect from "../assets/tech/agriconnect.png";
import sd from "../assets/tech/sd.png";
import pm from "../assets/tech/pm2.png";
import dolchepay from "../assets/tech/dolchepay.png";
import modernweb from "../assets/tech/modernweb.png";
import bigo from "../assets/tech/bigo.png";
import {
  mobile,
  backend,
  web,
  aws,
  javascript,
  reactjs,
  nodejs,
  git,
  docker,
  postgresql,
} from "../assets";
import moment from "moment";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "AWS",
    icon: aws,
  },
];

const skillsFrontend = [
  {
    title: "React",
    level: 95,
  },
  {
    title: "Next",
    level: 80,
  },
  {
    title: "Flutter",
    level: 70,
  },
  {
    title: "Vue",
    level: 70,
  },
  {
    title: "Three.js",
    level: 40,
  },
  {
    title: "Tailwind",
    level: 90,
  },
  {
    title: "Framer-motion",
    level: 80,
  },
  {
    title: "Antd",
    level: 70,
  },
];
const skillsBackend = [
  {
    title: "Java",
    level: 90,
  },
  {
    title: "SpringBoot",
    level: 80,
  },
  {
    title: "Node",
    level: 70,
  },
  {
    title: "Express",
    level: 95,
  },
  {
    title: "Nest",
    level: 95,
  },
  {
    title: "Laravel",
    level: 75,
  },
  {
    title: "Symfony",
    level: 80,
  },
  {
    title: "Yii2",
    level: 80,
  },
];
const skillsDevops = [
  {
    title: "Docker",
    level: 90,
  },
  {
    title: "Nginx",
    level: 70,
  },
  {
    title: "CI/CD",
    level: 95,
  },
  {
    title: "Kibernetus",
    level: 95,
  },
  {
    title: "Github Action",
    level: 95,
  },
  {
    title: "Travis",
    level: 95,
  },

];

const skillsDevopss = [
  {
    title: "Docker",
    level: 90,
  },
  {
    title: "Nginx",
    level: 70,
  },
  {
    title: "CI/CD",
    level: 95,
  },
  {
    title: "Kibernetus",
    level: 95,
  },
  {
    title: "Github Action",
    level: 95,
  },
  {
    title: "Travis",
    level: 95,
  },

];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Springboot",
    icon: springboot,
  },
  {
    name: "Nest",
    icon: nest,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Symfony",
    icon: symfony,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "YII2",
    icon: yii2,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];
const experiences = [
   {
    title: "Developer",
    company_name: "International Clinical Labratory | Ethiopia.",
    icon: ICL,
    iconBg: "#383E56",
    date: `Sept 2024 -  ${moment(Date.now()).format("MM-YYYY")}`,
    position: "Full Stack Engineer",
    technology: "Java | Laravel | Nest |React | Next | MySQL | PostgreSQL | Nginx | Docker | CI/CD | Azure ",
    address: "Bulgaria | Addis Abeba, Ethiopia",
    overview: (
      <div className="mt-5 list-disc ml-5 space-y-2 text-justify">
        <p><strong>Developing SaaS Products:</strong> Creating scalable and highly functional software as a service (SaaS) applications.</p>
        <p><strong>Cross-functional Collaboration:</strong> Working closely with designers, product managers, and other developers to deliver high-quality products.</p>
        <p><strong>Code Reviews:</strong> Participating in code reviews and providing constructive feedback to enhance code quality.</p>
      </div>
    )
  },
  {
    title: "Full Stack Web Developer",
    company_name: "IE Network Solutions | Ethiopia.",
    icon: IE,
    iconBg: "#383E56",
    date: `April 2023 -  ${moment(Date.now()).format("MM-YYYY")}`,
    position: "Backend Web Developer",
    technology: "Node | Express | Nest | MySQL | PostgreSQL | Nginx | Docker | CI/CD | Jenkins ",
    address: "Haya Hulet | Festival | Addis Abeba, Ethiopia",
    overview: (
      <div className="mt-5 list-disc ml-5 space-y-2 text-justify">
        <p><strong>Developing SaaS Products:</strong> Creating scalable and highly functional software as a service (SaaS) applications.</p>
        <p><strong>Cross-functional Collaboration:</strong> Working closely with designers, product managers, and other developers to deliver high-quality products.</p>
        <p><strong>Code Reviews:</strong> Participating in code reviews and providing constructive feedback to enhance code quality.</p>
      </div>
    )
  },
  {
    title: "Full Stack Web Developer",
    company_name: "International Clinical Labratory | Ethiopia.",
    icon: ICL,
    iconBg: "#383E56",
    date: `Februray 2023 -  December 2023`,
    position: "Full Stack Web Developer",
    technology: "Java | Spring Boot | Laravel | React | MySQL | JDBC | Docker | Jenkins | CI/CD",
    address: "Bulgaria | Addis Abeba, Ethiopia ",
    overview: (
      <div className="mt-5 list-disc ml-5 space-y-2 text-justify">
        <p><strong>Developing SaaS Products:</strong> Creating scalable and highly functional software as a service (SaaS) applications.</p>
        <p><strong>Cross-functional Collaboration:</strong> Working closely with designers, product managers, and other developers to deliver high-quality products.</p>
        <p><strong>Code Reviews:</strong> Participating in code reviews and providing constructive feedback to enhance code quality.</p>
      </div>
    )
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Kerod Apps | Ethiopia",
    icon: endebete,
    iconBg: "#E6DEDD",
    date: "Augest 2022 - Junuary 2023",
    position: "Backend Web Developer",
    technology: "Java | Spring Boot | Laravel | React | MySQL | JDBC | Docker | Jenkins | CI/CD",
    address: "Kerod Apps | Addis Abeba, Ethiopia",
    overview: (
      <div className="mt-5 list-disc ml-5 space-y-2 text-justify">
        <p><strong>Developing SaaS Products:</strong> Creating scalable and highly functional software as a service (SaaS) applications.</p>
        <p><strong>Cross-functional Collaboration:</strong> Working closely with designers, product managers, and other developers to deliver high-quality products.</p>
        <p><strong>Code Reviews:</strong> Participating in code reviews and providing constructive feedback to enhance code quality.</p>
      </div>
    )
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Stocky",
    description:
      "Developed 'Stocky,' a dynamic stock market analysis platform. It offers trend analysis for products from both buyer and seller perspectives, utilizing user preferences and market data to provide valuable insights for informed decision-making.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: stockydashboard,
    link: "https://personal-website-dy03.onrender.com",
    source_code_link: "https://github.com/hmeressa",
  },
  {
    name: "Service Desc ",
    description:
      "Created 'SD,' a versatile CRM and ticket management tool for clients and registered company employees. It streamlines communication and issue resolution, enhancing overall customer satisfaction.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: sd,
    link: "https://personal-website-dy03.onrender.com",
    source_code_link: "https://github.com/hmeressa",
  },
  {
    name: "Project Management tool ",
    description:
      "Developed an intuitive project management tool with task assignment, progress tracking, and seamless communication features, boosting team efficiency and project delivery..",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: pm,
    link: "https://personal-website-dy03.onrender.com",
    source_code_link: "https://github.com/hmeressa",
  },
  {
    name: "Rigid Dashboard",
    description:
      "A Comprehancive dashboard to vishalize and  a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: dashboard,
    link: "https://personal-website-dy03.onrender.com",
    source_code_link: "https://github.com/hmeressa",
  },
  {
    name: "Dolche Pay",
    description:
      "'Dolche Pay,' an innovative finance platform that integrates credit scoring, peer-to-peer transactions, lending, and equity crowdfunding (Equb). It empowers users to assess creditworthiness, facilitate transactions, access credit, unified platform. ",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwinds",
        color: "pink-text-gradient",
      },
    ],
    image: dolchepay,
    link: "https://personal-website-dy03.onrender.com",
    source_code_link: "https://github.com/hmeressa",
  },
  {
    name: "Dolche SaaS",
    description:
      "Created 'Dolche,'a SaaS fintech platform for comprehensive business finance management, offering income and expense tracking, invoicing, and data-driven insights to empower MSMEs and entrepreneurs.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwinds",
        color: "pink-text-gradient",
      },
    ],
    image: agency,
    link: "https://personal-website-dy03.onrender.com",
    source_code_link: "https://github.com/hmeressa",
  },
  {
    name: "Bigo game",
    description:
      " Bigo an exciting virtual lottery and number-based game. Customers can participate, guess the winning numbers, and have the chance to earn money while having fun. Bigo offers an entertaining and rewarding gaming experience for players of all levels.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwinds",
        color: "pink-text-gradient",
      },
    ],
    image: bigo,
    link: "https://personal-website-dy03.onrender.com",
    source_code_link: "https://github.com/hmeressa",
  },
  {
    name: "Modern web 3",
    description:
      "A fully responseive visually apeal and beautiful interactive , web 3 like lading page.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwinds",
        color: "pink-text-gradient",
      },
    ],
    image: modernweb,
    link: "https://personal-website-dy03.onrender.com",
    source_code_link: "https://github.com/hmeressa",
  },
  {
    name: "Agency Landing page",
    description:
      "Agency Landing page for , dashboard , view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwinds",
        color: "pink-text-gradient",
      },
    ],
    image: agency,
    link: "https://personal-website-dy03.onrender.com",
    source_code_link: "https://github.com/hmeressa",
  },
  {
    name: "Endebete",
    description:
      "A Home Rental Companyt for retail based company,dashboard,view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwinds",
        color: "pink-text-gradient",
      },
    ],
    image: endebetecomp,
    link: "https://personal-website-dy03.onrender.com",
    source_code_link: "https://github.com/hmeressa",
  },
  {
    name: "Agri-Connect",
    description:
      "A Company Landing page for agri tech ,dashboard , view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwinds",
        color: "pink-text-gradient",
      },
    ],
    image: agriconnect,
    link: "https://personal-website-dy03.onrender.com",
    source_code_link: "https://github.com/hmeressa",
  },
];

// const baseUrl = import.meta.env.ENV =="development" ? import.meta.env.BASE_URL_DEV : import.meta.env.BASE_URL_PROD
const baseUrl = "https://nahom-back.onrender.com/api/v1/"
// const baseUrl = "http://localhost:3000/api/v1/"

const imgBaseUrl = "https://nahom-back.onrender.com";

const carouselItemsBlogs = [
  {
    id: 1,
    title: "Discover Our Latest Blogs",
    description: "Explore our collection of insightful articles.",
  },
  {
    id: 2,
    title: "Stay Informed with our Expert Writers",
    description: "Get the latest trends and updates in the industry.",
  },
  {
    id: 3,
    title: "Join Our Community of Bloggers",
    description: "Share your knowledge and experiences with others.",
  },
];

const exploreBlogsTags = [
  {
    tag: "Technology",
    color: "blue",
  },
  {
    tag: "Lifestyle",
    color: "green",
  },
  {
    tag: "Coffee",
    color: "orange",
  },
];

import { FundProjectionScreenOutlined } from "@ant-design/icons";
import { FileTextOutlined } from "@ant-design/icons";
import { ReadOutlined } from "@ant-design/icons";
import { ProjectOutlined } from "@ant-design/icons";
import { FileDoneOutlined } from "@ant-design/icons";
import { SettingOutlined } from "@ant-design/icons";
import { FcDocument } from "react-icons/fc";
import { AiFillInsurance } from "react-icons/ai";
import { IoDocumentLockSharp } from "react-icons/io5";
const sidebarRoutes = [
  {
    name: "Reports",
    to: "reports",
    icon: <FileDoneOutlined />,
  },
  {
    name: "Goal",
    to: "goal",
    icon: <FundProjectionScreenOutlined />,
  },
  {
    name: "Task",
    to: "task",
    icon: <FundProjectionScreenOutlined />,
  },
  {
    name: "Notes",
    to: "notes",
    icon: <FileTextOutlined />,
  },
  {
    name: "Blogs",
    to: "blogs",
    icon: <ReadOutlined />,
  },
  {
    name: "Projects",
    to: "projects",
    icon: <ProjectOutlined />,
  },
  {
    name: "Finance",
    to: "finance",
    icon: <AiFillInsurance />,
  },
  {
    name: "Docs",
    to: "docs",
    icon: <IoDocumentLockSharp />,
  },

  {
    name: "Settings",
    to: "settings",
    icon: <SettingOutlined />,
  },


];

const getRandomColor = () => {
  const colors = [
    "blue-text-gradient",
    "green-text-gradient",
    "pink-text-gradient",
    "red-text-gradient",
    "yellow-text-gradient",

  ];
  return colors[Math.floor(Math.random() * colors.length)];
};


export {
  services,
  sidebarRoutes,
  technologies,
  experiences,
  testimonials,
  projects,
  skillsFrontend,
  skillsBackend,
  skillsDevops,
  baseUrl,
  imgBaseUrl,
  carouselItemsBlogs,
  exploreBlogsTags,
  getRandomColor
};
