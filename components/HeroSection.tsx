"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function HeroSection() {
  return (
    <section className="flex overflow-hidden relative flex-col self-stretch px-12 pt-6 pb-36 w-full bg-blend-normal min-h-[708px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        src="/HeroBG.svg"
        className="object-cover absolute inset-0 size-full"
        alt="Hero background"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex relative flex-wrap gap-10 justify-between items-center text-sm font-medium tracking-normal leading-loose text-center text-white max-md:max-w-full">
          <a href="https://finful.co/"
              target="_blank">
            <img
              src="/finful.png"
              className="object-contain shrink-0 self-stretch my-auto bg-blend-normal aspect-[3.48] w-[115px]"
              alt="Finful logo"
            />
          </a>
          <div className="self-stretch my-auto rounded-lg w-[194px]">
            <a
              href="https://muanha.finful.co/"
              target="_blank"
              className="flex overflow-hidden flex-col justify-center px-3 py-2 w-full bg-cyan-600 rounded-lg bg-[#00ACB8] shadow-[0px_2px_10px_rgba(16,24,40,0.08)]"
            >
              <div className="flex gap-2.5 items-center w-full">
                <span className="self-stretch my-auto">Lập kế hoạch mua nhà</span>
                <img
                  src="/arrow.svg"
                  className="object-contain shrink-0 self-stretch my-auto w-3 bg-[#00ACB8] aspect-square"
                  alt="Arrow icon"
                />
              </div>
            </a>
          </div>
        </nav>
      </motion.div>
      <div className="flex relative flex-col self-center mt-40 mb-0 w-full max-w-[930px] max-md:mb-2.5 max-md:max-w-full">
        <header className="flex flex-col w-full max-md:max-w-full">
          <motion.h1
            className="w-full text-7xl font-medium tracking-tighter leading-none max-md:max-w-full max-md:text-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="text-center text-slate-900 max-md:max-w-full max-md:text-3xl"
              variants={itemVariants}
            >
              Mua căn nhà đầu tiên
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4 justify-center items-center text-center w-full max-md:max-w-full max-md:text-4xl"
              variants={itemVariants}
            >
              <span className="self-stretch my-auto text-slate-900 max-md:text-3xl">
                trong vòng {' '}
                <span className="self-stretch my-auto text-cyan-600 max-md:max-w-full max-md:text-3xl">
                  1-3 năm nữa.
                </span>
              </span>
            </motion.div>
          </motion.h1>
          <motion.p
            className="self-center mt-5 text-xl max-md:text-base tracking-normal leading-7 text-center text-black w-[603px] max-md:max-w-full"
            variants={itemVariants}
          >
            Chúng tôi đồng hành cùng bạn để tìm ra con đường nhanh nhất và phù
            hợp nhất tới ngôi nhà mơ ước trong 1 - 3 năm tới.
          </motion.p>
        </header>

        <motion.a
          href="https://muanha.finful.co/"
          target="_blank"
          className="flex overflow-hidden gap-2.5 self-center px-6 py-4 mt-9 max-w-full text-lg font-medium tracking-normal leading-none text-center text-white bg-[#00ACB8] rounded-xl bg-blend-normal shadow-[0px_2px_10px_rgba(16,24,40,0.08)] w-[147px] max-md:px-5"
          variants={itemVariants}
        >
          <span>Truy cập</span>
          <img
            src="/arrow.svg"
            className="object-contain shrink-0 my-auto w-4 bg-blend-normal aspect-square"
            alt="Arrow icon"
          />
        </motion.a>
      </div>
    </section>
  );
}

export default HeroSection;
