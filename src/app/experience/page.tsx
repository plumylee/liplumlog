"use client";

import { motion } from "framer-motion";

type BackgroundItem = {
  label: string;
  body: string;
};

type ExecutionPhase = {
  phase: string;
  points: string[];
};

type StructuredProject = {
  name: string;
  researchImage?: string;
  background: BackgroundItem[];
  strategy: string[];
  execution: ExecutionPhase[];
};

type ExperienceCase = {
  index: string;
  title?: string;
  subtitle?: string;
  hideHeader?: boolean;
  project: StructuredProject;
};

const cases: ExperienceCase[] = [
  {
    index: "01",
    hideHeader: true,
    project: {
      name: "用户积分体系从 0 到 1 搭建",
      background: [
        {
          label: "项目背景",
          body: "针对“用户用完即走、次留 / 七留偏低”，以及 BBS 社区“登录率较低、生态未打通”的痛点，主导设计全局用户积分体系，旨在用低成本虚拟资产撬动用户长期留存，并建立高价值用户识别模型。",
        },
      ],
      strategy: [
        "底层规则设计：采用「核心行为差异化激励」策略。对高频且高商业价值的行为赋予高权重积分，建立“行为激励 → 积分沉淀 → 权益消耗”的闭环，培养用户长期活跃习惯。",
        "跨业务生态打通：推动 WPS 产品与 BBS 社区的积分底层数据互通。设计“知识库互动 / 登录发帖即时发分”链路，成功将用户单点活跃转化为全生态活跃。",
        "数据沉淀与分层运营：将积分获取与消耗能力作为用户标签，从 0 到 1 构建「高价值用户识别模型」。为后续积分特权、定向商业化活动提供精准的数据基建支撑。",
      ],
      execution: [
        {
          phase: "业务收益 / 带来了什么效果",
          points: [
            "积分体系上线 1 周后，知识广场用户次周留存率提升 25%。",
            "社区登录率提升 10%。",
          ],
        },
      ],
    },
  },
  {
    index: "02",
    hideHeader: true,
    project: {
      name: "会员订阅业务 - 增值组合产品设计与商业化变现",
      researchImage: "/membership-research.png",
      background: [
        {
          label: "业务挑战",
          body: "在会员渗透率趋于饱和、纯订阅收入增速放缓的背景下，亟需寻找新的商业化增长第二曲线。",
        },
        {
          label: "用户痛点",
          body: "存量高净值用户的单一软件 / 平台内权益已无法满足其多元化数字消费需求，续费动力不足；新用户对“纯虚拟权益”的价值感知较弱，首购决策门槛高。",
        },
      ],
      strategy: [
        "确立以「提升客单价与增强价值感知」为核心的增长策略。",
        "将大盘拆解为双线目标：针对存量在期用户做「跨界捆绑」提升续费客单价；针对新客做「低门槛高感知」的优惠组合促首购。",
        "主导从 0 到 1 设计并落地「组合商品专题」及「新人优惠页」，并成功复用于双 11、618 等大促节点。",
      ],
      execution: [
        {
          phase: "Phase 1：MVP 跑通与价值验证（1+1 固定组合）",
          points: [
            "深度拆解 26 个竞品商业化页面，提炼出「普适性 × 高感知 × 营销包装」的选品模型。",
            "精选高频三方商品构建差异化捆绑方案，并制定严格的毛利测算与定价逻辑。",
            "活动支付率达 1.4%（大盘持平），单期创收 335.2 万，eCPM 同比 +9.8%。在未牺牲转化率的前提下，整体客单价由 214 元提升至 236 元（+10%），完成组合售卖商业模式的 MVP 验证。",
          ],
        },
        {
          phase: "Phase 2：数据驱动的策略迭代（N 选多动态组合）",
          points: [
            "通过漏斗数据分析与调研，发现「1+1」固定捆绑模式缺乏灵活性，用户常因不需要其中某一项而放弃购买，成为支付转化瓶颈。",
            "推动策略向产品化升级，联合产研团队将固定组合迭代为「N 选多」自由组合模式，降低用户决策阻力。",
            "大促期间对超会 / 大会等核心高净值人群进行精准定向投放，较传统固定组合方式支付转化率提升 51%，实现客单价与转化率的双重提升。",
          ],
        },
      ],
    },
  },
];

function TextSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs md:text-[13px] text-white/38 font-medium tracking-[0.16em] select-none">
        {label}
      </h2>
      {children}
    </section>
  );
}

