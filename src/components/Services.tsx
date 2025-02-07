'use client';

import { motion } from 'motion/react';
import { Palette, Layout, Film, Printer } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Brand Design",
      description: "Creating memorable brand identities that resonate with your audience and tell compelling stories.",
      icon: <Palette className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and beautiful digital experiences that delight users and drive engagement.",
      icon: <Layout className="w-8 h-8" />,
      gradient: "from-blue-500 to-teal-500"
    },
    {
      title: "Motion Graphics",
      description: "Bringing designs to life with captivating animations and dynamic visual storytelling.",
      icon: <Film className="w-8 h-8" />,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      title: "Print Design",
      description: "Creating stunning physical materials that make a lasting impression in the real world.",
      icon: <Printer className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500"
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
    <section className="py-32 bg-white dark:bg-neutral-900" id="services">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white"
            variants={itemVariants}
          >
            What I Do
          </motion.h2>
          <motion.p 
            className="text-neutral-600 dark:text-neutral-300 text-lg"
            variants={itemVariants}
          >
            Transforming ideas into exceptional digital experiences through design
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-white dark:bg-neutral-800 backdrop-blur-sm border border-rose-100 dark:border-rose-800/20 hover:shadow-xl hover:shadow-rose-100/20 dark:hover:shadow-rose-500/5 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-rose-400/5 to-purple-400/5 dark:from-rose-400/[0.03] dark:to-purple-400/[0.03] rounded-2xl`} />
              <div className="text-rose-400 dark:text-rose-300 mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 