"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change image every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[index]})`,
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Find Your Perfect <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Travel Buddy
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl">
            Don&apos;t explore the world alone. Connect with like-minded
            travelers and create unforgettable memories together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
