/** Set NEXT_PUBLIC_SITE_URL in Vercel once your domain is live. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://alexkang.vercel.app";

export const site = {
  name: "Alex Kang",
  legalName: "Zixuan Kang",
  handle: "alex-kang",
  role: "software engineer",
  role2: "ML researcher",
  tagline:
    "CS grad from UBC, incoming MSCS @ Columbia. I build in fintech, crypto and AI — systems where being fast and being correct are the same requirement.",
  building: "Fizz.bot",
  buildingUrl: "https://fizz.bot/",
  email: "zixuank0287@outlook.com",
  github: "https://github.com/AlexK020908",
  linkedin: "https://www.linkedin.com/in/alex-k-315745229/",
  resume: "/Alex_Kang_Resume.pdf",
};

export type Project = {
  name: string;
  blurb: string;
  stack: string;
  live?: string;
  repo?: string;
  terminal: { cmd: string; out: string[] };
};

export const projects: Project[] = [
  {
    name: "Clawlet",
    stack: "TypeScript · Next.js · Solana · Bun · Prisma",
    blurb:
      "Tell an AI agent what you need and it buys it for you. Real-world goods, paid in crypto, inside spending limits you set — no checkout, no card.",
    repo: "https://github.com/clawlet-app/clawlet",
    terminal: {
      cmd: "clawlet buy --item 'groceries' --usdc 60",
      out: [
        "→ wallet CLaW7f…q4CLaW · 214.30 USDC",
        "→ policy ok · tx 60.00 ≤ cap 100.00",
        "✓ settled in 1 block · card redeemed",
      ],
    },
  },
  {
    name: "StackBrief",
    stack: "Next.js 16 · TypeScript · Supabase / pgvector · Claude · Voyage AI",
    blurb:
      "The fastest way to keep up with AI. One brief instead of 130 feeds — every story appears once, ranked by how many outlets covered it rather than by engagement, so it can't be gamed.",
    repo: "https://github.com/AlexK020908/AI-News-Ranker",
    terminal: {
      cmd: "stackbrief ingest --since 15m",
      out: [
        "→ 383 sources · 1,204 articles",
        "→ embedding + clustering … 240 clusters",
        "✓ 96 duplicates collapsed · published",
      ],
    },
  },
  {
    name: "infra-designer",
    stack: "Python · Terraform · AWS · MCP",
    blurb:
      "Describe what you're building and get cloud infrastructure that fits. Your coding agent plans it, ships it, and tells you when reality drifts from the plan.",
    repo: "https://github.com/AlexK020908/infra-designer",
    terminal: {
      cmd: "infra design && infra audit",
      out: [
        "→ spec.json → alb + ecs + rds + s3",
        "→ terraform plan: 14 add, 0 change",
        "! drift: rds.class m5.large ≠ t3.medium",
      ],
    },
  },
];

export type Role = {
  company: string;
  title: string;
  where: string;
  when: string;
  stack: string;
  points: string[];
  /** Optional highlight rendered as a badge on the role card. */
  award?: string;
};

export const experience: Role[] = [
  {
    company: "Siemens",
    title: "Data Science Intern",
    where: "Beijing, China",
    when: "May — Sep 2025",
    stack: "Python · PySpark · Keras · AWS",
    points: [
      "Built a business classification system — fine-tuned transformer plus LightGBM, with focal loss for class imbalance — that improved F1 by 15% over the prior model.",
      "Built a PySpark pipeline consolidating 50M+ customer pricing records into annual product- and customer-level price-change metrics.",
      "Added a Keras VAE that flags anomalies in those pricing records, plus a Tesseract OCR pipeline that pulls contract numbers out of scanned PDFs by spatial alignment and binary search.",
    ],
  },
  {
    company: "Ace Automations",
    title: "Co-Founder",
    where: "Remote",
    when: "Dec 2023 — Jan 2025",
    stack: "Rust · Tokio · gRPC · Solana",
    award:
      "Users generated 7 figures in profits, including a single $3M day on $MOTHER",
    points: [
      "Led development of a profitable meme-coin trading system on Solana — the first automation software built on pump.fun.",
      "Built a multi-threaded transaction handler on a thread pool that fills buy/sell orders in under 100ms, roughly 20× faster than manual execution.",
      "Designed the gRPC and protobuf layer streaming to distributed clients, plus a statistical detector that flags anomalous launch patterns to keep users out of rug pulls.",
    ],
  },
  {
    company: "LMI Technologies",
    title: "Software Developer Intern",
    where: "Burnaby, BC",
    when: "Jan — Sep 2023",
    stack: "C++ · C · Python",
    points: [
      "Rewrote sensor initialization as a multi-threaded pipeline, cutting start-up time by 40%.",
      "Cut 20MB off build artifacts by resolving technical debt, and fixed the intermittent multi-threaded build failures that had been destabilizing the team's build server.",
      "Built the C++ mocking infrastructure the team now tests against.",
    ],
  },
];

