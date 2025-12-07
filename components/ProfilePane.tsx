'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, GraduationCap } from 'lucide-react';
import { personal } from '@/data/personal';
import { education } from '@/data/education';

export function ProfilePane() {
  const yearsOfExperience = new Date().getFullYear() - 2014; // Started in 2014

  return (
    <motion.div
      className="h-screen sticky top-0 overflow-y-auto bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 p-6 lg:p-8 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col h-full">
        {/* Name & Title */}
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
            {personal.name}
          </h1>
          <p className="text-lg text-accent font-medium mb-3">{personal.title}</p>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Full-stack focus on modern frameworks and cloud-ready architectures. Bridge between
            frontend UX and backend/API design. Emphasis on performance, usability, and
            maintainability.
          </p>
        </div>

        {/* Primary Actions */}
        <div className="space-y-2 mb-6">
          <motion.a
            href={`mailto:${personal.email}`}
            className="flex items-center justify-center w-full px-4 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-4 h-4 mr-2" />
            Email
          </motion.a>
          <motion.a
            href={`tel:${personal.phone.replace(/\s/g, '')}`}
            className="flex items-center justify-center w-full px-4 py-2.5 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call
          </motion.a>
          <motion.a
            href={personal.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full px-4 py-2.5 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </motion.a>
        </div>

        {/* Snapshot Widget */}
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
            Snapshot
          </h3>
          <div className="space-y-2">
            <div className="px-2 py-1 bg-white dark:bg-gray-800 rounded text-xs font-medium text-gray-700 dark:text-gray-300">
              {yearsOfExperience}+ years experience
            </div>
            <div className="px-2 py-1 bg-white dark:bg-gray-800 rounded text-xs font-medium text-gray-700 dark:text-gray-300">
              Full-stack SaaS & platform work
            </div>
            <div className="px-2 py-1 bg-white dark:bg-gray-800 rounded text-xs font-medium text-gray-700 dark:text-gray-300">
              LLM & RAG-integrated systems
            </div>
          </div>
        </div>

        {/* Education - Compact */}
        <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-start space-x-3">
            <GraduationCap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                {education.degree}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                {education.institution}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {education.startDate} – {education.endDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

