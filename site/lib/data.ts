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
    "MS CS (machine learning track) at Columbia, CS grad from UBC. I work in fintech, crypto and AI — systems where being fast and being correct are the same requirement.",
  building: "Fizz.bot",
  buildingUrl: "https://fizz.bot/",
  email: "zixuank0287@outlook.com",
  github: "https://github.com/AlexK020908",
  linkedin: "https://www.linkedin.com/in/alex-k-315745229/",
  resume: "/Alex_Kang_Resume.pdf",
};

/** Fizz.bot and what it taught me — rendered by components/Building.tsx. */
export const fizz = {
  name: "Fizz.bot",
  url: "https://fizz.bot/",
  tagline: "All of crypto at your fingertips.",
  pitch:
    "One app on your phone for everything worth trading in crypto, with a social layer that gave every call skin in the game. It was the app I wanted as a trader myself, and I got to build all of it with a small team: the mobile app, the Rust services behind it, and the real-time feeds.",
  features: [
    {
      label: "trade",
      text: "Prediction markets, perps, spot and memecoins, side by side instead of across four apps.",
    },
    {
      label: "social",
      text: "Follow traders by what they actually trade, not by what they post.",
    },
    {
      label: "execution",
      text: "Fast, reliable transactions — the part nobody notices until it breaks.",
    },
    {
      label: "rewards",
      text: "Referral rewards for everyone, to grow a community that lasts.",
    },
  ],
  stack: "React Native · TypeScript · Rust · gRPC · Postgres · Redis",
};

export const fizzLesson = {
  file: "alliance.md",
  title: "We interviewed with Alliance. We didn't get in.",
  intro:
    "It was a no — but it came with the most important lessons of the whole project.",
  worked:
    "the team. We were genuinely cohesive, and the partners called it out as a strength.",
  missing:
    "a vision sharp enough to answer three questions without hand-waving:",
  questions: [
    {
      label: "demand",
      text: "who wants this badly enough to switch from what they use today?",
    },
    {
      label: "moat",
      text: "what gets stronger for us over time and stays hard for anyone else to copy?",
    },
    {
      label: "incumbents",
      text: "when a large exchange sees it working, what stops them shipping the same features in a weekend?",
    },
  ],
  takeaway:
    "We're no longer working on Fizz. What I'm taking with me: I want to build inside a company — products with real demand and a real moat that help it beat its competitors.",
};

