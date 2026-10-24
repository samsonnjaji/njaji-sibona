/** Public-facing portfolio content. Keep undisclosed research details out of this public repository. */
export const site = {
  title: "Njaji Samson Sibona | Software Engineer & Researcher",
  description: "Samson Sibona Njaji — software engineer, co-founder and CTO of SIONA Technologies, exploring applied AI and building practical digital systems.",
  url: "https://njaji-sibona.pages.dev",
  avatar: "/profile.png",
  author: "Njaji Samson Sibona",
  displayName: "Samson Sibona Njaji",
  location: "Nairobi, Kenya",
  email: "njajisamson@gmail.com",
  emailSecondary: "njajisibona.dev@gmail.com",
  phone: "+254 794 877 890",
  social: {
    github: "https://github.com/samsonnjaji",
    linkedin: "https://www.linkedin.com/in/njaji-sibona",
    credlyProfile: "https://www.credly.com/users/samson-njaji",
    awsCloudClubCredly: "https://www.credly.com/badges/2d026762-56e9-448f-9de1-f9ca62ae92db/public_url",
    dataScienceCredly: "https://www.credly.com/earner/earned/badge/1c762022-678c-4a23-8d3c-a59dfdfc4c3d",
    nvidiaCertificate: "https://learn.nvidia.com/certificates?id=_bvsqcx7SY-ggctVBxLhyQ"
  },
  githubUsername: "samsonnjaji"
} as const;

/** Filtered out of the live GitHub API list (client-side) — e.g. sensitive course repos */
export const githubExcludedRepoSlugs = ["jenga-elimu-platform"] as const;

/** Show these repo names first when present (e.g. flagship work like Velora) */
export const githubRepoBoostFirst = ["velora"] as const;

/** Short hero hook — long story lives in About */
export const heroHook = "I build dependable software and explore the questions that make intelligent systems possible.";

export const intro = "I am a software engineer and co-founder & CTO of SIONA Technologies. My work spans applications, APIs, cloud systems, and early-stage applied AI exploration. I founded Velora Marketplace, contribute to technical community learning, and approach research with curiosity and rigorous experimentation.";

/** Scrolling tech strip — reads like a real portfolio “stack cloud”, not a CV line */
export const stackMarquee = [
	"TypeScript",
	"JavaScript",
	"Python",
	"Java",
	"C++",
	"Next.js",
	"React",
	"NestJS",
	"Node.js",
	"REST",
	"PostgreSQL",
	"SQL",
	"Redis",
	"Prisma",
	"Docker",
	"Linux",
	"Git",
	"GitHub Actions",
	"AWS EC2",
	"S3",
	"IAM",
	"RDS",
	"Tailwind CSS",
	"HTML5",
	"CSS3",
	"WebSockets",
	"JWT / auth",
	"RBAC",
	"Jest",
	"PyTorch",
	"NLP",
	"Pandas",
	"NumPy",
	"SFML",
	"IntelliJ",
	"VS Code",
] as const;

export const heroStats = [
  { label: "Focus", value: "Software systems" },
  { label: "Research", value: "Applied intelligence" },
  { label: "Community", value: "AWS Cloud Club" }
] as const;

