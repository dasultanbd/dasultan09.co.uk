import profile from "./assets/profile.jpg";
import logo from "./assets/logo.png";



export default function App() {
  // ✅ Agency-style projects with tags + case study
  const projects = [
    {
      id: "local-seo-growth",
      title: "Local Business SEO Growth",
      desc: "Improved rankings and traffic through technical SEO and backlinks.",
      tags: ["SEO", "Local SEO"],
      caseStudy: {
        overview:
          "A local service business needed more calls from Google. I focused on fixing technical issues, optimizing pages, and improving local authority.",
        whatIDid: [
          "Technical audit (speed, indexing, crawl errors)",
          "Local keyword research + on-page improvements",
          "Local citations + quality backlinks",
          "Weekly tracking + reporting",
        ],
        results: [
          "+70% organic traffic in 3 months (practice case study)",
          "Top 3 for 5 local keywords (practice case study)",
          "More calls/leads from search intent pages",
        ],
        tools: ["Google Search Console", "GA4", "Ahrefs", "Screaming Frog"],
      },
    },
    {
      id: "reputation-cleanup",
      title: "Personal Brand Reputation Cleanup",
      desc: "Pushed down negative results and promoted positive assets.",
      tags: ["Reputation", "SEO"],
      caseStudy: {
        overview:
          "A personal brand had negative results on page one. I created positive assets and increased authority to improve search perception.",
        whatIDid: [
          "Created positive content plan + branded pages",
          "Optimized titles/meta + internal linking",
          "Built authority backlinks to priority assets",
          "Monitored SERP and adjusted strategy",
        ],
        results: [
          "2 negative results pushed off page 1 (practice case study)",
          "Positive assets dominating page 1",
          "Improved brand trust in search",
        ],
        tools: ["Google Search", "GA4", "Ahrefs", "Content Calendar"],
      },
    },
    {
      id: "portfolio-react",
      title: "Portfolio Website (React)",
      desc: "Built a modern responsive portfolio using React + Tailwind + daisyUI.",
      tags: ["Frontend", "React"],
      caseStudy: {
        overview:
          "A clean portfolio site to present skills and projects professionally, with responsive layout and smooth navigation.",
        whatIDid: [
          "Designed responsive UI (mobile-first)",
          "Created reusable sections and components",
          "Added smooth scrolling and clean structure",
          "Optimized layout for speed and clarity",
        ],
        results: [
          "Modern UI with responsive layout",
          "Fast-loading pages",
          "Professional client-ready design",
        ],
        tools: ["React", "Vite", "Tailwind CSS", "daisyUI"],
      },
    },
  ];

  // ✅ Skills section (card layout like your reference image)
  const skills = [
    {
      title: "Technical SEO",
      desc: "Audit, site structure, speed optimization, crawl & indexing fixes.",
      icon: "🛠️",
    },
    {
      title: "On-Page SEO",
      desc: "Titles, meta descriptions, internal linking, schema basics.",
      icon: "🧩",
    },
    {
      title: "Keyword Research",
      desc: "Search intent, keyword mapping, content planning & targeting.",
      icon: "🔎",
    },
    {
      title: "Content Strategy",
      desc: "Content briefs, topic clusters, SEO-friendly planning.",
      icon: "📝",
    },
    {
      title: "Backlinks",
      desc: "Quality outreach, authority links, safe link building.",
      icon: "🔗",
    },
    {
      title: "Reputation Management",
      desc: "SERP cleanup, push positive results, brand trust.",
      icon: "⭐",
    },
    {
      title: "Google Analytics (GA4)",
      desc: "Traffic analysis, performance tracking, insights & reporting.",
      icon: "📊",
    },
    {
      title: "Google Search Console",
      desc: "Indexing issues, coverage fixes, performance insights.",
      icon: "📈",
    },
    {
      title: "HTML & CSS",
      desc: "Clean, responsive, SEO-friendly layouts.",
      icon: "💻",
    },
    {
      title: "React (Vite)",
      desc: "Modern UI, components, fast performance.",
      icon: "⚛️",
    },
    {
      title: "Responsive Design",
      desc: "Mobile-first, cross-device compatibility.",
      icon: "📱",
    },
    {
      title: "SEO Reporting",
      desc: "Clear reporting, tracking and execution-focused strategy.",
      icon: "📄",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-base-content">
      {/* NAVBAR (fixed top) */}
      <div className="navbar bg-white/90 backdrop-blur border-b border-gray-100 fixed top-0 left-0 right-0 z-50 px-4 md:px-10">
        <div className="flex-1">
          <a href="#home" className="flex items-center gap-2">
  <img
    src={logo}
    alt="DA Sultan Portfolio"
    className="h-20 md:h-26 w-auto hover:opacity-80 transition"

  />
</a>

        </div>

        <div className="flex-none">
          <div className="hidden md:flex gap-2">
            {["home", "about", "skills", "projects", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="btn btn-ghost btn-md text-base font-semibold hover:btn-primary hover:text-primary-content transition"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* spacer */}
      <div className="h-20" />

      {/* HOME */}
      <section id="home" className="px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-500">Hello, It&apos;s Me</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mt-2">DA SULTAN</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mt-3">
              I&apos;m an <span className="text-primary">SEO Consultant</span> &{" "}
              <span className="text-primary">Front-End Developer</span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed max-w-xl md:max-w-none">
              Helping brands grow with SEO, reputation management, and clean, responsive websites.
              Focused on rankings, performance, and long-term growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="#projects" className="btn btn-primary rounded-full btn-lg text-white bg-primary hover:bg-blue-600
">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline rounded-full btn-lg">
                Contact
              </a>
            </div>
          </div>

          {/* Circle profile */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full" />
              <div className="avatar">
                <div className="w-64 md:w-72 rounded-full ring ring-primary ring-offset-base-100 ring-offset-8 shadow-xl hover:scale-105 translate-x-1 transition">
                  <img src={profile} alt="DA SULTAN" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT (attractive + hover) */}
      <section id="about" className="px-6 md:px-10 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            About <span className="text-primary">Me</span>
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            I’m <span className="font-semibold text-gray-900">DA Sultan</span>, an{" "}
            <span className="font-semibold">SEO Consultant</span> and{" "}
            <span className="font-semibold">Front-End Developer</span>.
            I help businesses improve their online visibility with technical SEO, content optimization,
            and backlinks — and I build modern, responsive websites that are fast, clean, and SEO-friendly.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            {[
              { title: "SEO Growth", desc: "Improve rankings, traffic & long-term visibility.", icon: "📈" },
              { title: "Brand Authority", desc: "Build trust through backlinks & reputation.", icon: "⭐" },
              { title: "Front-End UI", desc: "Fast, responsive, modern interfaces.", icon: "💻" },
            ].map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl p-8 border border-gray-100
                           shadow-sm hover:shadow-xl hover:-translate-y-2
                           transition duration-300 cursor-pointer"
              >
                <div className="text-4xl group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="mt-4 text-xl font-bold group-hover:text-primary transition">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS (card grid like reference image) */}
      <section id="skills" className="px-6 md:px-10 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Skills <span className="text-primary">Overview</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A clean summary of my SEO + Front-End skills in a professional layout.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {skills.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-gray-100 rounded-2xl p-8
                           shadow-sm hover:shadow-lg hover:-translate-y-1
                           transition cursor-pointer"
              >
                <div className="text-4xl">{s.icon}</div>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS (Agency style cards + case studies) */}
      <section id="projects" className="px-6 md:px-10 py-20 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Projects & <span className="text-primary">Case Studies</span>
            </h2>
            <p className="mt-4 opacity-75 max-w-2xl mx-auto">
              Selected projects demonstrating SEO growth, reputation management,
              and front-end development skills.
            </p>
          </div>

          {/* Project Cards */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((p) => (
              <a
                key={p.id}
                href={`#case-${p.id}`}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm
                           hover:shadow-xl hover:-translate-y-1 transition p-7 text-left"
              >
                <h3 className="text-xl font-bold group-hover:text-primary transition">
                  {p.title}
                </h3>

                <p className="mt-2 text-gray-500">{p.desc}</p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold
                                 bg-gray-100 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-primary font-semibold group-hover:underline">
                    View Case Study →
                  </span>
                  <span className="text-xs opacity-50">Click</span>
                </div>
              </a>
            ))}
          </div>

          {/* Case Study Sections */}
          <div className="mt-20 space-y-12">
            {projects.map((p) => (
              <div
                key={`case-${p.id}`}
                id={`case-${p.id}`}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
                  <div>
                    <h3 className="text-3xl font-extrabold">{p.title}</h3>
                    <p className="mt-2 text-gray-500">{p.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="badge badge-outline badge-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href="#projects" className="btn btn-outline rounded-full">
                    Back to Projects
                  </a>
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-gray-50 border">
                    <h4 className="font-bold text-lg">Overview</h4>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {p.caseStudy.overview}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border">
                    <h4 className="font-bold text-lg">What I Did</h4>
                    <ul className="mt-3 list-disc list-inside text-gray-600 space-y-2">
                      {p.caseStudy.whatIDid.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-gray-50 border">
                    <h4 className="font-bold text-lg">Results</h4>
                    <ul className="mt-3 list-disc list-inside text-gray-600 space-y-2">
                      {p.caseStudy.results.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-white border">
                  <h4 className="font-bold text-lg">Tools Used</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.caseStudy.tools.map((tool) => (
                      <span key={tool} className="badge badge-ghost badge-lg">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact" className="btn btn-primary rounded-full text-white
">
                    Hire Me
                  </a>
                  <a href="#projects" className="btn btn-outline rounded-full">
                    View More Projects
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT (reference style cards) */}
<section id="contact" className="px-6 md:px-10 py-20 bg-[#fbf6ee]">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
      We are here for you, <br />
      contact me at <span className="text-primary">anytime</span>
    </h2>

    <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
      Have any questions about my services or want to work together?  
      Feel free to reach out.
    </p>

    {/* Cards */}
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
      {/* EMAIL */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition p-7">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
          {/* Mail icon */}
          <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </div>

        <h3 className="mt-5 text-lg font-bold text-slate-900">Email</h3>
        {/* <p className="mt-1 text-sm text-slate-500">From your email app</p> */}

        <p className="mt-4 font-semibold text-slate-900 break-words">
          <a className="hover:text-primary underline" href="dasultanbusiess@gmail.com">
            dasultanbusiess@gmail.com
          </a>
        </p>
      </div>

      {/* LINKEDIN */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition p-7">
        <div className="w-14 h-14 rounded-2xl bg-[#0a66c2]/10 flex items-center justify-center">
          {/* LinkedIn icon */}
          <svg className="w-7 h-7 text-[#0a66c2]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H7.351V9h3.414v1.561h.046c.476-.9 1.637-1.852 3.369-1.852 3.6 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.814 20.452H3.861V9h2.953v11.452z" />
          </svg>
        </div>

        <h3 className="mt-5 text-lg font-bold text-slate-900">LinkedIn</h3>
        {/* <p className="mt-1 text-sm text-slate-500">View my profile</p> */}

        <p className="mt-4 font-semibold text-slate-900 break-words">
          <a
            className="hover:text-primary underline"
            href="https://www.linkedin.com/in/seo-specialists-bangladesh/"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </p>
      </div>

      {/* INSTAGRAM */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition p-7">
        <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center">
          {/* Instagram icon */}
          <svg className="w-7 h-7 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.5-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </div>

        <h3 className="mt-5 text-lg font-bold text-slate-900">Instagram</h3>
        {/* <p className="mt-1 text-sm text-slate-500">Send me a DM</p> */}

        <p className="mt-4 font-semibold text-slate-900 break-words">
          <a
            className="hover:text-primary underline"
            href="https://instagram.com/dasultan_seo"
            target="_blank"
            rel="noreferrer"
          >
            Send me a DM
          </a>
        </p>
      </div>

      {/* WHATSAPP */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition p-7">
        <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">
          {/* WhatsApp icon */}
          <svg className="w-7 h-7 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.16 6.42 2.16 11.88c0 1.73.45 3.42 1.31 4.92L2 22l5.37-1.41a9.8 9.8 0 0 0 4.67 1.19h.01c5.46 0 9.88-4.42 9.88-9.88C21.93 6.42 17.5 2 12.04 2zm5.73 14.28c-.24.68-1.2 1.25-1.96 1.41-.52.11-1.2.2-3.49-.75-2.93-1.21-4.81-4.19-4.95-4.38-.14-.19-1.19-1.59-1.19-3.04s.76-2.16 1.03-2.46c.27-.3.59-.38.79-.38.2 0 .4 0 .57.01.18.01.42-.07.66.5.24.57.82 2 .89 2.15.07.15.12.33.02.52-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.37 1.46.3.15.47.13.65-.08.18-.21.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.69.8 1.98.95.29.15.49.22.56.35.07.13.07.75-.17 1.43z" />
          </svg>
        </div>

        <h3 className="mt-5 text-lg font-bold text-slate-900">WhatsApp</h3>
        {/* <p className="mt-1 text-sm text-slate-500">Chat on WhatsApp</p> */}

        <p className="mt-4 font-semibold text-slate-900 break-words">
          <a
            className="hover:text-primary underline"
            href="https://wa.me/8801640027804"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp


          </a>
        </p>
      </div>
    </div>

    {/* Footer Note */}
    <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-5 text-slate-600">
      I usually reply within <span className="font-semibold text-slate-900">24 hours</span>.  
      Available: <span className="font-semibold text-slate-900">everyday</span>.
    </div>

    <p className="mt-8 text-sm text-slate-500">
      © 2026 DA SULTAN — All Rights Reserved
    </p>
  </div>
</section>


    </div>
  );
}