export type Project = {
  name: string;
  blurb: string;
  stack: string;
  /** Short tag above the title, e.g. the course and team size. */
  context?: string;
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

/** Columbia course projects. Repos are private (course rules / proprietary
 *  benchmark data), so these cards carry no links. */
export const courseProjects: Project[] = [
  {
    name: "AssetOpsBench harness",
    context: "HPML · team project with IBM Research",
    stack: "Python · DSPy · Claude API · Qwen 3.5 · MCP · Docker",
    blurb:
      "AI agents kept failing IBM's maintenance benchmark, which asks them to count things across 1,076 work-order notes. I built our team's fix: label every note once, then have the model write code to do the counting. It beat IBM's reference agent on unseen scenarios and brought a small 9B open model up to frontier-model level.",
    terminal: {
      cmd: "harness eval --split test",
      out: [
        "→ 19 held-out scenarios",
        "→ IBM reference agent: 0.458",
        "✓ ours: 0.585 mean closeness",
      ],
    },
  },
  {
    name: "Trader-strategy agent",
    context: "LLM-Based Generative AI · team of 2",
    stack: "Python · Claude Opus 5.5 · MCP · XGBoost · Dune SQL",
    blurb:
      "Every Solana memecoin trade is public — but not why a wallet buys. I built a Claude agent that studies a trader's history and writes their strategy down as a short checklist of readable rules, then tests it on weeks it never saw.",
    terminal: {
      cmd: "playbook learn --wallets 12",
      out: [
        "→ sniper bot: 96% / 94% P/R",
        "→ humans: 70% / 69% P/R held-out",
        "✓ beats single prompt on 10/12",
      ],
    },
  },
  {
    name: "GPU kernels & profiling",
    context: "HPML · solo",
    stack: "CUDA C · cuBLAS · PyTorch · torch.profiler · T4 / A100",
    blurb:
      "Writing CUDA by hand: memory coalescing, a tiled matmul, and a FlashAttention-style attention kernel with online softmax that beat the cuBLAS version. Then profiling real training — mixed precision took DistilBERT fine-tuning from 141 to 38 ms a step.",
    terminal: {
      cmd: "./attention --n 2048 --d 64",
      out: [
        "→ naive 64.55 ms · cuBLAS 56.29 ms",
        "✓ tiled + online softmax: 50.86 ms",
        "→ checksums match: 623032.963",
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
      "Built a business classification system — fine-tuned transformer plus LightGBM, with focal loss and synthetic sampling for class imbalance — that improved F1 by 15% and accuracy by 12%.",
      "Built a PySpark pipeline consolidating 50M+ customer pricing records into annual product- and customer-level price-change metrics.",
      "Trained a Keras VAE anomaly detector on 300GB of those pricing records; it matched manual review and surfaced 10% of previously undetected anomalies.",
      "Built a Tesseract OCR pipeline that parses 200+ mixed-format PDFs a month by spatial alignment and binary search, saving about 5 minutes of manual entry per document.",
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
      "Led development of a meme-coin trading system on Solana across pump.fun, Meteora and Raydium — the first automation software built on pump.fun — serving 200 users at $100K+ peak daily volume.",
      "Built a multi-threaded transaction handler on a thread pool that fills buy/sell orders in under 100ms, roughly 20× faster than manual execution, and used Tokio Console to fix the deadlocks hanging 20% of users.",
      "Designed the gRPC and protobuf layer streaming to 1,000+ concurrent clients, plus a statistical detector on launch patterns that caught 80% of scam tokens before users bought in.",
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
      "Cut build artifacts by 20MB (~65%) by resolving technical debt, and fixed the threading failures and deadlocks that had been destabilizing the team's build server.",
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
      "Built environmental augmentations — rain intensity, fog density, debris — that cut false positives and raised recall by 7% in adverse weather.",
    ],
  },
  {
    company: "Algoverse AI Research",
    title: "Researcher",
    where: "Mentored by Shreyas (Amazon) & Kevin Zhu (UC Berkeley)",
    when: "Jun — Nov 2025",
    stack: "LLM reasoning · Bayesian methods",
    award:
      "Published: CA-BED: Conversation-Aware Bayesian Experimental Design — ICLR 2026, Agentic AI in the Wild workshop",
    points: [
      "Extended the Uncertainty of Thoughts framework for LLM information-seeking with Bayesian priors, beating it by 17.0% and 22.5% on two benchmarks.",
      "Added multi-branching answer planning — 89.2% on 20 Questions, with dialogs cut from 12.8 to 8.8 turns — plus likelihood caching over sentence-clustered questions to skip redundant model calls.",
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
      "Transformers, LoRA fine-tuning, quantization, mixed precision, VAEs, CNNs, MLE/MAP estimation, PCA/t-SNE",
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
    items: "Claude API, MCP servers, DSPy, LangChain, Claude Code, Codex, Cursor, agent sandboxing, context engineering",
  },
  {
    label: "interests",
    items: "Blockchain & DeFi, fintech, prediction markets, LLM reasoning & alignment, vision research",
  },
];

export const education = [
  {
    school: "Columbia University",
    degree: "M.S. Computer Science · Machine Learning track",
    when: "Sep 2026 — Dec 2027 (expected)",
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

export const coursework = [
  {
    label: "columbia · fall 2026",
    items: [
      "High Performance Machine Learning",
      "LLM-Based Generative AI",
      "Designing Production Agentic Systems",
      "Databases",
    ],
  },
  {
    label: "columbia · spring 2027",
    items: [
      "Natural Language Processing",
      "Artificial Intelligence",
      "Applied Deep Learning",
      "Computer Vision II: Learning",
      "Advanced Spoken Language Processing",
    ],
  },
  {
    label: "ubc",
    items: [
      "Advanced Algorithm Design",
      "Advanced Machine Learning",
      "Parallel Computation",
      "Computer Hardware & Operating Systems",
      "Advanced Relational Databases",
    ],
  },
];
