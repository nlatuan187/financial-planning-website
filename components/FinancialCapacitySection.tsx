"use client";
import React from "react";
import { motion } from "framer-motion";

function FinancialCapacitySection() {
  return (
    <>
      <section className="mt-10 w-full max-w-[952px] max-md:max-w-full">
        <div className="flex max-md:flex-col">
          <motion.div
            className="w-[37%] max-md:ml-0 max-md:w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col py-6 px-4 rounded-xl bg-gray-50 h-full max-md:h-[400px] border shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Xây dựng bức tranh tài chính của bạn
              </h2>
              <p className="mt-3 text-sm text-gray-600">
                Thu thập các thông tin về nguồn thu, các khoản chi, khoản tiết
                kiệm để đánh giá sức khoẻ tài chính của bạn.
              </p>
              <div className="mt-auto flex flex-wrap gap-2 text-xs">
                <div className="flex items-center bg-white rounded-full py-1 pl-3 pr-4 border">
                  <span className="mr-2">💰</span>
                  <span className="font-medium">Tiền lương</span>
                  <span className="ml-1 text-gray-500">20.000.000 VND</span>
                </div>
                <div className="flex items-center bg-white rounded-full py-2 px-2 border">
                  <span className="mr-2">🏦</span>
                  <span className="font-medium">Tiền tiết kiệm</span>
                </div>
                <div className="flex items-center bg-white rounded-full py-2 px-2 border">
                  <span className="mr-2">📈</span>
                  <span className="font-medium">Lợi nhuận từ đầu tư</span>
                </div>
                <div className="flex items-center bg-white rounded-full py-2 px-2 border">
                  <span className="mr-2">🧐</span>
                  <span className="font-medium">Chi tiêu hàng tháng</span>
                </div>
                <div className="flex items-center bg-white rounded-full py-2 px-2 border">
                  <span className="mr-2">💟</span>
                  <span className="font-medium">Quỹ dự phòng</span>
                </div>
                <div className="flex items-center bg-white rounded-full py-2 px-2 border">
                  <span className="mr-2">🛡️</span>
                  <span className="font-medium">Phí bảo hiểm</span>
                </div>
                <div className="flex items-center bg-white rounded-full py-1 pl-3 pr-1 border">
                  <span className="mr-2">📍</span>
                  <span className="font-medium">Lãi vay nợ</span>
                  <span className="ml-2 text-gray-600 bg-gray-100 rounded-full px-2 py-0.5">
                    8%/năm
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="ml-2 w-[635px] max-md:ml-0 max-md:w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grow max-md:max-w-full">
              <article className="relative w-full overflow-hidden rounded-xl aspect-video">
                <img
                  src="/Capacity1.png"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Instant calculation background"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />

                <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
                  <div className="max-w-xs">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      Tính toán tức thì
                    </h3>
                    <p className="mt-2 text-sm font-medium text-gray-800">
                      Tự động đưa ra các con số liên quan đến mục tiêu mua nhà
                      ngay khi bạn nhập thông tin
                    </p>
                  </div>
                </div>
              </article>
              <div className="flex flex-col justify-center px-9 py-7 mt-1.5 rounded-xl border border-gray-200 border-solid bg-light-cyan max-md:px-5 max-md:max-w-full">
                <img
                  src="/Capacity2.png"
                  className="object-contain w-full bg-white aspect-[2.76] max-md:max-w-full"
                  alt="Financial calculation interface"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default FinancialCapacitySection;
