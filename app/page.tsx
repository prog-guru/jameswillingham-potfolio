'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ArrowDown } from 'lucide-react';
import { Section } from '@/components/Section';
import { ExperienceCard } from '@/components/ExperienceCard';
import { EducationCard } from '@/components/EducationCard';
import { SkillGroup } from '@/components/SkillGroup';
import { ContactForm } from '@/components/ContactForm';
import { personal, summary, heroOverview } from '@/data/personal';
import { experiences } from '@/data/experience';
import { skillGroups } from '@/data/skills';
import { education } from '@/data/education';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-4">
              {personal.name}
            </h1>
            <motion.p
              className="text-xl sm:text-2xl text-accent font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {personal.title}
            </motion.p>
            <motion.div
              className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <MapPin className="w-5 h-5" />
              <span>{personal.location}</span>
            </motion.div>
            <motion.p
              className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {heroOverview}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href={`mailto:${personal.email}`}
                className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-gray-950 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Get in Touch</span>
              </motion.a>
              <motion.a
                href={personal.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-gray-950 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>
            </motion.div>
            <motion.a
              href="#about"
              className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: 4 }}
            >
              <span>Learn more</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About/Summary Section */}
      <Section id="about" title="About">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            {summary}
          </p>
        </motion.div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience" className="bg-gray-50 dark:bg-gray-900">
        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills">
        <div className="max-w-5xl mx-auto">
          {skillGroups.map((skillGroup, index) => (
            <SkillGroup key={skillGroup.category} skillGroup={skillGroup} index={index} />
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education" className="bg-gray-50 dark:bg-gray-900">
        <EducationCard education={education} />
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <ContactForm />
      </Section>
    </>
  );
}

