"use client";
import React from "react";
import ConcernCard from "./ConcernCard";
import { motion } from "framer-motion";

const ConcernsSection = () => {
  const concerns = [
    {
      imageSrc: "/Concern1.png", // Please replace with the correct image path
      title: (
        <>
          Tôi có nên <br/>
          <span className="bg-gradient-to-r from-[#7FD5DB] to-[#00ACB8] bg-clip-text text-transparent">
            mua nhà bây giờ?
          </span>
        </>
      ),
      description:
        "Bạn phân vân nên mua nhà bây giờ, hay chờ một thời gian nữa để giá ổn định rồi mua sau cũng được.",
    },
    {
      imageSrc: "/Concern2.png", // Please replace with the correct image path
      title: (
        <>
          Tôi có thể <br />
          <span className="bg-gradient-to-r from-[#7FD5DB] to-[#00ACB8] bg-clip-text text-transparent">
            mua nhà hay không?
          </span>
        </>
      ),
      description:
        "Bạn chưa chắc chắn với khả năng kiếm tiền và số tiền đang có, bạn có thể mua được nhà và trả được nợ hay không.",
    },
    {
      imageSrc: "/Concern3.png", // Please replace with the correct image path
      title: (
        <>
          Tôi cần phải <br />
          <span className="bg-gradient-to-r from-[#7FD5DB] to-[#00ACB8] bg-clip-text text-transparent">
            làm gì để mua được nhà?
          </span>
        </>
      ),
      description:
        "Rất khao khát căn nhà, nhưng bạn gặp khó khăn khi vạch ra một kế hoạch kiếm tiền và tích luỹ phù hợp.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center -mt-20 relative z-10 px-4">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="bg-cyan-100 border border-cyan-600 text-sm font-medium px-4 py-2 rounded-full shadow-md">
          Có phải bạn...
        </span>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
        initial="hidden"
        whileInView="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        {concerns.map((concern, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
          >
            <ConcernCard
              imageSrc={concern.imageSrc}
              title={concern.title}
              description={concern.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ConcernsSection;