export const skillGroups = [
	{
		title: "Web & APIs",
		subtitle: "End-to-end application layers",
		bento: "hero" as const,
		tags: [
			"Next.js",
			"React",
			"NestJS",
			"Node.js",
			"TypeScript",
			"JavaScript",
			"REST APIs",
			"WebSockets",
			"HTML5",
			"CSS3",
			"Tailwind CSS",
			"Responsive UI",
			"JWT & sessions",
			"RBAC",
		],
	},
	{
		title: "Data & persistence",
		subtitle: "Models, queries, migrations",
		bento: "default" as const,
		tags: [
			"PostgreSQL",
			"SQL",
			"Redis",
			"Prisma / ORM patterns",
			"Schema design",
			"Migrations",
			"Indexing & performance",
		],
	},
	{
		title: "AI, ML & data science",
		subtitle: "Applied ML and evaluation",
		bento: "default" as const,
		tags: [
			"Python",
			"PyTorch (basics)",
			"NLP",
			"Pandas",
			"NumPy",
			"Statistics",
			"Experiment tracking",
			"Model evaluation",
		],
	},
	{
		title: "Cloud & DevOps",
		subtitle: "Ship and operate",
		bento: "default" as const,
		tags: [
			"AWS (EC2, S3, IAM, RDS)",
			"Docker",
			"Linux",
			"Git",
			"GitHub",
			"CI concepts",
			"Env & secrets hygiene",
			"Observability basics",
		],
	},
	{
		title: "Languages & systems",
		subtitle: "From services to games",
		bento: "default" as const,
		tags: [
			"Java (Spring-adjacent patterns)",
			"C++",
			"SFML",
			"Game loops & physics",
			"Algorithms",
			"Data structures",
		],
	},
	{
		title: "How I work",
		subtitle: "Engineering practice",
		bento: "wide" as const,
		tags: [
			"System design",
			"Code review",
			"Testing mindset",
			"API contracts",
			"Documentation",
			"Mentoring",
			"Pair debugging",
			"NDA-aware delivery",
		],
	},
] as const;

export const credentials = [
	{
		featured: true,
		name: "AWS Cloud Clubs — Core Team",
		subtitle: "Co-Lead & Technical Lead",
		issuer: "Amazon Web Services (Credly)",
		year: "2025",
		url: "https://www.credly.com/badges/2d026762-56e9-448f-9de1-f9ca62ae92db/public_url",
	},
	{
		name: "IBM SkillsBuild — Data Fundamentals",
		year: "2025",
		url: "https://www.credly.com/earner/earned/badge/1c762022-678c-4a23-8d3c-a59dfdfc4c3d",
		linkLabel: "View badge on Credly",
	},
	{
		name: "NVIDIA DLI — Fundamentals of Deep Learning",
		year: "2025",
		url: "https://learn.nvidia.com/certificates?id=_bvsqcx7SY-ggctVBxLhyQ",
		linkLabel: "View certificate on NVIDIA",
	},
] as const;

/** `nda` = no public repo; `inDevelopment` = still building, not NDA */
export const projects = [
  {
    title: "Velora Marketplace",
    category: "Product engineering",
    description: "A multi-vendor commerce platform focused on trusted seller experiences, order workflows and reliable application architecture.",
    tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"],
    primaryUrl: "https://velorasiona.com",
    primaryLabel: "Visit product",
    featured: true
  },
  {
    title: "SIONA Technologies",
    category: "Company · Co-founder & CTO",
    description: "The technology company I co-founded, building software and intelligent systems with a focus on practical engineering and long-term innovation.",
    tags: ["Engineering", "Cloud", "Technology leadership"],
    primaryUrl: "https://sionaglobal.com",
    primaryLabel: "Company website"
  },
  {
    title: "Sibona AI",
    category: "Independent exploration · Early-stage",
    description: "A public window into my exploration of applied AI, learning and dependable systems. Experiments are ongoing; unpublished research methods and results remain private.",
    tags: ["Applied AI", "Learning systems", "Experiments"],
    inDevelopment: true
  },
  {
    title: "Property management platform",
    category: "Selected client work · Confidential",
    description: "Role-aware tenant, lease and operations workflows with database-backed reporting. Client and implementation details are protected.",
    tags: ["REST APIs", "PostgreSQL", "RBAC"],
    nda: true
  },
  {
    title: "ML evaluation workflows",
    category: "Applied ML · Confidential",
    description: "Python-based tooling for dataset handling, evaluation runs and reproducible quality checks, with confidential implementation details withheld.",
    tags: ["Python", "Pandas", "Evaluation"],
    nda: true
  }
] as const;
