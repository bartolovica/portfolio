/**
 * Single source of truth for all page content.
 * Nothing here is invented: data comes from the CV and the public GitHub repos.
 * Fields marked `null` are TODO(antun) and their section is hidden until filled.
 */

export type Link = { label: string; href: string; ariaLabel: string };

export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string; // YYYY-MM
  end: string | null; // null = current
  startLabel: string;
  endLabel: string;
  tech: string[];
  /** TODO(antun): 2–3 concrete sentences per position. Hidden while empty. */
  summary: string[];
};

export type Project = {
  repo: string;
  url: string;
  description: string;
  stack: string[];
  features: string[];
};

export type SkillGroup = { group: string; items: string[] };
export type Credential = { title: string; org: string; period: string };

export const site = {
  name: "Antun Bartolović",
  firstName: "Antun",
  title: "Software Engineer – Java & Spring Boot backend",
  shortTitle: "Software Engineer",
  tagline:
    "Backend engineer building reactive, event-driven services with Java, Spring Boot and Kafka.",
  location: "Zagreb, Croatia",
  languages: ["Croatian", "English", "German"],
  professionalSince: 2018,
  backendSince: "April 2019",
  /** TODO(antun): 3–5 sentences. About section is hidden while null. */
  about: null as string[] | null,
  /** TODO(antun): "Open to work / freelance" badge. Hidden while null. */
  availability: null as string | null,
  /** TODO(antun): public CV without phone number and date of birth. Hidden while null. */
  cvUrl: null as string | null,
  /** Production URL (canonical, sitemap, Open Graph). Override with NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://antunbartolovic.netlify.app",
  email: "antunbart@gmail.com",
  links: {
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/antunbartolovic",
      ariaLabel: "Antun Bartolović on LinkedIn (opens in a new tab)",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/bartolovica",
      ariaLabel: "Antun Bartolović on GitHub (opens in a new tab)",
    },
    email: {
      label: "Email",
      href: "mailto:antunbart@gmail.com",
      ariaLabel: "Send an email to Antun Bartolović",
    },
  } satisfies Record<string, Link>,

  nav: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ],

  experience: [
    {
      id: "huddle",
      role: "Software Engineer",
      company: "Huddle",
      location: "Zagreb",
      start: "2023-04",
      end: null,
      startLabel: "Apr 2023",
      endLabel: "Present",
      tech: [
        "Java 17",
        "Spring Boot (Reactor/WebFlux)",
        "Kafka",
        "PostgreSQL",
        "Redis",
        "GitLab CI/CD",
        "Kubernetes",
        "WebSockets",
        "JavaScript",
        "Snowflake",
      ],
      summary: [],
    },
    {
      id: "globallogic",
      role: "Software Engineer",
      company: "GlobalLogic Croatia",
      location: "Zagreb",
      start: "2021-08",
      end: "2023-04",
      startLabel: "Aug 2021",
      endLabel: "Apr 2023",
      tech: [
        "Java 11",
        "Spring Boot",
        "Maven",
        "JMS",
        "PostgreSQL",
        "Jenkins",
        "SonarQube",
        "Git (Bitbucket)",
        "Elasticsearch",
      ],
      summary: [],
    },
    {
      id: "maurer",
      role: "Software Engineer",
      company: "Maurer Electronics GmbH",
      location: "Split",
      start: "2019-04",
      end: "2021-08",
      startLabel: "Apr 2019",
      endLabel: "Aug 2021",
      tech: [
        "Java 8",
        "Spring Boot",
        "Maven",
        "PostgreSQL",
        "Linux",
        "Kafka",
        "Docker",
        "Kubernetes",
        "Helm",
        "Jira",
        "Confluence",
      ],
      summary: [],
    },
    {
      id: "adplastik",
      role: "Software Engineer",
      company: "AD Plastik Group",
      location: "Solin",
      start: "2018-09",
      end: "2019-04",
      startLabel: "Sep 2018",
      endLabel: "Apr 2019",
      tech: ["Angular (2–4)", "C#", ".NET", "SQL Server"],
      summary: [],
    },
    {
      id: "adplastik-junior",
      role: "Junior Developer (part-time, student)",
      company: "AD Plastik Group",
      location: "Solin",
      start: "2017-06",
      end: "2017-12",
      startLabel: "Jun 2017",
      endLabel: "Dec 2017",
      tech: ["Angular (2–4)"],
      summary: [],
    },
  ] satisfies Experience[],

  /** Descriptions written from the actual code and READMEs of each repository. */
  projects: [
    {
      repo: "product-service",
      url: "https://github.com/bartolovica/product-service",
      description:
        "Non-blocking product API on Spring WebFlux and R2DBC. Prices are stored in EUR and returned with a USD value computed from the Croatian National Bank exchange rate.",
      stack: [
        "Java 17",
        "Spring Boot",
        "WebFlux",
        "Project Reactor",
        "Spring Data R2DBC",
        "PostgreSQL",
        "Spring Security",
        "Caffeine",
        "MapStruct",
        "OpenAPI",
        "Docker Compose",
      ],
      features: [
        "Reactive end to end: WebFlux controllers, R2DBC repository and a WebClient call to the HNB rate API.",
        "Async Caffeine cache that refreshes the USD/EUR rate once per hour.",
        "Basic auth with admin and customer roles, a custom unique-code validator, Swagger UI and Docker Compose for PostgreSQL.",
      ],
    },
    {
      repo: "online-book-store",
      url: "https://github.com/bartolovica/online-book-store",
      description:
        "REST API for a book shop: inventory, customers and cart purchases that produce an itemised invoice with discounts and loyalty points.",
      stack: [
        "Java 19",
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "H2",
        "Jakarta Validation",
        "Maven",
      ],
      features: [
        "Discount rules per book type (new release, regular, old edition) and bundle size, configured through typed configuration properties.",
        "Loyalty scheme: after ten points the cheapest regular or old-edition book in the cart is free.",
        "Transactional purchase flow that checks inventory, reduces stock and saves an invoice with price, discount, quantity and total per item.",
      ],
    },
    {
      repo: "blog",
      url: "https://github.com/bartolovica/blog",
      description:
        "Blog REST API with posts and comments, split into a public read API and a role-protected write API.",
      stack: [
        "Java 17",
        "Spring Boot",
        "Spring Data JPA",
        "Spring Security",
        "H2",
        "MapStruct",
        "Hibernate Validator",
        "JUnit",
      ],
      features: [
        "Public read endpoints with paged and sorted post listing.",
        "Method-level security: admins create and delete posts, visitors add comments.",
        "Request-to-entity mapping with MapStruct, seeded schema and data on startup, service-level unit tests.",
      ],
    },
  ] satisfies Project[],

  skills: [
    {
      group: "Backend",
      items: [
        "Java 8–17",
        "Spring Boot",
        "Spring WebFlux / Project Reactor",
        "REST",
        "WebSockets",
        "JMS",
      ],
    },
    {
      group: "Messaging & data",
      items: ["Kafka", "PostgreSQL", "Redis", "Elasticsearch", "Snowflake", "SQL Server"],
    },
    {
      group: "DevOps",
      items: ["Docker", "Kubernetes", "Helm", "GitLab CI/CD", "Jenkins", "SonarQube", "Linux"],
    },
    {
      group: "Other",
      items: ["Maven", "Git", "JavaScript", "Angular", "C# / .NET", "Scrum"],
    },
  ] satisfies SkillGroup[],

  education: [
    {
      title: "Master's degree, Computer Science",
      org: "FESB, University of Split",
      period: "2016 – 2018",
    },
  ] satisfies Credential[],
  certifications: [
    {
      title: "Professional Scrum Master I (PSM I)",
      org: "Scrum.org",
      period: "January 2019",
    },
  ] satisfies Credential[],
};

export type Site = typeof site;
