"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="w-screen h-screen relative flex items-center justify-center pointer-events-none">
      {/* 全屏电影级 70% 深度毛玻璃遮罩层 (让 3D 人物和营火在背后形成隐隐约约的绝美氛围) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 1.3, 
          ease: "easeInOut",
          delay: 0.1 
        }}
        className="absolute inset-0 pointer-events-auto flex items-center justify-center"
      >
        <div className="max-w-6xl w-full h-full md:h-[75vh] overflow-y-auto md:overflow-hidden px-4 md:px-12 mx-auto relative pt-24 md:pt-14 hide-scrollbar pb-[15vh] md:pb-0">
          
          <div className="w-full h-full">
            
            {/* 针对 Webkit 浏览器隐藏滚动条 */}
            <style jsx global>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none !important;
              }
            `}</style>

            <div 
              className="max-w-3xl mx-auto h-auto md:h-full overflow-visible md:overflow-y-auto space-y-12 scroll-smooth pb-0 md:pb-[15vh] hide-scrollbar"
              style={{
                scrollbarWidth: "none", // Firefox 隐藏滚动条
                msOverflowStyle: "none" // IE 隐藏滚动条
              }}
            >
              {/* 纯享文本段落 (使用极简高雅的无彩色系画廊平铺排版，字号优化为 text-[15px]，提供极致的阅读舒适度) */}
              <div 
                className="space-y-12 text-left"
                style={{ 
                  fontFamily: '"PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif' 
                }}
              >
                {/* 模块 1：自我介绍 */}
                <div className="space-y-5">
                  <h1 className="text-base md:text-lg text-white/95 font-medium tracking-[0.2em] select-none">
                    自我介绍
                  </h1>
                  
                  <div className="space-y-5">
                    <p className="text-[14.5px] text-white/90 leading-relaxed tracking-[0.15em] font-light">
                      Hi，我是李盈盈。
                    </p>
                    <p className="text-[14.5px] text-white/70 leading-relaxed tracking-[0.15em] font-light">
                      目前在 WPS 国内运营部，做商业化活动运营，入职将近一年。
                    </p>
                    <p className="text-[14.5px] text-white/70 leading-relaxed tracking-[0.15em] font-light">
                      对 AI 与运营的结合很感兴趣，也在持续实践中。
                    </p>
                    <p className="text-[14.5px] text-white/70 leading-relaxed tracking-[0.15em] font-light">
                      没有太多标签，这里是最直接了解我的地方。
                    </p>
                  </div>
                </div>

                {/* 模块 2：过往经历 */}
                <div className="space-y-5 pt-2">
                  <h1 className="text-base md:text-lg text-white/95 font-medium tracking-[0.2em] select-none">
                    过往经历
                  </h1>
                  
                  <div className="space-y-10 pl-[1px]">
                    {/* 分段 1：教育经历 */}
                    <div className="space-y-4">
                      <h2 className="text-[13px] md:text-sm text-white/80 font-medium tracking-[0.15em] block select-none">
                        教育经历
                      </h2>
                      <div className="pl-4 border-l border-white/10 space-y-4">
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 select-none">
                          <h3 className="text-[14.5px] text-white/95 font-medium tracking-wider">
                            中南大学（硕士） · 管理科学与工程
                          </h3>
                          <span className="text-xs font-serif text-white/35">2022.09 - 2025.05</span>
                        </div>
                      </div>
                    </div>

                    {/* 分段 2：实习经历 */}
                    <div className="space-y-4">
                      <h2 className="text-[13px] md:text-sm text-white/80 font-medium tracking-[0.15em] block select-none">
                        实习经历
                      </h2>
                      <div className="pl-4 border-l border-white/10 text-[13.5px] text-white/70 leading-relaxed tracking-[0.12em] font-light space-y-1.5">
                        <p>
                          2024.06 - 2024.11 实习于 <strong className="text-white font-medium">金山办公</strong>，担任 AI 产品运营实习生；
                        </p>
                        <p>
                          2022.01 - 2022.05 实习于 <strong className="text-white font-medium">滴滴（北京）</strong>，担任产品运营实习生。
                        </p>
                      </div>
                    </div>

                    {/* 分段 3：当前工作 */}
                    <div className="space-y-4">
                      <h2 className="text-[13px] md:text-sm text-white/80 font-medium tracking-[0.15em] block select-none">
                        当前工作
                      </h2>
                      <div className="pl-4 border-l border-white/10 space-y-5">
                        <div className="space-y-5">
                          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 select-none">
                            <h3 className="text-[14.5px] text-white/95 font-medium tracking-wider">
                              金山办公 - 商业化运营
                            </h3>
                            <span className="text-xs font-serif text-white/35">2025.07 - 至今</span>
                          </div>
                          
                          <div className="space-y-4 text-[13.5px] text-white/65 leading-loose tracking-[0.12em] font-light">
                            <div className="space-y-2 text-white/70 font-light leading-relaxed">
                              <p>
                                1、负责活动策划，以提升 WPS 会员订阅用户数及收入。
                              </p>
                              <p>
                                2、负责用户积分体系建设，以提升会员用户粘性。
                              </p>
                            </div>

                            {/* 跳转至完整工作经历页的交互式 CTA 按钮 */}
                            <div className="pt-4 select-none">
                              <Link 
                                href="/experience"
                                className="group inline-flex items-center gap-1.5 text-xs md:text-[13px] text-sky-400 hover:text-sky-300 transition-colors duration-300 cursor-pointer pointer-events-auto font-medium tracking-wider"
                              >
                                <span>了解更多工作经历</span>
                                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 极简人文落款 */}
                <div className="pt-8 border-t border-white/[0.02] flex items-center justify-between select-none">
                  <span className="font-serif text-[9px] text-white/25 tracking-[0.25em] uppercase">
                    LAT.22.2760 // 珠海
                  </span>
                  <span className="text-[11px] text-white/40 font-medium italic font-serif tracking-[0.28em] hover:text-white/80 transition-colors duration-500">— — — From Zhuhai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