export const research: Role[] = [
  {
    company: "Peking University",
    title: "Railway AI Video Surveillance Researcher",
    where: "Supervised by Prof. Zhang",
    when: "Jun — Nov 2025",
    stack: "Multimodal LLMs · LoRA",
    points: [
      "Fine-tuned multimodal LLMs with LoRA adapters and a temporal sliding-window sampling strategy to detect mudslides from live railway video and sensor feeds.",
      "Built environmental augmentations — rain intensity, fog density, debris — to cut false positives and harden recall across weather conditions.",
    ],
  },
  {
    company: "Algoverse AI Research",
    title: "Researcher",
    where: "Mentored by Shreyas (Amazon) & Kevin Zhu (UC Berkeley)",
    when: "Jun — Nov 2025",
    stack: "LLM reasoning · Bayesian methods",
    award: "Accepted to the Agentic AI in the Wild workshop, ICLR 2026",
    points: [
      "Extended the Uncertainty of Thoughts framework for LLM information-seeking with Bayesian prior estimation.",
      "Added multibranching to generalize beyond binary entropy-based splitting, plus likelihood caching over sentence-clustered questions.",
    ],
  },
];

export const skills = [
  { token: "C++", name: "c++", color: "#00a4d3" },
  { token: "Rs", name: "rust", color: "#ff7043" },
  { token: "Py", name: "python", color: "#ffd43b" },
  { token: "TS", name: "typescript", color: "#5aa2e8" },
  { token: "Sol", name: "solana", color: "#14f195" },
  { token: "SQL", name: "sql / nosql", color: "#4fc3f7" },
  { token: "Pt", name: "pytorch", color: "#ee4c2c" },
  { token: "Tf", name: "tensorflow", color: "#ff8f00" },
  { token: "Sk", name: "scikit-learn", color: "#f7931e" },
  { token: "Sp", name: "pyspark", color: "#e25a1c" },
  { token: "Nx", name: "next.js", color: "#e8e8ee" },
  { token: "Re", name: "react", color: "#61dafb" },
  { token: "Aws", name: "aws", color: "#ff9900" },
  { token: "Tfm", name: "terraform", color: "#a684ff" },
  { token: "Dk", name: "docker", color: "#2496ed" },
  { token: "RN", name: "react native", color: "#61dafb" },
];

export const skillGroups = [
  {
    label: "languages",
    items: "C++, Rust, Python, TypeScript/JavaScript, Java, SQL/NoSQL, x86-64, CUDA, Erlang, PHP",
  },
  {
    label: "machine learning",
    items:
      "Transformers, LoRA fine-tuning, VAEs, CNNs, SGD, MLE/MAP estimation, PCA/t-SNE",
  },
  {
    label: "frameworks",
    items: "PyTorch, TensorFlow, Scikit-learn, Pandas, NumPy, PySpark, OpenCV, React Native, Next.js",
  },
  {
    label: "infrastructure",
    items: "Kafka, Docker, Terraform, AWS (Lambda, ECS, VPC), PostgreSQL, Redis, gRPC/protobuf",
  },
  {
    label: "ai tooling",
    items: "Claude Code, Codex, Cursor, MCP servers, agent skills, prompt & context engineering",
  },
  {
    label: "interests",
    items: "Blockchain & DeFi, fintech, prediction markets, LLM reasoning & alignment, vision research",
  },
];

export const education = [
  {
    school: "Columbia University",
    degree: "M.S. Computer Science",
    when: "Starting Sep 2026",
    where: "New York, NY",
    note: null as string | null,
  },
  {
    school: "University of British Columbia",
    degree: "B.Sc. Computer Science",
    when: "Sep 2020 — May 2026",
    where: "Vancouver, BC",
    note: "GPA 3.76 / 4.0",
  },
];
