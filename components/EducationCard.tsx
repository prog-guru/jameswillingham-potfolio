'use client';

import { motion } from 'framer-motion';
import { Education } from '@/data/education';
import { GraduationCap } from 'lucide-react';

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 sm:p-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-accent" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-1">
            {education.degree}
          </h3>
          <p className="text-lg text-accent font-medium mb-2">{education.institution}</p>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>{education.startDate} – {education.endDate}</p>
            <p>{education.location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

