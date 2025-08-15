"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagicCard } from "./ui/magic-card";
import { I_Experience } from "../types/type";
import { experienceData } from "../lib/constants";

export const ExperienceSection = () => {
  return (
    <section className="py-18 lg:py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-14 lg:mb-12">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-normal text-foreground mb-2 tracking-tight">
            Experience
          </div>
        </header>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Central Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.4 top-0 bottom-0 w-0.5 bg-white/40"></div>
          
          {experienceData.map((exp: I_Experience, idx) => (
            <motion.div
              key={`${exp.company_name}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`relative flex items-center mb-16 last:mb-0 ${
                idx % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-4 h-4 bg-white rounded-full
                ring-4 ring-white/40 ring-offset-2 ring-offset-black z-10">
              </div>
              
              {/* Experience Card */}
              <div className={`w-5/12 ${idx % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
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
    <MagicCard className="bg-card/30 backdrop-blur-sm rounded-lg border border-border/20">
      <div className="p-6 lg:p-8">
        <div className="flex items-start gap-4 mb-4">
          {/* Company Logo */}
          {experience.company_link && experience.company_link !== "#" ? (
            <Link
              href={experience.company_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 transition-transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden border border-border/30 bg-background shadow-sm">
                <Image
                  src={experience.company_logo}
                  alt={`${experience.company_name} logo`}
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ) : (
            <div className="w-12 h-12 rounded-lg overflow-hidden border border-border/30 bg-background shadow-sm">
              <Image
                src={experience.company_logo}
                alt={`${experience.company_name} logo`}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Header Info */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg lg:text-xl font-semibold text-foreground leading-tight mb-1">
              {experience.company_name}
              {experience.additional_info && (
                <span className="text-muted-foreground font-normal">
                  {experience.additional_info}
                </span>
              )}
            </h3>
            <p className="text-base text-primary font-medium mb-2">
              {experience.job_title}
            </p>
            {experience.company_link && experience.company_link !== "#" && (
              <Link
                href={experience.company_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-block"
              >
                {experience.company_link}
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        {experience.description && (
          <div className="text-sm text-muted-foreground leading-relaxed mb-4">
            {experience.description.split('•').filter(point => point.trim()).map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 mb-2 last:mb-0">
                <span className="text-primary mt-1 flex-shrink-0">•</span>
                <span className="flex-1">{point.trim()}</span>
              </div>
            ))}
          </div>
        )}

        {/* Duration */}
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-full border border-border/20">
            📅 {experience.duration}
          </span>
        </div>
      </div>
    </MagicCard>
  );
};