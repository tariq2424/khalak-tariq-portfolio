// All content below is sourced from Khalak Tariq's resume and project details.
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
    "I build and deploy full-stack web applications with React, Node.js, Express, MongoDB and Django — from REST APIs, authentication and payments to a live, responsive product.",
  about: [
    "I'm an Information Technology graduate (B.E., CGPA 8.46/10) and Full Stack Web Developer working with the MERN stack and Python Django.",
    "I've built and deployed four full-stack applications — a service-booking marketplace with JWT authentication and Razorpay payments, a multi-role photographer booking platform on PostgreSQL, a UI template marketplace, and a hackathon timetable generator — and completed three internships in MERN, Django, and full-stack development.",
    "I like taking an idea from a wireframe to a working, deployed product, with UI/UX design in Figma on the side.",
  ],
};

// Quick facts shown under the hero (all taken from the resume).
export const stats = [
  { value: "4", label: "Full-stack projects deployed" },
  { value: "3", label: "Internships completed" },
  { value: "8.46", label: "CGPA · B.E. IT" },
];

// Shown in the hero code card.
export const heroStack = ["React", "Node.js", "Express", "MongoDB", "Django", "PostgreSQL"];

// Ordered with Full Stack first.
export const skills = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "Python", "SQL"],
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
      "DOM Manipulation",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Django",
      "REST APIs",
      "JWT Authentication",
      "CRUD Operations",
      "MVC Architecture",
    ],
  },
  {
    category: "Database",
    items: ["MongoDB", "MongoDB Atlas", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    category: "Integrations",
    items: ["Razorpay", "Cloudinary", "Brevo (Email)", "UptimeRobot"],
  },
  {
    category: "Tools & Deployment",
    items: ["Git", "GitHub", "Render", "PythonAnywhere", "Postman", "VS Code", "XAMPP"],
  },
  {
    category: "UI/UX Design",
    items: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Typography",
      "Visual Hierarchy",
      "Grid Systems",
      "Adobe Photoshop",
      "Canva",
    ],
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
    company: "InfoLabz IT Services Pvt. Ltd., Ahmedabad",
    dates: "Jan 2026 – May 2026",
    points: [
      "Worked in a team to build an end-to-end MERN stack application, following the complete real-world workflow from frontend to database.",
      "Built a responsive, component-based user interface with React.js and integrated it with the backend using Axios and REST APIs for dynamic data rendering.",
      "Independently developed the backend REST APIs with Node.js and Express.js, covering routing, JWT authentication, and CRUD operations.",
      "Connected the backend to MongoDB Atlas, a cloud database, and designed data models for storing and retrieving application data.",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "MongoDB Atlas", "JWT", "Axios", "REST API"],
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Jyesta Corporate Entity",
    dates: "Aug 2025 – Oct 2025",
    points: [
      "Completed full-stack web development training covering HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB, and SQL.",
      "Built a working understanding of each technology, from basic concepts to advanced usage, and learned how frontend, backend, and database layers combine into a complete full-stack project.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "MongoDB", "SQL"],
  },
  {
    role: "Python (Django) Intern",
    company: "InfoLabz IT Services Pvt. Ltd., Ahmedabad",
    dates: "02 Jul 2025 – 16 Jul 2025 · 15 days",
    points: [
      "Completed a 15-day intensive on the Django framework: MVC architecture, models, ORM, migrations, and CRUD operations.",
      "Worked with JSON data structures and APIs, including fetching data from external APIs.",
      "Built relational models (ForeignKey, ImageField) and a Django admin panel, learning how an admin panel controls a whole website: the admin's responsibilities and the access levels of superuser, staff, and normal user, with permissions.",
      "Built MovieFlix (10 models) with a Jazzmin-styled admin, and designed the data model for PhotoPholio, which I later expanded into a full-stack project.",
    ],
    tech: ["Python", "Django", "MVC", "ORM", "Django Admin", "REST API", "JSON"],
  },
];

