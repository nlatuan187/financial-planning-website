"use client";
import { motion } from "framer-motion";
import React from "react";

interface SectionHeaderProps {
  tagline?: string;
  title: React.ReactNode;
  subtitle: string;
}

function SectionHeader({
  tagline,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-12 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {tagline && (
        <p className="bg-cyan-100 border border-cyan-600 text-sm font-medium px-4 py-2 rounded-full shadow-md">
          {tagline}
        </p>
      )}
      <h2 className="mt-4 text-5xl font-bold leading-tight max-md:text-2xl text-neutral-800 max-md:max-w-full max-md:text-4xl flex flex-col items-center">
        {title}
      </h2>
      <p className="mt-4 px-10 max-md:px-1 text-lg max-md:text-sm font-medium text-center leading-7 text-neutral-600 max-md:max-w-full max-w-2xl max-md:text-base">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default SectionHeader;
