"use client";

import { bonaNova } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Book, Film, Image, Layout, Palette, Printer, Share } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  const services = [
    {
      title: "Brand Design",
      description: "Creating memorable brand identities that resonate with your audience and tell compelling stories.",
      icon: <Palette className="w-12 h-12" />,
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and beautiful digital experiences that delight users and drive engagement.",
      icon: <Layout className="w-12 h-12" />,
    },
    {
      title: "Motion Graphics",
      description: "Bringing designs to life with captivating animations and dynamic visual storytelling.",
      icon: <Film className="w-12 h-12" />,
    },
    {
      title: "Print Design",
      description: "Creating stunning physical materials that make a lasting impression in the real world.",
      icon: <Printer className="w-12 h-12" />,
    },
    {
      title: "Book Cover Design",
      description: "Designing captivating book covers that tell stories at first glance and stand out on shelves.",
      icon: <Book className="w-12 h-12" />,
    },
    {
      title: "Banner Design",
      description: "Creating eye-catching banners and billboards that command attention and deliver messages effectively.",
      icon: <Image className="w-12 h-12" />,
    },
    {
      title: "Social Media Design",
      description: "Crafting scroll-stopping social media content that builds engagement and grows your audience.",
      icon: <Share className="w-12 h-12" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-32 bg-[#f8f8f8] dark:bg-neutral-900" id="services">
      <motion.div className="container mx-auto px-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div className="inline-block relative" variants={itemVariants}>
            <span className="text-xs tracking-[0.3em] font-medium uppercase text-rose-500 dark:text-rose-400 absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">What I Offer</span>
            <h2 className={cn("text-4xl md:text-5xl font-medium text-neutral-900 dark:text-white", bonaNova.className)}>Services</h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants} className="group relative">
              <div className="absolute inset-0 border border-rose-200 dark:border-rose-800 rounded-lg transform rotate-3 transition-transform group-hover:rotate-0" />
              <div className="relative bg-white dark:bg-neutral-800 p-10 rounded-lg transform transition-transform group-hover:translate-y-1">
                <div className="text-rose-900 dark:text-rose-700 mb-8 transform transition-transform group-hover:scale-110">{service.icon}</div>
                <h3 className={cn("text-2xl mb-4 text-rose-400", bonaNova.className)}>{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
