export const profile = {
  name: "Chirag Chandel",
  title: "Full-Stack Developer",
  location: "Bilaspur, Himachal Pradesh, India",
  description: "I build web applications and the systems behind them, from the interface people use to the APIs and data that make it work.",
  linkedin: "https://www.linkedin.com/in/chirag-chandel1016/",
  github: "https://github.com/ExploreInsight",
  workGithub: "https://github.com/chiragpeacockindia",
  education: "Government Polytechnic Sundernagar",
};

type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  overview: string;
  highlights: string[];
  stack: string[];
  repository: string;
  liveUrl?: string;
  icon?: string;
  cover?: { src: string; alt: string; theme: string; width: number; height: number };
};

export const projects: Project[] = [
  {
    slug: "chit-chat",
    name: "Chit Chat",
    category: "Real-time messaging",
    summary: "One-to-one messaging with live presence, image sharing, and a customizable interface.",
    overview: "Chit Chat pairs a persistent conversation history with real-time delivery and online presence. On smaller screens, the layout moves between the contact list and the active conversation.",
    highlights: [
      "Used Socket.IO to deliver messages and broadcast presence changes.",
      "Added image attachments and profile uploads using Cloudinary.",
      "Built theme preferences, contact search, and a responsive chat layout.",
    ],
    stack: ["React", "Express", "MongoDB", "Socket.IO", "Zustand", "Cloudinary"],
    repository: "https://github.com/ExploreInsight/Chit-Chat",
    liveUrl: "https://chit-chat-tgog.onrender.com/",
    cover: { src: "/projects/chit-chat.svg", alt: "Redesigned Chit Chat with contact search and a conversation", theme: "plum", width: 1200, height: 675 },
  },
  {
    slug: "supperfastshop",
    name: "supperFastShop",
    category: "E-commerce",
    summary: "A streetwear storefront that connects product discovery, a size-aware cart, and Stripe Checkout.",
    overview: "A full-stack streetwear shop built around a retail hang-tag visual system. The storefront and admin dashboard cover the flow from listing products to reviewing paid orders.",
    highlights: [
      "Built browsing and product filters for category, size, and price.",
      "Connected size-specific cart items, coupons, and order history to Stripe Checkout.",
      "Added admin tools for inventory, product media, and sales reporting.",
    ],
    stack: ["React", "Vite", "Express", "MongoDB", "Stripe", "Zustand"],
    repository: "https://github.com/ExploreInsight/supperFastShop",
    liveUrl: "https://supperfastshop.onrender.com/",
    cover: { src: "/projects/supperfastshop.svg", alt: "supperFastShop streetwear storefront preview", theme: "sand", width: 1200, height: 675 },
  },
  {
    slug: "be2gether",
    name: "be2gether",
    category: "Social app",
    summary: "A Next.js social app with a post feed, user profiles, follows, and notifications.",
    overview: "be2gether brings together publishing, media uploads, and social interactions in a Next.js App Router project. Its server actions handle updates for users, profiles, posts, and notifications.",
    highlights: [
      "Integrated Clerk for sign-in and session management.",
      "Used Prisma and PostgreSQL for profiles, posts, and follows.",
      "Added image uploads with UploadThing and light and dark appearance options.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "UploadThing"],
    repository: "https://github.com/ExploreInsight/be2gether",
    liveUrl: "https://be2gether.vercel.app/",
    cover: { src: "/projects/be2gether.png", alt: "be2gether desktop feed with posts and user profiles", theme: "mint", width: 1440, height: 900 },
  },
  {
    slug: "media-sphere",
    name: "Media Sphere",
    category: "Social app",
    summary: "A social feed with text and photo posts, searchable timelines, and shareable post links.",
    overview: "Media Sphere provides separate feeds for discovering, following, and saving posts. Shared post links return signed-out readers to the post after they sign in.",
    highlights: [
      "Built publishing, replies, following, and notifications.",
      "Used TanStack Query for data fetching and Zod for validation.",
      "Added browser-local bookmarks and persistent appearance preferences.",
    ],
    stack: ["React", "Express", "MongoDB", "TanStack Query", "Zod", "Cloudinary"],
    repository: "https://github.com/ExploreInsight/Media-Sphere",
    liveUrl: "https://media-sphere.onrender.com/",
    cover: { src: "/projects/media-sphere.webp", alt: "Redesigned Media Sphere feed in the Mocha theme with sample posts", theme: "rose", width: 1280, height: 720 },
  },
  {
    slug: "chess",
    name: "Chess",
    category: "Game engineering",
    summary: "Local two-player chess with a reusable TypeScript rules engine.",
    overview: "The playable web app keeps the rules in a standalone package inside a Bun and Turborepo monorepo. That separation lets the UI evolve independently of move validation and game state.",
    highlights: [
      "Implemented legal moves, check, checkmate, and promotion.",
      "Handled castling, en passant, stalemate, repetition, and other draw rules.",
      "Kept online play, AI opponents, and mobile on the roadmap.",
    ],
    stack: ["TypeScript", "React", "Vite", "Bun", "Turborepo"],
    repository: "https://github.com/ExploreInsight/chess",
  },
  {
    slug: "snapper",
    name: "Snapper",
    category: "Native macOS",
    summary: "A Swift utility for finding, switching, and arranging macOS windows.",
    overview: "Snapper offers a searchable overview of open windows, including separate windows of the same app. A menu bar item and keyboard shortcuts make the same actions available while another app is focused.",
    highlights: [
      "Added left and right snapping, maximize, and session-based restore.",
      "Used the display’s available area so windows stay clear of the menu bar and Dock.",
      "Supported optional window previews through ScreenCaptureKit.",
    ],
    stack: ["Swift", "macOS", "ScreenCaptureKit", "Accessibility"],
    repository: "https://github.com/ExploreInsight/new",
  },
  {
    slug: "ai-notes",
    name: "AI Notes",
    category: "Applied AI",
    summary: "A notes app with search, Gemini summaries, and suggested tags.",
    overview: "AI Notes combines regular note organization with optional Gemini assistance. The app uses Clerk sessions and stores notes in PostgreSQL.",
    highlights: [
      "Built note creation, editing, deletion, and search.",
      "Used Hono endpoints to generate summaries and tags with Gemini.",
      "Built the interface using the Next.js App Router and Tailwind.",
    ],
    stack: ["Next.js", "Hono", "Gemini", "PostgreSQL", "Prisma", "Clerk"],
    repository: "https://github.com/ExploreInsight/AI-Notes",
    liveUrl: "https://ainotes-rho.vercel.app/",
  },
  {
    slug: "ui-audit",
    name: "UI Audit",
    category: "Developer tooling",
    summary: "A Chrome extension that checks a page’s computed styles against design rules.",
    overview: "UI Audit scans a page and reports where its computed styles diverge from the selected rules. The extension formats results so they can be reviewed by a developer or passed to a coding agent.",
    highlights: [
      "Built a Plasmo extension with a TypeScript rule engine.",
      "Added configurable rules and local browser storage.",
      "Exported findings as JSON, Markdown, or an agent prompt.",
    ],
    stack: ["TypeScript", "React", "Plasmo", "Chrome Storage", "Tailwind CSS"],
    repository: "https://github.com/ExploreInsight/ui-scanner",
    icon: "/projects/ui-audit.png",
  },
];

export const experience = [
  {
    name: "Logistics platform",
    scope: "Booking, fleet, and billing",
    description: "Built per-booking driver incentive workflows for shared jobs and synced payment state with the driver app. Also worked on booking interfaces, admin tables, and invoice PDFs.",
  },
  {
    name: "Desktop time tracking",
    scope: "Desktop integration and reporting",
    description: "Integrated a Rust desktop tracker with its web app through device linking, durable session sync, and authorized uploads. Added admin reports and timezone-aware Excel exports.",
  },
  {
    name: "Digital publishing",
    scope: "Android app and CMS",
    description: "Improved payment resume behavior and OCR asset loading on Android. Connected article cover links and media workflows across the app and Directus CMS.",
  },
];

export const skillGroups = [
  { name: "Frontend", skills: ["TypeScript", "JavaScript", "React", "Next.js", "Vite", "Tailwind CSS"] },
  { name: "Backend & Data", skills: ["Node.js", "Express", "Hono", "PostgreSQL", "MongoDB", "Prisma"] },
  { name: "Tools & Infrastructure", skills: ["Git", "Docker", "Google Cloud", "Cloudflare", "Bun", "Playwright"] },
];

export const openSource = {
  name: "TableCraft",
  description: "Added optional timezone and locale formatting for CSV and XLSX exports.",
  url: "https://github.com/jacksonkasi1/TableCraft/pull/39",
};
