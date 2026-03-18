'use client'

import React from 'react'
import AnimatedText from "../common/AnimatedText"
import GradientBackground from "../common/GradientBackground"
import basePath from "../../lib/basePath"

// This is a configuration file for the skills showcase component
// You can modify the content below based on your skills and experience

// Skills categories and corresponding icon configuration
// Each skill item contains:
// - name: Skill name
// - icon: Icon path (SVG format, stored in public/skills/ directory)
const technologies = {
  // Frontend development skills examples
  frontend: [
    { name: 'React', icon: '/skills/react.svg' },
    { name: 'JavaScript', icon: '/skills/javascript.svg' },
    { name: 'HTML', icon: '/skills/html5.svg' },
    { name: 'CSS', icon: '/skills/css3.svg' },
  ],
  
  // Backend development skills examples
  backend: [
    { name: 'Node.js', icon: '/skills/nodejs.svg' },
    { name: 'Express.js', icon: '/skills/express.svg' },
    { name: 'Python', icon: '/skills/python.svg' },
    { name: 'Java', icon: '/skills/java.png' },
    { name: 'C', icon: '/skills/c.svg' },
    { name: 'C++', icon: '/skills/cpp.svg' },
  ],

  // Database and deployment examples
  infrastructure: [
    { name: 'MongoDB', icon: '/skills/mongodb.svg' },
    { name: 'MySQL', icon: '/skills/mysql.svg' },
    { name: 'PostgreSQL', icon: '/skills/postgresql.svg' },
    { name: 'Supabase', icon: '/skills/supabase.svg' },
  ],

  // Development tools examples
  tools: [
    { name: 'Git', icon: '/skills/git.svg' },
    { name: 'VS Code', icon: '/skills/vscode.svg' },
    { name: 'GitHub', icon: '/skills/github.svg' },
    { name: 'NumPy', icon: '/skills/numpy.svg' },
    { name: 'Pandas', icon: '/skills/pandas.svg' },
  ]
}

// Category display name configuration
// You can modify category names or add new categories as needed
const categories = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  infrastructure: 'Databases',
  tools: 'Development Tools'
}

// Usage instructions:
// 1. Add or modify your skill items in the technologies object
// 2. Ensure each skill's icon file exists in the public/skills/ directory
// 3. Set corresponding category display names in the categories object
// 4. To add new categories, add configurations in both objects

export default function MySkills() {
  return (
    <section id="skills" className="
      min-h-screen w-full flex items-center justify-center 
      relative overflow-hidden
      p-4 sm:p-8 /* padding 4 on mobile, 8 on sm(640px) and above */
    ">
      <GradientBackground
        sectionId="skills"
        gradientColors={{
          start: '#F43F5E',
          end: '#BE123C'
        }}
      />

      <div className="container mx-auto relative z-10">
        <AnimatedText>
          <h1 className="
            text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center
          ">
            Technical Skills
          </h1>
        </AnimatedText>
        
        <div className="
          max-w-5xl mx-auto 
          space-y-8 sm:space-y-12 /* vertical spacing 8 on mobile, 12 on sm(640px) and above */
        ">
          {(Object.keys(technologies) as Array<keyof typeof technologies>).map((category) => (
            <AnimatedText key={category} className="
              space-y-4 sm:space-y-6 /* vertical spacing 4 on mobile, 6 on sm(640px) and above */
            ">
              <h2 className="
                text-xl sm:text-2xl /* font size xl(20px) on mobile, 2xl(24px) on sm(640px) and above */  
                font-semibold text-center
              ">
                {categories[category]}
              </h2>
              
              <div className="flex justify-center">
                <div className="
                  flex flex-wrap justify-center 
                  gap-4 sm:gap-8 md:gap-12 /* gap 4 on mobile, 8 on sm(640px), 12 on md(768px) and above */
                ">
                  {technologies[category].map((tech) => (
                    <div
                      key={tech.name}
                      className="
                        flex flex-col items-center 
                        gap-2 sm:gap-3 /* gap 2 on mobile, 3 on sm(640px) and above */
                        w-[80px] sm:w-[100px] /* width 80px on mobile, 100px on sm(640px) and above */
                        group
                      "
                    >
                      <div className="
                        relative 
                        w-16 sm:w-20 /* width 4rem(64px) on mobile, 5rem(80px) on sm(640px) and above */           
                        h-16 sm:h-20 /* height 4rem(64px) on mobile, 5rem(80px) on sm(640px) and above */           
                        flex items-center justify-center 
                        transition-all duration-300 
                        group-hover:scale-110   
                        group-hover:-translate-y-1
                      ">
                        <img
                          src={`${basePath}${tech.icon}`}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="
                            dark:invert          
                            sm:w-[56px] sm:h-[56px] /* icon size 56px on sm(640px) and above */
                          "
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="
                        text-xs sm:text-sm /* font size xs(12px) on mobile, sm(14px) on sm(640px) and above */     
                        font-medium 
                        text-foreground/70 
                        group-hover:text-foreground/90 
                        transition-colors 
                        text-center
                      ">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
} 