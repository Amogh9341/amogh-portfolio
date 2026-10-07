import { siteName, links } from "../content.js"
import "./header.css"

export default function Header({ activeTab, onTabChange }) {
    return (
        <header className="site-header">
            <div className="site-header__inner">
                <a className="site-header__logo" href={links[0].href}>
                    {siteName}
                </a>
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