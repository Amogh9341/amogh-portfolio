import aeroDeliversPhoto from "./assets/projectImages/Aero-Delivers.jpeg"
import veloraMobilityOptimizer from "./assets/projectImages/Velora Mobility Optimizer.png"
import samuha from  "./assets/projectImages/Samuha.png"
import languageActionBot from "./assets/projectImages/LanguageActionBot.png"
import HomeIcon from "./assets/icons/home.svg?react"
import MailIcon from "./assets/icons/mail.svg?react"
import FolderIcon from "./assets/icons/folder.svg?react"
import PenIcon from "./assets/icons/pen.svg?react"

export const siteName = "AK"

export const links = [
  // { label: "Home", href: "#home", icon: HomeIcon },
  // { label: "Blogs", href: "#blogs", icon: PenIcon },
];

export const indexLinks = [
  { label: "About me", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Stats", href: "#stats" },
  { label: "Projects", href: "#projects" },
  { label: "Contact me", href: "#contact" },
];

export const title = "SDE/Robotics/ML"

export const name = "Amogh Anand Kahalekar"

export const gitHub = {
  id: "Amogh9341",
  link:"https://github.com/Amogh9341"
}

export const linkedIn = {
  id:"amogh-kahalekar",
  link:"https://www.linkedin.com/in/amogh-kahalekar"
}

export const skills = [
  {name: "AI/ML", description: "Python, NumPy, PyTorch", skillLevel:"80%"},
  {name:"OS", description:"Windows, WSL, Linux", skillLevel:"70%"},
  {name:"Embedded", description:"Fusion 360, PX4, Drones, ROS2, Gazebo", skillLevel:"85%"},
  {name:"Dev", description:"Git, GitHub, React.js, Node.js, TailwindCSS", skillLevel:"60%"}
]

export const stats = [
  {name: "Codeforces", description: "amogh2048, Specialist Status, 1490 rated"},
  {name:"CodeChef", description: "amogh2048, 1609 rated"},
  {name:"LAM Reasearch Challenge 2025", description:"Top 24 finalists nationally were invited to Bangalore for finals"},
  {name:"IOQM Merit Certificate", description:"Know for mathemtical rigour and proving, 2024"},
  {name:"NIDAR Finalists", description:"Invited for finals at Delhi for drone innovation challenges"}
]

export const projects = [
  {
    name: "Samuha - Multi-Drone Swarm Simulation",
    event: "Aeromodelling Club , IIT Guwahati",
    domain: "Autonomous System",
    date: "March 2026",
    description: "A simulation-first project for developing and comparing multi-drone swarm control algorithms. Implements baseline Velocity Field (VF), Tangential Vector Field (TVF), and a TVF + ORCA-inspired collision-avoidance approach using Python, MAVSDK, PX4 SITL, and Gazebo Classic. Includes multi-vehicle launch tooling and simulated telemetry noise and packet loss for robustness testing.",
    gitHubRepo: "https://github.com/Amogh9341/Samuha",
    photo: samuha
  },
  {
    name:"Velora Mobility Optimizer", 
    event:"Inter Hostel Competition, IIT Guwahati", 
    domain: "Full Stack Web Dev",
    date:"February 2026", 
    description:"Velora finds optimal employee pickup/dropoff routes across a heterogeneous vehicle fleet, minimizing total transportation cost while respecting capacity, precedence, and soft time-window constraints. It combines a C++ 4-phase metaheuristic solver with a Node.js REST API and a React + Vite frontend.", 
    gitHubRepo:"https://github.com/Amogh9341/VeloraMobilityOptimizer" ,
    photo:veloraMobilityOptimizer
  },
  {
    name:"Aero Delivers", 
    event:"Aeromodelling Club , IIT Guwahati", 
    domain: "Embedded",
    date:"March 2025", 
    description:"An autonomous delivery drone that verifies its target using OpenCV-based ArUco marker detection and performs GPS-guided landing. A Raspberry Pi companion computer that commands to the Pixhawk 6C flight controller using GPS data, AruCo marker pose detection.", 
    gitHubRepo:"https://github.com/Amogh9341/Aero-Delivers" ,
    photo:aeroDeliversPhoto
  },
  {
    "name": "Language-Action-Bot",
    "event": "Personal project",
    "domain": "Robotics / Artificial Intelligence",
    "date": "June 2026",
    "description": "A ROS 2 and Gazebo project that uses Gemini API to translate natural-language navigation commands into velocity commands for a wheel-legged robot.",
    "gitHubRepo": "https://github.com/Amogh9341/Language-Action-Bot",
    "photo": languageActionBot
  },
  // {
  //   name:"name", 
  //   event:"hackathon / event", 
  //   domain: "domain1 / domain2",
  //   date:"MM:YYYY", 
  //   description:"description", 
  //   gitHubRepo:"link" ,
  //   photo:""
  // }
] 

export const contact = {
  alterMail: "",
  location: "https://maps.app.goo.gl/UJuBkoNnNvkURmkW6",
  locationLabel: "Guwahati, India",
  mapsButtonText: "Open in Maps",
  formLabels: {
    subject: "Subject",
    email: "Email",
    body: "Content"
  },
  formPlaceholders: {
    subject: "Regarding...",
    email: "you@example.com",
    body: "Hi, can we connect on..."
  },
  formButtonText: "Send message"
}
