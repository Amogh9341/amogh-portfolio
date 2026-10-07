import { title, name, aboutMe, gitHubId, linkedInId } from "../../../content.js";
import "./aboutMe.css";

export default function AboutMe() {
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="about-hero">
      <div className="about-hero__content">
        <p className="about-hero__eyebrow">{title}</p>

        <h1 className="about-hero__name">
          <span>{firstName}</span>
          {lastName && <span>{lastName}</span>}
        </h1>

        <div className="about-hero__details">
          <p className="about-hero__intro">{aboutMe}</p>
          <div className="about-hero__links" aria-label="Social profiles">
            <span>{gitHubId}</span>
            <span>{linkedInId}</span>
          </div>
        </div>
      </div>
    </section>
  );
}