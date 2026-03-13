'use client'

import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { useEffect } from 'react'

interface ProjectMetric {
  label: string
  value: string
}

interface ProjectDetailProps {
  project: {
    title: string
    description: string
    tags: string[]
    metrics?: ProjectMetric[]
    challenge: string
    engineering: string
    technicalHook: string
    impact?: string
  } | null
  onClose: () => void
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg border border-[#2a2a2a] bg-black/60 backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-6 right-6 float-right flex items-center gap-2 px-3 py-2 rounded border border-gray-700/30 text-xs font-mono text-gray-500 hover:text-gray-300 hover:border-gray-600/50 transition-all duration-200"
          aria-label="Close modal"
        >
          <FiX className="w-4 h-4" />
          <span className="hidden sm:inline">ESC</span>
        </button>

        {/* Content */}
        <div className="p-8 sm:p-12 space-y-8">
          {/* Title & Overview */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-base text-gray-400 font-light leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1.5 rounded border border-gray-700/50 text-gray-400 font-mono hover:border-gray-600/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Metrics Section */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-3 border-t border-[#2a2a2a] pt-8">
              <h2 className="text-sm font-mono text-cyan-400 tracking-wider">METRICS</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <p className="text-xs font-mono text-gray-500">{metric.label}</p>
                    <p className="text-sm font-mono text-cyan-400">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenge Section */}
          <div className="space-y-3 border-t border-[#2a2a2a] pt-8">
            <h2 className="text-sm font-mono text-cyan-400 tracking-wider">CHALLENGE</h2>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Engineering Section */}
          <div className="space-y-3 border-t border-[#2a2a2a] pt-8">
            <h2 className="text-sm font-mono text-cyan-400 tracking-wider">ENGINEERING</h2>
            <div className="space-y-4">
              {project.engineering.split('\n\n').map((paragraph, idx) => (
                <div key={idx} className="space-y-1">
                  {paragraph.includes(': ') ? (
                    <>
                      <p className="text-xs font-mono text-gray-500">
                        {paragraph.split(': ')[0]}
                      </p>
                      <p className="text-sm text-gray-300 font-light leading-relaxed">
                        {paragraph.split(': ')[1]}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                      {paragraph}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Hook Section */}
          <div className="space-y-3 border-t border-[#2a2a2a] pt-8">
            <h2 className="text-sm font-mono text-cyan-400 tracking-wider">TECHNICAL_HOOK</h2>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              {project.technicalHook}
            </p>
          </div>

          {/* Impact Section */}
          {project.impact && (
            <div className="space-y-3 border-t border-[#2a2a2a] pt-8">
              <h2 className="text-sm font-mono text-cyan-400 tracking-wider">IMPACT & RECOGNITION</h2>
              <div className="space-y-4">
                {project.impact.split('\n\n').map((paragraph, idx) => (
                  <div key={idx} className="space-y-1">
                    {paragraph.split(': ').length === 2 ? (
                      <>
                        <p className="text-xs font-mono text-gray-500">{paragraph.split(': ')[0]}</p>
                        <p className="text-sm text-gray-300 font-light leading-relaxed">
                          {paragraph.split(': ')[1]}
                        </p>
                      </>
                    ) : (
                      <p className="text-sm text-gray-300 font-light leading-relaxed">{paragraph}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer CTA */}
          <div className="border-t border-[#2a2a2a] pt-8 flex items-center justify-between">
            <p className="text-xs font-mono text-gray-600">Click outside or press ESC to close</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
