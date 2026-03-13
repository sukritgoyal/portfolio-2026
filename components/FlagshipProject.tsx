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
        {/* Video Section */}
        <div className="relative h-[500px] bg-black overflow-hidden rounded-t-lg">
          <video
            src="/media/demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          {/* Video Demo Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="font-mono text-xs text-gray-400 bg-black/50 px-3 py-1.5 rounded border border-gray-600/30 backdrop-blur-sm">
              [ VIDEO_DEMO ]
            </span>
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
