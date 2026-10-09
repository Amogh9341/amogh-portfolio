import { useState } from "react";
import { projects } from "../../../content.js";
import "./projects.css";

export default function Projects() {
	const [visibleProjectCounts, setVisibleProjectCounts] = useState([4]);
	const visibleProjectCount = visibleProjectCounts[visibleProjectCounts.length - 1];

	return (
		<section className="projects-section" id="projects" aria-labelledby="projects-title">
			<div className="projects-section__inner">
				<h2 className="projects-section__title" id="projects-title">Projects</h2>
				<div className="projects-grid" id="projects-grid">
					{projects.slice(0, visibleProjectCount).map((project) => {

						return (
							<a
								className="project-card"
								href={project.gitHubRepo}
								key={`${project.name}-${project.gitHubRepo}`}
								rel="noreferrer noopener"
								target="_blank"
							>
								<div className="project-card__photo">
									<img src={project.photo} alt={`${project.name}`} />
									<span className="project-card__date">{project.date}</span>
								</div>
								<div className="project-card__details">
									<div className="project-card__copy">
										<h3>{project.name}</h3>
										<p className="project-card__event">{project.event}</p>
									</div>
									<p className="project-card__domains">{project.domain}</p>
									<p className="project-card__description">{project.description}</p>
								</div>
							</a>
						);
					})}
				</div>
				{(visibleProjectCount < projects.length || visibleProjectCounts.length > 1) && (
					<div className="projects-section__controls">
						{visibleProjectCount < projects.length && (
							<button
								className="projects-section__pagination-button"
								type="button"
								onClick={() => setVisibleProjectCounts((counts) => [
									...counts,
									Math.min(counts[counts.length - 1] + 4, projects.length),
								])}
								aria-controls="projects-grid"
							>
								View more
							</button>
						)}
						{visibleProjectCounts.length > 1 && (
							<button
								className="projects-section__pagination-button"
								type="button"
								onClick={() => setVisibleProjectCounts((counts) => counts.slice(0, -1))}
								aria-controls="projects-grid"
							>
								View less
							</button>
						)}
					</div>
				)}
			</div>
		</section>
	);
}
