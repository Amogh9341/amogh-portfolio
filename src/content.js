import HomeIcon from "./assets/icons/home.svg?react"
import MailIcon from "./assets/icons/mail.svg?react"
import FolderIcon from "./assets/icons/folder.svg?react"
import PenIcon from "./assets/icons/pen.svg?react"

export const siteName = "AK"

export const links = [
  { label: "Home", href: "#home", icon: HomeIcon },
  { label: "Blogs", href: "#blogs", icon: PenIcon },
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
  {name:"Embedded", description:"Fusion 360, LTSpice, PX4, NumPy, Drones, ROS2, Gazebo, MAVSDK-Python", skillLevel:"85%"},
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
    name:"name", 
    event:"hackathon / event", 
    domain: "domain1 / domain2",
    date:"MM:YYYY", 
    description:"description", 
    gitHubRepo:"link" ,
    photo:"photo"
  },

] 

export const contact = {
  alterMail: "hello@example.com",
  location: "https://maps.google.com/?q=Hyderabad%20India",
  locationLabel: "Hyderabad, India",
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
