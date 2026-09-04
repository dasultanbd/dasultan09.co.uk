import { useState } from "react";
import "./App.css";

import profile from "./assets/profile.jpg";
import logo from "./assets/logo.png";

const EMAIL = "dasultanbusiess@gmail.com";

const WEB3FORMS_ACCESS_KEY =
  "118615d0-05d0-4a2a-bb28-f045e6b68841";

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Web Design",
    icon: "✦",
    short:
      "Modern websites designed around trust, clarity and customer action.",
    intro:
      "I design websites that make a business look credible from the first few seconds.",
    steps: [
      "Understand the business and target customers",
      "Create a clear page structure",
      "Design a strong visual identity",
      "Build clear calls-to-action",
    ],
    growth:
      "A better website can help turn more visitors into enquiries by making the business easier to understand, easier to trust and easier to contact.",
  },
  {
    number: "02",
    title: "Web Development",
    icon: "⌘",
    short:
      "Fast, responsive and functional front-end experiences built for real users.",
    intro:
      "I turn designs and business requirements into responsive, functional websites.",
    steps: [
      "Build responsive layouts",
      "Develop interactive components",
      "Optimise loading and performance",
      "Test across screen sizes",
    ],
    growth:
      "A fast and easy-to-use website reduces friction and gives potential customers a smoother path from landing on the site to contacting or buying from the business.",
  },
  {
    number: "03",
    title: "Website Redesign",
    icon: "↗",
    short:
      "Turn an outdated website into a cleaner, stronger and more convincing experience.",
    intro:
      "If an existing website feels outdated, confusing or difficult to use, I can restructure and modernise it.",
    steps: [
      "Audit the existing website",
      "Identify usability problems",
      "Modernise the visual design",
      "Improve conversion paths",
    ],
    growth:
      "A redesign can improve first impressions, usability and trust while giving existing visitors clearer reasons to enquire or purchase.",
  },
  {
    number: "04",
    title: "SEO",
    icon: "⌁",
    short:
      "Practical SEO focused on visibility, local search and measurable growth.",
    intro:
      "I combine technical website improvements with practical SEO thinking.",
    steps: [
      "Technical SEO foundations",
      "Local search optimisation",
      "Content and page structure",
      "Analytics and performance tracking",
    ],
    growth:
      "Better search visibility can bring more qualified visitors to the website, especially when customers are already searching for the services a business provides.",
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    category: "LOCAL SERVICE",
    title: "NorthWest Pro Plumbing",
    description:
      "A conversion-focused plumbing website concept built around emergency calls, trust and local enquiries.",
    tags: ["Web Design", "Local SEO", "Lead Generation"],
    type: "plumbing",
    brand: "NW PRO",
    headline: "Fast help.",
    headline2: "Trusted locally.",
    subtext:
      "Professional plumbing services for Everett & Snohomish County.",
    button: "CALL NOW",
    secondaryButton: "OUR SERVICES",
    phone: "(425) 338-5449",
    detail:
      "The concept focuses on helping a local plumbing company communicate its services immediately. The structure prioritises emergency contact actions, service areas, trust signals and clear calls-to-action.",
  },
  {
    number: "02",
    category: "HEALTHCARE",
    title: "Oak Dental Studio",
    description:
      "A premium dental website concept designed around trust, services and appointment actions.",
    tags: ["UI Design", "Development", "Conversion"],
    type: "dental",
    brand: "OAK DENTAL",
    headline: "Confident care.",
    headline2: "Beautifully delivered.",
    subtext:
      "Modern dentistry in a comfortable, relaxing environment.",
    button: "BOOK APPOINTMENT",
    secondaryButton: "OUR SERVICES",
    detail:
      "The concept uses a calm visual system, clear treatment information and strong appointment paths to make the experience feel professional and reassuring.",
  },
  {
    number: "03",
    category: "HOSPITALITY",
    title: "The Borough Table",
    description:
      "A restaurant website concept designed to make menus, atmosphere and reservations easy to discover.",
    tags: ["UX Design", "Responsive", "Bookings"],
    type: "restaurant",
    brand: "THE BOROUGH TABLE",
    headline: "Good food.",
    headline2: "Great moments.",
    subtext:
      "Seasonal dishes. Warm atmosphere. Memorable experience.",
    button: "RESERVE A TABLE",
    secondaryButton: "VIEW MENU",
    detail:
      "The concept combines editorial imagery, strong typography and clear reservation actions to create a premium restaurant experience.",
  },
  {
    number: "04",
    category: "PROFESSIONAL",
    title: "Harrison Legal",
    description:
      "A professional legal website concept focused on authority, clarity and consultation enquiries.",
    tags: ["Corporate", "UI Design", "SEO"],
    type: "legal",
    brand: "HARRISON LEGAL",
    headline: "Experience.",
    headline2: "You can trust.",
    subtext:
      "Clear legal guidance from an experienced professional team.",
    button: "BOOK CONSULTATION",
    secondaryButton: "OUR SERVICES",
    detail:
      "The concept gives visitors fast access to legal services, expertise, contact information and consultation options while maintaining a professional tone.",
  },
];

