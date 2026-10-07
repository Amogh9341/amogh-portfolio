import './App.css'
import { useState } from "react"
import Header from "../header/header.jsx"
import Home from "../pages/home/home.jsx"

export default function App() {
  const [activeTab, setActiveTab] = useState("Home")
  const [isIndexOpen, setIsIndexOpen] = useState(false)

  return (
    <div className="app-shell">
      <Header
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab)
          setIsIndexOpen(false)
        }}
        showIndexToggle={activeTab === "Home"}
        isIndexOpen={isIndexOpen}
        onIndexToggle={() => setIsIndexOpen((isOpen) => !isOpen)}
        onIndexClose={() => setIsIndexOpen(false)}
      />
      <div className={`app-shell__content${activeTab === "Home" ? " app-shell__content--with-index" : ""}`}>
        {activeTab === "Home" && <Home isIndexOpen={isIndexOpen} onIndexClose={() => setIsIndexOpen(false)} />}
      </div>
    </div>
  );
}
