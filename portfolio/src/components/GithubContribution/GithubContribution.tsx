"use client";

import React from "react";
import GhActivityCard from "./gh-activity-card";

const GithubContribution: React.FC = () => {
  return (
    <section className="mt-20 w-full flex justify-center">
      <div className="max-w-6xl w-full px-4 flex flex-col gap-6 transition-all duration-700 delay-1000">
        <p className="text-2xl text-black dark:text-white">
          Github Contribution
        </p>
        <GhActivityCard
          username="Rohs21"
          className="text-black dark:text-white"
        />
      </div>
    </section>
  );
};

export default GithubContribution;
