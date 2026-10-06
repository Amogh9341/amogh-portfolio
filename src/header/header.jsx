import { siteName, links } from "../content.js"

export default function Header() {
    return (
        <header className="w-full border-b border-slate-200 bg-white">
            <div className="mx-auto flex w-full max-w-7xl items-center gap-6 px-4 py-3 sm:px-6">
                <a className="shrink-0 text-lg font-semibold text-slate-900" href="#home">
                    {siteName}
                </a>
                <nav className="ml-auto flex min-w-0 items-center justify-end gap-2 overflow-x-auto py-1" aria-label="Main navigation">
                    {links.map(({ label, href, icon: Icon }) => (
                        <a
                            className="flex shrink-0 items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-150 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                            href={href}
                            key={label}
                        >
                            {label}
                            <Icon width={18} height={18} aria-hidden="true" focusable="false" />
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    )
}