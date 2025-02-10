"use client";

import { motion } from "motion/react";
import { Building2, Calendar } from "lucide-react";
import { bonaNova } from "@/lib/font";
import { cn } from "@/lib/utils";

export default function Experience() {
  const experiences = [
    {
      company: "Retouch 24",
      position: "Graphic Designer",
      startDate: "Apr 2023",
      endDate: "Present",

      achievements: [
        "Led the rebranding of 3 major clients, increasing their brand recognition",
        "Contributing creative ideas and executing them with precision",
        "Created over 200 social media designs with 85% client satisfaction rate",
        "Assist in the creation of brand identities, including logo design, typography selection, and color palette development",
        "Produce compelling marketing materials such as posters, flyers, and digital banners, ensuring alignment with client branding guidelines.",
        "Support the design and layout of print materials, including brochures, business cards, and packaging, while maintaining attention to detail and consistency",
      ],
    },
    {
      company: "Fronture Technologies",
      position: "Creative Designer - Intern",
      startDate: "Feb 2023",
      endDate: "Mar 2023",

      achievements: [
        "Designed user interfaces for web and mobile applications",
        "Supported senior designers in various stages of the design process, from concept development to final execution.",
        "Assisted in the creation of visual assets for social media campaigns, including graphics, illustrations, and animations",
        "Provided administrative support, including file organization, asset management, and project coordination.",
      ],
    },
    {
      company: "Bangladesh Bank",
      position: "Development & Design Intern",
      startDate: "Apr 2022",
      endDate: "Jun 2022",

      achievements: [
        "Assisted in the development of a new mobile banking app",
        "Creating a schedule for banking training & Design a website in Bangladesh Bank",
        "Developed responsive website design",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-32 bg-white dark:bg-neutral-900" id="experience">
      <motion.div className="container mx-auto px-4" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2 className={cn("text-4xl md:text-5xl font-medium mb-6 text-neutral-900 dark:text-white", bonaNova.className)} variants={itemVariants}>
            Experience
          </motion.h2>
          <motion.p className="text-neutral-600 dark:text-neutral-300 text-lg" variants={itemVariants}>
            A journey through my professional career
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-12 last:mb-0">
              <div className="relative pl-8 border-l-2 border-rose-200 dark:border-rose-800/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-rose-400 to-purple-400" />

                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 shadow-lg shadow-rose-100/20 dark:shadow-rose-500/5 hover:shadow-xl hover:shadow-rose-200/20 dark:hover:shadow-rose-500/10 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className={cn("text-xl font-bold flex items-center gap-2 text-rose-400", bonaNova.className)}>
                        <Building2 className="w-5 h-5" />
                        {exp.company}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 mt-1">{exp.position}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>

                  <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
