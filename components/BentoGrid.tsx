'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import HeroCard from './HeroCard'
import FlagshipProject from './FlagshipProject'
import ReviewCard from './ReviewCard'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'

interface ProjectMetric {
  label: string
  value: string
}

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  metrics?: ProjectMetric[]
  challenge: string
  engineering: string
  technicalHook: string
  impact?: string
}

export default function BentoGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const flagshipProject: Project = {
    id: 'sack-counter',
    title: 'Industrial AI: Automated Sack Counter',
    description: 'Transforming 3-hour manual CCTV audits into a 5-minute verified review process using distributed Computer Vision.',
    tags: ['YOLO-seg', 'SAM', 'Redis', 'Modal', 'WebSockets', 'React'],
    metrics: [
      { label: 'EFFORT_REDUCTION', value: '95%' },
      { label: 'ACCURACY', value: '99%' },
      { label: 'PROCESSING', value: '4X_PARALLEL' },
    ],
    challenge:
      'Verifying manual labor in manufacturing is high-stakes and prone to error. Manually auditing 3-hour loading videos was a massive drain on productivity. The operational bottleneck meant quality control required human review of every shipment, taking enormous labor hours and introducing human error into the process. I built an end-to-end pipeline: Raw Stream → AI Detection → Human Verification.',
    engineering:
      'Smart Data Factory: Leveraged Segment Anything Model (SAM) to auto-generate high-precision segmentation masks from bounding boxes, significantly reducing dataset preparation time from weeks to days.\n\nParallel Processing: Engineered a system that triggers 4 parallel streams to process 3-hour playback videos in a fraction of the time. Distributed processing across Modal GPU infrastructure with intelligent batching.\n\nCloud-Native Infrastructure: Deployed YOLO-seg in Docker containers on Modal GPU infrastructure, utilizing Redis Pub/Sub for real-time event broadcasting and WebSockets for live dashboard synchronization.',
    technicalHook:
      'Features a 4x parallel stream processing logic for playback videos. The system processes multiple video streams concurrently using GPU worker pools, reducing processing time from 3 hours to 5 minutes while maintaining 99% inference accuracy.',
    impact:
      'Efficiency: Reduced a 180-minute task to a 5-minute "Gallery Scroll" verification through a human-in-the-loop UI.\n\nPrecision: Achieved 99% accuracy by combining AI detection with manual validation checkpoints at critical decision points.\n\nIndependence: Managed the full lifecycle—from raw data ingestion, model training, API deployment, to production monitoring—single-handedly.',
  }

  const projects: Project[] = [
    {
      id: 'melapass',
      title: 'MelaPass: Cryptographic Ticketing',
      description: 'Secure mobile ecosystem for high-volume events. Solves the "No-Wi-Fi" gate problem using RSA digital signatures and offline-first sync.',
      tags: ['React Native', 'Node.js', 'RSA', 'PostgreSQL', 'Expo'],
      metrics: [
        { label: 'AUTH_PROTOCOL', value: 'RSASSA-PSS' },
        { label: 'LATENCY', value: 'ZERO_SERVER_WAIT' },
        { label: 'INTEGRITY', value: '100%_AUDIT_LOG' },
      ],
      challenge:
        'Standard QR codes are easily forged, and database-reliant checks fail in "Network Dead Zones" at large events. Fraud was prevalent—duplicate scans bypassed standard validation. I built a system that is both unhackable and resilient to zero-connectivity environments.',
      engineering:
        'Cryptographic Signatures: Implemented RSASSA-PSS signing. Tickets are verified locally on the Guard App using public keys, allowing for instant authentication in milliseconds without server pings. No network dependency at the point of validation.\n\nOffline-First Resilience: Engineered a sync layer using AsyncStorage and Cron Jobs. Scans are logged locally and pushed to the PostgreSQL database in the background, preventing "double-entry" fraud across multiple guards scanning simultaneously.\n\nRole-Based Ecosystem: Designed a unified React Native codebase serving three distinct roles with tailored UI/UX: Admin (event management), Member (wallet & rewards), and Guard (high-speed scanner with minimal latency).',
      technicalHook:
        'RSA encryption made it mathematically impossible to forge or modify ticket data. Digital signatures eliminated gate bottlenecks by removing the need for real-time API requests, achieving zero-latency verification.',
      impact:
        'Zero-Latency: Digital signatures eliminated gate bottlenecks by removing the need for real-time API requests. Guards scan and verify in milliseconds, no network required.\n\nTamper-Proof: RSA encryption made it mathematically impossible to forge or modify ticket data. Mathematical proof of authenticity replaced trust.\n\nData Integrity: Maintained a perfect central audit log even with 10+ guards scanning simultaneously in poor network conditions. Every transaction reconciles without data loss.',
    },
    {
      id: 'aerial-mlops',
      title: 'Aerial MLOps: Drone Vehicle Detection',
      description: 'Automated Computer Vision solution for high-altitude imagery with a self-triggering retraining pipeline.',
      tags: ['YOLO', 'Azure ML', 'Python', 'MLOps'],
      metrics: [
        { label: 'CLIENT_RATING', value: '5.0/5.0' },
        { label: 'PIPELINE', value: 'EVENT_DRIVEN' },
        { label: 'PLATFORM', value: 'AZURE_ML' },
      ],
      challenge:
        'Detecting small objects from varying altitudes and high-angle perspectives is a major hurdle. The client required a system that could ingest new aerial footage and improve itself without manual developer intervention.',
      engineering:
        'Specialized Detection: Fine-tuned YOLO weights specifically for small-object detection in high-resolution aerial frames.\n\nAutomated Retraining: Engineered an Azure ML Pipeline that monitors Blob Storage; a single upload triggers a complete retraining job to refine accuracy.\n\nOptimized Pre-processing: Developed custom scripts to handle high-resolution constraints, ensuring efficient GPU utilization.',
      technicalHook:
        'Automated the entire MLOps lifecycle from data ingestion to model registration using Azure Event Grid triggered by blob storage events.',
      impact:
        'User Experience: Created a "seamless workflow" where the client simply uploads data to improve the model.\n\nSocial Proof: Achieved a perfect 5.0/5.0 rating on Upwork for thoroughness and technical delivery.',
    },
    {
      id: 'blueprint-3d',
      title: 'Spatial R&D: Blueprint-to-3D',
      description: 'Converting 2D architectural plans into interactive 3D environments using geometric computer vision and mesh extrusion.',
      tags: ['OpenCV', 'Open3D', 'Python', 'NumPy'],
      metrics: [
        { label: 'PIPELINE', value: 'PIXEL_TO_MESH' },
        { label: 'LOGIC', value: 'CONTOUR_CLASSIFICATION' },
        { label: 'STATUS', value: 'RESEARCH_PROTOTYPE' },
      ],
      challenge:
        'Blueprints are visually complex. To a computer, walls, doors, and windows are just lines and curves. I built a "Vision Parser" to distinguish these architectural elements and map them into a 3D coordinate system. The challenge was not just extraction, but semantic understanding of architectural intent from pure pixel data.',
      engineering:
        'Contour Analysis: Used OpenCV to classify structural elements based on line thickness and morphological traits (e.g., identifying door arcs vs. solid walls). Thickness-based classification distinguished load-bearing elements from decorative annotations.\n\nNoise Reduction: Implemented clustering algorithms to merge redundant lines and artifacts, ensuring a "watertight" 3D mesh without topological errors. Multi-pass filtering removed scanner artifacts and poor-quality sketches.\n\n3D Extrusion: Utilized Open3D to programmatically extrude 2D footprints along the Z-axis, maintaining exact architectural proportions. Vectorized NumPy operations ensured fast batch processing of thousands of vertices.\n\nSpatial Alignment: Solved coordinate-flip and mirroring issues inherent in translating image-space to 3D-world-space. Implemented automatic orientation detection to ensure consistent Z-up convention.',
      technicalHook:
        'Mastered complex data denoising and vectorized geometry using NumPy. The system correctly interprets architectural conventions (line weights, gap sizes, junction patterns) to reconstruct designer intent from image data.',
      impact:
        'Research Outcome: Developed a modular pipeline ready for AR/VR integration. The proof-of-concept validated the feasibility of automated architectural digitization.\n\nTechnical Mastery: Gained deep expertise in computational geometry, image processing edge cases, and NumPy-based vectorized operations on complex spatial data.\n\nFuture Applications: The architecture supports extension to floorplan generation, real estate visualization, and digital twin applications.',
    },
  ]

  return (
    <>
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <HeroCard />

        {/* Flagships & Review Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <FlagshipProject onClick={() => setSelectedProject(flagshipProject)} />
          <ReviewCard />
        </div>

        {/* Projects Grid */}
        <div className="space-y-3">
          <div className="mb-8">
            <p className="text-xs font-mono text-gray-600 mb-4">SELECTED_WORK</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  delay={0.3 + idx * 0.05}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 pt-8 border-t border-[#2a2a2a]">
          <div className="space-y-4">
            <p className="text-xs font-mono text-gray-600">AVAILABLE_FOR_OPPORTUNITIES</p>
            <p className="text-sm text-gray-400 font-light">
              Open to roles in Systems Engineering, Infrastructure, and Applied AI. Currently based in Delhi.
            </p>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}