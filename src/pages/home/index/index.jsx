import { useEffect, useState } from "react";
import { sectionLinks } from "../../../content.js";
import "./index.css";

export default function PageIndex({ isOpen, onClose }) {
	const [activeSection, setActiveSection] = useState("about-me");
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const updateScrollState = () => {
			const viewportCenter = window.innerHeight / 2;
			const currentSection = sectionLinks
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

			const pageHeight = document.documentElement.scrollHeight;
			setScrollProgress(pageHeight > 0
				? ((window.scrollY + viewportCenter) / pageHeight) * 100
				: 0);
		};

		updateScrollState();
		window.addEventListener("scroll", updateScrollState, { passive: true });
		window.addEventListener("resize", updateScrollState);
		return () => {
			window.removeEventListener("scroll", updateScrollState);
			window.removeEventListener("resize", updateScrollState);
		};
	}, []);

	const scrollToProgress = (event) => {
		const viewportCenter = window.innerHeight / 2;
		const pageHeight = document.documentElement.scrollHeight;
		const scrollableHeight = pageHeight - window.innerHeight;
		const focusedPoint = (Number(event.target.value) / 100) * pageHeight;
		const top = Math.min(Math.max(focusedPoint - viewportCenter, 0), scrollableHeight);
		window.scrollTo({ top, behavior: "instant" });
	};

	const focusSection = (event, href) => {
		event.preventDefault();
		document.querySelector(href)?.scrollIntoView({
			behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
			block: "center",
		});
		window.history.replaceState(null, "", href);
		onClose();
	};

	return (
		<aside
			className={`page-index${isOpen ? " page-index--open" : ""}`}
			id="site-index-panel"
			aria-label="Page index"
		>
			<nav className="page-index__nav" aria-label="Page sections">
				<ul className="page-index__list">
					{sectionLinks.map(({ label, href }) => (
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
			<input
				className="page-index__scrollbar"
				type="range"
				min="0"
				max="100"
				step="0.1"
				value={scrollProgress}
				onChange={scrollToProgress}
				aria-label="Scroll page"
				aria-valuetext={`${Math.round(scrollProgress)}% down the page`}
			/>
		</aside>
	);
}
