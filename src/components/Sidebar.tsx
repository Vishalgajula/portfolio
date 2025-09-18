import { useState, useEffect } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("main-page");

  const navItems = [
    { id: "main-page", label: "Main Page" },
    { id: "letter-from-editor", label: "Letter from the Editor" },
    { id: "featured-stories", label: "Featured Stories of Code" },
    { id: "tools-of-trade", label: "Classifieds - Tools of the Trade" },
    { id: "career-chronicles", label: "Career Chronicles" },
    { id: "education-bulletin", label: "Education Bulletin" },
    { id: "cut-out-save", label: "Cut Out & Save" }
  ];

  const handleNavClick = (sectionId:any) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
      setActiveSection(sectionId);
    }
  };

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sidebar-container">
      <h3 className="sidebar-title">Navigation</h3>
      <ul className="sidebar-nav">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              className={`nav-button ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}