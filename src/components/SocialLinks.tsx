'use client';

import { motion } from 'motion/react';
import { Linkedin, Instagram, Dribbble, Mail, } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-5 h-5" />,
    url: 'https://linkedin.com/in/yourprofile',
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-5 h-5" />,
    url: 'https://instagram.com/yourprofile',
  },
  {
    name: 'Dribbble',
    icon: <Dribbble className="w-5 h-5" />,
    url: 'https://dribbble.com/yourprofile',
  },
  {
    name: 'Mail',
    icon: <Mail className="w-5 h-5" />,
    url: 'mailto:yourprofile@example.com',
  },
];


export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-rose-500 dark:hover:text-rose-300 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Visit ${social.name}`}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
} 