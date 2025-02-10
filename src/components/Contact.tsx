"use client";

import { bonaNova } from "@/lib/font";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            className="text-sm uppercase tracking-[0.3em] text-rose-500 dark:text-rose-400 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            About Me
          </motion.span>
          <h2 className={cn("text-4xl md:text-5xl font-medium mb-20 mt-2 text-center text-neutral-900 dark:text-white", bonaNova.className)}>Let&apos;s Work Together</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-rose-200 dark:border-rose-800 focus:border-rose-400 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-900 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-rose-200 dark:border-rose-800 focus:border-rose-400 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-900 transition-all"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-800 border border-rose-200 dark:border-rose-800 focus:border-rose-400 dark:focus:border-rose-500 focus:ring-2 focus:ring-rose-200 dark:focus:ring-rose-900 transition-all"></textarea>
            <button className="px-8 py-4 bg-gradient-to-r from-rose-400 to-purple-400 text-white rounded-full hover:transform hover:scale-105 transition-all shadow-lg shadow-rose-200 dark:shadow-rose-900/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
