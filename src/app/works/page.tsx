"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WorksPage() {
  return (
    <main className="w-screen h-screen relative flex items-center justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="pointer-events-auto text-center px-6 select-none"
      >
        <p className="text-[10px] text-white/25 tracking-[0.35em] font-serif uppercase mb-5">
          Works
        </p>
        <h1 className="text-2xl md:text-3xl text-white font-serif tracking-[0.18em] mb-6">
          作品集暂未展示
        </h1>
        <Link
          href="/"
          className="text-xs text-sky-400 hover:text-sky-300 tracking-[0.18em] transition-colors"
        >
          返回首页
        </Link>
      </motion.div>
    </main>
  );
}
