'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import SocialLinks from './SocialLinks';


export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    const offset = 80; // Height of fixed navbar
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-neutral-50/50 dark:bg-neutral-900" id="home">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="text-sm uppercase tracking-wider text-rose-400 dark:text-rose-300 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Creative Designer & Illustrator
          </motion.span>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bringing Ideas
            <span className="block bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
              To Beautiful Life
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg text-neutral-600 dark:text-neutral-300 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I create delightful brand experiences and thoughtful designs 
            that spark joy and leave lasting impressions.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-rose-400 to-purple-400 text-white rounded-full hover:transform hover:scale-105 transition-all shadow-lg shadow-rose-200 dark:shadow-rose-900/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
            <motion.button 
              onClick={scrollToContact}
              className="px-8 py-4 border border-rose-200 dark:border-rose-800 rounded-full hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-all text-rose-600 dark:text-rose-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Talk
            </motion.button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-4"
          >
            <SocialLinks />
          </motion.div>
        </motion.div>
        <motion.div 
          className="relative h-[600px] hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1738676524296-364cf18900a8?q=80&w=2574&auto=format"
            alt="Creative Designer at Work"
            fill
            className="object-cover rounded-2xl"
            priority
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-rose-400/10 via-purple-300/5 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
} 