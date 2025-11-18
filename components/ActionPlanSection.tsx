import React from "react";
import { motion } from "framer-motion";

function ActionPlanSection() {
  return (
    <section className="mt-14 w-full max-w-[952px] max-md:mt-10 max-md:max-w-full">
      <div className="flex max-md:flex-col">
        <motion.div initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[315px] max-md:ml-0 max-md:w-full"
        >
          <article className="flex flex-col h-full w-full rounded-xl bg-gray-100 px-7 pt-5">
            <div>
              <h3 className="text-xl font-semibold tracking-normal text-neutral-800">
                Lộ trình hành động chia nhỏ và rõ ràng
              </h3>
              <p className="mt-3 text-sm font-medium leading-5 text-zinc-600">
                Chia nhỏ mục tiêu lớn thành nhiều mục tiêu nhỏ và gợi ý từng bước
                để hoàn thành toàn bộ mục tiêu đó.
              </p>
            </div>
            <div className="mt-auto flex-1 flex items-end justify-center">
              <img
                src="/Frame 1321315820.png"
                className="w-full h-auto object-contain max-h-[400px]" // Sử dụng object-contain
                alt="Lộ trình hành động chia nhỏ và rõ ràng"
              />
            </div>
          </article>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="ml-2 w-[629px] max-md:ml-0 max-md:w-full"
        >
          <div className="grow max-md:mt-1.5 max-md:max-w-full">
            <article className="flex relative flex-col justify-center items-start p-px w-full text-xs font-medium tracking-normal rounded-xl min-h-[309px] text-zinc-600 max-md:pr-5 max-md:max-w-full rounded-xl">
              <img
                src="/Rectangle 32.png"
                className="object-cover absolute inset-0 size-full rounded-xl"
                alt="Income expense suggestions background"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />

              <div className="flex relative flex-col items-start py-7 pr-20 pl-6 max-w-full rounded-xl w-[397px] max-md:px-5">
                <h3 className="text-xl font-semibold tracking-normal text-neutral-800">
                  Đề xuất hoạt động thu - chi
                </h3>
                <p className="mt-2.5 text-sm tracking-normal leading-5">
                  Dựa vào thực trạng tài chính của bạn để đề xuất số tiền cần
                  chi ra và kiếm thêm, gắn hoạt động thu - chi với mục tiêu mua
                  nhà.
                </p>
                <div className="flex gap-2.5 justify-center items-center px-2.5 py-2 mt-20 text-center bg-white border border-gray-200 border-solid min-h-6 rounded-[40px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)] max-md:mt-10">
                  <span className="self-stretch my-auto">
                    💸 Chi tiêu gia đình
                  </span>
                </div>
                <div className="flex gap-2.5 justify-center items-center px-2.5 py-1.5 mt-1.5 text-center bg-white border border-gray-200 border-solid min-h-[23px] rounded-[40px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)]">
                  <span className="self-stretch my-auto">
                    💰 Thu nhập từ lương
                  </span>
                </div>
                <div className="flex gap-2.5 justify-center items-center px-2.5 py-2 mt-1.5 text-center bg-white border border-gray-200 border-solid min-h-6 rounded-[40px] shadow-[0px_2px_2px_rgba(0,0,0,0.1)]">
                  <span className="self-stretch my-auto">
                    ⚙ Tỷ lệ lợi nhuận đầu tư
                  </span>
                </div>
              </div>
            </article>
            <article className="w-full mt-1.5">
              <div className="flex flex-col md:flex-row items-center gap-8 rounded-2xl bg-teal-50/70 p-8">
                
                {/* === CỘT VĂN BẢN (BÊN TRÁI) === */}
                <div className="w-full md:w-1/3 md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 text-left" >
                    Chủ động cập nhật dòng tiền và theo dõi số tiền tích luỹ tức thì
                  </h3>
                </div>

                {/* === CỘT GIAO DIỆN (BÊN PHẢI) === */}
                <div className="w-full md:w-2/3 text-center">
                  <img
                    src="/Group.png" // << Đảm bảo ảnh này nằm trong thư mục /public
                    alt="Giao diện theo dõi dòng tiền"
                    className="w-full h-auto object-contain"
                  />
                </div>

              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ActionPlanSection;
