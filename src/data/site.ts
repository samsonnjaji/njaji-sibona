/** Central content for the portfolio — edit here to update the site. */
export const site = {
	title: "Njaji Samson Sibona | Software Engineer",
	description:
		"Full-stack engineer, product builder, Velora & SIONA — TypeScript, NestJS, Next.js, cloud & AI/ML. AWS Cloud Club co-lead & technical lead. Nairobi, Kenya.",
	url: "https://njaji-sibona.pages.dev",
	author: "Njaji Samson Sibona",
	roleLines: [
		"Full-stack engineer",
		"Co-Lead & Tech Lead · AWS Cloud Club",
		"Founder — Velora & SIONA",
	],
	location: "Nairobi, Kenya",
	email: "njajisamson@gmail.com",
	emailSecondary: "njajisibona.dev@gmail.com",
	phone: "+254 794 877 890",
	social: {
		github: "https://github.com/samsonnjaji",
		linkedin: "https://www.linkedin.com/in/njaji-sibona",
		credlyProfile: "https://www.credly.com/users/samson-njaji",
		awsCloudClubCredly:
			"https://www.credly.com/badges/2d026762-56e9-448f-9de1-f9ca62ae92db/public_url",
		/** IBM / data science — Credly earned badge */
		dataScienceCredly:
			"https://www.credly.com/earner/earned/badge/1c762022-678c-4a23-8d3c-a59dfdfc4c3d",
		/** NVIDIA — certificate on NVIDIA Learning */
		nvidiaCertificate:
			"https://learn.nvidia.com/certificates?id=_bvsqcx7SY-ggctVBxLhyQ",
	},
	githubUsername: "samsonnjaji",
} as const;

/** Filtered out of the live GitHub API list (client-side) — e.g. sensitive course repos */
export const githubExcludedRepoSlugs = ["jenga-elimu-platform"] as const;

/** Show these repo names first when present (e.g. flagship work like Velora) */
export const githubRepoBoostFirst = ["velora"] as const;

/** Short hero hook — long story lives in About */
export const heroHook =
	"I design and ship full-stack products: marketplaces, internal tools, and AI-backed systems — with the same rigor for UX, APIs, and data models.";

export const intro =
	"I build production web platforms, APIs, and data-backed products with a bias for clarity and shipping. Velora Marketplace is my flagship commerce product in Kenya; SIONA is the long-horizon intelligence stack I co-founded — still in active R&D. On campus and in community, I serve as co-lead and technical lead for the AWS Cloud Club core team — I did not found the chapter; I help run programs, mentor builders, and keep technical quality high.";

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
	{ label: "Products", value: "Velora · SIONA · client work" },
	{ label: "Community", value: "AWS Cloud Club co-lead" },
	{ label: "Stack", value: "TS · Nest · Next · Postgres" },
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
		description:
			"A hybrid multi-vendor ecommerce platform built around trust, quality, and reliable transactions. Verified sellers across Kenya onboard, list products, manage inventory, and serve customers through secure checkout, order workflows, and wallet-aware payments — with vendor growth tools, analytics, and admin controls.",
		tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Payments", "Multi-vendor"],
		primaryUrl: "https://velorasiona.com",
		primaryLabel: "Live product",
		githubUrl: "https://github.com/samsonnjaji/velora",
		githubLabel: "Source",
		featured: true,
	},
	{
		title: "SIONA",
		description:
			"A synthetic global brain in development: a human-hybrid intelligence platform combining perception, memory, reasoning, learning, and action into one evolving cognitive system — a persistent intelligence layer for software, automation, robotics, and human-centered decision systems.",
		tags: ["AI/ML", "Systems design", "Co-founder", "In development"],
		inDevelopment: true,
	},
	{
		title: "Property management system",
		description:
			"End-to-end web platform for portfolios, units, tenants, lease lifecycles, maintenance requests, and owner or agency dashboards — role-based access, notifications, and operational reporting tailored to real estate workflows.",
		tags: ["Web app", "TypeScript", "REST APIs", "PostgreSQL", "RBAC"],
		nda: true,
	},
	{
		title: "Internal ops & stakeholder dashboards",
		description:
			"Custom reporting and workflow tools for client teams: KPI views, approvals, and secure data hand-offs between departments. Built for clarity and auditability under real-world operational constraints.",
		tags: ["Dashboards", "TypeScript", "APIs", "Analytics"],
		nda: true,
	},
	{
		title: "ML evaluation & data-pipeline tooling",
		description:
			"Internal tooling for dataset handling, model evaluation runs, and quality metrics — supporting structured feedback loops and reproducible experiments for applied ML work.",
		tags: ["Python", "ML ops", "Pipelines", "QA metrics"],
		nda: true,
	},
	{
		title: "Ego Sum Venatus",
		description:
			"A 2D platformer with physics, collision handling, enemy behaviour, and multi-level progression — demonstrating game programming fundamentals and disciplined engineering.",
		tags: ["C++", "SFML", "Game dev"],
		primaryUrl: "https://github.com/samsonnjaji",
		primaryLabel: "GitHub profile",
	},
] as const;
