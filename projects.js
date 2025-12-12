/*
  List of projects for Risab Bhandari's portfolio.
*/

const projects = [
  {
    slug: "paakyo",
    title: "Paakyo — Food Delivery Platform",
    subtitle:
      "Cross-platform mobile app and backend APIs for ordering, cart logic and delivery workflows.",
    pageUrl: "projects/paakyo.html",
    tech: ["React Native", "Django REST", "PostgreSQL", "Firebase", "Google Maps API"],
    highlights: [
      "Built role-based flows for customers, cooks and restaurants with real-time order tracking",
      "Designed backend APIs for carts, orders and menu management",
      "Integrated Firebase Authentication, push notifications and geolocation features"
    ],
    links: {
      caseStudy: "projects/paakyo.html",
      github: "#",
      demo: "#"
    }
  },
  {
    slug: "dormna",
    title: "Dormna — Roommate Matching System",
    subtitle:
      "Full-stack web app with a matching engine using normalization and similarity scoring.",
    pageUrl: "projects/dormna.html",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Python", "pandas", "scikit-learn"],
    highlights: [
      "Multi-step React questionnaire UI to capture lifestyle and preference data",
      "Backend API to store structured responses and serve match results securely",
      "Python scoring pipeline using pandas and scikit-learn similarity metrics"
    ],
    links: {
      caseStudy: "projects/dormnna.html",
      github: "#",
      demo: "#"
    }
  },
  {
    slug: "paa-calendar",
    title: "Paa Calendar Project",
    subtitle:
      "Generated downloadable calendars integrating Nepali Bikram Sambat and Newari lunar dates.",
    pageUrl: "projects/paa-calendar.html",
    tech: ["Python", "FastAPI", "icalendar", "Google Calendar API", "Next.js"],
    highlights: [
      "Mapped lunar and annotated event data into valid .ics structures",
      "Built a FastAPI service to dynamically generate and serve calendar files",
      "Ensured compatibility with Google and Apple calendar import workflows"
    ],
    links: {
      caseStudy: "projects/paa-calendar.html",
      github: "#",
      demo: "#"
    }
  }
];
