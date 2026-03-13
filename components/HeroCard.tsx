'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-16"
    >
      <div className="space-y-8 py-12">
        {/* Category Tag - JetBrains Mono */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-cyan-400 bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/20">
            Full-Stack & AI Engineer
          </span>
          <div className="h-[1px] w-12 bg-gray-800" />
        </div>

        {/* Main Identity */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white">
            Sukrit G.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-tight max-w-3xl leading-snug">
            I turn vague requirements into <span className="text-white underline decoration-cyan-500/30 underline-offset-4">shippable products</span> and optimized cloud systems.
          </p>
        </div>

        {/* Narrative Bio */}
        <div className="max-w-2xl space-y-6">
          <p className="text-gray-400 leading-relaxed font-light text-lg">
            Whether it's architecting end-to-end mobile apps, optimizing cloud infrastructure for scale, 
            or building RAG-based AI tools, I focus on writing clean, production-ready code that solves 
            real business problems.
          </p>
          
          {/* Specialized Intersection - JetBrains Mono */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[13px] text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-cyan-500" /> 
              Full-Stack Apps
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-cyan-500" /> 
              Cloud Optimization
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-cyan-500" /> 
              LLMs & RAG (OpenAI)
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-cyan-500" /> 
              Distributed Systems
            </span>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="flex items-center gap-8 pt-6">
          <div className="h-4 w-[1px] bg-gray-800" />
          <span className="font-mono text-[12px] text-gray-600 uppercase tracking-tighter">
            Based in Delhi, India
          </span>
          <div className="h-4 w-[1px] bg-gray-800" />
          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/sukritgoyal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-500 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sukrit-goyal"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-500 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}