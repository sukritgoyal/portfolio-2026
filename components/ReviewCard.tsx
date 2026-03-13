'use client'

import { motion } from 'framer-motion'
import { MdVerified } from 'react-icons/md'

export default function ReviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
    >
      <div className="rounded-lg border border-[#2a2a2a] bg-black/40 backdrop-blur-sm p-6 hover:border-[#3a3a3a] transition-colors duration-300">
        {/* Verified Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5">
            <MdVerified className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400">VERIFIED_CLIENT</span>
          </div>
        </div>

        {/* Review Quote */}
        <blockquote className="mb-4">
          <p className="text-gray-300 italic font-light leading-relaxed text-sm">
            "Sukrit was absolutely phenomenal on this job. He completed the work with utmost details and was very thorough with the task requirements. Very skilled & highly recommended!"
          </p>
        </blockquote>

        {/* Client Info */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-white">Upwork Client</p>
          <p className="text-xs font-mono text-gray-500">Computer Vision Expert Task</p>
        </div>
      </div>
    </motion.div>
  )
}