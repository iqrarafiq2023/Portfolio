export const links = {
  email: "iqrarafiq680@gmail.com",
  github: "",   // add your GitHub URL
  linkedin: "", // add your LinkedIn URL
  resume: "/Iqra_Rafiq_Resume.pdf", // put the PDF in the /public folder
};

export const projects = [
  {
    title: "RAG Document Q&A Agent",
    desc: "Upload PDFs and ask questions in plain language. Answers come with source citations, and you can search one document or all of them.",
    tags: ["Next.js", "TypeScript", "Supabase pgvector", "Gemini", "Jest", "CI"],
    live: "https://rag-dtnh.vercel.app/",
    code: "",
  },
  {
    title: "JobHunt Agent",
    desc: "Three chained AI agents analyse a job description against your resume and return a match score, a tailored cover letter and likely interview questions.",
    tags: ["Next.js", "Vercel AI SDK", "Groq", "Zod"],
    live: "https://job-hunt-flax-two.vercel.app/",
    code: "",
  },
  {
    title: "XEHR: Electronic Health Records",
    desc: "Patient management, doctor portals, telehealth, billing and a real-time patient queue that assigns patients to available doctors.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Socket.IO"],
    live: "",
    code: "",
  },
  {
    title: "XRAD: Cloud Medical Imaging",
    desc: "Role-based dashboards and a DICOM viewer integration for radiologists, physicians, hospitals and patients.",
    tags: ["React", "DICOM", "REST APIs", "JWT"],
    live: "",
    code: "",
  },
  {
    title: "Social App for Singapore",
    desc: "A full mobile app built end to end: real-time chat, subscriptions, push notifications and Singpass identity verification.",
    tags: ["React Native", "Node.js", "Socket.IO", "AWS"],
    live: "",
    code: "",
  },
  // {
  //   title: "Rescue Operation Optimizer",
  //   desc: "Real-time coordination for animal shelters that automatically assigns volunteers to rescue tasks.",
  //   tags: ["MongoDB", "Express", "React", "Node.js", "Socket.IO"],
  //   live: "",
  //   code: "",
  // },
];

export const experience = [
  {
    role: "Freelance React Native Developer",
    place: "Mobile app for Singapore users",
    when: "Dec 2025 – Mar 2026",
    points: [
      "Owned the app end to end: UI, backend, database and Google Play deployment",
      "Built Singpass (OIDC + MyInfo) login, Google Play Billing subscriptions and push notifications",
      "Deployed a Node.js/TypeScript backend on AWS Singapore",
    ],
  },
  {
    role: "Full Stack Developer",
    place: "Nixaam LLC",
    when: "Nov 2023 – Oct 2025",
    points: [
      "Built enterprise healthcare platforms with React, Next.js, Node.js and PostgreSQL",
      "Role-based security across Admin, Radiologist, Physician and Patient roles",
      "Real-time meeting and queue workflows with Socket.IO; DICOM imaging integration",
    ],
  },
  {
    role: "UI Developer",
    place: "Nixaam LLC",
    when: "Nov 2023 – Jan 2024",
    points: ["Shopify, WordPress, Wix and WooCommerce interfaces and custom themes"],
  },
];

export const skills = [
  { group: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Redux", "Angular"] },
  { group: "Backend", items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Socket.IO", "REST APIs"] },
  { group: "Mobile", items: ["React Native", "Push notifications", "Google Play Billing"] },
  { group: "AI & Data", items: ["RAG", "pgvector", "Multi-agent pipelines", "Python", "scikit-learn", "TensorFlow"] },
  { group: "Security", items: ["JWT", "Role-based access", "OIDC / Singpass"] },
  { group: "Tools", items: ["Git", "AWS", "Vercel", "Jest", "GitHub Actions"] },
];