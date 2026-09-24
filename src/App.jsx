import { useEffect, useState } from "react";
import "./App.css";

import profile from "./assets/profile.webp";

function DALogo({ className = "", size = 100, showCircle = true }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="DA Sultan logo"
    >
      {showCircle && (
        <circle
          cx="500"
          cy="500"
          r="482"
          fill="#ffffff"
          stroke="#111111"
          strokeWidth="4"
        />
      )}

      <g transform={showCircle ? "translate(0 0)" : "translate(0 -35)"}>
        <path
          d="M138 555 C210 520 278 463 342 394 C400 331 451 260 500 174 L500 655"
          fill="none"
          stroke="#050505"
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M165 540 C253 500 340 428 426 336"
          fill="none"
          stroke="#050505"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="M285 615 C356 554 425 505 500 468 C566 435 629 413 682 428 C709 436 716 454 698 473 C685 487 671 500 657 515"
          fill="none"
          stroke="#050505"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M500 468 C420 500 348 557 307 622 C272 677 274 727 311 761 C354 800 427 813 519 811 C663 808 805 768 916 706"
          fill="none"
          stroke="#050505"
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M312 761 C402 810 577 817 739 778 C814 760 876 731 925 695"
          fill="none"
          stroke="#050505"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="M500 174 L500 650"
          fill="none"
          stroke="#050505"
          strokeWidth="30"
          strokeLinecap="square"
        />
      </g>
    </svg>
  );
}

