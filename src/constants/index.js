import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
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
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
  fruit_slice_game,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Fullstack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Freelance Frontend Developer",
    company_name: "GuruDatta Logistics",
    icon: freelance, // Replace with any icon you like
    iconBg: "#0188E3",
    date: "Nov 2025 - Dec 2025",
    points: [
      "Built responsive and interactive web Page using React.js, Tailwind CSS, and GSAP.",
      "Developed and deployed modern landing pages and portfolio websites for clients.",
      "Integrated APIs and handled form validation, animations, and smooth scroll effects.",
      "Delivered pixel-perfect UI designs based on Figma and Adobe XD mockups.",
    ],
  },
  {
    title: "Full Stack Development Trainee",
    company_name: "Achievers IT",
    icon: sheryians, // Or institute logo
    iconBg: "#ffff",
    date: "Jul 2025 - Nov 2025",
    points: [
      "Completed an intensive training program focused on Python Full stack development.",
      "Built multiple full-stack projects, including CRUD apps and authentication systems.",
      "Worked with tools like Node.js, Express.js, MongoDB, React.js, and Git.",
      "Gained hands-on experience in deploying apps and following clean code practices.",
    ],
  },
];


const projects = [
  {
    name: "ChatBot Using AI",
    description:
      "Built an AI-powered chatbot that uses Natural Language Processing to understand user queries and provide intelligent, real-time responses. The chatbot integrates an AI API with a simple web-based interface using HTML, CSS, and JavaScript, demonstrating practical application of AI in interactive webs.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "OpenAi API",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/jagadish-works/chatbot.git",
    live_website_link: "https://chatbotai08.netlify.app/",
  },
  {
    name: "Iris Recognition using ML",
    description:
      "Developed an Iris Recognition system using Machine Learning to accurately identify and authenticate individuals based on unique iris patterns. The project includes image preprocessing, feature extraction, and model training using classification algorithms to achieve reliable biometric recognition.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Libraries",
        color: "pink-text-gradient",
      },
      {
        name: "ML Algorithms",
        color: "green-text-gradient",
      },
    ],
    image: falverra,
    source_code_link: "https://github.com/jagadish-works/Iris-Recognition-Ml.git",
    live_website_link: "https://irisrecognition.netlify.app/",
  },
  {
    name: "MyTube Video Platform",
    description:
      "Built MyTube, a frontend video streaming application that integrates with the YouTube API to fetch, search, and display videos in real time. The project features a responsive user interface with video playback, search functionality, and dynamic data rendering, demonstrating practical use of APIs and modern webs.",
    tags: [
      {
        name: "HTML&CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "YT API",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    // github link ⬇️
    source_code_link: "https://github.com/jagadish-works/Mytube-.git",
    // project link ⬇️
    live_website_link: "https://mytube08.netlify.app/",
  },
  {
    name: "Fruit Slice Game",
    description: 
      "Developed a Fruit Slice Game, an interactive browser-based game where players slice flying fruits using mouse or touch controls while avoiding obstacles. The game includes score tracking, animations, sound effects, and increasing difficulty levels, demonstrating skills in game logic, UI design, and JavaScript-based interactivity.",
    tags: [
      {
        name: "HTML&CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
    ],
    image: fruit_slice_game,
    source_code_link: "https://github.com/jagadish-works/FruitSlice.git/",
    live_website_link: "https://fruitslice08.netlify.app/",
  },
];

export { services, technologies, experiences, projects };
