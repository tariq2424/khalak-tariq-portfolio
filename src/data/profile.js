// All content below is sourced directly from the provided resume/profile details.
// Nothing here is fabricated — update this file if any detail changes.

export const profile = {
  name: "Khalak Tariq",
  title: "Full Stack Web Developer",
  location: "Modasa, Gujarat, India",
  email: "khalaktariq24@gmail.com",
  phone: "+91 9601077787",
  github: "https://github.com/tariq2424",
  linkedin: "https://www.linkedin.com/in/tariq-khalak",
  resumeFile: "/Khalak_Tariq_Final_Full_Stack_Resume.pdf",
  pitch:
    "I build full-stack web applications and design the interfaces that sit on top of them — from a Figma frame to a deployed React and Node.js product.",
  about:
    "I'm an Information Technology graduate who works across the stack — React and Node.js on the build side, Figma on the design side. Most of what I know comes from shipping real projects: a service-booking marketplace with payments and auth, a MySQL-backed template marketplace, and a handful of interface designs built around typography and layout. I like taking an idea from a wireframe to a working, deployed product.",
};

export const skills = [
  {
    category: "Programming",
    items: ["JavaScript (ES6+)", "Python"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "CRUD Operations",
    ],
  },
  {
    category: "Database",
    items: ["MongoDB", "SQL", "MySQL"],
  },
  {
    category: "UI/UX",
    items: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Typography",
      "Visual Hierarchy",
      "Grid Systems",
    ],
  },
  {
    category: "Tools & Deployment",
    items: ["Git", "GitHub", "Render", "Postman", "VS Code", "XAMPP"],
  },
  {
    category: "AI-Assisted Development",
    items: [
      "ChatGPT",
      "Claude",
      "Gemini",
      "DeepSeek",
      "Midjourney",
      "NotebookLM",
      "Julius AI",
      "Blackbox AI",
    ],
    note: "Used for development assistance, debugging, documentation, research, and AI image/video generation.",
  },
];

export const languages = ["English", "Hindi", "Gujarati"];

