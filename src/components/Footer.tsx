"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 2, delay: 2 }}
      className="w-full text-center z-30 hover:opacity-80 transition-opacity duration-700"
    >
      <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-light text-white space-y-2">
        <p className="flex items-center justify-center gap-2">
          BMS Institute of Technology & Management 
          <span className="w-1.5 h-1.5 bg-red-600 rounded-full shadow-[0_0_8px_#eb0028]" />
          Bengaluru
        </p>
        <div className="flex flex-col gap-1 pt-1">
          <div className="flex gap-2 justify-center">
            <span>Aatif Mohideen</span>
            <span className="text-white/20">-</span>
            <span className="text-[#eb0028] font-medium">7019092282</span>
          </div>
          <div className="flex gap-2 justify-center">
            <span>Bhargava Krishna G</span>
            <span className="text-white/20">-</span>
            <span className="text-[#eb0028] font-medium">7204909095</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
