"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Spotlight } from "@/components/Spotlight";
import { Particles } from "@/components/Particles";
import { SocialButtons } from "@/components/SocialButtons";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-between bg-black overflow-hidden selection:bg-red-600/30">
      {/* Cinematic Overlays */}
      <div className="vignette" />
      <div className="ambient-glow" />
      
      {/* Atmospheric Effects */}
      <Particles />
      <Spotlight />

      {/* Hero Section - flex-1 keeps it in the middle while allowing footer to sit at bottom */}
      <section className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
        {/* Institutional Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 md:mb-8"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Image
              src="/bmsit-logo.png"
              alt="BMSITM Logo"
              width={50}
              height={50}
              priority
              className="relative opacity-80 md:w-[60px] md:h-[60px]"
            />
          </div>
        </motion.div>

        {/* Main Title Branding */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="relative group">
            {/* Glow Effect for Logo */}
            <div className="absolute inset-0 bg-red-600/10 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
            <Image
              src="/logo-white.png"
              alt="TEDxBMSITM Logo"
              width={350}
              height={120}
              priority
              className="relative w-[220px] md:w-[350px] h-auto drop-shadow-[0_0_10px_rgba(235,0,40,0.3)]"
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-6 md:mt-8 font-serif italic text-base md:text-xl text-white/80 tracking-wide px-4"
        >
          “Where Ideas Take the Stage”
        </motion.p>

        {/* Cinematic Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="relative mt-6 md:mt-8 w-12 md:w-16 h-[2px] bg-red-600 shadow-[0_0_10px_#eb0028]"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-red-400 blur-[2px]"
          />
        </motion.div>

        {/* Social Buttons */}
        <SocialButtons />
      </section>

      {/* Bottom Horizon Effect */}
      <div className="fixed bottom-0 left-0 w-full h-[20vh] pointer-events-none overflow-hidden z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute bottom-0 left-0 w-full h-px bg-red-600/50 shadow-[0_-2px_20px_rgba(235,0,40,0.4)]"
        />
        <div 
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            background: "linear-gradient(to top, rgba(235, 0, 40, 0.05) 0%, transparent 100%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="relative z-30 pb-8">
        <Footer />
      </div>
    </main>
  );
}
