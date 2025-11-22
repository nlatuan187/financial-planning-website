"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const menuItems = [
  {
    id: "cong-cu",
    title: "Công cụ tài chính",
    children: [
      { title: "Lập kế hoạch mua nhà", href: "https://planning.finful.co/" },
      { title: "Phân tích chứng khoán", href: "https://global.finful.co/sign-in?redirect_url=https%3A%2F%2Fglobal.finful.co%2Fcourse%2F654b4b6c919baafbb5c4e975%3Ffbclid%3DIwY2xjawGXuPtleHRuA2FlbQIxMAABHVmJVUh1h6PjYXMWcGrc4Rk4_QmPn22qZimfZLo3aj_a-POutj-ma8d90w_aem_j78gg5nee3mqU6GYcU4ItA" },
    ],
  },
  {
    id: "giao-duc",
    title: "Giáo dục tài chính",
    children: [
      { title: "Thư viện tài chính cá nhân", href: "https://app.finful.co/sign-in?redirect_url=https%3A%2F%2Fapp.finful.co%2Fcourse%2F65fb0e91feebb569c2191340%3Ffbclid%3DIwY2xjawGXuQ9leHRuA2FlbQIxMAABHQz4oKhOcoGY-vfIIYNQ0Bi8Grznu_ZpfIf_M0V_mZ5CF8qkodGIA2rAcQ_aem_ZUu0TxwVY7QuOmaOqMPvDA" },
      { title: "Chương trình cho doanh nghiệp", href: "https://education.finful.co/" },
    ],
  },
  { id: "ve-finful", title: "Về Finful", href: "#" },
  { id: "lien-he", title: "Liên hệ", href: "#" },
];

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmenuToggle = (id: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === id ? null : id);
  };

  return (
    <section className="flex overflow-hidden relative flex-col self-stretch px-12 pt-6 pb-36 w-full bg-blend-normal min-h-[708px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        src="/HeroBG.png"
        className="object-cover absolute inset-0 size-full"
        alt="Hero background"
      />
      <nav className="w-full bg-opacity-80 backdrop-blur-sm sticky top-0 z-50">
        <div className="relative flex justify-between items-center max-w-full my-2 mx-auto px-4">
          <Link href="/">
            <img
              src="/finful.png"
              alt="Finful Logo"
              className="h-[33px] w-[115px] max-sm:h-7 max-sm:w-[100px]"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="flex items-center gap-12 max-md:hidden">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative h-11 flex items-center" // Đặt chiều cao cố định và căn giữa
                onMouseEnter={() => item.children && setOpenDropdown(item.id)}
                onMouseLeave={() => item.children && setOpenDropdown(null)}
              >
                <Link href={item.href || "#"} target="_blank" className="flex items-center gap-2 text-base font-semibold text-slate-500 hover:text-cyan-600 transition-colors">
                  {item.title}
                  {item.children && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.children && openDropdown === item.id && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-white rounded-lg shadow-xl py-2 z-20">
                      {item.children.map((child, index) => (
                        <Link key={index} target="_blank" href={child.href} className="block px-4 py-2 text-slate-700 hover:bg-gray-100">
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link href="https://muanha.finful.co/" target="_blank" className="flex items-center justify-center gap-2.5 px-5 h-11 bg-cyan-600 text-white rounded-lg shadow-sm">
              <span className="text-sm font-medium">Lập kế hoạch mua nhà</span>
              <svg width="12" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
                <path d="M1.25 5.79529H11.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.45435 1.5L11.7498 5.79545L7.45435 10.0909" stroke="white" strokeWidth="1.27273" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="hidden cursor-pointer max-md:block" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-[320px] bg-white rounded-xl shadow-2xl p-6 z-20 md:hidden border border-gray-100">
              <div className="flex flex-col items-start gap-2">
                {menuItems.map((item) => (
                  <div key={item.id} className="w-full">
                    <div className="flex items-center justify-between w-full py-2 cursor-pointer group" onClick={() => item.children && handleSubmenuToggle(item.id)}>
                      {item.children ? (
                        <span className="text-[15px] font-semibold text-slate-500 group-hover:text-[#00ACB8] transition-colors">
                          {item.title}
                        </span>
                      ) : (
                        <Link href={item.href || "#"} target={item.href ? "_blank" : undefined} className="text-[15px] font-semibold text-slate-500 group-hover:text-[#00ACB8] transition-colors">
                          {item.title}
                        </Link>
                      )}
                      {item.children && (
                        <button className="p-1 -mr-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform text-slate-500 group-hover:text-[#00ACB8] ${openMobileSubmenu === item.id ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>
                    {item.children && openMobileSubmenu === item.id && (
                      <div className="flex flex-col items-start gap-3 mt-1 mb-2 pl-0">
                        {item.children.map((child, index) => (
                          <Link key={index} href={child.href} className="text-[14px] text-slate-500 hover:text-[#00ACB8] py-1 block w-full">
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="w-full h-px bg-gray-100 my-2"></div>
                <Link href="https://muanha.finful.co/" target="_blank" className="flex items-center justify-center w-full gap-2 px-4 py-3 bg-[#008993] hover:bg-[#007a83] rounded-lg shadow-md transition-colors mt-1">
                  <span className="text-[15px] font-bold text-white">Lập kế hoạch mua nhà</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex relative flex-col lg:flex-row items-center justify-between mt-12 max-md:mt-10 w-full max-w-[1200px] self-center gap-10">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col w-full lg:w-1/2 max-md:max-w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="mb-4" variants={itemVariants}>
            <a
              className="inline-flex items-center justify-center px-8 py-2 text-xl font-bold text-white bg-gradient-to-r from-[#00ACB8] via-[#7FD5DB] to-[#00ACB8] rounded-full shadow-lg transition-colors"
            >
              SẲP RA MẮT
            </a>
          </motion.div>
          <motion.h1
            className="text-[60px] font-semibold tracking-tight leading-[1.2] max-md:text-4xl bg-gradient-to-r from-[#7FD5DB] via-[#00ACB8] to-[#008993] bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Finful mobile app
          </motion.h1>

          <motion.p
            className="text-[25px] text-slate-600 font-bold leading-relaxed"
            variants={itemVariants}
          >
            Tích hợp AI, giúp người Việt tự tin mua nhà
          </motion.p>

          <motion.div className="mt-8 flex flex-col gap-4 w-fit" variants={containerVariants}>
            {[
              "Đánh giá tính khả thi của mục tiêu mua nhà",
              "Thiết kế kế hoạch tích luỹ tài chính phù hợp",
              "Kết hợp với chuyên gia để tư vấn trực tiếp"
            ].map((item, index) => (
              <motion.div key={index} className="flex items-center bg-white gap-3 border border-[#00ACB8] p-3 rounded-lg" variants={itemVariants}>
                <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#00ACB8] flex items-center justify-center text-[#00ACB8]">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3333 1L5 8.33333L1.66667 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-slate-600 text-[20px] max-md:text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="flex w-full lg:w-1/2 justify-center items-center relative h-[600px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/iphoneBG.png"
            className="object-cover absolute inset-0 size-80%"
            alt="Hero background"
          />
          {/* Carousel Images */}
          <div className="relative w-full h-full flex justify-center items-center">
            {[
              "/iPhone 14 Pro 1.png",
              "/iPhone 14 Pro 3.png",
              "/iPhone 14 Pro 2.png"
            ].map((src, index) => {
              // Calculate position relative to active index
              const position = (index - activeIndex + 3) % 3;

              // Determine styles based on position
              let x = 0;
              let scale = 1;
              let zIndex = 10;
              let opacity = 1;
              let rotate = 0;

              if (position === 0) {
                // Center
                x = 0;
                scale = 1;
                zIndex = 20;
                opacity = 1;
                rotate = 0;
              } else if (position === 1) {
                // Right
                x = 130;
                scale = 0.8;
                zIndex = 10;
                opacity = 0.6;
                rotate = 0;
              } else {
                // Left
                x = -130;
                scale = 0.8;
                zIndex = 10;
                opacity = 0.6;
                rotate = 0;
              }

              return (
                <motion.img
                  key={index}
                  src={src}
                  className="absolute max-w-[340px] w-full h-auto object-contain rounded-3xl"
                  animate={{
                    x,
                    scale,
                    opacity,
                    zIndex,
                    rotate
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  alt={`Financial Planning App Screen ${index + 1}`}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
