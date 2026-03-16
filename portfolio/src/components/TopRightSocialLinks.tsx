"use client";

import Link from "next/link";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Rohs21",
    icon: IconBrandGithub,
  },
  {
    label: "Twitter",
    href: "https://x.com/RohanSingh2104",
    icon: IconBrandX,
  },
];

export default function TopRightSocialLinks() {
  return (
    <div className="fixed right-4 top-4 z-40 flex items-center gap-2 sm:right-8 sm:top-6">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg border border-border/80 bg-card/85 px-3 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted"
            aria-label={`Open ${item.label}`}
          >
            <Icon className="h-4 w-4 text-foreground/85 transition-colors group-hover:text-foreground" />
            <span className="leading-none">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
