"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 2, delay: 2 }}
      className="w-full text-center z-30"
    >
      <div className="text-[10px] uppercase tracking-[0.3em] font-light text-white/60 space-y-2">
        <p>BMS Institute of Technology and Management</p>
        <p>Yelahanka, Bengaluru, Karnataka 560064</p>
        <div className="flex gap-4 justify-center opacity-80 pt-2">
          <span>Contact: +91 98765 43210</span>
          <span className="opacity-30">|</span>
          <span>tedxbmsitm@gmail.com</span>
        </div>
      </div>
    </motion.footer>
  );
};
