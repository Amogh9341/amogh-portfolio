import { title, name, gitHub, linkedIn } from "../../../content.js";
import "./aboutMe.css";

const cities = ["Yavatmal", "Pune", "Guwahati"];
const mapsSearchUrl = (place) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`;

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__content">
        <p className="about-me__eyebrow">{title}</p>

        <h1 className="about-me__name">
          <span>{name}</span>
        </h1>

        <div className="about-me__details">
          <div className="about-me__body">
            <p className="about-me__intro">
              I like to work at border between hardware and software domains,
              and intrested in <strong>AI/ML, Robotics, System Design</strong> making things
              that serve a purpose. Currently a 3rd yearite at{" "}
              <a href={mapsSearchUrl("Indian Institute of Technology Guwahati")} target="_blank" rel="noreferrer">
                <strong>IIT Guwahati</strong>
              </a>{" "}
              form ECE department.
            </p>
            <p className="about-me__intro">
              From <a href={mapsSearchUrl(cities[0])} target="_blank" rel="noreferrer"><strong>{cities[0]}</strong></a> lived in{" "}
              {cities.slice(1).map((city, index) => (
                <span key={city}>
                  {index > 0 ? ", " : ""}
                  <a href={mapsSearchUrl(city)} target="_blank" rel="noreferrer"><strong>{city}</strong></a>
                </span>
              ))}
              .
            </p>
          </div>
          <div className="about-me__links" aria-label="Social profiles">
            <span><a href={gitHub.link}>GitHub</a></span>
            <span><a href={linkedIn.link}>LinkedIn</a></span>
          </div>
        </div>
      </div>
    </section>
  );
}