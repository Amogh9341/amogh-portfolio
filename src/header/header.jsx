import { siteName, links } from "../content.js"
import "./header.css"

export default function Header({ activeTab, onTabChange, showIndexToggle, isIndexOpen, onIndexToggle, onIndexClose }) {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <div className="site-header__identity">
                    <a className="site-header__logo" href="#about-me" onClick={onIndexClose}>
                        {siteName}
                    </a>
                    {showIndexToggle && (
                        <button
                            aria-controls="site-index-panel"
                            aria-expanded={isIndexOpen}
                            aria-label={isIndexOpen ? "Close page index" : "Open page index"}
                            className="site-header__menu-toggle"
                            onClick={onIndexToggle}
                            type="button"
                        >
                            <span className="site-header__menu-icon" aria-hidden="true">
                                <span />
                                <span />
                                <span />
                            </span>
                        </button>
                    )}
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
            </div>
        </header>
    )
}