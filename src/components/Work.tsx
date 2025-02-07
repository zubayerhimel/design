'use client';

import Image from 'next/image';
import { motion } from 'motion/react';


export default function Work() {
  const projects = [
    {
      title: "Brand Refresh",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format"
    },
    {
      title: "Mobile App Design",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?q=80&w=1000&auto=format"
    },
    {
      title: "Marketing Campaign",
      category: "Print",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format"
    },
    {
      title: "Motion Graphics",
      category: "Animation",
      image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=1000&auto=format"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-32 bg-neutral-50 dark:bg-neutral-800" id="work">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-neutral-900 dark:text-white"
          variants={itemVariants}
        >
          Selected Work
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl shadow-lg shadow-rose-100/20 dark:shadow-rose-500/5"
            >
              <div className="relative h-[300px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/80 via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-4 w-full">
                  <p className="text-sm uppercase tracking-wider text-white/90">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 