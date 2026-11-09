// Single source for the site's content. Keep in sync with the resume.

export const contact = {
  email: "jefbleds@gmail.com",
  linkedin: "https://www.linkedin.com/in/jeff-bledsoe-mba",
  location: "Westfield, IN",
  resume: `${process.env.PUBLIC_URL}/Jeff-Bledsoe-Resume.pdf`,
};

export const stats = [
  { value: "10+", label: "years leading operations" },
  { value: "400+", label: "employees managed" },
  { value: "39M", label: "parcels processed a year" },
  { value: "48%", label: "faster deliveries at Priscotty" },
];

export const experience = [
  {
    org: "Westfield Washington Township",
    logo: null,
    civic: true,
    roles: [
      {
        title: "Candidate for Township Trustee",
        dates: "Jan 2026 – Nov 2026",
        points: [
          "Won the May 2026 primary election and advanced as the nominee to the November 2026 general election.",
          "Ran on a platform of transparency, proactive cost control and community assistance: evening board meetings with social media alerts, financial reporting more often than the annual legal minimum, and clear visibility into Build-Operate-Transfer financing for capital projects like fire stations.",
          "Produced data-driven concept redesigns of the township website, adding monthly financial recaps, assistance metrics such as approval rates and days to funding, and a dedicated Fire & EMS page.",
          "Ran the campaign's digital outreach across a campaign website, Facebook and TikTok, and launched a resident survey to gauge community priorities.",
        ],
      },
    ],
  },
  {
    org: "Priscotty",
    logo: null,
    roles: [
      {
        title: "Co-Founder & CTO",
        dates: "Feb 2024 – Nov 2025",
        points: [
          "Architected an automated dispatching system that cut average delivery time from over 60 minutes to 31 minutes.",
          "Integrated the point-of-sale system for automated inventory tracking and billing.",
          "Built a business intelligence dashboard whose customer insights grew weekly delivery orders by 40%.",
        ],
      },
    ],
  },
  {
    org: "Veryable",
    logo: require("../images/veryableLogo.png"),
    roles: [
      {
        title: "Director of Business Development",
        dates: "May 2022 – Feb 2023",
        points: [
          "Doubled year-over-year market revenue through targeted KPI improvements.",
          "Set team priorities and tracked performance against targets to drive accountability.",
          "Brought manufacturers and logistics operators onto a new on-demand labor operating model.",
        ],
      },
    ],
  },
  {
    org: "UPS",
    logo: require("../images/UpsLogo.png"),
    roles: [
      {
        title: "Hub Operations Manager",
        dates: "Nov 2020 – Apr 2022",
        points: [
          "Ran processing of 39M+ parcels a year across two hubs with 400+ employees and supervisors.",
          "Cut peak-season production errors from 3% to 1% through training, production planning and accountability.",
          "Improved labor relations and service delivery rates through process optimization.",
        ],
      },
      {
        title: "Hub Operations Supervisor",
        dates: "Jan 2017 – Nov 2020",
        points: [
          "Led 11 front-line leaders and 60 employees across manual and automated sortation systems.",
          "Served as the hub's subject matter expert for new operations technology rollouts.",
          "Raised productivity 10% and cut service failures 30%; led a sortation turnaround that cut failure rates threefold.",
        ],
      },
      {
        title: "Industrial Engineering Supervisor",
        dates: "Jan 2016 – Jan 2017",
        points: [
          "Founded an operation expansion that grew Indianapolis irregular-package capacity by 70%.",
          "Optimized load capacity for an average savings of $1,800 a day.",
        ],
      },
      {
        title: "Lead Hub Operations Supervisor & Loader",
        dates: "Feb 2013 – Jan 2016",
        points: [
          "Trained and onboarded newly promoted part-time supervisors.",
          "Raised team productivity 30% and cut work-area service failures to a fifth of the allowed rate.",
        ],
      },
    ],
  },
  {
    org: "Indiana National Guard",
    logo: require("../images/IndianaNationalGuardLogo.jpeg"),
    roles: [
      {
        title: "Soldier",
        dates: "Nov 2010 – Nov 2018",
        points: [
          "Served in transportation (88M) and infantry (11B) roles; held a security clearance.",
          "Commandant's List (top 10%) at Advanced Individual Training.",
        ],
      },
    ],
  },
];

export const education = [
  {
    school: "Indiana University, Kelley School of Business",
    degree: "Master of Business Administration (MBA)",
    dates: "Expected 2027",
    logo: require("../images/IUTridentTab.svg").default,
  },
  {
    school: "MIT xPro",
    degree: "Professional Certificate, Full Stack Web Development (MERN)",
    dates: "2023",
    logo: require("../images/MitXProLogo.png"),
  },
  {
    school: "Indiana University East",
    degree: "Bachelor of Science, Business Administration",
    dates: "2022",
    logo: require("../images/IndianaUniversityEastLogo.jpg"),
  },
];

export const community = [
  { title: "Township Trustee Nominee", org: "Westfield Washington Township, 2026" },
  { title: "President", org: "Homeowners Association Board" },
  { title: "Member", org: "UPS Veterans Business Readiness Group" },
  { title: "Volunteer", org: "Habitat for Humanity" },
];

export const skills = [
  {
    group: "Leadership",
    items: ["Operations Management", "P&L & Budgeting", "Strategic Planning", "Change Management", "Process Optimization", "Supply Chain Strategy"],
  },
  {
    group: "Data & AI",
    items: ["Python", "Pandas", "NumPy", "scikit-learn", "NLP", "Power BI", "SQL"],
  },
  {
    group: "Software",
    items: ["React", "JavaScript", "TypeScript", "Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    group: "Platforms",
    items: ["AWS", "Docker", "Firebase", "Auth0", "Git & GitHub", "Jira", "TMS / WMS"],
  },
];

export const recommendations = [
  {
    name: "Justin Mack",
    role: "General Manager, Veryable",
    quote:
      "Jeff brings focus, integrity, and drive to everything he does, which was evident from day 1. Jeff excels at breaking complex problems down into manageable parts and coaching others to perform at a high level.",
  },
  {
    name: "Christopher Robinson",
    role: "Hub Division Manager, UPS",
    quote:
      "Jeff Bledsoe always amazed me with his business insight and original methods to solving problems. He is not only a reliable and forward thinking manager but also an inspiring team player. He absolutely shines in a hectic environment.",
  },
];