/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.simpleicons.org/mongodb/47A248",
  },
  {
    name: "Google Analytics",
    icon: "https://cdn.simpleicons.org/googleanalytics/E37400",
  },
  {
    name: "Search Console",
    icon: "https://cdn.simpleicons.org/googlesearchconsole/4285F4",
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/111111",
  },
  {
    name: "Vite",
    icon: "https://cdn.simpleicons.org/vite/646CFF",
  },
];

/* =========================================================
   GITHUB
========================================================= */

const githubProjects = [
  {
    number: "01",
    title: "DA Sultan Portfolio",
    description:
      "My main portfolio built with React and Vite with a focus on modern UI and performance.",
    tags: ["React", "Vite", "CSS"],
    image: logo,
    code: "https://github.com/dasultanbd/da-sultan-portfolio",
    live: "https://dasultanbd.github.io/da-sultan-portfolio/",
  },
  {
    number: "02",
    title: "Client Website Concepts",
    description:
      "Business-focused website concepts exploring different industries and conversion patterns.",
    tags: ["React", "JavaScript", "CSS"],
    image: logo,
    code: "https://github.com/dasultanbd",
    live: "#work",
  },
  {
    number: "03",
    title: "SEO Web Builds",
    description:
      "Web development experiments combining technical implementation with practical SEO thinking.",
    tags: ["SEO", "React", "Analytics"],
    image: logo,
    code: "https://github.com/dasultanbd",
    live: "#services",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const processSteps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the business, audience, competition and goals.",
  },
  {
    number: "02",
    title: "Plan",
    text: "Turn the information into a clear sitemap, content and conversion structure.",
  },
  {
    number: "03",
    title: "Design",
    text: "Create a polished visual system that feels right for the business.",
  },
  {
    number: "04",
    title: "Build",
    text: "Develop the responsive website and make sure important interactions work.",
  },
  {
    number: "05",
    title: "Launch",
    text: "Test the site across devices and prepare it for the real world.",
  },
  {
    number: "06",
    title: "Improve",
    text: "Use analytics, SEO data and user behaviour to identify improvements.",
  },
];

/* =========================================================
   REALISTIC WEBSITE PREVIEW
========================================================= */

