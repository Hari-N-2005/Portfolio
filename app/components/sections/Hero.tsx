'use client'

import AnimatedText from "../common/AnimatedText"
import FloatingElements from "../common/FloatingElements"
import basePath from "../../lib/basePath"

export default function Hero() {
  const resumeLink = "https://drive.google.com/file/d/1rVSk73bsfe6ycMNcd_QIYeOOuzqi7J1k/view?usp=sharing"

  return (
    <section id="home" className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FloatingElements />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AnimatedText className="flex flex-col items-center sm:items-start gap-4">
          <img
            className="rounded-full"
            src={`${basePath}/avatar.png`} // Replace with your avatar image path in public folder
            alt="Profile Picture"
            width={120}
            height={120}
            loading="eager"
            decoding="async"
          />
          <h1 className="text-4xl font-bold">Hari Govind N</h1>
          <p className="text-lg text-foreground/80 font-[family-name:var(--font-geist-mono)]">
            Aspiring Full Stack Developer
          </p>
        </AnimatedText>

        <AnimatedText 
          className="max-w-2xl text-center sm:text-left"
        >
          <p className="text-foreground/80 leading-relaxed">
            Computer Science Engineering student at Model Engineering College, focused on building secure web applications, scalable APIs, and data-driven tools.
          </p>
        </AnimatedText>

        <AnimatedText 
          className="flex gap-4 items-center flex-row"
        >
          <a
            className="
              relative
              z-20
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              h-12                                    // Fixed height
              px-5                                   // Fixed padding
              text-base                              // Fixed font size
            "
            href="https://github.com/Hari-N-2005" // Replace with your GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="invert dark:invert-0 mr-2"
              src={`${basePath}/github.svg`}
              alt="GitHub"
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
            />
            <span className="relative z-20">GitHub</span>
          </a>
          <a
            className="
              rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
              hover:border-transparent 
              h-12                                   // Fixed height
              px-5                                   // Fixed padding
              text-base                              // Fixed font size
              min-w-44                              // Fixed minimum width
            "
            href={"https://drive.google.com/file/d/12JvP47voAtFPeh5Gm9m-SYcyNrtfd-lJ/view?usp=sharing"} // Supports local path (e.g. /resume.pdf) or external Drive link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="dark:invert mr-2"
              src={`${basePath}/resume.svg`}
              alt="Resume"
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
            />
            View Resume
          </a>
        </AnimatedText>
      </main>

      <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:harigovindn700@gmail.com" // Replace with your email address
        >
          <img
            aria-hidden
            className="dark:invert"
            src={`${basePath}/mail.svg`}
            alt="Email"
            width={16}
            height={16}
            loading="lazy"
            decoding="async"
          />
          Send Email
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/hari-n05/" // Replace with your LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            aria-hidden
            className="dark:invert"
            src={`${basePath}/linkedin.svg`}
            alt="LinkedIn"
            width={16}
            height={16}
            loading="lazy"
            decoding="async"
          />
          LinkedIn
        </a>
      </div>
    </section>
  )
} 