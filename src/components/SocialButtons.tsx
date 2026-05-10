"use client";

import { motion } from "framer-motion";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#E4405F"
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
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#000000">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="#0077B5"
    stroke="#0077B5"
    strokeWidth="0.5"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
