'use client'

import { useState } from 'react'
import AnimatedText from "../common/AnimatedText"
import { motion } from "framer-motion"

interface CourseItem {
  date: string
  title: string
  description: string
}

// Example course data - Replace with your own education experience
const courses: CourseItem[] = [
  {
    date: "2023 - Present",
    title: "Model Engineering College, Thrikkakara",
    description: "B.Tech in Computer Science Engineering | GPA: 9.45"
  },
  {
    date: "2021 - 2023",
    title: "Naipunnya Public School, Kochi",
    description: "Higher Secondary Education (HSE) | Score: 96%"
  }
]

// Usage Instructions:
// 1. Add your course information in the courses array above
// 2. Each course item contains:
//    - date: Course time
//    - title: Course name
//    - description: Course description (keywords recommended)
// 3. Timeline will automatically display based on array length
// 4. "Show More" button appears when more than 5 courses

export default function CourseTimeline() {
  const [showAll, setShowAll] = useState(false)
  const displayedCourses = showAll ? courses : courses.slice(0, 5)

  const handleCollapse = () => {
    setShowAll(false)
    const educationSection = document.getElementById('education')
    if (educationSection) {
      const yOffset = -60;
      const y = educationSection.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full">
      {/* Timeline container */}
      <div className="relative">
        {/* Timeline background line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-neutral-200 dark:bg-neutral-800 z-0" />
        
        {/* Timeline items */}
        {displayedCourses.map((course, index) => (
          <AnimatedText key={index}>
            <div className={`
              flex items-center gap-4 sm:gap-6 md:gap-8 mb-12 
              ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
              relative z-10
            `}>
              <div className="flex-1 text-center">
                <h3 className="
                  text-base                              /* Mobile: 16px */
                  sm:text-lg md:text-xl                 /* sm: 18px, md: 20px */
                  font-bold 
                  mb-2
                ">
                  {course.title}
                </h3>
                <p className="
                  text-xs                               /* Mobile: 12px */
                  sm:text-sm md:text-base              /* sm: 14px, md: 16px */
                  text-foreground/60 
                  mb-1
                ">
                  {course.date}
                </p>
                <p className="
                  text-xs                               /* Mobile: 12px */
                  sm:text-sm md:text-base              /* sm: 14px, md: 16px */
                  text-foreground/80
                ">
                  {course.description}
                </p>
              </div>
              
              <div className="relative z-20">
                <motion.div 
                  className="w-3 h-3 sm:w-4 sm:h-4 bg-black dark:bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.2
                  }}
                />
              </div>
              
              <div className="flex-1" />
            </div>
          </AnimatedText>
        ))}
      </div>

      {/* Buttons outside timeline container */}
      {!showAll && courses.length > 5 && (
        <AnimatedText>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="
                text-lg
                text-neutral-600 dark:text-neutral-400
                p-4
                transition-transform duration-300
                hover:scale-110
                z-0
                flex items-center gap-2
              "
            >
              Show More
              <svg 
                className="w-5 h-5 stroke-black dark:stroke-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                strokeWidth="2"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </AnimatedText>
      )}

      {showAll && (
        <AnimatedText>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleCollapse}
              className="
                text-lg
                text-neutral-600 dark:text-neutral-400
                p-4
                transition-transform duration-300
                hover:scale-110
                z-0
                flex items-center gap-2
              "
            >
              Show Less
              <svg 
                className="w-5 h-5 stroke-black dark:stroke-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                strokeWidth="2"
              >
                <path d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </AnimatedText>
      )}
    </div>
  )
}