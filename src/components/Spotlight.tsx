"use client";

import { motion } from "framer-motion";

export const Spotlight = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden bg-black">
      {/* Side Red "Curtains" / Ambient Glows */}
      <div className="absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-red-950/40 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-red-950/40 to-transparent" />

      {/* Top Corner Beams - White */}
      <div 
        className="absolute top-0 left-0 w-[40vw] h-[80vh] opacity-20"
        style={{
          background: "radial-gradient(circle at 0% 0%, white 0%, transparent 70%)",
          clipPath: "polygon(0% 0%, 30% 0%, 100% 100%, 0% 40%)",
          filter: "blur(60px)",
        }}
      />
      <div 
        className="absolute top-0 right-0 w-[40vw] h-[80vh] opacity-20"
        style={{
          background: "radial-gradient(circle at 100% 0%, white 0%, transparent 70%)",
          clipPath: "polygon(100% 0%, 70% 0%, 0% 100%, 100% 40%)",
          filter: "blur(60px)",
        }}
      />

      {/* Central Focused Spotlight - White */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[30vw] h-[60vh] opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 0%, white 0%, transparent 70%)",
          clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
          filter: "blur(40px)",
        }}
      />

      {/* Ambient Floor Glow - Red */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-red-900/10 to-transparent opacity-50" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
};