const EMAIL = "info@dasultan.online";

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
    title: "Plumbing-site-Concept",
    description:
      "My Client Website Concept for a plumbing business, built with React and Vite.",
    tags: ["React", "Vite", "CSS"],
    image: "/project-thumbnails/swiftflow-plumbing.png",
    code: "https://github.com/dasultanbd/Plumber-Client-site",
    live: "https://dasultanbd.github.io/Plumber-Client-site/",
  },
  {
    number: "02",
    title: "TravelGo Website Concept",
    description:
      "A travel website concept built with React and Vite, designed to showcase destinations and travel packages.",
    tags: ["React", "JavaScript", "CSS"],
    image: "/project-thumbnails/TravelGoWebsiteConcept.png",
    code: "https://github.com/dasultanbd/TravelGo",
    live: "https://travel-go-phi-teal.vercel.app/",
  },
  {
    number: "03",
    title: "SEO Web Builds",
    description:
      "Web development experiments combining technical implementation with practical SEO thinking.",
    tags: ["SEO", "React", "Analytics"],
    image: "/project-thumbnails/seo-build.png",
    code: "https://github.com/dasultanbd/da-digital-agency",
    live: "https://dasultanbd.github.io/da-digital-agency/",
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

function slugify(value) {
  return value.toLowerCase().trim().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function getRoute() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  if (pathname.startsWith("/services/")) return { type: "service", slug: pathname.replace("/services/", "") };
  if (pathname.startsWith("/projects/")) return { type: "project", slug: pathname.replace("/projects/", "") };
  return { type: "home", slug: "" };
}

function App() {

  const [route, setRoute] = useState(getRoute);

  const [activeService, setActiveService] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [activeGithub, setActiveGithub] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    setRoute(getRoute());
    setActiveService(null);
    setActiveProject(null);
    setActiveGithub(null);
    setIsWhatsappOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const currentService = route.type === "service"
    ? services.find((service) => slugify(service.title) === route.slug)
    : null;

  const currentProject = route.type === "project"
    ? projects.find((project) => slugify(project.title) === route.slug)
    : null;

  if (route.type === "service" && currentService) {
    return (
      <div className="site inner-site">
        <SiteNavbar />
        <ServicePage service={currentService} onNavigate={navigateTo} />
        <SiteFooter />
      </div>
    );
  }

  if (route.type === "project" && currentProject) {
    return (
      <div className="site inner-site">
        <SiteNavbar />
        <ProjectCaseStudy project={currentProject} onNavigate={navigateTo} />
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="site">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar-wrap">

        <nav className="navbar">

          <a href="#home" className="brand">

            <div className="brand-logo">
              <DALogo size={40} />
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

          <DALogo
            className="hero-logo-bg"
            size={760}
            showCircle={false}
            aria-hidden="true"
          />

          <div className="hero-grid">

            <div className="hero-copy">

              <div className="availability">
                <span className="availability-dot" />
                WEB DEVELOPER & SEO CONSULTANT
              </div>

              <h1>
                Websites that
                <br />
                <span>Rank on Google.</span>
                <br />
                Built to
                <br />
                <span>Perform.</span>
              </h1>

              <p>
                I&apos;m DA Sultan — a Web Developer &amp; SEO Consultant
                helping businesses build fast, modern websites and
                improve their Google rankings to get more enquiries and customers.
              </p>

              <div className="hero-highlights">

                <span>
                  <b>Web</b> Development
                </span>

                <span>
                  <b>Website</b> Design
                </span>

                <span>
                  <b>Local</b> SEO
                </span>

              </div>

              <div className="hero-buttons">

                <a
                  href="https://wa.me/8801640027804?text=Hi%20DA%20Sultan%2C%20I%27m%20interested%20in%20your%20website%20and%20SEO%20services."
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button whatsapp-button"
                >
                  <span className="whatsapp-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.3Z" fill="currentColor"/>
                      <path d="M8.5 6.8c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.5 5.4 4.7 2.7 1.1 3.2.9 3.8.8.6-.1 1.9-.8 2.1-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.7-.4-.4-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.4-.8 1-.9 1.2-.2.2-.3.2-.7.1-.4-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.4 0-.5.1-.7.2-.2.4-.5.5-.7.2-.2.2-.4.3-.6.1-.2 0-.5-.1-.7l-.5-1.2Z" fill="white"/>
                    </svg>
                  </span>
                  WhatsApp Me <span>↗</span>
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

              <div className="hero-experience-badge">
                <span>✦</span>
                <div>
                  <strong>2+</strong>
                  <small>Years Experience</small>
                </div>
              </div>

              <div className="hero-image-frame">

                <img
                  src={profile}
                  alt="DA Sultan - Web Developer and SEO Consultant"
                  width="470"
                  height="470"
                  fetchPriority="high"
                  decoding="async"
                />

              </div>

              <div className="hero-floating floating-digital">

                <span className="floating-icon">
                  ✦
                </span>

                <div>
                  <strong>100+</strong>
                  <small>SEO Projects</small>
                </div>

              </div>

              <div className="hero-floating floating-build">

                <span className="floating-number">
                  50+
                </span>

                <div>
                  <strong>50+ Websites</strong>
                  <small>Built &amp; Delivered</small>
                </div>

              </div>

              <div className="hero-small-mark" aria-hidden="true">
                <DALogo
                  size={86}
                  showCircle={false}
                />
              </div>

              <div className="hero-availability-chip">
                <span className="availability-dot" />
                Available for new projects
              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            TRUST + TECHNOLOGY STRIP
        ===================================================== */}

        <section className="trust-strip section" aria-label="Experience and technologies">

          <div className="trust-strip-heading">
            <span className="trust-line" />
            <span>BUILT WITH THE TOOLS I USE</span>
            <span className="trust-line" />
          </div>

          <div className="trust-panel">

            <div className="trust-metrics">

              <div className="trust-metric">
                <strong>2+</strong>
                <span>Years Experience</span>
              </div>

              <div className="trust-metric">
                <strong>50+</strong>
                <span>Websites Built</span>
              </div>

              <div className="trust-metric">
                <strong>100+</strong>
                <span>SEO Projects</span>
              </div>

              <div className="trust-metric">
                <strong>8+</strong>
                <span>Core Tools</span>
              </div>

            </div>

            <div className="trust-divider" />

            <div className="tech-strip">

              {technologies.map((technology) => (
                <div className="tech-strip-item" key={technology.name}>
                  <div className="tech-strip-icon">
                    <img
                      src={technology.icon}
                      alt={`${technology.name} logo`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <span>{technology.name}</span>
                </div>
              ))}

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
                loading="lazy"
                decoding="async"
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
                      alt={`${project.title} project preview`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
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
                  href="https://www.linkedin.com/in/build-business-dasultan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>LinkedIn</span>
                  Connect with me
                  <b>↗</b>
                </a>

                <a
                  href="https://instagram.com/dasultan.online"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Instagram</span>
                  @dasultan.online
                  <b>↗</b>
                </a>

                <a
                  href="https://wa.me/8801640027804?text=Hi%20DA%20Sultan%2C%20I%27m%20interested%20in%20your%20website%20and%20SEO%20services."
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
                  <DALogo size={48} />
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
          WHATSAPP CHAT WIDGET
          Closed by default: only the fixed WhatsApp logo + red
          notification dot are visible. Clicking the logo opens
          the chat panel. The widget stays fixed while scrolling.
      ===================================================== */}

      <div className={`whatsapp-widget ${isWhatsappOpen ? "is-open" : ""}`}>

        {isWhatsappOpen && (
          <div className="whatsapp-chat-card" role="dialog" aria-label="WhatsApp contact">

            <div className="whatsapp-chat-header">
              <div className="whatsapp-chat-avatar-wrap">
                <img
                  src={profile}
                  alt="DA Sultan"
                  className="whatsapp-chat-avatar"
                  loading="lazy"
                  decoding="async"
                />
                <span className="whatsapp-online-dot" />
              </div>

              <div className="whatsapp-chat-person">
                <strong>DA Sultan</strong>
                <span>Web Developer &amp; SEO Consultant</span>
                <small>● Online</small>
              </div>

              <button
                type="button"
                className="whatsapp-chat-close"
                aria-label="Close WhatsApp chat"
                onClick={() => setIsWhatsappOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="whatsapp-chat-body">
              <div className="whatsapp-message-bubble">
                <strong>Hi! 👋</strong>
                <p>
                  Need a website, redesign or SEO help?
                  Let&apos;s talk about your project.
                </p>
                <time>Just now</time>
              </div>
            </div>

            <div className="whatsapp-chat-footer">
              <a
                href="https://wa.me/8801640027804?text=Hi%20DA%20Sultan%2C%20I%27d%20like%20to%20discuss%20a%20website%20or%20SEO%20project."
                target="_blank"
                rel="noreferrer"
                className="whatsapp-chat-button"
              >
                <span className="whatsapp-chat-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.3Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.5 6.8c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.5 5.4 4.7 2.7 1.1 3.2.9 3.8.8.6-.1 1.9-.8 2.1-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.7-.4-.4-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.4-.8 1-.9 1.2-.2.2-.3.2-.7.1-.4-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.4 0-.5.1-.7.2-.2.4-.5.5-.7.2-.2.2-.4.2-.6.1-.2 0-.5-.1-.7l-.5-1.2Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Click to start chat
              </a>
            </div>

          </div>
        )}

        <button
          type="button"
          className="whatsapp-chat-fab"
          aria-label={isWhatsappOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          aria-expanded={isWhatsappOpen}
          onClick={() => setIsWhatsappOpen((open) => !open)}
        >
          <span className="whatsapp-chat-fab-dot" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.3Z"
              fill="currentColor"
            />
            <path
              d="M8.5 6.8c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.5 5.4 4.7 2.7 1.1 3.2.9 3.8.8.6-.1 1.9-.8 2.1-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.7-.4-.4-.2-1.9-.9-2.2-1-.3-.1-.5.2-.7.2-.4.2-.8 1-.9 1.2-.2.2-.3.2-.7.1-.4-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.4 0-.5.1-.7.2-.2.4-.5.5-.7.2-.2.2-.4.2-.6.1-.2 0-.5-.1-.7l-.5-1.2Z"
              fill="white"
            />
          </svg>
        </button>

      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-brand">

          <div className="footer-logo">
            <DALogo size={38} />
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
            href="https://www.linkedin.com/in/build-business-dasultan/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://instagram.com/dasultan.online"
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

            <div className="modal-button-row">
              <a href="#contact" className="modal-button" onClick={closeModal}>
                Discuss this service <span>↗</span>
              </a>
              <a
                href={`/services/${slugify(activeService.title)}`}
                className="modal-button secondary-modal-button"
                onClick={(event) => {
                  event.preventDefault();
                  closeModal();
                  navigateTo(`/services/${slugify(activeService.title)}`);
                }}
              >
                Full service page <span>→</span>
              </a>
            </div>

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

            <div className="modal-button-row">
              <a href="#contact" className="modal-button" onClick={closeModal}>
                Build something similar <span>↗</span>
              </a>
              <a
                href={`/projects/${slugify(activeProject.title)}`}
                className="modal-button secondary-modal-button"
                onClick={(event) => {
                  event.preventDefault();
                  closeModal();
                  navigateTo(`/projects/${slugify(activeProject.title)}`);
                }}
              >
                Full case study <span>→</span>
              </a>
            </div>

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
                alt={`${activeGithub.title} project preview`}
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


function SiteNavbar() {
  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <a href="/" className="brand">
          <div className="brand-logo"><DALogo size={40} /></div>
          <div className="brand-text"><strong>DA Sultan</strong><span>WEB · SEO · DIGITAL</span></div>
        </a>
        <div className="nav-links">
          <a href="/#home">Home</a><a href="/#services">Services</a><a href="/#growth">Growth</a><a href="/#work">Work</a><a href="/#github">GitHub</a><a href="/#process">Process</a><a href="/#about">About</a><a href="/#contact">Contact</a>
        </div>
        <a href="/#contact" className="nav-cta">Let&apos;s Talk <span>↗</span></a>
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-brand"><div className="footer-logo"><DALogo size={38} /></div><div><strong>DA Sultan</strong><span>WEB · SEO · DIGITAL</span></div></div>
      <div className="footer-center">Building digital experiences with purpose.</div>
      <div className="footer-socials"><a href="https://github.com/dasultanbd" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/build-business-dasultan/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://instagram.com/dasultan.online" target="_blank" rel="noreferrer">Instagram</a></div>
    </footer>
  );
}

function ServicePage({ service, onNavigate }) {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <div className="inner-page-container">
          <a className="inner-back" href="/">← Back to home</a>
          <div className="inner-kicker">SERVICE {service.number}</div>
          <h1>{service.title}<br /><span>built around your goals.</span></h1>
          <p>{service.intro}</p>
          <div className="inner-actions"><a href="/#contact" className="inner-primary">Discuss this service ↗</a><a href="/#work" className="inner-secondary">View my work →</a></div>
        </div>
      </section>
      <section className="inner-section inner-white">
        <div className="inner-page-container">
          <div className="inner-split">
            <div><div className="section-label">WHAT I DO</div><h2>A focused service.<br /><span>Not unnecessary extras.</span></h2></div>
            <p>{service.short}</p>
          </div>
          <div className="inner-service-features">
            {service.steps.map((step, index) => <article key={step} className="inner-feature-card"><span>0{index + 1}</span><h3>{step}</h3><p>A practical part of the {service.title.toLowerCase()} process, planned around usability, clarity and the business objective.</p></article>)}
          </div>
        </div>
      </section>
      <section className="inner-section inner-light">
        <div className="inner-page-container"><div className="section-label">BUSINESS IMPACT</div><div className="inner-impact"><h2>Why this matters<br /><span>for the business.</span></h2><p>{service.growth}</p></div></div>
      </section>
      <section className="inner-cta"><div className="inner-page-container"><div className="section-label light">READY TO START?</div><h2>Let&apos;s turn the idea<br /><span>into something real.</span></h2><div className="inner-actions"><a href="/#contact" className="inner-primary">Start a conversation ↗</a><button className="inner-secondary inner-button" onClick={() => onNavigate("/")}>Back to portfolio →</button></div></div></section>
    </main>
  );
}

function ProjectCaseStudy({ project, onNavigate }) {
  return (
    <main className="inner-page">
      <section className="inner-hero project-hero">
        <div className="inner-page-container">
          <a className="inner-back" href="/">← Back to work</a>
          <div className="inner-kicker">CASE STUDY · {project.category}</div>
          <h1>{project.title}<br /><span>project case study.</span></h1>
          <p>{project.description}</p>
        </div>
      </section>
      <section className="inner-section inner-white">
        <div className="inner-page-container">
          <div className="case-preview-wrap"><ProjectPreview project={project} /></div>
          <div className="case-study-grid">
            <article><div className="section-label">THE CONCEPT</div><h2>Designed with a <span>clear purpose.</span></h2><p>{project.detail}</p></article>
            <article><div className="section-label">PROJECT FOCUS</div><div className="case-tags-large">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><p>The page structure, visual hierarchy and calls-to-action are designed around the audience and the main action the business wants visitors to take.</p></article>
          </div>
        </div>
      </section>
      <section className="inner-section inner-light"><div className="inner-page-container"><div className="section-label">BREAKDOWN</div><div className="case-breakdown-grid"><div><span>01</span><h3>Structure</h3><p>Clear sections help visitors understand the offer quickly.</p></div><div><span>02</span><h3>Experience</h3><p>Responsive interactions keep the experience usable across devices.</p></div><div><span>03</span><h3>Conversion</h3><p>Important actions are placed where users naturally need them.</p></div><div><span>04</span><h3>SEO thinking</h3><p>Content and page structure can be developed with search visibility in mind.</p></div></div></div></section>
      <section className="inner-cta"><div className="inner-page-container"><div className="section-label light">LIKE THIS DIRECTION?</div><h2>Build a website<br /><span>for your business.</span></h2><div className="inner-actions"><a href="/#contact" className="inner-primary">Start a conversation ↗</a><button className="inner-secondary inner-button" onClick={() => onNavigate("/")}>View more projects →</button></div></div></section>
    </main>
  );
}

export default App;