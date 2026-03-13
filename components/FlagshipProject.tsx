'use client'

import { motion } from 'framer-motion'

interface FlagshipProjectProps {
  onClick?: () => void
}

export default function FlagshipProject({ onClick }: FlagshipProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
    >
      <div className="group relative rounded-lg border border-[#2a2a2a] bg-black/40 backdrop-blur-sm overflow-hidden hover:border-[#3a3a3a] transition-colors duration-300 cursor-pointer" onClick={onClick}>
        {/* Video Placeholder */}
        <div className="relative h-64 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
          {/* Subtle animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Placeholder Text */}
          <div className="relative text-center">
            <p className="text-gray-500 text-sm font-mono mb-2">[ VIDEO_DEMO ]</p>
            <p className="text-xs text-gray-600">Sack Counter in action</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Industrial AI: Automated Sack Counter</h3>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Transforming 3-hour manual CCTV audits into a 5-minute verified review process using distributed Computer Vision.
            </p>
          </div>

          {/* Metrics Bar */}
          <div className="pt-4 border-t border-[#2a2a2a]">
            <div className="text-xs font-mono text-gray-500 space-y-2">
              <div className="flex justify-between">
                <span>EFFORT_REDUCTION</span>
                <span className="text-cyan-400">95%</span>
              </div>
              <div className="flex justify-between">
                <span>ACCURACY</span>
                <span className="text-cyan-400">99%</span>
              </div>
              <div className="flex justify-between">
                <span>PROCESSING</span>
                <span className="text-cyan-400">4X_PARALLEL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
