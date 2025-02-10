"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { bonaNova } from "@/lib/font";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function Work() {
  const projects = {
    bookCover: [
      {
        title: "Book Cover 1",
        category: "Book Cover",
        image: "/images/cover/1.png",
      },
      {
        title: "Book Cover 2",
        category: "Book Cover",
        image: "/images/cover/2.jpg",
      },
      {
        title: "Book Cover 3",
        category: "Book Cover",
        image: "/images/cover/3.jpg",
      },
      {
        title: "Book Cover 4",
        category: "Book Cover",
        image: "/images/cover/4.jpg",
      },
      {
        title: "Book Cover 5",
        category: "Book Cover",
        image: "/images/cover/5.jpg",
      },
      {
        title: "Book Cover 6",
        category: "Book Cover",
        image: "/images/cover/6.jpg",
      },
      {
        title: "Book Cover 7",
        category: "Book Cover",
        image: "/images/cover/7.jpg",
      },
      {
        title: "Book Cover 8",
        category: "Book Cover",
        image: "/images/cover/8.jpg",
      },
      {
        title: "Book Cover 9",
        category: "Book Cover",
        image: "/images/cover/9.jpg",
      },
      {
        title: "Book Cover 10",
        category: "Book Cover",
        image: "/images/cover/10.jpg",
      },
      {
        title: "Book Cover 11",
        category: "Book Cover",
        image: "/images/cover/11.jpg",
      },
    ],

    socialMedia: [
      {
        title: "Social Post 1",
        category: "Social Media",
        image: "/images/social-media/1.jpg",
      },
      {
        title: "Social Post 2",
        category: "Social Media",
        image: "/images/social-media/2.jpg",
      },
      {
        title: "Social Post 3",
        category: "Social Media",
        image: "/images/social-media/3.jpg",
      },
      {
        title: "Social Post 4",
        category: "Social Media",
        image: "/images/social-media/4.jpg",
      },
      {
        title: "Social Post 5",
        category: "Social Media",
        image: "/images/social-media/5.jpg",
      },
      {
        title: "Social Post 6",
        category: "Social Media",
        image: "/images/social-media/6.jpg",
      },
      {
        title: "Social Post 7",
        category: "Social Media",
        image: "/images/social-media/7.jpg",
      },
      {
        title: "Social Post 8",
        category: "Social Media",
        image: "/images/social-media/8.jpg",
      },
      {
        title: "Social Post 9",
        category: "Social Media",
        image: "/images/social-media/9.jpg",
      },
    ],

    banner: [
      {
        title: "Banner 1",
        category: "Banner",
        image: "/images/banner/1.jpg",
      },
      {
        title: "Banner 2",
        category: "Banner",
        image: "/images/banner/2.png",
      },
      {
        title: "Banner 3",
        category: "Banner",
        image: "/images/banner/3.png",
      },
    ],
    thumbnail: [
      {
        title: "Thumbnail 1",
        category: "Thumbnail",
        image: "/images/thumbnail/1.jpg",
      },
      {
        title: "Thumbnail 2",
        category: "Thumbnail",
        image: "/images/thumbnail/2.jpg",
      },
    ],
  };

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
    <section className="py-32 bg-neutral-50 dark:bg-neutral-800" id="work">
      <motion.div className="container mx-auto px-4" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
        <motion.h2 className={cn("text-4xl md:text-5xl font-medium mb-20 text-center text-neutral-900 dark:text-white", bonaNova.className)} variants={itemVariants}>
          Selected Work
        </motion.h2>

        <Tabs defaultValue="book-cover">
          <TabsList className="bg-transparent mb-6">
            <TabsTrigger value="book-cover" className="data-[state=active]:bg-rose-100 data-[state=active]:text-rose-600 data-[state=active]:rounded-lg data-[state=active]:shadow-none">
              Book cover
            </TabsTrigger>
            <TabsTrigger value="social-media" className="data-[state=active]:bg-rose-100 data-[state=active]:text-rose-600 data-[state=active]:rounded-lg data-[state=active]:shadow-none">
              Social Media
            </TabsTrigger>
            <TabsTrigger value="banner" className="data-[state=active]:bg-rose-100 data-[state=active]:text-rose-600 data-[state=active]:rounded-lg data-[state=active]:shadow-none">
              Banner
            </TabsTrigger>
            <TabsTrigger value="thumbnail" className="data-[state=active]:bg-rose-100 data-[state=active]:text-rose-600 data-[state=active]:rounded-lg data-[state=active]:shadow-none">
              Thumbnail
            </TabsTrigger>
          </TabsList>

          <TabsContent value="book-cover">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.bookCover.map((project) => (
                <div key={project.title} className="group relative overflow-hidden rounded-xl shadow-lg shadow-rose-100/20 dark:shadow-rose-500/5">
                  <div className="relative h-[300px]">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-500/80 via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-sm uppercase tracking-wider text-white/90">{project.category}</p>
                      <h3 className="text-lg font-bold text-white mt-1">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="social-media">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.socialMedia.map((project) => (
                <div key={project.title} className="group relative overflow-hidden rounded-xl shadow-lg shadow-rose-100/20 dark:shadow-rose-500/5">
                  <div className="relative h-[300px]">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-500/80 via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-sm uppercase tracking-wider text-white/90">{project.category}</p>
                      <h3 className="text-lg font-bold text-white mt-1">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="banner">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.banner.map((project) => (
                <div key={project.title} className="group relative overflow-hidden rounded-xl shadow-lg shadow-rose-100/20 dark:shadow-rose-500/5">
                  <div className="relative h-[300px]">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-500/80 via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-sm uppercase tracking-wider text-white/90">{project.category}</p>
                      <h3 className="text-lg font-bold text-white mt-1">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="thumbnail">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.thumbnail.map((project) => (
                <div key={project.title} className="group relative overflow-hidden rounded-xl shadow-lg shadow-rose-100/20 dark:shadow-rose-500/5">
                  <div className="relative h-[300px]">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-500/80 via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-sm uppercase tracking-wider text-white/90">{project.category}</p>
                      <h3 className="text-lg font-bold text-white mt-1">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}
