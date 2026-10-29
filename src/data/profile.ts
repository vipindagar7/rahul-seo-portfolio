// All content comes from Rahul Gupta's CV. Edit here — every section reads from this file.

export const profile = {
  name: "Rahul Gupta",
  firstName: "Rahul",
  initials: "RG",
  role: "Digital Marketing Specialist",
  tagline: "Social Media Expert",
  location: "Sec-91, Faridabad",
  phone: "+91 9315191512",
  phoneHref: "tel:+919315191512",
  whatsapp: "https://wa.me/919315191512",
  email: "Rahulsinghaniya059@gmail.com",
  // Drop a photo at /public/rahul.jpg and set this to "/rahul.jpg"
  photo: null as string | null,
  intro:
    "I grow brands with data-driven Meta & Google Ads, SEO that ranks, and social content people actually stop scrolling for — from hospitals and gyms to colleges and food courts.",
  about:
    "I'm not just a marketer — I'm a strategist, a content creator and a team lead rolled into one. Since 2021 I've run campaigns, edited reels, built WordPress sites and led marketing teams. Today I handle SEO and client growth at Echelon Institute of Technology. Think of me as an extension of your team, focused on one thing: measurable growth.",
  yearsExperience: 5,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export const marqueeItems = [
  "Meta Ads",
  "BikeFixup",
  "Google Ads",
  "Alankrit Elegance",
  "SEO",
  "@sufiscore",
  "Reel Editing",
  "@sarishtihomes",
  "Canva",
  "@anglow_khanmarket_",
  "WordPress",
  "Semrush",
  "HubSpot",
];

export const experience = [
  {
    no: "01",
    role: "Digital Marketing Executive",
    company: "Echelon Institute of Technology",
    period: "02/2025 — Present",
    place: "Faridabad",
    points: [
      "On-page & off-page SEO for the institute's official website — higher rankings and traffic for academic keywords.",
      "Manage small-to-mid client businesses end-to-end via the college's marketing wing.",
      "Lead the digital marketing team; own content calendars, SEO blogs and social content.",
    ],
  },
  {
    no: "02",
    role: "Senior Social Media Marketing Specialist",
    company: "FIY Marketing Hub",
    period: "08/2023 — 10/2024",
    place: "Faridabad",
    points: [
      "Designed promotional materials and website layouts in WordPress.",
      "Ran targeted email campaigns and competitor analysis to sharpen ad performance.",
      "Used data scraping for WhatsApp marketing and retargeting.",
    ],
  },
  {
    no: "03",
    role: "Social Media Manager",
    company: "Kohli Printographics",
    period: "11/2022 — 08/2023",
    place: "CP, Delhi",
    points: [
      "Content for Instagram, Facebook, Twitter and LinkedIn.",
      "High-performing ad creatives that lifted conversion rates.",
      "Optimised Google My Business; key accounts in printing, real estate and restaurants.",
    ],
  },
  {
    no: "04",
    role: "Social Media Intern / Executive",
    company: "Behind the Screens",
    period: "07/2021 — 11/2022",
    place: "Noida 63",
    points: [
      "Feed design, reel editing and post design for client projects.",
      "Designed and developed WordPress websites to drive traffic.",
      "Planned social strategies, content creation and platform research.",
    ],
  },
];

export const skills = [
  { title: "Meta Ads", desc: "Facebook & Instagram campaigns built around audience, creative testing and lower cost per result." },
  { title: "Google Ads", desc: "Search and app campaigns tuned for calls, customer engagement and cheaper app downloads." },
  { title: "SEO", desc: "On-page and off-page SEO, keyword strategy and blogs that move rankings and organic traffic." },
  { title: "Reel Editing", desc: "Short-form video that hooks in the first second and is built for shares and saves." },
  { title: "Canva & Creatives", desc: "Scroll-stopping ad creatives, feed designs and promotional material on brand." },
  { title: "Team Management", desc: "Leading marketing teams, content calendars and client delivery from brief to report." },
] as const;

// Numbers are taken straight from the CV — keep them honest when editing.
export const achievements = [
  {
    stat: 120,
    suffix: "%",
    title: "Cost Optimization",
    desc: "Increased Facebook engagement KPIs by 120% within 3 months through partnerships with local suppliers.",
    statLabel: "engagement in 3 months",
  },
  {
    stat: 4,
    suffix: "",
    title: "Targeted Ad Success",
    desc: "Designed and executed Meta Ads and Google Ads campaigns for hospitals, clinics, food courts and gyms — leading to improved ROI.",
    statLabel: "sectors",
  },
  {
    stat: 6,
    suffix: "",
    title: "Boosted Engagement",
    desc: "Increased social media engagement and brand visibility through innovative campaigns and data-driven strategies.",
    statLabel: "brands & handles",
  },
  {
    stat: 5,
    suffix: "+",
    title: "Optimized ROI & App Downloads",
    desc: "Improved overall ROI by running ads on the right platforms at the right time, reducing the cost per app download.",
    statLabel: "years in digital",
  },
];

export const projects = [
  {
    title: "BikeFixup",
    type: "Google Ads · App installs",
    desc: "Custom-targeted ads that reduced cost per app download, with Google Ads focused on calls and customer engagement.",
    tone: "from-neutral-900 to-neutral-600",
  },
  {
    title: "Alankrit Elegance",
    type: "Website · Performance marketing",
    desc: "Managed the website purchase and optimisation, delivering outstanding KPIs and significant ROI through targeted marketing.",
    tone: "from-neutral-700 to-neutral-400",
  },
  {
    title: "@sufiscore",
    type: "Instagram growth",
    desc: "Content strategy, reels and community management for a growing music handle.",
    tone: "from-neutral-800 to-neutral-500",
  },
  {
    title: "@anglow_khanmarket_",
    type: "Instagram · Local brand",
    desc: "Feed design and local targeting to drive footfall for a Khan Market brand.",
    tone: "from-neutral-600 to-neutral-300",
  },
  {
    title: "@sarishtihomes",
    type: "Real estate social",
    desc: "Property-led creatives and lead-gen campaigns for a real estate handle.",
    tone: "from-neutral-900 to-neutral-500",
  },
  {
    title: "EIT Website SEO",
    type: "SEO · Education",
    desc: "On-page and off-page SEO that improved rankings for targeted academic keywords.",
    tone: "from-neutral-700 to-neutral-500",
  },
];

export const education = [
  { title: "Bachelor of Arts (Political Science Honours)", org: "Delhi University, SOL" },
  { title: "Course on Computer Concepts", org: "National Institute of Electronics and Information Technology" },
  { title: "High School", org: "Haryana Board of School Education" },
];

export const certifications = [
  "Google Search Ads Certified",
  "Semrush AI Powered Marketer",
  "Microsoft Generative AI",
  "Coursera",
  "Skill Nation",
  "HubSpot Academy",
  "Estival Technology",
];
