'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/data/experience';
import { useState } from 'react';

interface ExperienceTimelineProps {
  experiences: Experience[];
  onExperienceSelect: (experience: Experience | null) => void;
}

export function ExperienceTimeline({ experiences, onExperienceSelect }: ExperienceTimelineProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardInteraction = (experience: Experience, index: number) => {
    setSelectedIndex(index);
    onExperienceSelect(experience);
  };

  return (
    <div id="experience" className="py-4 lg:py-8">
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`group cursor-pointer transition-all ${
              selectedIndex === index
                ? 'ring-2 ring-accent rounded-lg p-2 -m-2'
                : 'hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg p-2 -m-2'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => handleCardInteraction(experience, index)}
            onMouseLeave={() => {
              setSelectedIndex(null);
              onExperienceSelect(null);
            }}
            onClick={() => handleCardInteraction(experience, index)}
            whileHover={{ y: -2 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6">
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
                  {experience.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {experience.technologies.length > 6 && (
                    <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                      +{experience.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-2">
                {experience.highlights.slice(0, 4).map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex items-start"
                  >
                    <span className="text-accent mr-2 mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

