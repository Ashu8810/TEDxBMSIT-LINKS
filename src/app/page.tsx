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
      <Spotlight />
      <Particles />

      {/* Hero Section */}
      <section className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 py-16 md:py-20">
        {/* Institutional Crest */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 md:mb-10"
        >
          <div className="relative">
            <Image
              src="/bmsit-logo.png"
              alt="BMSITM Logo"
              width={55}
              height={55}
              priority
              className="opacity-90 md:w-[65px] md:h-[65px] drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            />
          </div>
        </motion.div>

        {/* Main Title Branding - Text Based for exact match */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col items-center select-none"
        >
          <div className="flex items-baseline">
            <h1 className="text-4xl md:text-[72px] font-bold tracking-[-0.05em] text-[#eb0028] leading-none">
              TED
              <span className="font-normal tracking-tight">x</span>
            </h1>
          </div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white text-base md:text-2xl font-bold tracking-[0.4em] mt-2 md:mt-3 ml-[0.4em] uppercase"
          >
            BMSITM
          </motion.h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="mt-6 md:mt-8 font-serif italic text-base md:text-xl text-white/90 tracking-wide"
        >
          “Where Ideas Take the Stage”
        </motion.p>

        {/* Cinematic Subtle Glow Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="mt-10 md:mt-12 w-20 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_10px_rgba(235,0,40,0.5)]"
        />

        {/* Social Buttons */}
        <SocialButtons />
      </section>

      {/* Bottom Horizon Effect */}
      <div className="fixed bottom-0 left-0 w-full h-[15vh] pointer-events-none overflow-hidden z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute bottom-0 left-0 w-full h-px bg-red-600/30 shadow-[0_-2px_20px_rgba(235,0,40,0.2)]"
        />
        <div 
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            background: "linear-gradient(to top, rgba(235, 0, 40, 0.03) 0%, transparent 100%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="relative z-30 pb-8 w-full">
        <Footer />
      </div>
    </main>
  );
}
