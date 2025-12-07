'use client';

import { motion } from 'framer-motion';
import { SkillGroup as SkillGroupType } from '@/data/skills';

interface SkillGroupProps {
  skillGroup: SkillGroupType;
  index: number;
}

export function SkillGroup({ skillGroup, index }: SkillGroupProps) {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">
        {skillGroup.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skillGroup.skills.map((skill) => (
          <motion.span
            key={skill}
            className="px-3 py-1.5 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.05, borderColor: 'var(--accent)' }}
            transition={{ duration: 0.2 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

