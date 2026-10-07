import { title, name, aboutMe, gitHubId, linkedInId } from "../../../content.js";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="about-me__content">
        <p className="about-me__eyebrow">{title}</p>

        <h1 className="about-me__name">
          <span>{name}</span>
        </h1>

        <div className="about-me__details">
          <p className="about-me__intro">{aboutMe}</p>
          <div className="about-me__links" aria-label="Social profiles">
            <span>{gitHubId}</span>
            <span>{linkedInId}</span>
          </div>
        </div>
      </div>
    </section>
  );
}