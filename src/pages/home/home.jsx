import AboutMe from "./aboutMe/aboutMe.jsx";
import PageIndex from "./index/index.jsx";
import Skills from "./skills/skills.jsx";
import Stats from "./stats/stats.jsx";
import Projects from "./projects/projects.jsx";
import ContactMe from "./contactMe/contactMe.jsx";
import "./home.css";

export default function Home() {
    return (
        <main>
            <PageIndex />
            <AboutMe />
            <div className="home-overview" id="skills-stats">
                <Skills />
            </div>
            <div className="home-overview" id="skills-stats">
                <Stats />
            </div>
            <Projects />
            <ContactMe />
        </main>
    )
}