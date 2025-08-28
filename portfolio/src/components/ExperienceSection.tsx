"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagicCard } from "./ui/magic-card";
import { I_Experience } from "../types/type";
import { experienceData } from "../lib/constants";

export const ExperienceSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground mb-2 tracking-tight">
            Experience
          </div>
        </header>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Central Timeline line - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black/60 via-black/40 to-black/20 dark:from-white/60 dark:via-white/40 dark:to-white/20"></div>
          
          {/* Mobile Timeline line - Left aligned for mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black/60 via-black/40 to-black/20 dark:from-white/60 dark:via-white/40 dark:to-white/20"></div>
          
          {experienceData.map((exp: I_Experience, idx) => (
            <motion.div
              key={`${exp.company_name}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative flex items-center mb-12 sm:mb-14 lg:mb-16 last:mb-0 ${
                idx % 2 === 0 
                  ? 'md:justify-start justify-start' 
                  : 'md:justify-end justify-start'
              }`}
            >
              {/* Timeline dot - Responsive positioning */}
              <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 translate-y-0
                w-3 h-3 sm:w-4 sm:h-4 bg-black dark:bg-white rounded-full
                ring-3 sm:ring-4 ring-black/30 dark:ring-white/30 ring-offset-1 sm:ring-offset-2 ring-offset-background z-10">
              </div>
              
              {/* Experience Card - Full width on mobile, half width on desktop */}
              <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${
                idx % 2 === 0 
                  ? 'md:pr-8' 
                  : 'md:pl-8'
              }`}>
                <ExperienceCard experience={exp} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  experience: I_Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <MagicCard className="bg-card/30 backdrop-blur-sm rounded-lg border border-border/20 hover:border-border/40 transition-colors duration-300">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-start gap-3 sm:gap-4 mb-4">
          {/* Company Logo - Responsive sizing */}
          {experience.company_link && experience.company_link !== "#" ? (
            <Link
              href={experience.company_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform hover:scale-105 duration-200"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-border/30 bg-background shadow-sm">
                <Image
                  src={experience.company_logo}
                  alt={`${experience.company_name} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ) : (
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden border border-border/30 bg-background shadow-sm">
              <Image
                src={experience.company_logo}
                alt={`${experience.company_name} logo`}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Header Info - Better responsive typography */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground leading-tight mb-1 break-words">
              {experience.company_name}
              {experience.additional_info && (
                <span className="text-muted-foreground font-normal text-sm sm:text-base block sm:inline">
                  {experience.additional_info}
                </span>
              )}
            </h3>
            <p className="text-sm sm:text-base text-primary font-medium mb-2">
              {experience.job_title}
            </p>
            {experience.company_link && experience.company_link !== "#" && (
              <Link
                href={experience.company_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors inline-block break-all"
              >
                {experience.company_link}
              </Link>
            )}
          </div>
        </div>

        {/* Description - Better spacing and readability */}
        {experience.description && (
          <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 space-y-2">
            {experience.description.split('•').filter(point => point.trim()).map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-primary mt-1 flex-shrink-0 text-xs sm:text-sm">•</span>
                <span className="flex-1">{point.trim()}</span>
              </div>
            ))}
          </div>
        )}

        {/* Duration - Better mobile styling */}
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground bg-muted/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-border/20">
            <span className="text-sm sm:text-base">📅</span>
            <span>{experience.duration}</span>
          </span>
        </div>
      </div>
    </MagicCard>
  );
};