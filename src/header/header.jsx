import { siteName, links } from "../content.js"
import "./header.css"

export default function Header({ activeTab, onTabChange }) {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <div className="site-header__identity">
                    <a className="site-header__logo" href="#about-me">
                        {siteName}
                    </a>
                </div>
                <nav className="site-header__nav" aria-label="Main navigation">
                    {links.map(({ label, icon: Icon }) => (
                        <button
                            aria-pressed={activeTab === label}
                            className={`site-header__tab${activeTab === label ? " site-header__tab--active" : ""}`}
                            onClick={() => onTabChange(label)}
                            type="button"
                            key={label}
                        >
                            {label}
                            <Icon width={18} height={18} aria-hidden="true" focusable="false" />
                        </button>
                    ))}
                </nav>
                <a
                    className="site-header__contact"
                    href="#contact"
                    onClick={(event) => {
                        event.preventDefault()
                        document.querySelector("#contact")?.scrollIntoView({
                            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                            block: "center",
                        })
                        window.history.replaceState(null, "", "#contact")
                    }}
                >
                    Contact me
                </a>
            </div>
        </header>
    )
}