'use client'

import AnimatedText from '../common/AnimatedText'
import GradientBackground from '../common/GradientBackground'
import ExperienceModal from './Motal'
import { useState } from 'react'

// Define project data type
// Each project must include:
// - id: Unique identifier
// - title: Project name
// - description: Project description
// - period: Development period
// - image: Project screenshot path (stored in public/project/ directory)
// - skills: Tech stack used
// - link: Project link (GitHub/Demo)
type Project = {
  id: number
  title: string
  description: string
  period: string
  image: string
  skills: string[]
  link: string
}

// Example project data
// Usage instructions:
// 1. Copy template below and modify content as needed
// 2. Place project screenshots in public/project/ directory
// 3. Sort projects in reverse chronological order
// 4. Project descriptions should highlight core features and technical highlights
const projects: Project[] = [
  {
    id: 6,
    title: "Vettly",
    description: "An AI based tender compliance assistant for procurement and bid-evaluation teams. It parses RFP files to a structured review flow where requirements, compliance checks, and risks can be tracked clearly.",
    period: "2026",
    image: "https://i.ibb.co/2YtzCGgJ/Screenshot-2026-04-05-101604.png",
    skills: ["React", "Node.js", "Docker", "TypeScript", "Express","Supabase", "JWT", "REST API"],
    link: "https://github.com/Hari-N-2005/Vettly"
  },
  {
    id: 5,
    title: "EzyVote",
    description: "A secure voting platform for college clubs and cells with real-time results and database-backed integrity controls.",
    period: "2024",
    image: "https://i.ibb.co/4n90pPk0/image.png",
    skills: ["React", "TypeScript", "Node.js", "Express", "MySQL", "JWT", "REST API"],
    link: "https://github.com/Hari-N-2005/EzyVote"
  },
  {
    id: 1,
    title: "SecureDrive",
    description: "A private, password-protected web application with secure authentication and Google Drive file operations (upload, download, delete).",
    period: "2024",
    image: "https://i.ibb.co/kgyMB9ks/boxlogo3.jpg", // Screenshot path
    skills: ["Node.js", "Express", "JavaScript", "MongoDB", "JWT"], // Tech stack
    link: "https://github.com/Hari-N-2005/SecureDrive"
  },
  {
    id: 2,
    title: "EcoMind",
    description: "A Chrome extension that analyzes product pages in real time to support ethical and sustainable shopping decisions.",
    period: "2025",
    image: "https://i.ibb.co/N2TV0xj9/ecomind.jpg",
    skills: ["React", "JavaScript", "Chrome Extension"],
    link: "https://github.com/Hari-N-2005/EcoMind"
  },
  {
    id: 3,
    title: "CarbonTally",
    description: "Carbon Tally is a webstie that uses a xgboost model which enables users to predict and track their carbon emissions per month.",
    period: "2024",
    image: "https://i.ibb.co/7JVFqhx9/carbontallylogo.jpg",
    skills: ["React", "JavaScript", "XGBoost", "Python"],
    link: "https://github.com/Hari-N-2005/NasaSpaceChallenge"
  },
  {
    id: 4,
    title: "ChronoWeb",
    description: "A Chrome extension that allows users to track their time spent on various websites, providing insights into productivity and time management.",
    period: "2024",
    image: "https://i.ibb.co/pv65F6Hy/chronoweb.png",
    skills: ["React", "Node.js", "JavaScript", "Chrome Extension"],
    link: "https://github.com/Hari-N-2005/ChronoWeb"
  },
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-4 md:py-8
        relative
        overflow-hidden
      ">
        <GradientBackground 
          sectionId="projects"
          gradientColors={{
            start: '#F43F5E',  // Light rose
            end: '#BE123C'     // Deep rose
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center relative z-10">
            Projects
          </h1>
        </AnimatedText>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-0 max-w-7xl w-full">
          {projects.map((project) => (
            <div key={project.id}>
              <AnimatedText>
                <div 
                  onClick={() => {
                    setSelectedProject(project.id)
                    setModalOpen(true)
                  }}
                  className="
                    bg-white/[0.1] dark:bg-black/[0.2]
                    backdrop-blur-[20px]
                    rounded-2xl
                    border border-white/[0.1] dark:border-white/[0.1]
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    cursor-pointer
                  "
                >
                  <div className="relative w-full h-48 md:h-72 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg object-cover w-full h-full"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  <h2 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h2>
                  
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
                    {project.period}
                  </p>
                  
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1
                          text-sm
                          rounded-full
                          bg-white/[0.05] dark:bg-white/[0.05]
                          backdrop-blur-[8px]
                          border border-white/[0.05]
                          text-gray-600 dark:text-gray-400
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>

      <ExperienceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        experienceId={selectedProject ?? 1}
      />
    </section>
  )
} 