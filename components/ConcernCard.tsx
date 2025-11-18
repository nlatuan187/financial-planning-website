import Image from "next/image";
import React from "react";

interface ConcernCardProps {
  imageSrc: string;
  title: React.ReactNode;
  description: string;
}

const ConcernCard: React.FC<ConcernCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col flex-1">
      <div className="relative w-full h-56">
        <Image
          src={imageSrc}
          alt="Concern Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="text-2xl max-md:text-xl font-semibold text-neutral-800 leading-snug">
          {title}
        </h3>
        <p className="mt-2 text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

export default ConcernCard;
