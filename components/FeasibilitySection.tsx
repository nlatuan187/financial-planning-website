import React from "react";
import { motion } from "framer-motion";

function FeasibilitySection() {
  return (
    <section className="mt-12 w-full max-w-[940px] max-md:mt-10 max-md:max-w-full">
      <motion.div initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-8 max-md:pt-4 w-full bg-white rounded-xl border border-gray-200 border-solid"
      >
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[67%] max-md:ml-0 max-md:w-full">
            <div className="z-10 grow mt-2.5 max-md:mr-0 max-md:max-w-full">
              <article className="flex flex-col ml-12 max-w-full w-[361px] max-md:ml-2.5">
                <h3 className="self-start text-xl font-semibold tracking-normal text-neutral-800">
                  Đánh giá khả thi
                </h3>
                <p className="mt-2.5 text-sm font-medium tracking-normal leading-5 text-zinc-600">
                  Kết hợp giữa mong muốn và khả năng tài chính thực tế để xác
                  định{" "}
                  <span className="font-bold">
                    bạn có mua được nhà hay không.
                  </span>
                </p>
              </article>
              <img
                src="/Chart.svg"
                className="object-contain mt-9 w-full rounded-none aspect-[4.67] max-md:max-w-full"
                alt="Feasibility assessment chart"
              />
            </div>
          </div>
          <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              src="/phone.png"
              className="object-contain grow w-full aspect-[1.26] max-md:mt-8"
              alt="Feasibility visualization"
            />
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-1 w-full max-w-[940px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full rounded-xl">
            <article className="flex relative flex-col grow justify-center p-0.5 text-xl font-medium tracking-normal leading-6 text-center text-white min-h-[225px] max-md:mt-1.5 max-md:max-w-full">
              <img
                src="/key.png"
                className="object-cover absolute inset-0 size-full"
                alt="Explanation background"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent rounded-xl" />

              <div className="flex relative flex-col justify-center px-16 py-20 max-md:px-5 max-md:max-w-full">
                <p>Giải thích tại sao bạn có thể hoặc chưa thể mua được nhà</p>
              </div>
            </article>
          </div>
          <div className="w-6/12 max-md:ml-0 max-md:w-full rounded-xl">
            <article className="flex relative flex-col grow justify-end rounded-xl items-start p-8 min-h-[219px] max-md:p-6 max-md:mt-2 max-md:max-w-full">
              <img
                src="/result.png"
                className="object-cover absolute inset-0 size-full rounded-xl"
                alt="Timeline background"
              />
              <div className="relative max-w-full w-[283px]">
                <h4 className="text-base font-semibold tracking-normal text-white">
                  Đề xuất thời gian mua nhà sớm nhất
                </h4>
                <p className="mt-2 text-xs font-medium tracking-normal leading-4 text-stone-300">
                  Nếu khả thi, chúng tôi đưa ra năm sớm nhất bạn có thể sở hữu
                  căn nhà mơ ước.
                </p>
              </div>
            </article>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default FeasibilitySection;