function ProjectPreview({ project }) {
  return (
    <div className={`website-preview preview-${project.type}`}>

      {/* Browser */}
      <div className="website-browser">

        <div className="browser-controls">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-address">
          {project.type === "plumbing"
            ? "northwestproplumbing.com"
            : project.type === "dental"
            ? "oakdentalstudio.com"
            : project.type === "restaurant"
            ? "theboroughtable.com"
            : "harrisonlegal.com"}
        </div>

      </div>

      {/* Website navigation */}
      <div className="mock-nav">

        <div className="mock-brand">
          <strong>{project.brand}</strong>
        </div>

        <div className="mock-links">
          <span>Home</span>
          <span>Services</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        <button className="mock-nav-button">
          {project.type === "plumbing"
            ? "CALL NOW"
            : project.type === "dental"
            ? "BOOK NOW"
            : project.type === "restaurant"
            ? "RESERVE"
            : "CONSULT"}
        </button>

      </div>

      {/* Hero */}
      <div className="mock-hero">

        <div className="mock-hero-copy">

          <small>{project.category}</small>

          <h4>
            {project.headline}
            <br />
            <span>{project.headline2}</span>
          </h4>

          <p>{project.subtext}</p>

          <div className="mock-buttons">
            <button>{project.button}</button>
            <button className="mock-secondary">
              {project.secondaryButton}
            </button>
          </div>

        </div>

        <div className="mock-visual">

          {project.type === "plumbing" && (
            <>
              <div className="plumbing-pipe pipe-one" />
              <div className="plumbing-pipe pipe-two" />
              <div className="plumbing-tool">
                <span />
                <span />
                <span />
              </div>
              <div className="mock-person plumbing-person">
                <div className="person-head" />
                <div className="person-body" />
              </div>
            </>
          )}

          {project.type === "dental" && (
            <>
              <div className="dental-light" />
              <div className="dental-chair">
                <div className="chair-head" />
                <div className="chair-back" />
                <div className="chair-seat" />
              </div>
              <div className="dental-equipment">
                <span />
                <span />
                <span />
              </div>
            </>
          )}

          {project.type === "restaurant" && (
            <>
              <div className="restaurant-glow" />
              <div className="restaurant-plate">
                <div className="food-center" />
                <div className="food-detail one" />
                <div className="food-detail two" />
                <div className="food-detail three" />
              </div>
              <div className="restaurant-glass">
                <div />
              </div>
            </>
          )}

          {project.type === "legal" && (
            <>
              <div className="legal-building">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="legal-column column-one" />
              <div className="legal-column column-two" />
              <div className="legal-column column-three" />
            </>
          )}

        </div>

      </div>

      {/* Bottom website section */}
      <div className="mock-bottom">

        <div>
          <strong>
            {project.type === "plumbing"
              ? "24/7 Emergency Service"
              : project.type === "dental"
              ? "Modern dentistry"
              : project.type === "restaurant"
              ? "Seasonal menu"
              : "Trusted legal advice"}
          </strong>

          <span>
            {project.type === "plumbing"
              ? "Fast response across the local area"
              : project.type === "dental"
              ? "Care designed around you"
              : project.type === "restaurant"
              ? "Thoughtfully prepared every day"
              : "Professional support when it matters"}
          </span>
        </div>

        <div className="mock-bottom-lines">
          <i />
          <i />
          <i />
        </div>

      </div>

    </div>
  );
}

