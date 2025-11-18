import React from "react";
import { motion } from "framer-motion";

function PersonalizedPlanSection() {
  return (
    <section className="mt-14 w-full max-w-[952px] max-md:mt-10 max-md:max-w-full">
      <motion.div initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-2 max-md:flex-col"
      >
        <div className="w-[394px] max-md:ml-0 max-md:w-full pt-2">
          <article className="relative h-full w-full rounded-xl overflow-hidden">
            <img
              src="/Frame 1321315808.png"
              className="object-cover absolute inset-0 w-full h-full"
              alt="Cash flow planning background"
            />
          </article>
        </div>
        {/* Cột 2 */}
        <div className="w-[295px] max-md:ml-0 max-md:w-full pt-2">
          <article className="relative h-full w-full rounded-xl overflow-hidden">
            <img
              src="/Frame 1321315807.png"
              className="object-cover w-full h-full"
              alt="Financial planning interface"
            />
          </article>
        </div>
        {/* Cột 3 */}
        <div className="w-[248px] max-md:ml-0 max-md:w-full pt-2">
          <article className="relative h-full w-full rounded-xl overflow-hidden">
            <img
              src="/Frame 1321315809.png"
              className="object-cover w-full h-full"
              alt="Financial planning interface"
            />
          </article>
        </div>
      </motion.div>
    </section>
  );
}

export default PersonalizedPlanSection;
