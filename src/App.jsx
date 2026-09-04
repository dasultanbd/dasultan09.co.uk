import React from "react";
import profile from "./assets/profile.jpg";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const services = [
    {
      number: "01",
      icon: "WEB",
      title: "Business Websites",
      description:
        "Professional websites that explain what your business does, build trust and make it easy for customers to contact you.",
      points: [
        "Custom responsive design",
        "Clear page structure",
        "Mobile-first experience",
        "Conversion-focused sections",
      ],
    },
    {
      number: "02",
      icon: "SEO",
      title: "Search Engine Optimisation",
      description:
        "Practical SEO designed to help your website become easier for search engines to understand and easier for customers to discover.",
      points: [
        "Keyword research",
        "On-page optimisation",
        "Technical SEO",
        "Search Console setup",
      ],
    },
    {
      number: "03",
      icon: "↗",
      title: "Website Redesign",
      description:
        "Turn an outdated website into a cleaner, faster and more professional digital experience.",
      points: [
        "Modern visual design",
        "UX improvements",
        "Content structure",
        "Stronger calls-to-action",
      ],
    },
    {
      number: "04",
      icon: "CODE",
      title: "Front-End Development",
      description:
        "Modern front-end development using clean, responsive and maintainable technologies.",
      points: [
        "React development",
        "JavaScript",
        "Responsive CSS",
        "Performance-focused code",
      ],
    },
    {
      number: "05",
      icon: "MAP",
      title: "Local SEO",
      description:
        "Help local businesses build a stronger presence when potential customers search for nearby services.",
      points: [
        "Local keyword research",
        "Google Business support",
        "Location pages",
        "Local SEO structure",
      ],
    },
    {
      number: "06",
      icon: "FIX",
      title: "Website Improvement",
      description:
        "Identify design, usability and technical problems that may be stopping your website from performing at its best.",
      points: [
        "UX review",
        "Technical checks",
        "Mobile improvements",
        "Performance recommendations",
      ],
    },
  ];

  const projects = [
    {
      number: "01",
      category: "WEB DEVELOPMENT",
      title: "Business Website",
      description:
        "A professional website concept focused on clear communication, responsive design and customer enquiries.",
      tags: ["React", "Responsive", "UI/UX"],
      type: "business",
    },
    {
      number: "02",
      category: "SEO",
      title: "SEO Strategy",
      description:
        "A structured SEO workflow covering technical checks, keywords, on-page optimisation and search visibility.",
      tags: ["SEO", "Technical", "Analytics"],
      type: "seo",
    },
    {
      number: "03",
      category: "FRONT-END",
      title: "Modern Web Experience",
      description:
        "A modern front-end project focused on clean interfaces, responsive layouts and smooth user experience.",
      tags: ["React", "JavaScript", "CSS"],
      type: "frontend",
    },
  ];

  const skills = [
    {
      name: "React",
      short: "⚛",
    },
    {
      name: "JavaScript",
      short: "JS",
    },
    {
      name: "HTML5",
      short: "</>",
    },
    {
      name: "CSS3",
      short: "#",
    },
    {
      name: "SEO",
      short: "⌕",
    },
    {
      name: "Google Analytics",
      short: "GA",
    },
    {
      name: "Search Console",
      short: "G",
    },
    {
      name: "Responsive Design",
      short: "▣",
    },
    {
      name: "Keyword Research",
      short: "⌕",
    },
    {
      name: "Technical SEO",
      short: "⚙",
    },
    {
      name: "Git & GitHub",
      short: "◆",
    },
    {
      name: "Vite",
      short: "V",
    },
  ];

  const faqs = [
    {
      question: "What type of businesses do you work with?",
      answer:
        "I work particularly well with small businesses, local businesses, startups and professionals who need a stronger online presence.",
    },
    {
      question: "Can you build a website from scratch?",
      answer:
        "Yes. I can take a project from initial structure and design through front-end development, responsive testing and launch preparation.",
    },
    {
      question: "Can you improve an existing website?",
      answer:
        "Yes. Existing websites can be reviewed for design, usability, mobile responsiveness, technical issues and SEO opportunities.",
    },
    {
      question: "Do you offer SEO separately?",
      answer:
        "Yes. SEO can be provided as a separate service or combined with website development.",
    },
    {
      question: "How do we start a project?",
      answer:
        "Send me a short description of your business, your current website if you have one, and what you want to improve. We can then discuss the best approach.",
    },
  ];

  return (
    <div className="site">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <div className="nav-container">

          <a href="#home" className="brand">

            <div className="brand-mark">
              <span>DA</span>
            </div>

            <div className="brand-text">
              <strong>DA</strong>
              <span>Portfolio</span>
            </div>

          </a>

          <nav className="nav-menu">

            <a href="#home">Home</a>
            <a href="#growth">Growth</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>

          </nav>

          <a href="#contact" className="nav-button">
            Let's Talk <span>→</span>
          </a>

        </div>

      </header>


      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section id="home" className="hero">

          <div className="hero-grid">

            <div className="hero-content">

              <div className="availability">

                <span className="availability-dot"></span>

                AVAILABLE FOR NEW PROJECTS

              </div>

              <p className="eyebrow">
                WEB DEVELOPMENT · SEO · DIGITAL GROWTH
              </p>

              <h1>
                I build
                <br />
                <span>websites</span>
                <br />
                that grow
                <br />
                businesses.
              </h1>

              <p className="hero-description">
                Professional websites and practical SEO for businesses
                that want a stronger, clearer and more effective online
                presence.
              </p>

              <div className="hero-buttons">

                <a href="#contact" className="primary-button">
                  Start a Project
                  <span>↗</span>
                </a>

                <a href="#work" className="secondary-button">
                  Explore My Work
                </a>

              </div>

              <div className="hero-points">

                <span>
                  <b>✓</b> Responsive
                </span>

                <span>
                  <b>✓</b> SEO-ready
                </span>

                <span>
                  <b>✓</b> Business-focused
                </span>

              </div>

            </div>


            {/* =================================================
                HERO IMAGE
            ================================================= */}

            <div className="hero-image-area">

              <div className="hero-orbit orbit-one"></div>
              <div className="hero-orbit orbit-two"></div>

              <div className="hero-circle">

                <div className="hero-circle-inner">

                  <img
                    src={profile}
                    alt="DA Sultan"
                    className="hero-profile"
                  />

                </div>

              </div>

              <div className="image-label label-top">

                <span className="label-icon">SEO</span>

                <div>
                  <strong>Search</strong>
                  <small>Visibility</small>
                </div>

              </div>


              <div className="image-label label-bottom">

                <span className="label-icon web-icon">
                  WEB
                </span>

                <div>
                  <strong>Websites</strong>
                  <small>Built to perform</small>
                </div>

              </div>


              <div className="image-name">

                <span>DA SULTAN</span>

                <strong>
                  SEO Consultant
                  <br />
                  & Front-End Developer
                </strong>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MINI INTRO
        ===================================================== */}

        <section className="intro-strip">

          <div className="intro-container">

            <div className="intro-number">
              01
            </div>

            <div className="intro-title">
              DIGITAL
              <br />
              <span>PARTNER</span>
            </div>

            <div className="intro-description">
              I combine web development, SEO and user experience
              to create digital experiences that make sense for
              both businesses and their customers.
            </div>

            <a href="#about" className="intro-link">
              More about me
              <span>→</span>
            </a>

          </div>

        </section>


        {/* =====================================================
            BUSINESS GROWTH
        ===================================================== */}

        <section id="growth" className="growth-section">

          <div className="container">

            <div className="growth-heading">

              <div>

                <span className="section-number">
                  01 / BUSINESS GROWTH
                </span>

                <h2>
                  More visibility.
                  <br />
                  <span>More customers.</span>
                  <br />
                  More growth.
                </h2>

              </div>

              <p>
                SEO helps the right people find your business.
                A better website helps turn that attention into
                enquiries, customers and opportunities.
              </p>

            </div>


            <div className="growth-flow">

              <div className="growth-step">

                <div className="growth-icon">
                  ⌕
                </div>

                <span>01</span>

                <strong>SEO</strong>

                <small>
                  Get discovered
                </small>

              </div>


              <div className="growth-arrow">
                →
              </div>


              <div className="growth-step">

                <div className="growth-icon">
                  ◉
                </div>

                <span>02</span>

                <strong>VISIBILITY</strong>

                <small>
                  Reach the right people
                </small>

              </div>


              <div className="growth-arrow">
                →
              </div>


              <div className="growth-step">

                <div className="growth-icon">
                  ✦
                </div>

                <span>03</span>

                <strong>WEBSITE</strong>

                <small>
                  Build trust
                </small>

              </div>


              <div className="growth-arrow">
                →
              </div>


              <div className="growth-step">

                <div className="growth-icon">
                  ↗
                </div>

                <span>04</span>

                <strong>ENQUIRIES</strong>

                <small>
                  Turn visits into action
                </small>

              </div>


              <div className="growth-arrow">
                →
              </div>


              <div className="growth-step growth-result">

                <div className="growth-icon">
                  £
                </div>

                <span>05</span>

                <strong>SALES</strong>

                <small>
                  More opportunities
                </small>

              </div>

            </div>


            <div className="growth-example">

              <div className="growth-example-copy">

                <span className="growth-example-label">
                  SIMPLE EXAMPLE
                </span>

                <h3>
                  Small improvements can
                  <br />
                  make a big difference.
                </h3>

                <p>
                  Imagine a business receiving 1,000 relevant visitors
                  every month.
                </p>

              </div>


              <div className="growth-comparison">

                <div className="growth-column">

                  <span className="growth-column-label">
                    BEFORE
                  </span>

                  <div className="growth-stat">

                    <strong>
                      1,000
                    </strong>

                    <small>
                      monthly visitors
                    </small>

                  </div>

                  <div className="growth-stat">

                    <strong>
                      2%
                    </strong>

                    <small>
                      enquiry rate
                    </small>

                  </div>

                  <div className="growth-total">

                    <small>
                      Potential enquiries
                    </small>

                    <strong>
                      20
                    </strong>

                  </div>

                </div>


                <div className="growth-divider">
                  →
                </div>


                <div className="growth-column growth-column-after">

                  <span className="growth-column-label">
                    WITH BETTER SEO + WEBSITE
                  </span>

                  <div className="growth-stat">

                    <strong>
                      2,000
                    </strong>

                    <small>
                      monthly visitors
                    </small>

                  </div>

                  <div className="growth-stat">

                    <strong>
                      4%
                    </strong>

                    <small>
                      enquiry rate
                    </small>

                  </div>

                  <div className="growth-total">

                    <small>
                      Potential enquiries
                    </small>

                    <strong>
                      80
                    </strong>

                  </div>

                </div>

              </div>

            </div>


            <div className="growth-note">

              <span>
                ✦
              </span>

              <p>
                SEO brings potential customers to the door.
                A strong website gives them a reason to walk in.
              </p>

            </div>


            <div className="growth-disclaimer">
              Illustrative example only — actual results vary by
              business, market, traffic quality and conversion rate.
            </div>

          </div>

        </section>


        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section id="services" className="services-section">

          <div className="container">

            <div className="services-heading">

              <div>

                <span className="section-number">
                  02 / SERVICES
                </span>

                <h2>
                  What I can
                  <br />
                  <span>do for you.</span>
                </h2>

              </div>

              <div className="services-heading-right">

                <p>
                  Not every business needs the same solution.
                  Choose one service or combine several to create
                  a stronger digital presence.
                </p>

                <a href="#contact">
                  Discuss your project
                  <span>↗</span>
                </a>

              </div>

            </div>


            <div className="services-list">

              {services.map((service) => (

                <article
                  className="service-row"
                  key={service.number}
                >

                  <div className="service-number">
                    {service.number}
                  </div>

                  <div className="service-icon-large">
                    {service.icon}
                  </div>

                  <div className="service-main">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>

                  </div>

                  <div className="service-points">

                    {service.points.map((point) => (

                      <span key={point}>
                        <b>+</b>
                        {point}
                      </span>

                    ))}

                  </div>

                  <a
                    href="#contact"
                    className="service-arrow"
                    aria-label={`Discuss ${service.title}`}
                  >
                    ↗
                  </a>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            WORK
        ===================================================== */}

        <section id="work" className="work-section">

          <div className="container">

            <div className="work-header">

              <div>

                <span className="section-number">
                  03 / SELECTED WORK
                </span>

                <h2>
                  Built with
                  <br />
                  <span>purpose.</span>
                </h2>

              </div>

              <p>
                A selection of web development and SEO work.
                This section can be updated with your live client
                projects and real project screenshots as your portfolio grows.
              </p>

            </div>


            <div className="projects">

              {projects.map((project) => (

                <article
                  className="project-card"
                  key={project.number}
                >

                  <div className={`project-visual ${project.type}`}>

                    <div className="project-browser">

                      <div className="browser-bar">

                        <span></span>
                        <span></span>
                        <span></span>

                      </div>

                      <div className="browser-content">

                        {project.type === "business" && (
                          <>
                            <small>
                              BUSINESS / DIGITAL
                            </small>

                            <h4>
                              Your business
                              <br />
                              deserves a
                              <em> better web.</em>
                            </h4>

                            <div className="browser-button">
                              Explore →
                            </div>
                          </>
                        )}


                        {project.type === "seo" && (
                          <>
                            <div className="seo-score">
                              <strong>SEO</strong>
                              <b>+</b>
                            </div>

                            <div className="seo-lines">

                              <i></i>
                              <i></i>
                              <i></i>
                              <i></i>

                            </div>

                            <div className="seo-chart">

                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>

                            </div>
                          </>
                        )}


                        {project.type === "frontend" && (
                          <>
                            <div className="code-title">
                              &lt;build
                              <span>digital</span>
                              /&gt;
                            </div>

                            <div className="code-lines">

                              <i></i>
                              <i></i>
                              <i></i>
                              <i></i>
                              <i></i>

                            </div>

                            <div className="code-circle">
                              DA
                            </div>
                          </>
                        )}

                      </div>

                    </div>


                    <div className="project-number">
                      {project.number}
                    </div>

                  </div>


                  <div className="project-details">

                    <div className="project-category">
                      {project.category}
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

                    <a href="#contact">
                      Discuss a similar project
                      <span>→</span>
                    </a>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            REAL IMAGE / PERSONAL BRAND
        ===================================================== */}

        <section className="personal-section">

          <div className="container">

            <div className="personal-card">

              <div className="personal-image">

                <img
                  src={profile}
                  alt="DA Sultan"
                />

                <div className="personal-image-tag">
                  <span>01</span>
                  PERSONAL
                  <br />
                  BRAND
                </div>

              </div>


              <div className="personal-content">

                <span className="section-number">
                  04 / THE PERSON BEHIND THE WORK
                </span>

                <h2>
                  Your website is
                  <br />
                  <span>your first impression.</span>
                </h2>

                <p>
                  That's why I focus on more than simply writing
                  code. I think about how a visitor sees your
                  business, understands your offer and decides
                  whether to get in touch.
                </p>

                <div className="personal-stats">

                  <div>
                    <strong>WEB</strong>
                    <span>Development</span>
                  </div>

                  <div>
                    <strong>SEO</strong>
                    <span>Visibility</span>
                  </div>

                  <div>
                    <strong>UX</strong>
                    <span>Experience</span>
                  </div>

                </div>

                <a
                  href="#contact"
                  className="dark-button"
                >
                  Work with me
                  <span>↗</span>
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section id="process" className="process-section">

          <div className="container">

            <div className="process-top">

              <span className="section-number">
                05 / PROCESS
              </span>

              <h2>
                From idea
                <br />
                <span>to online.</span>
              </h2>

              <p>
                A straightforward process designed to keep your
                project clear, organised and moving forward.
              </p>

            </div>


            <div className="process-timeline">

              <div className="process-line"></div>


              <div className="process-step">

                <div className="step-marker">
                  01
                </div>

                <div className="step-content">

                  <span>START HERE</span>

                  <h3>
                    Discover
                  </h3>

                  <p>
                    We start by understanding your business,
                    customers, current website and goals.
                  </p>

                </div>

              </div>


              <div className="process-step">

                <div className="step-marker">
                  02
                </div>

                <div className="step-content">

                  <span>PLAN</span>

                  <h3>
                    Strategise
                  </h3>

                  <p>
                    I create the page structure, content direction,
                    SEO priorities and project plan.
                  </p>

                </div>

              </div>


              <div className="process-step active">

                <div className="step-marker">
                  03
                </div>

                <div className="step-content">

                  <span>CREATE</span>

                  <h3>
                    Build
                  </h3>

                  <p>
                    The website is designed and developed with
                    responsive layouts and clean front-end code.
                  </p>

                </div>

              </div>


              <div className="process-step">

                <div className="step-marker">
                  04
                </div>

                <div className="step-content">

                  <span>DELIVER</span>

                  <h3>
                    Launch
                  </h3>

                  <p>
                    Everything is tested across devices before
                    the final launch and handover.
                  </p>

                </div>

              </div>


              <div className="process-step">

                <div className="step-marker">
                  05
                </div>

                <div className="step-content">

                  <span>GROW</span>

                  <h3>
                    Improve
                  </h3>

                  <p>
                    Continue improving your website, SEO and
                    customer experience as your business grows.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY WORK WITH ME
        ===================================================== */}

        <section className="why-section">

          <div className="container">

            <div className="why-layout">

              <div className="why-intro">

                <span className="section-number">
                  06 / WHY ME
                </span>

                <h2>
                  Not just
                  <br />
                  <span>another developer.</span>
                </h2>

                <p>
                  I care about what happens after someone
                  lands on your website.
                </p>

              </div>


              <div className="why-cards">

                <div className="why-card">

                  <div className="why-card-top">
                    <span>01</span>
                    <b>↗</b>
                  </div>

                  <h3>
                    Business thinking
                  </h3>

                  <p>
                    Your website should support your business,
                    not just look attractive.
                  </p>

                </div>


                <div className="why-card">

                  <div className="why-card-top">
                    <span>02</span>
                    <b>⌕</b>
                  </div>

                  <h3>
                    SEO from the start
                  </h3>

                  <p>
                    Search visibility is considered during
                    structure and development.
                  </p>

                </div>


                <div className="why-card">

                  <div className="why-card-top">
                    <span>03</span>
                    <b>◎</b>
                  </div>

                  <h3>
                    Human experience
                  </h3>

                  <p>
                    Clear navigation and useful content help
                    visitors understand what you offer.
                  </p>

                </div>


                <div className="why-card">

                  <div className="why-card-top">
                    <span>04</span>
                    <b>∞</b>
                  </div>

                  <h3>
                    Long-term mindset
                  </h3>

                  <p>
                    A website is a starting point. It can keep
                    improving as your business evolves.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section id="about" className="about-section">

          <div className="container">

            <div className="about-layout">

              <div className="about-image-wrap">

                <div className="about-image">

                  <img
                    src={profile}
                    alt="DA Sultan"
                  />

                </div>

                <div className="about-side-text">

                  <span>BASED IN</span>

                  <strong>
                    Bangladesh
                  </strong>

                  <small>
                    Working with ambitious businesses
                  </small>

                </div>

              </div>


              <div className="about-content">

                <span className="section-number">
                  07 / ABOUT
                </span>

                <h2>
                  I make digital
                  <br />
                  <span>feel simpler.</span>
                </h2>

                <p className="about-lead">
                  I'm DA Sultan — an SEO Consultant and
                  Front-End Developer focused on creating
                  professional digital experiences.
                </p>

                <p>
                  I combine development, search optimisation
                  and user experience to help businesses present
                  themselves more professionally online.
                </p>

                <div className="about-quote">

                  <span>“</span>

                  <p>
                    Good digital work should be clear,
                    useful and built around the people
                    who actually use it.
                  </p>

                </div>

                <div className="about-services">

                  <span>WEB DEVELOPMENT</span>
                  <span>SEO</span>
                  <span>UI / UX</span>
                  <span>RESPONSIVE DESIGN</span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SKILLS
        ===================================================== */}

        <section className="skills-section">

          <div className="container">

            <div className="skills-heading">

              <span className="section-number">
                08 / TOOLKIT
              </span>

              <h2>
                Tools behind
                <br />
                <span>the work.</span>
              </h2>

              <p>
                A combination of development and SEO tools
                I use to build, analyse and improve websites.
              </p>

            </div>


            <div className="skills-marquee">

              <div className="skills-track">

                {skills.map((skill) => (

                  <div
                    className="skill-card"
                    key={skill.name}
                  >

                    <div className="skill-symbol">
                      {skill.short}
                    </div>

                    <div>

                      <strong>
                        {skill.name}
                      </strong>

                      <span>
                        DIGITAL TOOL
                      </span>

                    </div>

                    <span className="skill-arrow">
                      ↗
                    </span>

                  </div>

                ))}

              </div>

            </div>


            <div className="skills-bottom">

              <span>
                FRONT-END
              </span>

              <span>
                +
              </span>

              <span>
                SEO
              </span>

              <span>
                +
              </span>

              <span>
                USER EXPERIENCE
              </span>

              <span>
                +
              </span>

              <span>
                BUSINESS
              </span>

            </div>

          </div>

        </section>


        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className="faq-section">

          <div className="container">

            <div className="faq-heading">

              <span className="section-number">
                09 / FAQ
              </span>

              <h2>
                Before we
                <br />
                <span>get started.</span>
              </h2>

            </div>


            <div className="faq-list">

              {faqs.map((faq, index) => (

                <details
                  className="faq-item"
                  key={faq.question}
                  open={index === 0}
                >

                  <summary>

                    <span className="faq-number">
                      0{index + 1}
                    </span>

                    <strong>
                      {faq.question}
                    </strong>

                    <b>
                      +
                    </b>

                  </summary>

                  <div className="faq-answer">

                    <p>
                      {faq.answer}
                    </p>

                  </div>

                </details>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section id="contact" className="contact-section">

          <div className="contact-background-text">
            LET'S TALK
          </div>

          <div className="container">

            <div className="contact-content">

              <span className="contact-label">
                HAVE A PROJECT IN MIND?
              </span>

              <h2>
                Let's make your
                <br />
                <span>next move.</span>
              </h2>

              <p>
                Tell me what you're working on, what isn't
                working and what you want to achieve.
                Let's find the right solution.
              </p>

              <div className="contact-buttons">

                <a
                  href="mailto:dasultanbusiess@gmail.com"
                  className="contact-main-button"
                >
                  Start a Conversation
                  <span>↗</span>
                </a>

                <a
                  href="https://wa.me/8801640027804"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-whatsapp"
                >
                  WhatsApp
                  <span>↗</span>
                </a>

              </div>

            </div>


            <div className="contact-footer">

              <div className="contact-email-box">

                <span>
                  EMAIL
                </span>

                <a href="mailto:dasultanbusiess@gmail.com">
                  dasultanbusiess@gmail.com
                </a>

              </div>


              <div className="social-links">

                <a
                  href="https://www.linkedin.com/in/seo-specialists-bangladesh/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://instagram.com/dasultan_seo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram ↗
                </a>

                <a
                  href="https://github.com/dasultanbd"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="container">

          <div className="footer-top">

            <a href="#home" className="footer-brand">

              <div className="footer-brand-mark">
                DA
              </div>

              <div>

                <strong>
                  DA
                </strong>

                <span>
                  Portfolio
                </span>

              </div>

            </a>


            <p>
              SEO Consultant · Front-End Developer
            </p>


            <a
              href="#home"
              className="back-top"
            >
              Back to top ↑
            </a>

          </div>


          <div className="footer-bottom">

            <span>
              © 2026 DA Sultan. All rights reserved.
            </span>

            <span>
              Built with React
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;