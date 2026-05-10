"use client";

import { motion } from "framer-motion";

export const Spotlight = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Central Large Spotlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[150vw] h-[100vh] z-20"
      >
        <div 
          className="w-full h-full"
          style={{
            background: "radial-gradient(50% 50% at 50% 0%, rgba(255, 255, 255, 0.08) 0%, transparent 80%)",
            clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>

      {/* Top Left Spotlight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute top-[-5%] left-[20%] w-[60vw] h-[80vh] rotate-[-15deg]"
      >
        <div 
          className="w-full h-full"
          style={{
            background: "radial-gradient(50% 50% at 50% 0%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
            clipPath: "polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Top Right Spotlight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 3, delay: 0.8 }}
        className="absolute top-[-5%] right-[20%] w-[60vw] h-[80vh] rotate-[15deg]"
      >
        <div 
          className="w-full h-full"
          style={{
            background: "radial-gradient(50% 50% at 50% 0%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)",
            clipPath: "polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)",
            filter: "blur(40px)",
          }}
        />
      </motion.div>

      {/* Top Stage Lamps */}
      <div className="absolute top-0 left-0 w-full flex justify-around px-20">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative">
            <div className="w-12 h-2 bg-neutral-800 rounded-full blur-[1px]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/20 rounded-full blur-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};
