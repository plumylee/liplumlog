"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type BackgroundItem = {
  label: string;
  body: string;
};

type ExecutionPhase = {
  phase: string;
  points: string[];
};

type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type StructuredProject = {
  name: string;
  researchImage?: string;
  researchImages?: ProjectImage[];
  imagePlacement?: "left" | "right";
  strategyLabel?: string;
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
      strategyLabel: "我的行动",
      researchImages: [
        {
          src: "/points-system-rules.svg",
          alt: "用户积分体系发分规则表",
          width: 1421,
          height: 1280,
        },
        {
          src: "/points-system-community.svg",
          alt: "WPS 社区登录成功发放积分提示方案",
          width: 916,
          height: 1276,
        },
      ],
      background: [
        {
          label: "一句话总结",
          body: "BBS 社区端外登录率较端内少 41%，流量缺口较大。通过搭建 BBS 社区用户积分体系，优化社区端外登录率、用户活跃度，从而进一步扩大可商业化的真实用户流量池。",
        },
      ],
      strategy: [
        "「任务-积分」发放链路设计：奖励机制分层设计，将积分奖励向“高商业价值行为”倾斜。设计“在 WPS 知识库互动 / 登录 BBS 发帖 → 实时获得高额积分 → 积分兑换特权”的链路。用积分作为利益驱动，引导端外用户登录后产生更多活跃行为。",
        "成本与收益测算（ROI 管控）：建立成本测算模型。测算“单个用户可获得最大积分数对应兑换奖励成本”以及“预期能够带来用户登录数”，实现较低的成本撬动高活跃。",
        "数据沉淀与分层运营：将积分获取与消耗能力作为用户标签，构建「高价值用户识别模型」。为后续定向商业化活动提供精细化人群支持。",
      ],
      execution: [
        {
          phase: "结果 / 带来了什么效果",
          points: [
            "上线 1 周后，在严格控制发分成本的前提下，BBS 社区登录率提升 10%。",
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
      imagePlacement: "left",
      researchImages: [
        {
          src: "/membership-research.png",
          alt: "会员组合售卖调研截图",
          width: 1716,
          height: 1350,
        },
        {
          src: "/moyu.png",
          alt: "WPS 摸鱼补给站活动页面",
          width: 1456,
          height: 1601,
        },
      ],
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
  {
    index: "03",
    hideHeader: true,
    project: {
      name: "AI 运营提效探索",
      strategyLabel: "我的行动",
      researchImages: [
        {
          src: "/aisj.png",
          alt: "AI 协助成本管控方案页面",
          width: 2923,
          height: 2010,
        },
        {
          src: "/aitx.jpg",
          alt: "AI 提效活动框架体验页面",
          width: 1414,
          height: 1614,
        },
      ],
      background: [
        {
          label: "一句话总结",
          body: "运营侧长期面临需求排期积压、多源数据手工处理、成本核算效率低三大痛点，主动探索 AI 在协助页面交互视觉、数据、运营成本管控等方面的提效方式，系统性释放运营人力。",
        },
      ],
      strategy: [
        "AI 生成可交互活动页视觉稿：传统静态稿沟通成本高、评审返工多。通过 AI 生成可交互 HTML 原型稿替代静态切图，需求方可进行点击交互预览，将模糊需求转化为可验证的视觉交互，成功实现一次定稿。",
        "NLP2SQL 与埋点数据分析：数据需求排期周期长，运营决策严重依赖数据团队。集成 Delper-OLAP 等数据 Skill，跑通运营侧自助取数链路，取数等待从数天压缩至分钟级。",
        "AI 协助积分运营成本智能监控：预算严控背景下，成本数据源分散、人工汇总每周耗时数小时且易出错。基于 Cursor Agent + Skill 搭建智能成本分析助手，将周度核算人力从数小时压缩至分钟级，已沉淀为可复用 SOP。",
      ],
      execution: [],
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

function getResearchImages(project: StructuredProject): ProjectImage[] {
  if (project.researchImages) {
    return project.researchImages;
  }

  if (!project.researchImage) {
    return [];
  }

  return [
    {
      src: project.researchImage,
      alt: "会员组合售卖调研截图",
      width: 1716,
      height: 1350,
    },
  ];
}

const internshipSummary = [
  {
    title: "大模型效果评测与 Badcase 治理",
    points: [
      "基于 3000+ 条真实用户 Query 进行标注与意图分类，明确核心用户需求；",
      "建立周常 Badcase 分析机制（单周处理约 250 条），按功能维度拆解问题，为产品优化提供明确方向。",
    ],
  },
  {
    title: "核心场景 Prompt 调优与竞品对比",
    points: [
      "独立负责“学术改写”、“文本结构化”等高频场景的 Prompt 逻辑重构与参数调优；",
      "设计测试用例，与豆包、Kimi 等竞品进行多轮横向对比评测，验证并提升模型输出稳定性；",
      "优化后，核心功能的任务完成度提升 50%+，功能采纳率提升 5%。",
    ],
  },
  {
    title: "智能数据分析助手（0-1落地）",
    points: [
      "负责数字员工的数据分析助手落地。针对当时大模型易混淆“日期”、“均值”等数据的痛点，制定数据预处理策略；",
      "在 Prompt 中补充“助理定义”与“指标定义”等业务逻辑，有效减少幻觉，使该场景任务完成率达 97%。",
    ],
  },
];

export default function ExperiencePage() {
  const [previewImage, setPreviewImage] = useState<ProjectImage | null>(null);

  function renderResearchAside(researchImages: ProjectImage[]) {
    if (researchImages.length === 0) {
      return null;
    }

    return (
      <aside className="lg:col-span-4 lg:sticky lg:top-0 select-none">
        <div className="space-y-3">
          <span className="block text-[10px] text-white/28 tracking-[0.22em] uppercase font-serif">
            Research Snapshot
          </span>
          <div className="space-y-3">
            {researchImages.map((image) => (
              <button
                type="button"
                key={image.src}
                onClick={() => setPreviewImage(image)}
                className="block w-full rounded-md border border-white/[0.08] bg-white/[0.02] p-1.5 shadow-[0_18px_56px_rgba(0,0,0,0.28)] transition hover:border-white/20 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/50"
                aria-label={`放大查看${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 1024px) 100vw, 320px"
                  unoptimized
                  className="w-full h-auto rounded-sm opacity-95"
                />
              </button>
            ))}
          </div>
        </div>
      </aside>
    );
  }

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

            <div className="max-w-4xl mx-auto h-full">
              <section className="min-h-full flex flex-col items-center justify-center text-center select-none">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="block text-[10px] text-white/22 tracking-[0.3em] uppercase font-serif">
                      Work Thesis
                    </span>
                    <span className="block text-xs md:text-[13px] text-amber-200/70 tracking-[0.24em] font-medium">
                      工作核心
                    </span>
                  </div>
                  <p className="text-xl md:text-3xl text-white/86 tracking-[0.12em] leading-loose font-serif font-medium">
                    <span className="block">让 WPS 普通用户变成活跃用户</span>
                    <span className="block">从活跃用户变成付费用户 / 高价值用户</span>
                  </p>
                </div>
                <span className="mt-12 text-[10px] text-white/24 tracking-[0.26em] uppercase font-serif">
                  Scroll for Projects
                </span>
              </section>

              <div className="space-y-16 pt-10 md:pt-14">
                {cases.map((item) => {
                const researchImages = getResearchImages(item.project);
                const researchAside = renderResearchAside(researchImages);
                const showImagesOnLeft = item.project.imagePlacement === "left";

                return (
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
                        {showImagesOnLeft && researchAside}

                        <div className="lg:col-span-8 space-y-9 md:space-y-10">
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

                          <TextSection label={item.project.strategyLabel ?? "整体策略 / 为什么用这个策略"}>
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

                          {item.project.execution.length > 0 && (
                            <TextSection label="执行与迭代 / 怎么做 & 效果如何">
                              <div className="space-y-6">
                                {item.project.execution.map((phase) => (
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
                          )}
                        </div>

                        {!showImagesOnLeft && researchAside}
                      </div>
                  </div>
                </article>
                );
              })}

                <article className="w-full pt-3 pb-8">
                  <TextSection label="实习经历概述">
                    <div className="space-y-6 border-l border-white/[0.08] pl-5 md:pl-6">
                      {internshipSummary.map((section, index) => (
                        <section key={section.title} className="space-y-3">
                          <h3 className="text-[13px] md:text-sm text-amber-200/80 leading-loose tracking-[0.1em] font-medium">
                            {index + 1}. {section.title}
                          </h3>
                          <ul className="space-y-2">
                            {section.points.map((point) => (
                              <li
                                key={point}
                                className="text-[13px] md:text-sm text-white/76 leading-loose tracking-[0.09em] font-light"
                              >
                                • {point}
                              </li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                  </TextSection>
                </article>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/82 px-4 py-6 pointer-events-auto"
          role="dialog"
          aria-modal="true"
          onClick={() => setPreviewImage(null)}
        >
          <button
            type="button"
            aria-label="关闭图片预览"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl leading-none text-white/80 transition hover:bg-white/18 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/50"
            onClick={() => setPreviewImage(null)}
          >
            ×
          </button>
          <div className="max-h-full max-w-6xl overflow-auto" onClick={(event) => event.stopPropagation()}>
            <Image
              src={previewImage.src}
              alt={previewImage.alt}
              width={previewImage.width}
              height={previewImage.height}
              sizes="100vw"
              unoptimized
              className="h-auto max-h-[88vh] w-auto max-w-full rounded-md border border-white/12 bg-white shadow-[0_28px_90px_rgba(0,0,0,0.45)]"
            />
          </div>
        </div>
      )}
    </main>
  );
}
