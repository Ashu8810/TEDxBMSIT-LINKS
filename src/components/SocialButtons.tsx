"use client";

import { motion } from "framer-motion";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socialLinks = [
  {
    name: "Instagram",
    icon: <InstagramIcon size={20} />,
    href: "https://instagram.com/tedxbmsitm",
  },
  {
    name: "X / Twitter",
    icon: <XIcon size={20} />,
    href: "https://twitter.com/tedxbmsitm",
  },
  {
    name: "LinkedIn",
    icon: <LinkedinIcon size={20} />,
    href: "https://linkedin.com/company/tedxbmsitm",
  },
];

export const SocialButtons = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-4 w-full max-w-[280px] mt-8 md:mt-12 relative z-30">
      {socialLinks.map((link, i) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 + i * 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)" }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-4 bg-white px-6 md:px-8 py-3 md:py-4 rounded-full text-black font-medium transition-all duration-300 group"
        >
          <span className="opacity-70 group-hover:opacity-100 transition-opacity">
            {link.icon}
          </span>
          <span className="text-sm tracking-wide uppercase">{link.name}</span>
        </motion.a>
      ))}
    </div>
  );
};
