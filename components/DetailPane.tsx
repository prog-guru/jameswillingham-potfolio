'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '@/data/experience';
import { skillGroups } from '@/data/skills';
import { summary } from '@/data/personal';
import { education } from '@/data/education';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { personal } from '@/data/personal';

interface DetailPaneProps {
  selectedExperience: Experience | null;
}

export function DetailPane({ selectedExperience }: DetailPaneProps) {
  return (
    <motion.div
      className="h-screen md:h-auto md:min-h-screen md:sticky md:top-0 overflow-y-auto bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 p-6 lg:p-8"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        {selectedExperience ? (
          <motion.div
            key={selectedExperience.company}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-2">
              {selectedExperience.title}
            </h2>
            <p className="text-lg text-accent font-medium mb-4">{selectedExperience.company}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              {selectedExperience.startDate} – {selectedExperience.endDate} • {selectedExperience.location}
            </p>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50 mb-3">
                Key Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedExperience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50 mb-3">
                What I Owned Here
              </h3>
              <ul className="space-y-2">
                {selectedExperience.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex items-start"
                  >
                    <span className="text-accent mr-2 mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="default"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Skills Matrix */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Skills</h2>
              <div className="space-y-6">
                {skillGroups.map((group, index) => (
                  <div key={group.category} className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-50 mb-3 uppercase tracking-wide">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Section */}
            <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-3">
                About James
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {summary}
              </p>
            </div>

            {/* Education */}
            <div id="education" className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4">Education</h2>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  {education.degree}
                </p>
                <p className="text-sm text-accent font-medium mt-1">{education.institution}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {education.startDate} – {education.endDate} • {education.location}
                </p>
              </div>
            </div>

            {/* Contact */}
            <div id="contact" className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">Contact</h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4 mr-3" />
                  {personal.email}
                </a>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, '')}`}
                  className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4 mr-3" />
                  {personal.phone}
                </a>
                <div className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4 mr-3" />
                  {personal.location}
                </div>
                <a
                  href={personal.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-accent transition-colors"
                >
                  <Linkedin className="w-4 h-4 mr-3" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

