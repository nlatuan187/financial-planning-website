"use client";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import FinancialCapacitySection from "./FinancialCapacitySection";
import FeasibilitySection from "./FeasibilitySection";
import PersonalizedPlanSection from "./PersonalizedPlanSection";
import ActionPlanSection from "./ActionPlanSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import SectionHeader from "./SectionHeader";
import ConcernsSection from "./ConcernsSection"; // Import component mới

const FinancialPlanningPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="bg-gray-50" // Thay đổi màu nền để thấy rõ shadow
    >
      <HeroSection />

      <section className="flex flex-col items-center justify-center mt-40 max-md:mt-25 w-full px-3">
        <ConcernsSection />
      </section>

      <section className="flex flex-col items-center justify-center mt-20 w-full px-3">
        <SectionHeader
          tagline="Bạn sẽ nhận được"
          title={
            <>
              
              Làm rõ
              <br />
              <span className="italic">
                <span className="text-[#00ACB8]">nhu cầu</span> và{' '}
                <span className="text-[#00ACB8]">khả năng</span> mua nhà
              </span>
            </>
          }
          subtitle="Finful hiểu về căn nhà bạn đang mơ ước và thu thập thông tin cơ bản về tình hình tài chính của bạn"
        />
        <FinancialCapacitySection />
      </section>

      <section className="flex flex-col items-center justify-center mt-20 w-full px-3">
        <SectionHeader
          title={
            <>
              Biết được căn nhà mơ ước
              <br />
              <span className="italic text-[#00ACB8]">có khả thi không</span>
            </>
          }
          subtitle="Finful cho bạn biết mong muốn mua nhà của bạn có thể thực hiện được hay không"
        />
        <FeasibilitySection />
      </section>

      <section className="flex flex-col items-center justify-center mt-20 w-full px-3">
        <SectionHeader
          title={
            <>
              Hiểu được "cái giá" và
              <br />
              <span className="italic text-[#00ACB8]">
                có được kế hoạch tối ưu
              </span>
            </>
          }
          subtitle="Finful thiết kế một kế hoạch dòng tiền mà ở đó bạn được phép điều chỉnh các con số phù hợp nhất với bản thân"
        />
        <PersonalizedPlanSection />
      </section>

      <section className="flex flex-col items-center justify-center mt-20 w-full px-3">
        <SectionHeader
          title={
            <>
              Được đồng hành trên
              <br />
              <span className="italic text-[#00ACB8]">
                hành trình sở hữu căn nhà
              </span>
            </>
          }
          subtitle="Finful thiết kế một kế hoạch hành động với nhiều cột mốc chia nhỏ để bạn dễ hình dung từng bước biến gần hơn tới mục tiêu mua nhà"
        />
        <ActionPlanSection />
      </section>

      <section className="flex flex-col items-center justify-center mt-20 w-full px-3">
        <FeaturesSection />
      </section>

      <div className="flex self-stretch w-full bg-gray-200 px-3 bg-blend-normal min-h-px mt-20 max-md:max-w-full" />

      <div className="px-3 flex items-center justify-center">
        <CTASection />
      </div>
      <Footer/>
    </motion.div>
  );
};

export default FinancialPlanningPage;
