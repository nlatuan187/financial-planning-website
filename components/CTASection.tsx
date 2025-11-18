import React from "react";
import { motion } from "framer-motion";

function CTASection() {
  return (
    <section className="flex flex-col justify-center items-start px-64 py-14 mt-20 mb-10 w-full text-base font-medium tracking-tight text-center text-black rounded-3xl bg-slate-100 max-w-[951px] min-h-[318px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <motion.div initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center w-full max-w-[430px]"
      >
        <h2 className="text-3xl font-semibold tracking-tight">
          Chinh phục
          <br />
          căn nhà đầu tiên
        </h2>
        <p className="self-stretch mt-8">
          Đồng hành cùng Finful để mua nhà với ít nỗi lo và áp lực hơn
        </p>
        <a
          href="https://muanha.finful.co/"
          className="flex gap-2.5 justify-center items-center px-2.5 py-3 mt-8 max-w-full text-white rounded-full min-h-[41px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[161px] bg-[#00ACB8]"
        >
          <span className="self-stretch my-auto">Truy cập</span>
        </a>
      </motion.div>
    </section>
  );
}

export default CTASection;