export default function ExperiencePage() {
  return (
    <main className="w-screen h-screen relative flex items-center justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut", delay: 0.1 }}
        className="absolute inset-0 pointer-events-auto flex items-center justify-center"
      >
        <div className="max-w-5xl w-full h-[80vh] md:h-[75vh] px-5 md:px-12 mx-auto relative pt-24 md:pt-14">
          <div
            className="w-full h-full overflow-y-auto overflow-x-hidden pr-2 scroll-smooth pb-[24vh] hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style jsx global>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none !important;
              }
            `}</style>

            <div className="max-w-4xl mx-auto space-y-16">
              <section className="text-center pb-4 md:pb-6 select-none">
                <span className="block text-[10px] text-white/22 tracking-[0.3em] uppercase font-serif mb-5">
                  Work Thesis
                </span>
                <p className="text-lg md:text-2xl text-white/82 tracking-[0.12em] leading-loose font-serif font-medium">
                  <span className="block">如何让 WPS 普通用户变成活跃用户</span>
                  <span className="block">从活跃用户变成付费用户 / 高价值用户</span>
                </p>
              </section>

              {cases.map((item) => (
                <article key={item.project.name} className="w-full">
                  {!item.hideHeader && item.title && (
                    <header className="flex items-start gap-4 md:gap-6 pb-6 border-b border-white/[0.06]">
                      <span className="text-sm md:text-base text-white/30 font-serif tracking-[0.12em] leading-none pt-1 select-none">
                        {item.index} /
                      </span>
                      <div className="space-y-3">
                        <h1 className="text-sm md:text-base text-white font-serif font-semibold tracking-[0.12em] leading-relaxed">
                          {item.title}
                        </h1>
                        <p className="text-xs md:text-[13px] text-amber-300/70 tracking-[0.14em] font-light">
                          -- {item.subtitle}
                        </p>
                      </div>
                    </header>
                  )}

                  <div className="mt-9 md:mt-10 space-y-9 md:space-y-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                        <div className="lg:col-span-7 space-y-9 md:space-y-10">
                          <TextSection label="项目名称">
                            <p className="text-[13px] md:text-sm text-amber-200/80 leading-loose tracking-[0.1em] font-medium">
                              {item.project.name}
                            </p>
                          </TextSection>

                          <TextSection label="项目背景 / 为什么做">
                            <div className="space-y-4 border-l border-white/[0.08] pl-5 md:pl-6">
                              {item.project.background.map((paragraph) => (
                                <p
                                  key={paragraph.label}
                                  className="text-[13px] md:text-sm text-white/78 leading-loose tracking-[0.09em] font-light"
                                >
                                  <span className="text-white/95 font-medium">{paragraph.label}：</span>
                                  {paragraph.body}
                                </p>
                              ))}
                            </div>
                          </TextSection>

                          <TextSection label="整体策略 / 为什么用这个策略">
                            <ul className="space-y-4 pl-1">
                              {item.project.strategy?.map((point, index) => (
                                <li
                                  key={point}
                                  className="grid grid-cols-[22px_1fr] gap-3 text-[13px] md:text-sm text-white/82 leading-loose tracking-[0.1em] font-light"
                                >
                                  <span className="text-amber-400/55 font-serif">{index + 1}.</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </TextSection>

                          <TextSection label="执行与迭代 / 怎么做 & 效果如何">
                            <div className="space-y-6">
                              {item.project.execution?.map((phase) => (
                                <div
                                  key={phase.phase}
                                  className="border-l border-white/[0.08] pl-5 md:pl-6"
                                >
                                  <h3 className="text-[13px] md:text-sm text-amber-200/80 leading-loose tracking-[0.1em] font-medium">
                                    {phase.phase}
                                  </h3>
                                  <ul className="mt-3 space-y-3">
                                    {phase.points.map((point) => (
                                      <li
                                        key={point}
                                        className="text-[13px] md:text-sm text-white/76 leading-loose tracking-[0.09em] font-light"
                                      >
                                        {point}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </TextSection>
                        </div>

                        <aside className="lg:col-span-5 lg:sticky lg:top-0 select-none">
                          <div className="space-y-3">
                            <span className="block text-[10px] text-white/28 tracking-[0.22em] uppercase font-serif">
                              Research Snapshot
                            </span>
                            <div className="rounded-md border border-white/[0.08] bg-white/[0.02] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
                              <img
                                src={item.project.researchImage}
                                alt="会员组合售卖调研截图"
                                className="w-full h-auto rounded-sm opacity-95"
                              />
                            </div>
                          </div>
                        </aside>
                      </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