function App() {

  const [activeService, setActiveService] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeGithub, setActiveGithub] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleInput = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setFormStatus("sending");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: "New Website Enquiry — DA Sultan Portfolio",
            from_name: formData.name,
            email: formData.email,
            message: formData.message,
            botcheck: "",
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setFormStatus("success");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const closeModal = () => {
    setActiveService(null);
    setActiveProject(null);
    setActiveGithub(null);
  };

  return (
    <div className="site">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar-wrap">

        <nav className="navbar">

          <a href="#home" className="brand">

            <div className="brand-logo">
              <img src={logo} alt="DA Sultan logo" />
            </div>

            <div className="brand-text">
              <strong>DA Sultan</strong>
              <span>WEB · SEO · DIGITAL</span>
            </div>

          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#growth">Growth</a>
            <a href="#work">Work</a>
            <a href="#github">GitHub</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-cta">
            Let&apos;s Talk <span>↗</span>
          </a>

        </nav>

      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <main>

        <section id="home" className="hero section">

          <div className="hero-bg-word">
            DIGITAL
          </div>

          <div className="hero-grid">

            <div className="hero-copy">

              <div className="availability">
                <span className="availability-dot" />
                AVAILABLE FOR SELECTED PROJECTS
              </div>

              <h1>
                Websites that
                <br />
                look <span>premium.</span>
                <br />
                Built to
                <br />
                <span>perform.</span>
              </h1>

              <p>
                I&apos;m DA Sultan — a Web Developer &amp; SEO
                Consultant helping businesses build modern digital
                experiences that look trustworthy and turn attention
                into action.
              </p>

              <div className="hero-highlights">

                <span>
                  <b>Web</b> Development
                </span>

                <span>
                  <b>UI</b> Design
                </span>

                <span>
                  <b>SEO</b> Growth
                </span>

              </div>

              <div className="hero-buttons">

                <a href="#contact" className="primary-button">
                  Start a Project <span>↗</span>
                </a>

                <a href="#work" className="secondary-button">
                  View My Work <span>↓</span>
                </a>

              </div>

            </div>

            <div className="hero-visual">

              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />
              <div className="hero-orbit orbit-three" />

              <div className="hero-image-frame">

                <img
                  src={profile}
                  alt="DA Sultan - Web Developer and SEO Consultant"
                />

              </div>

              <div className="hero-floating floating-digital">

                <span className="floating-icon">
                  ✦
                </span>

                <div>
                  <strong>Digital</strong>
                  <small>Strategy + Build</small>
                </div>

              </div>

              <div className="hero-floating floating-build">

                <span className="floating-number">
                  01
                </span>

                <div>
                  <strong>Build</strong>
                  <small>Measure · Improve</small>
                </div>

              </div>

              <div className="hero-circle-label">
                <span>DESIGN</span>
                <span>DEVELOP</span>
                <span>GROW</span>
              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            BUSINESS GROWTH
        ===================================================== */}

        <section id="growth" className="section growth-section">

          <div className="growth-heading">

            <div>
              <div className="section-label">
                02 / BUSINESS GROWTH
              </div>

              <h2>
                More visibility.
                <br />
                More customers.
                <br />
                <span>More growth.</span>
              </h2>
            </div>

            <p>
              A strong digital presence works as a connected system:
              SEO helps the right people discover you, while a clear
              website builds trust and turns visits into enquiries.
            </p>

          </div>

          <div className="growth-flow">

            <div className="growth-step">
              <div className="growth-icon">SEO</div>
              <span>01 / DISCOVER</span>
              <strong>Get Discovered</strong>
              <small>
                Improve search visibility so potential customers can find your business.
              </small>
            </div>

            <div className="growth-arrow">→</div>

            <div className="growth-step">
              <div className="growth-icon">◎</div>
              <span>02 / VISIBILITY</span>
              <strong>Reach the right people</strong>
              <small>
                Put your business in front of people actively looking for what you offer.
              </small>
            </div>

            <div className="growth-arrow">→</div>

            <div className="growth-step">
              <div className="growth-icon">WEB</div>
              <span>03 / WEBSITE</span>
              <strong>Build trust</strong>
              <small>
                Make the value clear, professional and easy to understand on every device.
              </small>
            </div>

            <div className="growth-arrow">→</div>

            <div className="growth-step">
              <div className="growth-icon">↗</div>
              <span>04 / ENQUIRIES</span>
              <strong>Turn visits into action</strong>
              <small>
                Guide visitors towards calling, messaging, booking or requesting a quote.
              </small>
            </div>

            <div className="growth-arrow">→</div>

            <div className="growth-step growth-result">
              <div className="growth-icon">£</div>
              <span>05 / SALES</span>
              <strong>More opportunities</strong>
              <small>
                Better visibility and clearer conversion paths can create more opportunities.
              </small>
            </div>

          </div>

          <div className="growth-example">

            <div className="growth-example-copy">
              <span className="growth-example-label">
                ILLUSTRATIVE EXAMPLE
              </span>

              <h3>
                Better visibility +
                <br />
                better conversion.
              </h3>

              <p>
                A simple example of how stronger traffic and a better enquiry
                rate can change the potential number of customer enquiries.
              </p>
            </div>

            <div className="growth-comparison">

              <div className="growth-column">
                <span className="growth-column-label">BEFORE</span>

                <div className="growth-stat">
                  <strong>1,000</strong>
                  <small>Monthly visitors</small>
                </div>

                <div className="growth-stat">
                  <strong>2%</strong>
                  <small>Enquiry rate</small>
                </div>

                <div className="growth-total">
                  <small>Potential enquiries</small>
                  <strong>20</strong>
                </div>
              </div>

              <div className="growth-divider">→</div>

              <div className="growth-column growth-column-after">
                <span className="growth-column-label">
                  WITH BETTER SEO + WEBSITE
                </span>

                <div className="growth-stat">
                  <strong>2,000</strong>
                  <small>Monthly visitors</small>
                </div>

                <div className="growth-stat">
                  <strong>4%</strong>
                  <small>Enquiry rate</small>
                </div>

                <div className="growth-total">
                  <small>Potential enquiries</small>
                  <strong>80</strong>
                </div>
              </div>

            </div>

          </div>

          <div className="growth-note">
            <span>↗</span>
            <p>
              SEO brings potential customers to the door. A strong website gives them a reason to walk in.
            </p>
          </div>

          <div className="growth-disclaimer">
            Illustrative example only — actual results vary by business, market, traffic quality and conversion rate.
          </div>

        </section>

        {/* =====================================================
            FOCUS TICKER
        ===================================================== */}

        <section className="focus-ticker">

          <div className="ticker-label">
            WHAT I FOCUS ON
          </div>

          <div className="ticker-window">

            <div className="ticker-track">

              {[...Array(2)].flatMap(() => [
                "Web Development",
                "UI Design",
                "SEO",
                "Local SEO",
                "Conversion",
                "Performance",
                "Analytics",
                "Responsive",
                "Growth",
              ]).map((item, index) => (
                <span className="ticker-item" key={index}>
                  {item}
                  <b>✦</b>
                </span>
              ))}

            </div>

          </div>

        </section>
                {/* =====================================================
            SERVICES
        ===================================================== */}

        <section id="services" className="section services-section">

          <div className="section-heading">

            <div>

              <div className="section-label">
                01 / SERVICES
              </div>

              <h2>
                What I can
                <br />
                <span>build for you.</span>
              </h2>

            </div>

            <p>
              Not just a pretty website. I combine design,
              development and SEO thinking to create a digital
              experience around your actual business goals.
            </p>

          </div>

          <div className="services-list">

            {services.map((service) => (
              <button
                className="service-row"
                key={service.number}
                onClick={() => setActiveService(service)}
              >

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-icon">
                  {service.icon}
                </span>

                <span className="service-content">

                  <strong>{service.title}</strong>

                  <small>{service.short}</small>

                </span>

                <span className="service-arrow">
                  ↗
                </span>

              </button>
            ))}

          </div>

        </section>

        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section id="work" className="section work-section">

          <div className="section-heading">

            <div>

              <div className="section-label">
                02 / SELECTED WORK
              </div>

              <h2>
                Projects
                <br />
                <span>with purpose.</span>
              </h2>

            </div>

            <p>
              Concept case studies showing how I think about
              structure, design, usability and business outcomes.
            </p>

          </div>

          <div className="projects-grid">

            {projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
                onClick={() => setActiveProject(project)}
              >

                {/* REALISTIC WEBSITE DESIGN */}
                <ProjectPreview project={project} />

                <div className="project-info">

                  <div className="project-topline">

                    <span>
                      {project.category}
                    </span>

                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        setActiveProject(project);
                      }}
                    >
                      ↗
                    </button>

                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tags">

                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                  <div className="project-view">
                    VIEW CASE STUDY
                    <span>↗</span>
                  </div>

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* =====================================================
            TOOLKIT
        ===================================================== */}

        <section className="section toolkit-section">

          <div className="toolkit-layout">

            <div className="toolkit-photo">

              <img
                src={profile}
                alt="DA Sultan"
              />

              <div className="photo-badge">

                <span>03</span>

                <div>
                  <strong>TECHNICAL</strong>
                  <small>THINKING</small>
                </div>

              </div>

              <div className="photo-orbit" />

            </div>

            <div className="toolkit-content">

              <div className="section-label">
                03 / THE TOOLKIT
              </div>

              <h2>
                Technical thinking.
                <br />
                <span>Creative execution.</span>
              </h2>

              <p>
                I use modern development tools alongside analytics
                and SEO platforms to build websites that are not
                only visually strong, but practical and measurable.
              </p>

              <div className="tech-grid">

                {technologies.map((tech) => (
                  <div className="tech-card" key={tech.name}>

                    <div className="tech-icon-wrap">

                      <img
                        src={tech.icon}
                        alt={tech.name}
                      />

                    </div>

                    <span>
                      {tech.name}
                    </span>

                    <i>↗</i>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section id="process" className="section process-section">

          <div className="section-heading process-heading">

            <div>

              <div className="section-label">
                04 / PROCESS
              </div>

              <h2>
                From idea
                <br />
                <span>to launch.</span>
              </h2>

            </div>

            <div className="process-intro">

              <div className="process-photo">

                <img
                  src={profile}
                  alt="DA Sultan"
                />

                <div className="process-photo-overlay">
                  <span>DA</span>
                  <strong>SULTAN</strong>
                </div>

              </div>

              <p>
                A simple process keeps projects focused,
                transparent and aligned with the result the
                business actually needs.
              </p>

            </div>

          </div>

          <div className="process-grid">

            {processSteps.map((step) => (
              <button
                className="process-card"
                key={step.number}
              >

                <span className="process-number">
                  {step.number}
                </span>

                <div className="process-card-arrow">
                  ↗
                </div>

                <div className="process-card-body">

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                </div>

              </button>
            ))}

          </div>

        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section id="about" className="section about-section">

          <div className="about-layout">

            <div className="about-title">

              <div className="section-label">
                05 / ABOUT
              </div>

              <h2>
                A developer
                <br />
                who
                <br />
                <span>thinks</span>
                <br />
                <span>commercially.</span>
              </h2>

            </div>

            <div className="about-content">

              <div className="about-profile">

                <div className="about-profile-image">

                  <img
                    src={profile}
                    alt="DA Sultan"
                  />

                </div>

                <div className="about-profile-meta">

                  <strong>DA SULTAN</strong>

                  <span>
                    WEB DEVELOPER · SEO
                  </span>

                </div>

              </div>

              <h3>
                I&apos;m interested in the space between technology,
                design and business.
              </h3>

              <p>
                That means I don&apos;t look at a website as just a
                collection of pages. I look at how someone discovers
                it, how quickly they understand the offer, why they
                should trust the business and what makes them take
                the next step.
              </p>

              <p>
                My goal is simple: build digital experiences that
                look professional, feel effortless and support
                measurable business growth.
              </p>

              <a href="#contact" className="about-link">
                Work with me <span>↗</span>
              </a>

            </div>

          </div>

        </section>
                {/* =====================================================
            GITHUB
        ===================================================== */}

        <section id="github" className="github-section">

          <div className="github-inner">

            <div className="github-heading">

              <div>

                <div className="section-label light">
                  06 / OPEN WORK
                </div>

                <h2>
                  Built in public.
                  <br />
                  <span>Explore the code.</span>
                </h2>

              </div>

              <a
                href="https://github.com/dasultanbd"
                target="_blank"
                rel="noreferrer"
                className="github-main-button"
              >
                View Full GitHub
                <span>↗</span>
              </a>

            </div>

            <div className="github-grid">

              {githubProjects.map((project) => (
                <article
                  className="github-card"
                  key={project.number}
                  onClick={() => setActiveGithub(project)}
                >

                  <div className="github-card-top">

                    <div className="github-mini-logo">

                      <img
                        src="https://cdn.simpleicons.org/github/FFFFFF"
                        alt="GitHub"
                      />

                    </div>

                    <span>
                      {project.number}
                    </span>

                  </div>

                  <div className="github-card-image">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <div className="github-image-overlay">
                      VIEW DETAILS ↗
                    </div>

                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="github-tags">

                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                  <div className="github-links">

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                    >
                      VIEW CODE ↗
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                    >
                      LIVE PROJECT ↗
                    </a>

                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section id="contact" className="section contact-section">

          <div className="contact-layout">

            <div className="contact-copy">

              <div className="section-label">
                07 / CONTACT
              </div>

              <h2>
                Have a project
                <br />
                <span>in mind?</span>
              </h2>

              <p>
                Tell me what you&apos;re building, what needs
                improving or where you want to go next.
              </p>

              <div className="contact-links">

                <a href={`mailto:${EMAIL}`}>
                  <span>Email</span>
                  {EMAIL}
                  <b>↗</b>
                </a>

                <a
                  href="https://www.linkedin.com/in/seo-specialists-bangladesh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>LinkedIn</span>
                  Connect with me
                  <b>↗</b>
                </a>

                <a
                  href="https://instagram.com/dasultan_seo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Instagram</span>
                  @dasultan_seo
                  <b>↗</b>
                </a>

                <a
                  href="https://wa.me/8801640027804"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>WhatsApp</span>
                  Message me
                  <b>↗</b>
                </a>

              </div>

            </div>

            <form
              className="contact-form"
              onSubmit={handleFormSubmit}
            >

              <div className="form-top">

                <span>
                  START A CONVERSATION
                </span>

                <div className="form-logo">

                  <img
                    src={logo}
                    alt="DA Sultan"
                  />

                </div>

              </div>

              <label>
                Your name

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInput}
                  placeholder="John Smith"
                  required
                />

              </label>

              <label>
                Email address

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  placeholder="john@company.com"
                  required
                />

              </label>

              <label>
                Tell me about your project

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInput}
                  placeholder="I need a new website for..."
                  rows="6"
                  required
                />

              </label>

              <button
                type="submit"
                className="form-submit"
                disabled={formStatus === "sending"}
              >

                {formStatus === "sending"
                  ? "SENDING..."
                  : "SEND MESSAGE"}

                <span>↗</span>

              </button>

              {formStatus === "success" && (
                <div className="form-message success">
                  Message sent successfully. I&apos;ll get back to
                  you soon.
                </div>
              )}

              {formStatus === "error" && (
                <div className="form-message error">
                  Something went wrong. Please try again.
                </div>
              )}

            </form>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-brand">

          <div className="footer-logo">

            <img
              src={logo}
              alt="DA Sultan"
            />

          </div>

          <div>

            <strong>DA Sultan</strong>

            <span>
              WEB · SEO · DIGITAL
            </span>

          </div>

        </div>

        <div className="footer-center">
          Building digital experiences with purpose.
        </div>

        <div className="footer-socials">

          <a
            href="https://github.com/dasultanbd"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/seo-specialists-bangladesh/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://instagram.com/dasultan_seo"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

        </div>

      </footer>
            {/* =====================================================
          SERVICE MODAL
      ===================================================== */}

      {activeService && (
        <div
          className="modal-backdrop"
          onClick={closeModal}
        >

          <div
            className="modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={closeModal}
            >
              ×
            </button>

            <span className="modal-number">
              {activeService.number}
            </span>

            <div className="modal-icon">
              {activeService.icon}
            </div>

            <h2>
              {activeService.title}
            </h2>

            <p className="modal-intro">
              {activeService.intro}
            </p>

            <div className="modal-columns">

              <div>

                <small>
                  HOW I APPROACH IT
                </small>

                <ul>

                  {activeService.steps.map((step) => (
                    <li key={step}>
                      <span>✓</span>
                      {step}
                    </li>
                  ))}

                </ul>

              </div>

              <div className="modal-growth">

                <small>
                  HOW IT CAN HELP GROW
                </small>

                <p>
                  {activeService.growth}
                </p>

              </div>

            </div>

            <a
              href="#contact"
              className="modal-button"
              onClick={closeModal}
            >
              Discuss this service
              <span>↗</span>
            </a>

          </div>

        </div>
      )}

      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      {activeProject && (
        <div
          className="modal-backdrop"
          onClick={closeModal}
        >

          <div
            className="modal project-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="modal-project-image">

              <ProjectPreview
                project={activeProject}
              />

            </div>

            <span className="modal-category">
              {activeProject.category}
            </span>

            <h2>
              {activeProject.title}
            </h2>

            <p className="modal-intro">
              {activeProject.detail}
            </p>

            <div className="modal-project-tags">

              {activeProject.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

            </div>

            <a
              href="#contact"
              className="modal-button"
              onClick={closeModal}
            >
              Build something similar
              <span>↗</span>
            </a>

          </div>

        </div>
      )}

      {/* =====================================================
          GITHUB MODAL
      ===================================================== */}

      {activeGithub && (
        <div
          className="modal-backdrop"
          onClick={closeModal}
        >

          <div
            className="modal github-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="github-modal-image">

              <img
                src={activeGithub.image}
                alt={activeGithub.title}
              />

            </div>

            <div className="github-modal-heading">

              <div className="github-mini-logo large">

                <img
                  src="https://cdn.simpleicons.org/github/FFFFFF"
                  alt="GitHub"
                />

              </div>

              <span>
                {activeGithub.number}
              </span>

            </div>

            <h2>
              {activeGithub.title}
            </h2>

            <p className="modal-intro">
              {activeGithub.description}
            </p>

            <div className="github-tags">

              {activeGithub.tags.map((tag) => (
                <span key={tag}>
                  {tag}
                </span>
              ))}

            </div>

            <div className="modal-buttons">

              <a
                href={activeGithub.code}
                target="_blank"
                rel="noreferrer"
                className="modal-button"
              >
                View Code
                <span>↗</span>
              </a>

              <a
                href={activeGithub.live}
                target="_blank"
                rel="noreferrer"
                className="modal-button secondary-modal-button"
              >
                Live Project
                <span>↗</span>
              </a>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;