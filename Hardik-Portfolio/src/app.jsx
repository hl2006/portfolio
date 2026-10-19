import { useState} from "react";
import { Typewriter } from "react-simple-typewriter";
import "./index.css";

function App() {
  const [dark, setDark] = useState(true);
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React"],
    Backend: ["Node.js", "Express.js", "MongoDB", "SQL"],
    "Programming & Tools": ["C++", "Python","C","DSA","DBMS","Git","GitHub", "VS Code","Google Colab"],
  };

  const projects = [
    {
      name: "Apna Hunar",
      type: "Web Development",
      description: "A responsive frontend application developed during my internship.",
      tech: "HTML, CSS, JavaScript, LocalStorage",
      github: "https://github.com/hl2006/ApnaHunar.git"
    },
    {
      name: "CareerSetu",
      type: "Web Development",
      description: "A career-focused web application with useful interactive features.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/hl2006/CareerSetu.git"
    },
    {
      name: "Portfolio",
      type: "Full Stack Development",
      description: "MERN stack portfolio website showcasing my skills, projects, and resume.",
      tech: "React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, Git, GitHub.",
      github: "https://github.com/hl2006/portfolio.git",
    }
  ];

  const achievements = [
    {
      title: "DBMS Part 1",
      subtitle: "Infosys Springboard",
      detail: "Database Management Systems certificate.",
      link: "https://drive.google.com/drive/folders/1UX8BcIpKeeWwrpXF2cdJF4JL0_RA8TDU?usp=drive_link"
    },
    {
      title: "Pre Hackathon 2026",
      subtitle: "WsCube Career School, Jaipur",
      detail: "Achieved a Top 10 position.",
      link: "https://drive.google.com/drive/folders/1UX8BcIpKeeWwrpXF2cdJF4JL0_RA8TDU?usp=drive_link"
    },
    {
      title: "Red Hat System Administration I",
      subtitle: "Red Had Academy",
      detail: "Operating Systems Certificate.",
      link: "https://drive.google.com/drive/folders/1UX8BcIpKeeWwrpXF2cdJF4JL0_RA8TDU?usp=drive_link"
    }
  ];

  async function submitContact(event) {
    event.preventDefault();
    setStatus("Sending message...");

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Message could not be sent.");
      }

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Backend is not connected yet. Please try again after setup.");
    }
  }

  return (
    <div className={dark ? "app dark" : "app light"}>
      <nav className="navbar">
        <a href="#home" className="logo">
          <span className="logo-box">HL</span>
          <span>
            <strong>Hardik Lavti</strong>
            <small>JKLU · CSE</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
          <button className="theme-button" onClick={() => setDark(!dark)}>
            {dark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </nav>

      <main>
        <section className="home section-wrap" id="home">
          <div className="home-content">
            <p className="tag"><span className="dot"></span> Undergraduate Student · JKLU</p>
            <h1>Hi, I'm <span>Hardik Lavti</span></h1>
            <h2 className="role-text">
            <Typewriter
              words={[
              "MERN Stack Developer",
              "Problem Solver",
              "Programmer in C,C++,Python"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
              />
            </h2>
            <p className="intro">
              I am a Computer Science and Engineering student interested in
              web development, programming, and machine learning. I enjoy
              learning new technologies and building practical projects.
            </p>       
            <div className="home-buttons">
              <a className="button" href="#projects">
                Explore My Projects 
              </a>
              <div className="resume-download">
                <h3>Download My Resume</h3>
                <a
                  className="button"
                  href="https://hardik-portfolio-api.onrender.com/api/resume/pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download PDF
                </a>
                <a
                  className="button"
                  href="https://hardik-portfolio-api.onrender.com/api/resume/docx"
                >
                  Download Word
                </a>
              </div>
            </div>
            <p className="location">⌖ Jaipur, Rajasthan, India</p>
            <div className="social-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="#contact">Contact me ↗</a>
            </div>
          </div>

          <div className="home-visual">
            <div className="visual-circle">
              <div className="orbit"></div>
              <div className="avatar">
                <img src="/hardik.jpeg" alt="Hardik Lavti" />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-wrap" id="about">
          <p className="eyebrow">01 — ABOUT ME</p>
          <h2 className="section-title">A little about <span>me.</span></h2>
          <div className="about-layout">
            <p>
              I am a B.Tech Computer Science and Engineering student at
              JK Lakshmipat University, Jaipur. I am interested in web
              development, technology, and problem-solving. I enjoy learning
              new skills and building practical projects.
            </p>
            <p>
              During my frontend development internship at Integration
              Edutech Pvt. Ltd., I worked on Apna Hunar and CareerSetu using
              HTML, CSS, JavaScript, and LocalStorage. I am also learning
              Python, databases, and machine learning.
            </p>
            <p>
              Apart from academics, I enjoy playing football and working in
              a team. My goal is to improve my technical skills and build
              useful applications that solve real-world problems.
            </p>
          </div>
          <div className="facts">
            <div><small>EDUCATION</small><strong>B.Tech CSE</strong></div>
            <div><small>UNIVERSITY</small><strong>JKLU, Jaipur</strong></div>
            <div><small>INTERESTS</small><strong>Web & Technology</strong></div>
          </div>
        </section>

        <section className="section section-wrap" id="skills">
          <p className="eyebrow">02 — MY TOOLKIT</p>
          <h2 className="section-title">Skills & <span>technologies.</span></h2>
          <p className="section-intro">Technologies I have used or am currently learning.</p>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-card" key={group}>
                <h3>{group}</h3>
                <div className="skill-list">
                  {items.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-wrap" id="projects">
          <p className="eyebrow">03 — MY WORK</p>
          <h2 className="section-title">Projects I've <span>worked on.</span></h2>
          <p className="section-intro">A few projects that helped me learn and practise.</p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-number">PROJECT 0{index + 1}</div>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="tech"><strong>Technologies:</strong> {project.tech}</p>
                <a
                    className="project-github"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-wrap" id="experience">
          <p className="eyebrow">04 — MY JOURNEY</p>
          <h2 className="section-title">Education & <span>experience.</span></h2>
          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-dot"></span>
              <p className="date">CURRENTLY PURSUING</p>
              <h3>B.Tech — Computer Science & Engineering</h3>
              <p className="place">JK Lakshmipat University, Jaipur</p>
              <p>Learning programming, databases, algorithms, and core computer science concepts.</p>
            </article>
            <article className="timeline-item">
              <span className="timeline-dot"></span>
              <p className="date">CLASS XII</p>
              <h3>Senior Secondary — PCM</h3>
              <p className="place">
                Kota Career Science Education Centre Sr. Sec. School
              </p>
              <p>Board: RBSE</p>
              <p>Percentage: 88%</p>
            </article>
            <article className="timeline-item">
              <span className="timeline-dot"></span>
              <p className="date">MAY 2026 — JULY 2026</p>
              <h3>Frontend Development Intern</h3>
              <p className="place">Integration Edutech Pvt. Ltd.</p>
              <p>Worked on Apna Hunar and CareerSetu using HTML, CSS, JavaScript, and LocalStorage.</p>
            </article>
          </div>
        </section>

        <section className="section section-wrap" id="achievements">
          <p className="eyebrow">05 — MILESTONES</p>
          <h2 className="section-title">Achievements & <span>certificates.</span></h2>
          <div className="achievement-grid">
            {achievements.map((item) => (
              <article className="achievement-card" key={item.title}>
                <div className="achievement-icon">✦</div>
                <h3>{item.title}</h3>
                <p className="place">{item.subtitle}</p>
                <p>{item.detail}</p>
                <a
                    className="project-github"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate ↗
                  </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-wrap contact-section" id="contact">
          <p className="eyebrow">06 — GET IN TOUCH</p>
          <h2 className="section-title">Let's <span>connect.</span></h2>
          <p className="section-intro">Have a question or a project idea? Send me a message.</p>
          <form className="contact-form" onSubmit={submitContact}>
            <label>
              Name
              <input
                type="text"
                required
                minLength={2}
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Message
              <textarea
                required
                minLength={5}
                rows={5}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                placeholder="Write your message..."
              />
            </label>
            <button className="button" type="submit">Send Message →</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="footer-logo">HL. Hardik Lavti</a>
        <p>Student Portfolio · 2026</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
