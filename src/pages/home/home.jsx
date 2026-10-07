import AboutMe from "./aboutMe/aboutMe.jsx";
import Skills from "./skills/skills.jsx";
import Stats from "./stats/stats.jsx";
import Projects from "./projects/projects.jsx";
import ContactMe from "./contactMe/contactMe.jsx";
import "./home.css";

export default function Home() {
    return (
        <main>
            <AboutMe />
            <div className="home-overview">
                <Skills />
                <Stats />
            </div>
            <Projects />
            <ContactMe />
        </main>
    )
}