// components/FinancialCapacitySection.tsx

"use client";
import React from "react";
import { motion } from "framer-motion";

function FinancialCapacitySection() {
  return (
    <>
      <section className="mt-10 w-full max-w-[952px] max-md:max-w-full">
        {/* Thay đổi: Thêm gap-y-2 để tạo khoảng cách giữa 2 khối trên mobile */}
        <div className="flex max-md:flex-col max-md:gap-y-2">

          {/* --- BẮT ĐẦU THAY ĐỔI KHỐI BÊN TRÁI --- */}
          <motion.div
            className="w-[37%] max-md:ml-0 max-md:w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Thay đổi: Điều chỉnh padding và chiều cao */}
            <div className="flex flex-col p-8 max-md:p-6 rounded-xl bg-gray-50 h-full border shadow-sm">
              {/* Thay đổi: Điều chỉnh kích thước font chữ cho responsive */}
              <h2 className="text-2xl max-md:text-xl font-bold text-gray-900">
                Xây dựng bức tranh tài chính của bạn
              </h2>
              {/* Thay đổi: Điều chỉnh kích thước font chữ và lề */}
              <p className="mt-3 text-base max-md:text-sm text-gray-600">
                Thu thập các thông tin về nguồn thu, các khoản chi, khoản tiết
                kiệm để đánh giá sức khoẻ tài chính của bạn.
              </p>
              {/* Thay đổi: Điều chỉnh gap, font-size cho các pill */}
              <div className="mt-auto flex flex-wrap gap-x-2 gap-y-3 text-sm max-md:text-xs pt-6">
                <div className="flex items-center bg-white rounded-full py-2 px-4 border">
                  <span className="mr-2">💰</span>
                  <span className="font-medium">Tiền lương</span>
                  <span className="ml-2 text-gray-500">20.000.000</span>
                </div>
                <div className="flex items-center bg-white rounded-full py-2 px-4 border">
                  <span className="mr-2">🏦</span>
                  <span className="font-medium">Tiền tiết kiệm</span>
                </div>
                <div className="flex items-center bg-white rounded-full py-2 px-4 border">
                  <span className="mr-2">📈</span>
                  <span className="font-medium">Lợi nhuận từ đầu tư</span>
                </div>
                <div className="flex items-center bg-white rounded-full py-2 px-4 border">
                  <span className="mr-2">🧐</span>
                  <span className="font-medium">Chi tiêu hàng tháng</span>
                </div>
                <div className="flex items-center bg-white rounded-full py-2 px-4 border">
                  <span className="mr-2">💟</span>
                  <span className="font-medium">Quỹ dự phòng</span>
                </div>
                <div className="flex items-center bg-white rounded-full py-2 px-4 border">
                  <span className="mr-2">🛡️</span>
                  <span className="font-medium">Phí bảo hiểm</span>
                </div>
                <div className="flex items-center bg-white rounded-full py-2 px-4 border">
                  <span className="mr-2">📍</span>
                  <span className="font-medium">Lãi vay nợ</span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* --- KẾT THÚC THAY ĐỔI KHỐI BÊN TRÁI --- */}

          <motion.div
            className="ml-2 w-[635px] max-md:ml-0 max-md:w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Thay đổi: Thêm gap-y-2 để tạo khoảng cách giữa 2 ảnh trên mobile */}
            <div className="grow max-md:max-w-full flex flex-col gap-y-2">
              <article className="relative w-full overflow-hidden rounded-xl aspect-video">
                <img
                  src="/Capacity1.png"
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Instant calculation background"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent" />

                {/* Thay đổi: Điều chỉnh padding và kích thước chữ */}
                <div className="relative z-10 flex flex-col justify-end h-full p-8 max-md:p-6 text-white">
                  <div className="max-w-xs">
                    <h3 className="text-2xl max-md:text-xl font-bold tracking-tight text-gray-900">
                      Hiểu về mong muốn của bạn
                    </h3>
                    <p className="mt-2 text-base max-md:text-sm font-medium text-gray-800">
                      Tự động đưa ra các con số liên quan đến mục tiêu mua nhà
                      ngay khi bạn nhập thông tin
                    </p>
                  </div>
                </div>
              </article>
              {/* Thay đổi: Bỏ mt-1.5, vì đã dùng gap ở container cha */}
              <article className="relative w-full overflow-hidden rounded-xl group">
                <img
                  src="/Capacity2.png"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  alt="Expert perspective background"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent opacity-80" />

                <div className="absolute inset-0 flex flex-col justify-end p-8 max-md:p-6">
                  <div className="relative z-10">
                    <h3 className="text-2xl max-md:text-xl font-bold tracking-tight text-gray-900 mb-2">
                      Góc nhìn của chuyên gia
                    </h3>
                    <p className="text-base max-md:text-sm font-medium text-gray-800 max-w-xl">
                      Cung cấp các thông tin về thị trường, về tài chính cá nhân để bạn hiểu rằng mỗi khoản tiền bạn có ảnh hưởng thế nào đến kế hoạch mua nhà.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default FinancialCapacitySection;