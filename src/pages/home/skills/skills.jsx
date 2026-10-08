import { skills } from "../../../content.js";
import "./skills.css";

export default function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-heading">
      <h2 className="skills-section__title" id="skills-heading">Skills</h2>
      <ul className="skills-section__list">
        {skills.map(({ name, description, skillLevel }) => (
          <li
            className="skills-section__item"
            key={name}
            tabIndex={0}
            aria-describedby={`skill-description-${name}`}
          >
            <span className="skills-section__name">{name}</span>
            <div
              className="skills-section__track"
              role="progressbar"
              aria-label={`${name} proficiency`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Number.parseFloat(skillLevel)}
            >
              <span style={{ width: skillLevel }} />
            </div>
            <span className="skills-section__level">{skillLevel}</span>
            <span
              className="skills-section__description"
              id={`skill-description-${name}`}
              role="tooltip"
            >
              {description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}