// Projects, ordered by priority. `featured: true` gets the large layout.
export const projects = [
  {
    slug: "on-demand-booking",
    name: "On-Demand Service Booking & Scheduling Platform",
    badge: "Final Year Project",
    image: "/projects/On-Demand.png",
    featured: true,
    summary:
      "A full-stack (MERN) service marketplace where users discover, filter, and book local services using authenticated accounts and online payments.",
    problem:
      "Booking a local service usually means scattered phone calls, with no central place to compare, schedule, or pay.",
    solution:
      "One platform with category-based discovery, JWT-authenticated accounts, and Razorpay checkout. Users browse, book, and pay online instead of calling providers, and all bookings are stored centrally.",
    features: [
      "JWT authentication and authorization with protected routes",
      "Razorpay payment gateway integration",
      "Category filtering and booking management",
      "Admin panel to add services and manage bookings and payments",
      "REST API (Node.js + Express.js) with full CRUD on MongoDB",
      "Mobile-first responsive UI in React.js",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay", "REST API"],
    github: "https://github.com/tariq2424/on-demand-service-booking-scheduling-platform",
    live: "https://on-demand-service-booking-scheduling-9ta1.onrender.com/",
  },
  {
    slug: "photopholio",
    name: "PhotoPholio — Photographer Booking & Management Platform",
    badge: "Django Full-Stack",
    image: "/projects/Photopholio Cover Page.png",
    featured: true,
    summary:
      "A full-stack Django platform where customers discover photographers, compare packages, and book photography services. It began as my 15-day Django internship project and grew into a complete multi-role system.",
    problem:
      "Booking a photographer usually means endless messages, unclear pricing, and uncertainty about availability.",
    solution:
      "One platform for discovery, availability, booking, photo delivery, and printed albums, with separate workflows for customers, photographers, and admins.",
    features: [
      "Customer: filter by city, style and availability, send booking requests, get photos via a private link, order printed albums with up to 3 free revisions and order status tracking",
      "Photographer: manage portfolio, packages, availability, bookings, reviews, and earnings",
      "Admin: analytics dashboard with four charts, photographer approvals, and refund management",
      "Double-booking prevention, 10% platform commission model, payment ledger in demo mode",
      "12 relational models, 7 automated tests, light/dark themes, responsive UI",
    ],
    tech: [
      "Python",
      "Django",
      "PostgreSQL",
      "Bootstrap 5",
      "JavaScript",
      "Cloudinary",
      "Brevo",
      "UptimeRobot",
    ],
    github: "https://github.com/tariq2424/photopholio",
    live: "https://photopholio-tof3.onrender.com/",
  },
  {
    slug: "designhub",
    name: "DesignHub — UI Template Marketplace",
    badge: "Full-Stack Project",
    image: "/projects/DesignHub.png",
    featured: false,
    summary:
      "A marketplace for ready-made UI templates, such as birthday and wedding cards, with downloadable HTML and CSS source code to edit and reuse.",
    problem:
      "Template source code is scattered across many websites, often without editable code.",
    solution:
      "One central marketplace where users find a design and download its full source code in one place.",
    features: [
      "Multiple template categories (birthday cards, wedding cards)",
      "Download complete HTML and CSS source code",
      "Node.js backend with MySQL (storage migrated to MySQL)",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL"],
    github: "https://github.com/tariq2424/design-hub",
    live: "https://design-hub-budi.onrender.com/",
  },
  {
    slug: "timetable-scheduler",
    name: "Smart Classroom & Timetable Scheduler",
    badge: "Hackathon Project",
    image: "/projects/Smartclassroom.png",
    featured: false,
    summary:
      "A hackathon project that automatically generates college timetables from faculty, subject, and branch data, replacing manual preparation.",
    problem:
      "Preparing timetables by hand is slow and error-prone, and hard to keep consistent across branches, sections, and faculty.",
    solution:
      "Ready-to-use digital timetables generated automatically, with 5 different versions to choose from.",
    features: [
      "Effective, error-free timetable from faculty, subject, and branch data",
      "5 timetable versions to choose from",
      "Node.js backend with a JSON database (working demo)",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "JSON Database"],
    github: "https://github.com/tariq2424/smart-classroom-timetable-scheduler",
    live: "https://smart-classroom-timetable-scheduler-1.onrender.com/",
  },
 
];

export const designWork = [];

export const education = {
  degree: "B.E. in Information Technology",
  school: "Government Engineering College, Modasa, Gujarat",
  dates: "2022 – 2026",
  detail: "CGPA 8.46/10 · Final Semester SPI 10/10",
};

export const certifications = [
  "MERN Stack Internship Certificate — InfoLabz",
  "Full Stack Internship Certificate — Jyesta Corporate Entity",
  "Python (Django) Internship Certificate — InfoLabz",
  "Blockchain Seminar Certificate",
  "TOPS Technologies: Web Applications, SQL, HTML/CSS, MERN Stack, Graphic Design",
  "Diwang Mehta IT Award — Ranked 1st in College, 3rd Semester (SPI 9.04)",
];
