'use client'

import AnimatedText from "../common/AnimatedText"
import GradientBackground from "../common/GradientBackground"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center px-6 py-10 md:px-10 relative overflow-hidden">
      <GradientBackground
        sectionId="about"
        gradientColors={{
          start: '#F43F5E',
          end: '#BE123C'
        }}
      />

      <div className="max-w-4xl w-full space-y-12 relative z-10">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I am Hari Govind N, an undergraduate in Computer Science Engineering at Model Engineering College, Thrikkakara. It is my passion to develop practical software solutions which are secure, scalable, and user-friendly.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                The technical areas that interest me are full-stack development using React, Node.js, and Express, and database technologies ranging from SQL-based systems like MySQL and PostgreSQL to the NoSQL databases such as MongoDB. In particular, I am passionate about developing well-structured applications with elegant and secure APIs and a smooth and responsive interface.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                In addition, my experiences with analytical programming using Python, Pandas, and NumPy have enabled me to make data-backed engineering decisions. Performance, security, and usability are equally important aspects of what I am looking for in projects.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I enjoy creating products based on real use cases like secure web applications, productivity applications, and sustainable products. Additionally, I enjoy learning more about AI-assisted work processes and incorporating them into my work.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Career Goals</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I aspire to help contribute towards creating secure, scalable, and data-driven digital products that make a difference. In the long run, my ambition is to be an engineer who owns features from scratch, contributes to architectural discussions, and mentors others through effective teamwork.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}