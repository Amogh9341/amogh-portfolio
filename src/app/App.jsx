import './App.css'
import { useState } from "react"
import Header from "../header/header.jsx"
import Home from "../pages/home/home.jsx"

export default function App() {
  const [activeTab, setActiveTab] = useState("Home")

  return (
    <div>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "Home" && <Home />}
    </div>
  );
}
