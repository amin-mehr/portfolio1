"use client";

import { useEffect, useState } from "react";

const sections = ["home", "projects", "about", "contact"];

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // مقدار اولیه

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="flex justify-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 lg:px-8 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => handleClick(e, section)}
            className={`nav-item lg:text-lg md:text-base ${activeSection === section ? "nav-item-active" : ""}`}
          >
            {section === "home"
              ? "خانه"
              : section === "projects"
                ? "پروژه‌ها"
                : section === "about"
                  ? "درباره"
                  : "تماس"}
          </a>
        ))}
      </nav>
    </div>
  );
};
