import { useEffect, useState } from "react";
import { indexLinks } from "../../../content.js";
import "./index.css";

export default function PageIndex() {
	const [activeSection, setActiveSection] = useState("about-me");

	useEffect(() => {
		const updateScrollState = () => {
			const viewportCenter = window.innerHeight / 2;
			const currentSection = indexLinks
				.map(({ href }) => document.querySelector(href))
				.filter(Boolean)
				.reduce((closest, section) => {
					const bounds = section.getBoundingClientRect();
					const distance = viewportCenter < bounds.top
						? bounds.top - viewportCenter
						: viewportCenter > bounds.bottom
							? viewportCenter - bounds.bottom
							: 0;
					return !closest || distance < closest.distance
						? { id: section.id, distance }
						: closest;
				}, null);

			if (currentSection) setActiveSection(currentSection.id);

		};

		updateScrollState();
		window.addEventListener("scroll", updateScrollState, { passive: true });
		window.addEventListener("resize", updateScrollState);
		return () => {
			window.removeEventListener("scroll", updateScrollState);
			window.removeEventListener("resize", updateScrollState);
		};
	}, []);

	const focusSection = (event, href) => {
		event.preventDefault();
		document.querySelector(href)?.scrollIntoView({
			behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
			block: "center",
		});
		window.history.replaceState(null, "", href);
	};

	return (
		<aside className="page-index" aria-label="Page index">
			<nav className="page-index__nav" aria-label="Page sections">
				<ul className="page-index__list">
					{indexLinks.map(({ label, href }) => (
						<li key={href}>
							<a
								className={activeSection === href.slice(1) ? "page-index__link page-index__link--active" : "page-index__link"}
								href={href}
								onClick={(event) => focusSection(event, href)}
								aria-current={activeSection === href.slice(1) ? "location" : undefined}
							>
								{label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
