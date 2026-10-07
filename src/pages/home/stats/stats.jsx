import { stats } from "../../../content.js";
import "./stats.css";

export default function Stats() {
  return (
    <section className="stats-section" aria-labelledby="stats-heading">
      <h2 className="stats-section__title" id="stats-heading">Stats</h2>
      <dl className="stats-section__list">
        {stats.map(({ name, description }) => (
          <div className="stats-section__item" key={name}>
            <dt>{name}</dt>
            <dd>{description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}