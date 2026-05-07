export type Category =
  | "All"
  | "Systems Build"
  | "Email Campaigns"
  | "Operations"
  | "Content"
  | "Volunteer"
  | "Videos";

export interface Project {
  title: string;
  slug: string;
  year: string;
  description: string;
  fullDescription: string[];
  categories: Category[];
  image: string;
  images?: string[];
  video?: string;
  youtubeId?: string;
  tags?: string[];
  link?: string;
  bg: string;
}

export const projects: Project[] = [
  {
    title: "Siren Studios — Workshop Email Campaign",
    slug: "siren-workshop-email",
    year: "2026",
    description:
      "Two-email sequence for a photography studio launching a lighting workshop. Wrote the copy, coded the HTML, and pushed it live in the studio's voice — the workshop finally launched.",
    fullDescription: [
      "James had been planning this workshop for months. It existed in conversations, in notes, in intentions — but it had not launched. The emails had not gone out. The promotions had not posted.",
      "Ann came in and built a two-email HTML sequence in AWeber for Siren Studios — a photography studio running a lighting workshop. She wrote both emails from scratch in James's voice, coded the HTML, and pushed the campaign live.",
      "The workshop launched. The emails went out. The thing that had been planned became a thing that existed.",
      "This project sits at the centre of how Ann works: she doesn't just build the thing — she holds the founder accountable to their own plan until it's done.",
    ],
    categories: ["Email Campaigns"],
    image: "/feed-a-child.jpg",
    tags: ["Email Copy", "HTML", "AWeber"],
    link: "#",
    bg: "linear-gradient(135deg, #f5f0f4 0%, #ffffff 50%, #f8f4f7 100%)",
  },
  {
    title: "Heritage Proposal System",
    slug: "heritage-proposal-system",
    year: "2026",
    description:
      "Auto-generated custom cake proposals inside Dubsado — branded forms, smart fields, and package selectors that trigger contracts and invoices on acceptance.",
    fullDescription: [
      "The proposal system is the centrepiece of the Heritage Custom Cakes Dubsado build. Before Ann, Clara was creating proposals manually — writing each one from scratch, attaching a PDF, chasing signatures, then sending an invoice separately.",
      "Ann built a fully automated proposal flow inside Dubsado. Smart fields pull from the initial inquiry form so proposals populate automatically. Package selectors calculate pricing. When the client accepts the proposal, the contract triggers. When the contract is signed, the invoice generates.",
      "Clara's input ends at the inquiry. Everything after is the system.",
    ],
    categories: ["Systems Build"],
    image: "/heritage-proposal-system.jpg",
    images: ["/heritage-dubsado-build.jpg"],
    tags: ["Dubsado", "Forms", "Proposals"],
    link: "#",
    bg: "linear-gradient(150deg, #0a0a0a 0%, #141014 50%, #0d0d0d 100%)",
  },
  {
    title: "Your Open Rate Is Lying To You",
    slug: "open-rate-lying",
    year: "2026",
    description:
      "LinkedIn editorial on why open rates are broken — Apple Mail pre-fetches, corporate scanners, proxy servers — and the metrics that actually tell the story.",
    fullDescription: [
      "Open rates have been the default measure of email performance for years. Ann wrote this piece to challenge that — Apple Mail pre-fetches emails and marks them as opened before the reader ever sees them. Corporate email scanners do the same. Proxy servers trigger pixels automatically.",
      "The post broke down which metrics actually reflect engagement: click-through rate, reply rate, unsubscribe patterns, and revenue per email. It's part of an ongoing editorial series on email marketing Ann runs on LinkedIn.",
      "The piece performed well with founders and marketers who had been optimising for a number that wasn't telling them what they thought it was.",
    ],
    categories: ["Content"],
    image: "/Open rates.png",
    tags: ["LinkedIn", "Email Marketing"],
    link: "#",
    bg: "linear-gradient(145deg, #0d0d0d 0%, #141014 100%)",
  },
  {
    title: "Ops Desk — HubSpot Email Build",
    slug: "ops-desk-hubspot",
    year: "2026",
    description:
      "Designed and shipped the first of a three-email welcome series inside HubSpot — showing range across ESPs and comfort with enterprise tools.",
    fullDescription: [
      "The Ops Desk newsletter launched a new lead magnet and needed a welcome sequence to match. Ann designed and shipped the first email in a three-part series inside HubSpot.",
      "This project matters beyond the deliverable — it demonstrates range. Most operations VAs work inside one or two platforms. Ann built this in HubSpot while simultaneously running AWeber builds for Siren Studios and Dubsado automation for Heritage. Different tools, same quality of output.",
      "The email was written in the founder's voice, configured with the correct automation trigger, and delivered inside a week of the brief.",
    ],
    categories: ["Email Campaigns"],
    image: "/ops-desk-hubspot.jpg",
    tags: ["HubSpot", "Email Marketing"],
    link: "#",
    bg: "linear-gradient(140deg, #f8f4f7 0%, #ffffff 50%, #f5f0f4 100%)",
  },
  {
    title: "Siren Studios — Operations Board",
    slug: "siren-operations-board",
    year: "2026",
    description:
      "Multi-board Trello system running studio operations — priority tracking, campaign launches, VA task delegation, and weekly Gemini meeting notes.",
    fullDescription: [
      "A photography studio doesn't run on shoots alone. There's the admin behind every client, the content calendar sitting alongside it, the VA work that needs tracking, the meetings that need notes.",
      "Ann built a multi-board Trello system for Siren Studios that covers all of it. A priority board for time-sensitive tasks. A campaign launch board for content going live. A VA delegation board so James knows what's been handed off and what's been done. Weekly Gemini AI meeting notes feeding into the board automatically.",
      "The system means James can see the state of his business in one place — not scattered across his inbox, his calendar, and his memory.",
    ],
    categories: ["Operations"],
    image: "/siren-video-production.jpg",
    tags: ["Trello", "Project Mgmt"],
    link: "#",
    bg: "linear-gradient(155deg, #f5f0f4 0%, #ffffff 50%, #f8f4f7 100%)",
  },
  {
    title: "7:12am. Couldn't Sleep.",
    slug: "7-12am",
    year: "2026",
    description:
      "Short-form LinkedIn content on why people stop opening your emails — value first, promotions later. Part of an ongoing editorial series on email marketing.",
    fullDescription: [
      "Written at 7:12am on a sleepless morning, this piece became one of Ann's most engaged LinkedIn posts. The premise: most people aren't unsubscribing because they don't like you — they're unsubscribing because you led with the pitch instead of the value.",
      "The post mapped out a simple principle: your first few emails set the tone for the relationship. If they're promotional, the reader trains themselves to ignore you. If they deliver something useful, they open the next one.",
      "Part of an ongoing editorial series Ann runs on email marketing — covering strategy, deliverability, list health, and what actually moves the numbers.",
    ],
    categories: ["Content"],
    image: "/7-12am post.png",
    tags: ["LinkedIn", "Editorial"],
    link: "#",
    bg: "linear-gradient(160deg, #111111 0%, #1a1018 60%, #0d0d0d 100%)",
  },
  {
    title: "Heritage Custom Cakes — Dubsado Build",
    slug: "heritage-dubsado-build",
    year: "2026",
    description:
      "Full Dubsado workspace build for a custom cake studio. Job workflows, canned emails, proposal forms, and contracts — Clara doesn't touch a single thing between inquiry and booking confirmed.",
    fullDescription: [
      "Heritage Custom Cakes is a boutique cake studio. Before Ann, Clara was managing every client manually — replying to inquiries by hand, attaching PDFs, sending contracts one by one, following up on unpaid invoices. Every booking took hours of admin.",
      "Ann built the complete Dubsado workspace from scratch. Job workflows covering every stage from inquiry to completion. Canned emails that send automatically at the right point in each workflow. A branded proposal form with smart fields that populate from the initial inquiry. A contract that triggers on proposal acceptance. Invoicing that fires automatically on signature.",
      "The result: Clara's input ends when she confirms availability. Everything between inquiry received and booking confirmed runs without her.",
      "This is a full Systems Build — not a partial setup or a template hand-off. Every trigger, every automation, every email was built, tested, and documented.",
    ],
    categories: ["Systems Build"],
    image: "/heritage-dubsado-build.jpg",
    images: ["/heritage-flow-template.jpg", "/heritage-proposal-system.jpg"],
    tags: ["Dubsado", "CRM", "Automation"],
    link: "#",
    bg: "linear-gradient(145deg, #0d0d0d 0%, #1a1018 50%, #111111 100%)",
  },
  {
    title: "The Ops Desk — Welcome Sequence",
    slug: "ops-desk-welcome",
    year: "2026",
    description:
      "Three-email welcome sequence built on HubSpot for a new lead magnet. Subject line, preview, body copy and automation — all in the founder's voice, ready to send.",
    fullDescription: [
      "The Ops Desk newsletter launched a new lead magnet and needed a welcome sequence that matched the newsletter's voice — practical, direct, no filler.",
      "Ann built the full three-email sequence inside HubSpot. Each email was written from scratch: subject line, preview text, body copy. The automation was configured to trigger from the lead magnet opt-in and space the emails correctly. The sequence was built, tested, and handed over ready to send.",
      "The work demonstrates two things: Ann's ability to write in someone else's voice without losing the founder's tone, and her comfort with HubSpot as a platform alongside other ESPs she works in simultaneously.",
    ],
    categories: ["Email Campaigns"],
    image: "/ops-desk-welcome.jpg",
    tags: ["HubSpot", "Email Sequence", "Copy"],
    link: "#",
    bg: "linear-gradient(160deg, #111111 0%, #1a1018 40%, #0d0d0d 100%)",
  },
  {
    title: "One Workflow Became Three",
    slug: "one-workflow-became-three",
    year: "2026",
    description:
      "LinkedIn breakdown of building a full coaching CRM — what actually happens when you stop assuming and start testing. Onboarding, offboarding, and per-session flows.",
    fullDescription: [
      "A coaching client came in thinking they needed one workflow. Ann tested the assumption, mapped the actual client journey, and came back with a different answer: they needed three.",
      "This LinkedIn post documents what happened — the discovery process, why the single workflow assumption breaks down for coaching businesses, and what the three flows (onboarding, per-session, and offboarding) actually do differently.",
      "It's one of Ann's most shared posts because it describes something real that happens in every CRM build: what the client thinks they need and what they actually need are rarely the same thing. The job is to close that gap.",
    ],
    categories: ["Content"],
    image: "/three workflows.png",
    tags: ["Dubsado", "LinkedIn"],
    link: "#",
    bg: "linear-gradient(135deg, #ffffff 0%, #f5f0f4 50%, #efe8ed 100%)",
  },
  {
    title: "Heritage Dubsado — Flow Template",
    slug: "heritage-flow-template",
    year: "2026",
    description:
      "The full Enquiry-to-Completion flow template inside Dubsado — six steps, automated proposals, invoicing triggers, and confirmation emails. Built once, runs every inquiry.",
    fullDescription: [
      "The flow template is the backbone of the Heritage Custom Cakes Dubsado build. Six steps covering the full client journey: inquiry received, proposal sent, proposal accepted, contract signed, deposit paid, production begins.",
      "Each step in the flow has an automated trigger. The proposal sends without Clara touching it. The contract fires when the proposal is accepted. The deposit invoice goes out on contract signature. A confirmation email marks the start of production.",
      "Built once. Runs on every new inquiry that comes in — whether Clara is at her desk or not.",
    ],
    categories: ["Systems Build"],
    image: "/heritage-flow-template.jpg",
    images: ["/heritage-dubsado-build.jpg"],
    tags: ["Dubsado", "Workflows"],
    link: "#",
    bg: "linear-gradient(135deg, #ffffff 0%, #f5f0f4 50%, #efe8ed 100%)",
  },
  {
    title: "Siren Studios — Video Production Ops",
    slug: "siren-video-production",
    year: "2026",
    description:
      "Trello-based video production pipeline for a photography studio — Shot, 1st Draft, 2nd Draft, Posted. Nothing falls through, every reel ships.",
    fullDescription: [
      "A photography studio producing regular video content needs a production pipeline that doesn't rely on the founder remembering what's at which stage.",
      "Ann built a Trello-based video production board for Siren Studios. Four columns: Shot, 1st Draft, 2nd Draft, Posted. Every piece of video content moves through the board on a defined timeline. Cards get assigned, deadlines are set, and nothing sits in limbo waiting for someone to remember it.",
      "The result: every reel ships. Nothing falls through between filming and posting because the pipeline makes the next step visible at every stage.",
    ],
    categories: ["Operations"],
    image: "/siren-operations-board.jpg",
    tags: ["Trello", "Production Ops"],
    link: "#",
    bg: "linear-gradient(135deg, #111111 0%, #0d0d0d 40%, #1a1018 100%)",
  },
  {
    title: "Project Breakdown",
    slug: "project-breakdown",
    year: "2024",
    description:
      "A detailed walkthrough of my operational design process and system architecture for high-growth teams.",
    fullDescription: [
      "A video walkthrough of how Ann approaches operational design — from the first conversation with a founder to the delivered system.",
      "Covers the discovery process, how she maps existing workflows before building new ones, the tools she reaches for at different stages, and what documentation she leaves behind so the client can maintain the system after handoff.",
    ],
    categories: ["Videos"],
    image: "https://img.youtube.com/vi/lXcdeRIbA18/maxresdefault.jpg",
    youtubeId: "lXcdeRIbA18",
    tags: ["Operations", "Tutorial"],
    link: "https://youtu.be/lXcdeRIbA18?si=ZmZa1rvfeSTfn3kH",
    bg: "linear-gradient(135deg, #0d0d0d 0%, #141014 100%)",
  },
  {
    title: "Feed a Child",
    slug: "feed-a-child",
    year: "2024",
    description:
      "An NGO initiative created to feed children in under-resourced communities. Coordinated logistics, volunteers, and outreach.",
    fullDescription: [
      "Feed a Child is an NGO initiative Ann helped coordinate — a community-driven effort to provide meals to children in under-resourced communities.",
      "Ann handled the operational side: volunteer scheduling, logistics coordination, community outreach, and the day-to-day admin that keeps a programme like this running. The same skills she brings to founder businesses — systems, follow-through, making sure the thing actually happens — apply equally here.",
      "This is where the work started. Before the client systems and the email campaigns, there was this: showing up, coordinating people, and making sure no child was missed.",
    ],
    categories: ["Volunteer"],
    image: "/volunteer.jpg",
    images: ["/volunteer2.jpg"],
    video: "/Copy of Ann Anidumaka Video.mov",
    tags: ["Community", "Outreach"],
    link: "#",
    bg: "linear-gradient(145deg, #f8f4f7 0%, #f0e8ef 30%, #f5f0f4 100%)",
  },
  {
    title: "System Thinking",
    slug: "system-thinking",
    year: "2024",
    description:
      "Exploring the fundamentals of building scalable systems for creative businesses and founders.",
    fullDescription: [
      "A video exploring the principles behind scalable operational systems — not tool-specific, but the underlying logic that makes systems work regardless of platform.",
      "Covers how to map a business process before automating it, where most founders create unnecessary complexity, and the difference between a system that runs the business and a system that the founder has to run.",
    ],
    categories: ["Videos"],
    image: "https://img.youtube.com/vi/QoMcUnWa_Co/maxresdefault.jpg",
    youtubeId: "QoMcUnWa_Co",
    tags: ["Systems", "Strategy"],
    link: "https://youtu.be/QoMcUnWa_Co?si=pnjfoISTxhybitOb",
    bg: "linear-gradient(150deg, #ffffff 0%, #f5f0f4 100%)",
  },
  {
    title: "The Ann Method",
    slug: "the-ann-method",
    year: "2024",
    description:
      "My personal approach to managing complex community operational pipelines without friction.",
    fullDescription: [
      "A video documenting Ann's personal approach to managing operational complexity — the mental model she brings to every client engagement.",
      "The core idea: most operational problems aren't tool problems. They're sequencing problems. This video breaks down how Ann identifies the right order to build, automate, and delegate — and why most founders who feel overwhelmed are actually missing one specific thing.",
    ],
    categories: ["Videos"],
    image: "https://img.youtube.com/vi/PiBYujKfv_Q/maxresdefault.jpg",
    youtubeId: "PiBYujKfv_Q",
    tags: ["Community", "Ops"],
    link: "https://youtu.be/PiBYujKfv_Q?si=PnxexeYQzY_Ykrkd",
    bg: "linear-gradient(140deg, #0d0d0d 0%, #1a1018 50%, #111111 100%)",
  },
];
