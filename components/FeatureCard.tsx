import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    // Thay đổi nền, padding và layout
    <article className="flex flex-col flex-1 p-8 rounded-2xl bg-[#ECF8F9] min-w-[300px]">
      {/* Icon mới */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 shadow-md">
        <img
          src={icon}
          className="w-6 h-6"
          alt={`${title} icon`}
        />
      </div>
      
      {/* Văn bản */}
      <div className="mt-6">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-xs leading-6 text-gray-700">
          {description}
        </p>
      </div>
    </article>
  );
}

export default FeatureCard;
