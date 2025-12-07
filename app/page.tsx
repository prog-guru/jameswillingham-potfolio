'use client';

import { useState } from 'react';
import { ProfilePane } from '@/components/ProfilePane';
import { DockNav } from '@/components/DockNav';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { DetailPane } from '@/components/DetailPane';
import { ThemeToggle } from '@/components/ThemeToggle';
import { experiences } from '@/data/experience';
import { Experience } from '@/data/experience';
import { personal } from '@/data/personal';

export default function Home() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[320px_1fr_400px] xl:grid-cols-[360px_1fr_440px]">
        {/* Left: Profile Pane - Desktop Only */}
        <div className="hidden lg:block">
          <ProfilePane />
        </div>

        {/* Tablet/Mobile Profile - Top Strip */}
        <div className="lg:hidden border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-4 md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                {personal.name}
              </h1>
              <p className="text-sm text-accent font-medium">
                {personal.title}
              </p>
            </div>
            <ThemeToggle />
          </div>
          <div className="flex gap-2">
            <a
              href={`mailto:${personal.email}`}
              className="flex-1 px-3 py-2 bg-accent text-white rounded-lg text-sm font-medium text-center hover:bg-accent-hover transition-colors"
            >
              Email
            </a>
            <a
              href={`tel:${personal.phone.replace(/\s/g, '')}`}
              className="flex-1 px-3 py-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium text-center hover:border-accent hover:text-accent transition-colors"
            >
              Call
            </a>
            <a
              href={personal.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 py-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium text-center hover:border-accent hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Center: Experience Timeline */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12 md:col-span-1 lg:col-span-1 min-h-[calc(100vh-200px)]">
          <ExperienceTimeline
            experiences={experiences}
            onExperienceSelect={setSelectedExperience}
          />
        </div>

        {/* Right: Detail Pane - Desktop & Tablet */}
        <div className="hidden md:block lg:block">
          <DetailPane selectedExperience={selectedExperience} />
        </div>

        {/* Mobile: Detail Pane Below */}
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-6">
          <DetailPane selectedExperience={selectedExperience} />
        </div>
      </div>

      {/* Floating Dock Navigation */}
      <DockNav />
    </div>
  );
}
