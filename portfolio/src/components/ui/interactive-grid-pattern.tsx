"use client";

import { cn } from "@/src/lib/utils";
import React, { useState, useEffect, useMemo } from "react";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  // Keep the pattern sized to the full document so it remains visible while scrolling.
  useEffect(() => {
    function updateSize() {
      const doc = document.documentElement;
      const body = document.body;

      setContainerSize({
        w: Math.max(doc.clientWidth, window.innerWidth),
        h: Math.max(doc.scrollHeight, body.scrollHeight, window.innerHeight),
      });
    }

    updateSize();

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(document.body);

    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
      resizeObserver.disconnect();
    };
  }, []);

  const { horizontal, vertical } = useMemo(() => {
    return {
      horizontal: Math.ceil(containerSize.w / width),
      vertical: Math.ceil(containerSize.h / height),
    };
  }, [containerSize, width, height]);

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const x = event.clientX;
      const y = event.clientY + window.scrollY;
      const col = Math.floor(x / width);
      const row = Math.floor(y / height);
      const squareIndex = row * horizontal + col;

      if (
        col < 0 ||
        row < 0 ||
        col >= horizontal ||
        row >= vertical ||
        horizontal <= 0 ||
        vertical <= 0
      ) {
        setHoveredSquare(null);
        return;
      }

      setHoveredSquare(squareIndex);
    }

    function handleMouseLeaveDocument() {
      setHoveredSquare(null);
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeaveDocument);
    window.addEventListener("blur", handleMouseLeaveDocument);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveDocument);
      window.removeEventListener("blur", handleMouseLeaveDocument);
    };
  }, [horizontal, vertical, width, height]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        width={horizontal * width}
        height={vertical * height}
        className={cn("absolute top-0 left-0", className)}
        {...props}
      >
        {Array.from({ length: horizontal * vertical }).map((_, index) => {
          const x = (index % horizontal) * width;
          const y = Math.floor(index / horizontal) * height;
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={width}
              height={height}
              className={cn(
                "stroke-[var(--background-border)] transition-all duration-300 ease-out",
                hoveredSquare === index
                  ? "fill-gray-300/30"
                  : "fill-transparent",
                squaresClassName
              )}
            />
          );
        })}
      </svg>
    </div>
  );
}
