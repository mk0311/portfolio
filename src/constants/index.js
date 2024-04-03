import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  auth,
  threejs,
  ror,
  cogoport,
  postgres,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "React",
    icon: mobile,
  },
  {
    title: "NodeJs",
    icon: backend,
  },
  {
    title: "Ruby On Rails",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ruby on Rails",
    icon: ror,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "ROR Developer",
    company_name: "COGOPORT INDIA",
    icon: cogoport,
    iconBg: "#383E56",
    date: "Aug 2022 - Nov 2022",
    points: [
      "Built REST APIs in ROR for CRUD operations on Air and Rail Freight Rate Rate Management System.",
      "Designed and DEveloped UI for RMS",
      "Tech: Ruby on Rails, ReactJs, JavaScript"
    ],
  },
  {
    title: "Platform Engineer",
    company_name: "COGOPORT INDIA",
    icon: cogoport,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Jan 2022",
    points: [
      "Integrated various monitoring applications such as Grafana and Sentry throughout the codebase to enhance system monitoring and error tracking.",
      "Scripted unit test plans, test scripts, and processes",
      "Identified and Optimized Slow and In-Efficient Database Queries",
      "Tech: Postgres, Sentry, Grafana and New Relic"
    ],
  },
  {
    title: "Global Technology Launch",
    company_name: "COGOPORT VIETNAM",
    icon: cogoport,
    iconBg: "#383E56",
    date: "Feb 2022 - Oct 2023",
    points: [
      "Designed and implemented technological solutions for platform expansion and operational efficiency across regions.",
      "Collaborated with tech and business teams to optimize user acquisition and revenue in Vietnam, China, and Indonesia.",
      "Engineered the Global Tax Mechanism for automated tax calculations and compliance across multiple countries.",
      "Streamlined tax reporting processes and minimized errors, contributing to global operational efficiency and financial success.",
      "Tech: NodeJs, ReactJs, GoLang, ROR, PostgreSQL",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "COGOPORT INDIA",
    icon: cogoport,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Designed and integrated a Centralized Authentication and Authorization Service for APIs.",
      "Led the revamp of the Ongoing Role and Permission Service (RBAC) for the platform.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Tech: NodeJs, ReactJs, GoLang, ROR, PostgreSQL",
    ],
  },
];
const projects = [
  {
    name: "Authentication Service",
    description:
      "Web-based, scalable and secure authentication service capable of managing user sessions effectively",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: auth,
    source_code_link: "https://github.com/mk0311/AAS",
  },
];

export { services, technologies, experiences, projects };
