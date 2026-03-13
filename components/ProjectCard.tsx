'use client'

import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  delay?: number
  onClick?: () => void
}

export default function ProjectCard({
  title,
  description,
  tags,
  delay = 0,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="group block rounded-lg border border-[#2a2a2a] bg-black/40 backdrop-blur-sm p-5 hover:border-[#3a3a3a] transition-colors duration-300 cursor-pointer"
    >
      <div className="space-y-3">
        {/* Title with Arrow */}
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-base font-medium text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h4>
          <FiArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-0.5" />
        </div>

        {/* Description */}
        <p className="text-xs text-gray-400 font-light leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded border border-gray-700/50 text-gray-500 font-mono hover:border-gray-600/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}