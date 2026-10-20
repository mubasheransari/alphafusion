export const SITE = {
  name: "Alpha Fusion Ltd",
  url: "https://alphafusionltd.com",
  email: "info@alphafusionltd.com",
  phone: "+44 7367 066235",
  phoneHref: "tel:+447367066235",
  location: "London, United Kingdom",
  serving: "Serving the UK & United States",
  hours: ["Monday – Friday", "9:00 AM – 6:00 PM", "UK & US time zones"],
} as const;

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Our approach", href: "/approach" },
  { label: "About", href: "/about" },
] as const;

export const MARQUEE_ITEMS = [
  "Animation",
  "Digital Marketing",
  "Web Design",
  "Mobile Apps",
  "SEO",
  "Content",
] as const;

export type Service = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: readonly string[];
  cta: string;
};

export const SERVICES: readonly Service[] = [
  {
    id: "animation",
    name: "Animation",
    tagline: "Stories that move. Visuals that stay.",
    description:
      "Video editing and motion graphics that make your story impossible to scroll past.",
    features: [
      "Brand animation",
      "Video editing",
      "Motion graphics",
      "Visual storytelling",
    ],
    cta: "Let's talk animation",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    tagline: "Make your next move matter.",
    description:
      "Branding and custom campaigns built around your audience, your ambitions, and your business.",
    features: [
      "Branding & strategy",
      "Custom campaigns",
      "SEO optimization & search rankings",
      "Content creation",
    ],
    cta: "Let's talk digital marketing",
  },
  {
    id: "web-design-development",
    name: "Web Design & Development",
    tagline: "A better first impression. A stronger digital presence.",
    description:
      "Distinctive design and thoughtful development that turn your website into your next growth opportunity.",
    features: [
      "Custom web design",
      "Website development",
      "Responsive experiences",
      "Business websites",
    ],
    cta: "Let's talk web design & development",
  },
  {
    id: "mobile-app-development",
    name: "Mobile App Development",
    tagline: "Big ideas. Right in your pocket.",
    description:
      "Thoughtfully designed mobile experiences that bring your ideas to life and deliver value to your users.",
    features: [
      "App design",
      "Mobile app development",
      "Scalable experiences",
      "Performance-focused development",
    ],
    cta: "Let's talk mobile app development",
  },
  {
    id: "education-tutoring",
    name: "Education & Tutoring",
    tagline: "Build your knowledge. Reach your next milestone.",
    description:
      "Personalised educational support for online learning, exam preparation, and professional certification studies.",
    features: [
      "Online class support",
      "Exam preparation",
      "Professional certification support",
    ],
    cta: "Discuss learning support",
  },
];

export const CAPABILITY_CARDS = SERVICES.slice(0, 4);

export const AUDIENCES = [
  {
    name: "Small businesses",
    description:
      "Build your foundation with tailored digital tools, a distinctive presence, and focused campaigns.",
  },
  {
    name: "Medium businesses",
    description:
      "Connect your channels and expand your reach with a comprehensive strategy designed for your next stage.",
  },
  {
    name: "Enterprises",
    description:
      "Bring search, customer data, and custom campaigns together to support your business at scale.",
  },
] as const;

export const PRINCIPLES = [
  {
    title: "Understand your ambition",
    description:
      "Your objectives, audience, and challenges inform the direction. We focus on the opportunities that matter to your business.",
  },
  {
    title: "Connect the disciplines",
    description:
      "Design, animation, development, and marketing work together, creating a consistent experience wherever your audience finds you.",
  },
  {
    title: "Build a lasting partnership",
    description:
      "Transparent communication and a client-first mindset keep the work focused. We value long-term relationships, not one-off transactions.",
  },
] as const;

export const SERVICE_OPTIONS = SERVICES.map((s) => s.name);

/** /contact link that pre-selects a service in the enquiry form */
export function contactHref(service?: string) {
  if (!service) return "/contact";
  return `/contact?service=${encodeURIComponent(service).replace(/%20/g, "+")}`;
}
