import './App.css'
import { useState } from "react"
import Header from "../header/header.jsx"
import Home from "../pages/home/home.jsx"

export default function App() {
  const [activeTab, setActiveTab] = useState("Home")

  return (
    <div className="app-shell">
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <div className={`app-shell__content${activeTab === "Home" ? " app-shell__content--with-index" : ""}`}>
        {activeTab === "Home" && <Home />}
      </div>
    </div>
  );
}