export const experience = [
  {
    role: "MERN Stack Development Intern",
    company: "InfoLabz IT Services Pvt. Ltd.",
    dates: "Jan 2026 – May 2026",
    points: [
      "Built responsive React.js UIs with reusable components and API-driven rendering.",
      "Integrated REST APIs (Axios) with JWT authentication, Express.js routing, and MongoDB modelling.",
    ],
    tech: ["React.js", "Express.js", "MongoDB", "JWT", "Axios"],
  },

  {
    role: "Full Stack Web Development Intern",
    company: "Jyesta Corporate Entity",
    dates: "Aug 2025 – Oct 2025",
    points: [
      "Built responsive web interfaces using HTML5, CSS3, JavaScript, and Bootstrap with a focus on UI consistency.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },

  {
    role: "Python (Django) Web Development Intern",
    company: "InfoLabz IT Services Pvt. Ltd.",
    dates: "02 Jul 2025 – 16 Jul 2025 | 15 days",
    points: [
      "Completed a summer internship focused on Web Development using Python and the Django Framework.",
      "Worked on practical Django concepts and hands-on implementation, developing the foundation for the PhotoPholio project.",
    ],
    tech: ["Python", "Django"],
  },
];

// Projects, ordered by priority. `featured: true` gets the strongest visual treatment.
export const projects = [
  {
    slug: "on-demand-booking",
    name: "On-Demand Service Booking & Scheduling Platform",
    image: "/projects/On-Demand.png",
    featured: true,
    summary:
      "A full-stack service marketplace where users discover, filter, and book services, with authenticated accounts and online payments.",
    problem:
      "Booking a local service usually means scattered phone calls with no central place to compare, schedule, or pay.",
    solution:
      "A MERN marketplace with category-based discovery, JWT-authenticated accounts, and Razorpay checkout — built end to end as a final-year project.",
    features: [
      "JWT authentication for user accounts",
      "Razorpay payment integration",
      "Category filtering & booking management",
      "REST APIs with full CRUD operations",
      "Mobile-first responsive UI",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay"],
    github:
      "https://github.com/tariq2424/on-demand-service-booking-scheduling-platform",
    live: "https://on-demand-service-booking-scheduling-9ta1.onrender.com/",
  },
  {
    slug: "photopholio",
    name: "PhotoPholio — Photographer Booking Platform",
    image: "/projects/PhotoPholio.png",
    featured: false,
    summary:
      "A Django-based photographer booking platform where users can discover photographers, explore portfolios, book dates, complete demo payments, and leave reviews.",
    features: [
      "Photographer search and filtering by city, style, rating and availability",
      "Photographer profiles with portfolio galleries and client reviews",
      "Django authentication with user registration and login",
      "Booking validation with date and double-booking prevention",
      "Demo payment and booking confirmation flow",
      "Customized Django admin with Jazzmin",
      "Responsive Bootstrap 5 user interface",
    ],
    tech: [
      "Python",
      "Django",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap 5",
      "Pillow",
    ],
    github: "https://github.com/tariq2424/photopholio",
    live: "https://photopholio-tof3.onrender.com/",
  },

  {
    slug: "designhub",
    name: "DesignHub — UI Template Marketplace",
    image: "/projects/DesignHub.png",
    featured: false,
    summary:
      "A marketplace for downloadable UI templates with complete HTML/CSS source code, backed by a MySQL database.",
    features: [
      "Downloadable UI templates with full HTML/CSS source",
      "Data storage migrated to MySQL (MySQL Workbench)",
      "Deployed on Render",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    github: "https://github.com/tariq2424/design-hub",
    live: "https://design-hub-budi.onrender.com",
  },
  {
    slug: "timetable-scheduler",
    name: "Smart Classroom Timetable Scheduler",
    image: "/projects/Smartclassroom.png",
    featured: false,
    summary:
      "A real-time timetable generator that builds academic schedules from faculty, subject, and branch data.",
    features: [
      "Faculty-, subject-, and branch-based scheduling logic",
      "Real-time timetable generation",
      "Deployed on Render",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "JSON Database"],
    github: "https://github.com/tariq2424/smart-classroom-timetable-scheduler",
    live: "https://smart-classroom-timetable-scheduler-1.onrender.com",
  },
  {
    slug: "jio-homes-ui",
    name: "Jio Homes UI",
    image: "/projects/jioHomes.png",
    featured: false,
    summary:
      "A responsive Jio Homes-inspired interface recreating the layout and UX of a modern digital home-services platform.",
    features: ["Responsive HTML/CSS layout", "Component-level UI recreation"],
    tech: ["HTML", "CSS"],
    github: "https://github.com/tariq2424/jio-homes-ui",
    live: "https://tariq2424.github.io/jio-homes-ui/",
  },
];

export const designWork = []

/*
export const designWork = [
  {
    name: "Travel Website",
    description:
      "A destination-led travel site concept — visual layout, imagery hierarchy, and a clean booking flow.",
    figma:
      "https://www.figma.com/design/WYBjQPETWGrDHEd2d0HWro/MY-DESIGN?node-id=0-1&t=Zpk3H3WAmjKNhydn-1",
  },
  {
    name: "Dadu Footwear — E-commerce",
    description:
      "An e-commerce interface for a footwear brand, covering homepage, product, and contact layouts.",
    figma:
      "https://www.figma.com/design/WYBjQPETWGrDHEd2d0HWro/MY-DESIGN?node-id=27-2&t=Zpk3H3WAmjKNhydn-1",
  },
  {
    name: "Spider-Man: Brand New Day — Poster",
    description:
      "A cinematic movie poster exploring typography, lighting, and composition.",
    figma:
      "https://www.figma.com/design/N184qwO6PqPskdsF9mJ296/SPIDERMAN-BRAND-NEW-DAY-POSTER?node-id=0-1&t=5vAEUxEX5iXz3Txb-1",
  },
];

*/

export const education = {
  degree: "B.E. / B.Tech, Information Technology",
  school: "Government Engineering College, Modasa, Gujarat",
  dates: "2022 – 2026",
  detail: "CGPA: 8.46/10 · Final Semester SPI: 10/10",
};

export const certifications = [
  "MERN Stack Internship Certificate — InfoLabz",
  "Full Stack Internship Certificate — Jyesta Corporate Entity",
  "Python (Django) Web Development Internship Certificate — InfoLabz",
  "Blockchain Seminar Certificate",
  "TOPS Technologies: Web Applications, SQL, HTML/CSS, MERN Stack, Graphic Design",
  "Diwang Mehta IT Award — Ranked 1st in College, 3rd Semester (SPI 9.04)",
];

