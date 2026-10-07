import HomeIcon from "./assets/icons/home.svg?react"
import MailIcon from "./assets/icons/mail.svg?react"
import FolderIcon from "./assets/icons/folder.svg?react"
import PenIcon from "./assets/icons/pen.svg?react"

export const siteName = "AK"

export const links = [
  { label: "Home", href: "#home", icon: HomeIcon },
  { label: "Blogs", href: "#blogs", icon: PenIcon },
];

export const sectionLinks = [
  { label: "About me", href: "#about-me" },
  { label: "Skills", href: "#skills" },
  { label: "Stats", href: "#stats" },
  { label: "Projects", href: "#projects" },
  { label: "Contact me", href: "#contact" },
];

export const title = "SDE/Robotics/ML"

export const name = "MyName"

export const gitHubId = "GitHubId"

export const linkedInId = "LinkedIn"

export const aboutMe = "some info on me basic intro"

export const skills = [
  {name:"skill name",skillLevel:"10%"}
]

export const stats = [
  {name: "name", description: "description"}
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
