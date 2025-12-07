'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 sm:p-8 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-1">
            {experience.title}
          </h3>
          <p className="text-lg text-accent font-medium mb-2">{experience.company}</p>
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0 sm:text-right">
          <p>{experience.startDate} – {experience.endDate}</p>
          <p>{experience.location}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {experience.technologies.slice(0, 8).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
          {experience.technologies.length > 8 && (
            <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
              +{experience.technologies.length - 8} more
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-2">
        {experience.highlights.map((highlight, idx) => (
          <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed flex items-start">
            <span className="text-accent mr-2 mt-1.5">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

