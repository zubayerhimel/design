'use client';

import { motion } from 'motion/react';
import { GraduationCap, MapPin, Calendar, Heart } from 'lucide-react';

export default function About() {
  const details = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      label: 'Education',
      value: 'B.Sc in Computer Science',
    },

    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: 'Experience',
      value: '2+ Years',
    },

    {
      icon: <Heart className="w-5 h-5" />,
      label: 'Interests',
      value: 'Art, Typography, Travel',
    },
  ];

  return (
    <section className="py-32 bg-white dark:bg-neutral-900" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <motion.span
              className="text-sm uppercase tracking-wider text-rose-400 dark:text-rose-300 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              About Me
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mt-2 text-neutral-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Crafting Digital Experiences with Passion
            </motion.h2>
          </div>

          <motion.div
            className="prose prose-neutral dark:prose-invert max-w-none text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Hello! I&apos;m Rifat Ashfiha Khan, a passionate graphic designer and digital artist based in Dhaka. 
              With over 2 years of experience in the creative industry, I specialize in creating 
              meaningful brand experiences and visual stories that connect with people.
            </p>

            <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              My approach combines creative intuition with strategic thinking, ensuring that every 
              design not only looks beautiful but also serves its purpose effectively. I believe in 
              the power of thoughtful design to transform ideas into impactful visual experiences.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {details.map((detail, index) => (
              <motion.div
                key={detail.label}
                className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/20 text-rose-500 dark:text-rose-300 flex items-center justify-center mx-auto mb-4">
                  {detail.icon}
                </div>
                <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                  {detail.label}
                </h3>
                <p className="font-medium text-neutral-900 dark:text-white">
                  {detail.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 