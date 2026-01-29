export const SITE_CONFIG = {
  name: "Matt Kulling",
  title: "Matt Kulling - Full Stack Web Developer",
  description:
    "Full stack web developer interested in the intersection between art and tech. Experienced in marketing, product, and engineering.",
  url: "https://mokulling.github.io",
  email: "matt@mattkulling.com",
  github: "https://github.com/mokulling",
  linkedin: "https://www.linkedin.com/in/matt-kulling-67789562/",
  twitter: "https://twitter.com",
  phone: "630-346-0050",
  location: "Chicago, IL",
};

export const SKILLS = [
  { name: "HTML", icon: "Code" },
  { name: "CSS", icon: "Palette" },
  { name: "JavaScript", icon: "FileCode" },
  { name: "Node.js", icon: "Server" },
  { name: "Git", icon: "GitBranch" },
  { name: "React", icon: "Component" },
  { name: "MySQL", icon: "Database" },
  { name: "TypeScript", icon: "FileCode2" },
];

export const PROJECTS = [
  {
    slug: "wikigames",
    title: "Wikigames",
    description:
      "A web app utilizing the YouTube and RAWG games API users can search to make decisions about buying new games.",
    image: "/images/wikigames.png",
    technologies: ["HTML", "CSS", "JavaScript", "YouTube API", "RAWG API", "nes.css"],
    liveUrl: "https://mokulling.github.io/wikigames",
    githubUrl: "https://github.com/mokulling/wikigames",
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A weather dashboard utilizing an API where users can search for weather forecasts anywhere around the world.",
    image: "/images/weatherdashboard.png",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    liveUrl: "https://mokulling.github.io/weatherdashboard",
    githubUrl: "https://github.com/mokulling/Weather-Dashboard",
  },
  {
    slug: "note-taker",
    title: "Note Taker",
    description:
      "This project utilizes Express and node.js and it allows users to save and create new notes in a front end environment.",
    image: "/images/notetaker.png",
    technologies: ["Node.js", "Express", "HTML", "JavaScript", "CSS"],
    liveUrl: "https://still-retreat-16511.herokuapp.com/",
    githubUrl: "https://github.com/mokulling/note-taker",
  },
  {
    slug: "readme-generator",
    title: "README Generator",
    description:
      "This project generates a markdown readme file with a table of contents, description, and contact information for the developer creating it.",
    image: "/images/readmegenerator.png",
    technologies: ["Node.js", "Express", "Inquirer"],
    videoUrl: "https://vimeo.com/512654622",
    githubUrl: "https://github.com/mokulling/readmegenerator",
  },
];
