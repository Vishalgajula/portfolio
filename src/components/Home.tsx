import React from "react";
import "./Home.css"; // for newspaper styles
import profile from "../assets/profile-pic.jpg";

const Home: React.FC = () => {
  return (
    <div className="portfolio-container">
      {/* Hero / Front Page */}
      <section id="main-page" className="page hero">
        <h1 className="title">The Developer Times - <i>Special Edition</i></h1>
        <div className="hero-section">
          <img src={profile} alt="" />
          <p>"Meet Vishal Gajula, an aspiring Full Stack Developer from Karimnagar. Skilled in both front and back pages of tech—React, Angular, Java, Spring Boot, and PostgreSQL—he turns ideas into scalable web stories. A problem-solver, a quick learner, and always chasing the next big headline in code."</p>
        </div>
      </section>

      {/* About Me */}
      <section id="letter-from-editor" className="page about">
        <h2 className="section-title">Letter from the Editor</h2>
        <p>
          "Dear Reader, technology is today's breaking news—ever-changing and full of impact. My journey began with curiosity and grew into a passion for crafting clean, purposeful applications. Every project is not just about code—it's about stories that improve experiences. Thank you for reading. Let's turn the page together."
        </p>
      </section>

      {/* Projects */}
      <section id="featured-stories" className="page projects">
        <h2 className="section-title">Featured Stories of Code</h2>
        <article>
          <h3>Movie Finder (React)</h3>
          <p>
            "Extra! Extra! A React app that fetches films from an API in real time. With React Hooks and responsive design, it's entertainment delivered straight to your screen."
          </p>
        </article>
        <article>
          <h3>Book Management System (Angular)</h3>
          <p>
            "Hot off the press! An Angular-powered CRUD app for managing books. Built with Reactive Forms and a modular layout, it's a story of structure and scalability."
          </p>
        </article>
      </section>

      {/* Skills */}
      <section id="tools-of-trade" className="page skills">
        <h2 className="section-title">Classifieds – Tools of the Trade</h2>
        <ul>
          <li><strong>Front Page Ads:</strong> HTML5 | CSS3 | JavaScript | TypeScript</li>
          <li><strong>Headline Tech:</strong> React JS | Angular | Bootstrap</li>
          <li><strong>Backend Desk:</strong> Java | Spring Boot</li>
          <li><strong>Database Desk:</strong> PostgreSQL</li>
          <li><strong>Utility Box:</strong> Git | SCSS | Responsive Design</li>
          <li><strong>Extra Editions:</strong> Python (basics)</li>
        </ul>
      </section>

      {/* Internship */}
      <section id="career-chronicles" className="page experience">
        <h2 className="section-title">Career Chronicles – Past Issues</h2>
        <p>
          "Nov 2024 – Apr 2025: Apprentice at tech.at.core. Covered full-stack beats with React, Angular, Spring Boot, and PostgreSQL. Reported daily in Agile sprints, contributed to code reviews, and learned the art of clean, maintainable development. A valuable edition in my developer journey."
        </p>
      </section>

      {/* Education */}
      <section id="education-bulletin" className="page education">
        <h2 className="section-title">Education Bulletin – Academic Announcements</h2>
        <ul>
          <li>
            <strong>Bachelor of Technology (ECE)</strong> St. Martin's Engineering College, Hyderabad – July 2023
            <p>
              "Graduated with strong fundamentals in problem-solving and technical design, paving the way for my journey into full stack development."
            </p>
          </li>
          <li>
            <strong>Intermediate</strong> Alphores Junior College, Karimnagar – April 2019
            <p>
              "Sharpened analytical and logical thinking while laying the groundwork for higher studies."
            </p>
          </li>
          <li>
            <strong>Secondary Education</strong> Alphores High School, Gopalraopet – April 2017
            <p>
              "Early edition: built the curiosity and discipline that shaped today's developer."
            </p>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section id="cut-out-save" className="page contact">
        <h2 className="section-title">Cut Out & Save – Hire Me!</h2>
        <p>
          "Looking for a developer to headline your next project? Redeem this exclusive Hire Me coupon today. Click below to connect!"
        </p>
      </section>
    </div>
  );
};

export default Home;