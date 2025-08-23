"use client";

import React from "react";
import LeetCodeStats from "./leetcode-stats";

const LeetCodeStatsSection: React.FC = () => {
  return (
    <section className="mt-10 10w-full flex justify-center">
      <div className="max-w-6xl w-full px-4 flex flex-col gap-3 transition-all duration-700 delay-1000">
        <p className={`text-2xl text-black dark:text-white mb-2`}>
          LeetCode Stats
        </p>
        <LeetCodeStats
          username="Rohan_s21"
          className="w-full"
          errorClassName="text-red-500 dark:text-red-400"
          viewMode="calendar"
        />
      </div>
    </section>
  );
};

export default LeetCodeStatsSection;
