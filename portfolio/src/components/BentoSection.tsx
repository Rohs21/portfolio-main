"use client"

import React from "react";
import { SkillsCarousel } from "./bento/Skills";


export default function BentoGrid() {


  return (
    <div className="w-full max-w-4xl  mx-auto px-4 pt-12">
       <div className="text-muted py-6 flex">still not sure? Check out my  
          <a
              href={"https://github.com/Rohs21"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-foreground/50 transition-colors flex px-1"
            > Github
          </a>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {/* Skills Card */}
        <div className="bg-card rounded-xl shadow-md border border-gray-200 flex items-center justify-center min-h-[180px]">
          <SkillsCarousel />
        </div> 
      </div>
    </div>
  );
}
