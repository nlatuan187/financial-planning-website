import React from "react";
import FeatureCard from "./FeatureCard";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function FeaturesSection() {
  const features = [
    {
      icon: "/protectIcon.png",
      title: "Bảo vệ dữ liệu của bạn",
      description:
        "Finful thu thập dữ liệu cá nhân chỉ để phục vụ tính toán và đưa ra đề xuất phù hợp. Dữ liệu này được lưu trữ nội bộ, không chia sẻ với bất kỳ bên thứ ba nào.",
    },
    {
      icon: "/hoptac.png",
      title: "Đứng về phía bạn",
      description:
        "Các đề xuất sản phẩm tài chính Finful đưa ra là dựa trên sự phù hợp với bạn, không phải dựa trên lợi ích của bất kỳ bên thứ ba nào khác.",
    },
    {
      icon: "/winner.png",
      title: "Dựa trên mục tiêu của bạn",
      description:
        'Finful sẽ giúp bạn chinh phục đa dạng mục tiêu tài chính quan trọng trong cuộc đời, bắt đầu bằng "Chinh phục căn nhà đầu tiên".',
    },
  ];

  return (
    <section className="flex flex-col mt-10 w-full max-w-[1189px] max-md:mt-10 max-md:max-w-full">
      <SectionHeader
        title={
          <>
            Finful đứng về phía bạn,{' '}
            <br />
            <span>vì quyền lợi của bạn</span>
          </>
        }
        subtitle=""
      />

      <motion.div
        className="flex justify-center gap-8 mt-5 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col flex-1" // Thêm class này để các thẻ co giãn bằng nhau
            variants={itemVariants}
            transition={{ duration: 0.5 }}
          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default FeaturesSection;
