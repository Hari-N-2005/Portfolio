'use client'

import AnimatedText from "../common/AnimatedText"
import GradientBackground from "../common/GradientBackground"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8 relative overflow-hidden">
      <GradientBackground
        sectionId="about"
        gradientColors={{
          start: '#F43F5E',
          end: '#BE123C'
        }}
      />

      <div className="max-w-2xl space-y-12 relative z-10">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I am Hari Govind N, a Computer Science Engineering undergraduate from Model Engineering College, Thrikkakara. I enjoy turning ideas into practical software that is secure, reliable, and easy to use.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My current work focuses on full stack development with React.js, Node.js, Express.js, and databases such as MongoDB and MySQL. I have also worked on analytics tasks using Python, Pandas, and NumPy during my internship.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I like building products around real-world use cases, especially in secure web systems, productivity tools, and sustainability-focused applications.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Career Goals</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My goal is to contribute to teams building secure, scalable, and data-driven applications, while growing as a software engineer through impactful product development.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}