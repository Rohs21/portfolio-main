"use client";
import Image from "next/image";
import Link from "next/link";
import BorderFrame from "./ui/BorderFrame";
import { FlipWords } from "./ui/flip-words";
import { words } from "../lib/constants";
import {
  MapPin,
  Mail,


  CodeXml,
  UserPen,
  BadgeCheck
} from "lucide-react";
import Text from "./ui/text";

export const Hero = () => {
  return (
    <section className="relative pb-6 lg:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-8 mb-4 sm:mb-6">
          {/* Profile Picture */}

          <div className="group flex items-start">
            <BorderFrame className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 ">
              <Image
                src="/assets/Me.png"
                width={128}
                height={128}
                alt="Rohan Singh"
                className="
        w-full h-full object-cover 
        transition-all duration-300
       lg:group-hover:filter-none lg:filter lg:grayscale"
                priority
              />
            </BorderFrame>
          </div>







          <div className="flex-1  ">
            <div className="text-xl sm:text-2xl lg:text-3xl font-medium mb-1 leading-tight flex items-center gap-2 ">
              Rohan Singh
              <BadgeCheck className="text-foreground/80" />
            </div>
            <FlipWords
              words={words}
              className="text-md sm:text-lg text-muted-foreground/80 font-medium"
            />
          </div>
        </div>

        {/* Professional Info */}
        <div className="space-y-1  mx-auto sm:mx-0">
          <div className="text-muted my-8 text-md lg:text-lg">
            <span className="text-foreground">Software engineer</span> with over 1+ year of experience through <span className="text-foreground">internships</span> and <span className="text-foreground">open-source projects</span>. Skilled at building <span className="text-foreground">scalable web applications</span>, automating everyday tasks, and adding <span className="text-foreground">AI features</span>. Enjoys creating <span className="text-foreground">practical</span>, high-quality products that help people and make a real impact.
          </div>
          <div className="flex items-start lg:items-center gap-3 ">
            <CodeXml className="w-5 h-5 text-muted-foreground flex-shrink-0 " />
            <Text text="Full Stack & Software Engineer" />
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <Text text="Pune, IN" />
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <Link
              href="mailto:rohans212004@gmail.com"
              className="text-base sm:text-lg text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              <Text text="rohans212004@gmail.com" />

            </Link>
          </div>

          <div className="flex items-center gap-3 text-foreground/80 text-base sm:text-lg">
            <UserPen className="w-5 h-5 text-foreground/60 flex-shrink-0" />
            <Text text="21, He/Him" />


          </div>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 pr-1">
              <div className="w-2 h-2 bg-accent-foreground rounded-full animate-pulse shadow-sm"></div>
            </div>
            <div className="text-lg text-foreground/80 font-medium">
              <Text text="Available for Hire" />
            </div>
          </div>
          <div className="flex gap-6 mt-10">
  {/* Work With Me */}
  <a
    href="mailto:rohans212004@gmail.com"
    className="bg-gray-100 hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-900 rounded-sm px-4 py-2.5 flex items-center gap-2.5 transition-all duration-200 border border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600"
  >
    <span className="flex gap-2 px-4 items-center bg-lightBlue dark:bg-darkBlue text-black dark:text-white p-2 w-fit text-sm rounded-md">
      Work With Me
    </span>
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black dark:text-white"
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 
          .708-.708l4 4a.5.5 0 0 1 0 
          .708l-4 4a.5.5 0 0 1-.708-.708L13.293 
          8.5H1.5A.5.5 0 0 1 1 8"
      ></path>
    </svg>
  </a>

  {/* Resume */}
  <a
    href="https://drive.google.com/file/d/1Xlo0Vviaqf5Z1Pl9B5R26gUMo7xQWfe5/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-100 hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-900 rounded-sm px-4 py-2.5 flex items-center gap-2.5 transition-all duration-200 border border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600"
  >
    <span className="text-black text-sm font-medium group-hover:text-black dark:text-white dark:group-hover:text-white transition-colors duration-200">
      Resume
    </span>
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className="text-black dark:text-white"
    >
      <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
      <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 
        2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
    </svg>
  </a>
</div>

        </div>
      </div>
    </section>
  );
};
