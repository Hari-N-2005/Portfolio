// Type definition for project details
export type ProjectDetail = {
  id: number                // Unique identifier for the project
  title: string            // Project title
  company: string          // Company name
  overview: string         // Brief project overview
  mainImage: string        // Main project image path
  link: string            // Live project URL
  github?: string         // Optional GitHub repository URL
  features: {             // List of project features
    title: string         // Feature title
    description: string   // Feature description  
    image: string | string[] // Feature image(s) path
  }[]
  techStack: {            // Technical stack groupings
    category: string      // Tech category name
    items: string[]       // List of technologies
  }[]
  achievements: {         // Quantifiable achievements
    metric: string        // Achievement metric name
    value: string         // Achievement value
    change: number        // Numerical change/improvement
  }[]
}

// Project data mapping object
export const PROJECT_DATA: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "SecureDrive",
    company: "Personal Project", 
    overview: "SecureDrive is a private, password-protected web application for secure file management with authentication and Google Drive integration.",
    mainImage: "https://i.ibb.co/kgyMB9ks/boxlogo3.jpg",
    link: "https://github.com/Hari-N-2005/SecureDrive",
    github: "https://github.com/Hari-N-2005/SecureDrive",
    features: [
      {
        title: "Secure Authentication",
        description: "Implemented protected routes, login validation, and session control to ensure only authorized users can access files.",
        image: "https://i.ibb.co/kgyMB9ks/boxlogo3.jpg"
      },
      {
        title: "File Operations",
        description: "Built upload, download, and delete workflows integrated with Google Drive APIs for smooth file handling.",
        image: "https://i.ibb.co/kgyMB9ks/boxlogo3.jpg"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "JavaScript", "HTML5", "CSS3"]
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "JWT"]
      }
    ],
    achievements: [
      {
        metric: "Access Model",
        value: "Private",
        change: 0
      },
      {
        metric: "Cloud Storage",
        value: "Integrated",
        change: 0
      },
      {
        metric: "Security Focus",
        value: "High",
        change: 0
      }
    ]
  },
  2: {
    id: 2,
    title: "EcoMind",
    company: "Personal Project",
    overview: "EcoMind is a Chrome extension that analyzes product pages in real time to support ethical and sustainable shopping decisions.", 
    mainImage: "https://i.ibb.co/N2TV0xj9/ecomind.jpg",
    link: "https://github.com/Hari-N-2005/EcoMind",
    github: "https://github.com/Hari-N-2005/EcoMind",
    features: [
      {
        title: "Real-time Product Insights",
        description: "Analyzes product pages directly in-browser and surfaces sustainability-focused recommendations in real time.",
        image: "https://i.ibb.co/N2TV0xj9/ecomind.jpg"
      },
      {
        title: "Extension-first UX",
        description: "Designed a lightweight and fast extension workflow for smooth usage during daily browsing.",
        image: "https://i.ibb.co/N2TV0xj9/ecomind.jpg"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "JavaScript", "HTML5", "CSS3"]
      },
      {
        category: "Tooling",
        items: ["Git", "GitHub", "VSCode", "Node.js"]
      }
    ],
    achievements: [
      {
        metric: "Platform",
        value: "Chrome",
        change: 0
      },
      {
        metric: "Evaluation Mode",
        value: "Real-time",
        change: 0
      },
      {
        metric: "Focus",
        value: "Sustainability",
        change: 0
      }
    ]
  },
  3: {
    id: 3,
    title: "CarbonTally",
    company: "Hackathon Project",
    overview: "CarbonTally is a website that uses an XGBoost model to help users predict and track their monthly carbon emissions.",
    mainImage: "https://i.ibb.co/7JVFqhx9/carbontallylogo.jpg",
    link: "https://github.com/Hari-N-2005/NasaSpaceChallenge",
    github: "https://github.com/Hari-N-2005/NasaSpaceChallenge",
    features: [
      {
        title: "Emission Prediction",
        description: "Uses a trained XGBoost workflow to estimate monthly carbon emissions from user-input factors.",
        image: "https://i.ibb.co/7JVFqhx9/carbontallylogo.jpg"
      },
      {
        title: "Tracking Dashboard",
        description: "Provides a simple web dashboard to track trends and compare emissions over time.",
        image: "https://i.ibb.co/7JVFqhx9/carbontallylogo.jpg"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "JavaScript", "HTML5", "CSS3"]
      },
      {
        category: "ML and Data",
        items: ["Python", "Pandas", "NumPy", "Git"]
      }
    ],
    achievements: [
      {
        metric: "Model",
        value: "XGBoost",
        change: 0
      },
      {
        metric: "Tracking",
        value: "Monthly",
        change: 0
      },
      {
        metric: "Focus",
        value: "Carbon Insights",
        change: 0
      }
    ]
  },
  4: {
    id: 4,
    title: "ChronoWeb",
    company: "Personal Project",
    overview: "ChronoWeb is a Chrome extension that tracks time spent on websites and helps users improve productivity and time management.",
    mainImage: "https://i.ibb.co/pv65F6Hy/chronoweb.png",
    link: "https://github.com/Hari-N-2005/ChronoWeb",
    github: "https://github.com/Hari-N-2005/ChronoWeb",
    features: [
      {
        title: "Website Time Tracking",
        description: "Monitors active browsing time across websites and aggregates usage history.",
        image: "https://i.ibb.co/pv65F6Hy/chronoweb.png"
      },
      {
        title: "Productivity Insights",
        description: "Summarizes patterns to help users identify distractions and manage focused browsing time.",
        image: "https://i.ibb.co/pv65F6Hy/chronoweb.png"
      }
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["React", "JavaScript", "HTML5", "CSS3"]
      },
      {
        category: "Tooling",
        items: ["Git", "GitHub", "VSCode", "Node.js"]
      }
    ],
    achievements: [
      {
        metric: "Platform",
        value: "Chrome",
        change: 0
      },
      {
        metric: "Tracking",
        value: "Real-time",
        change: 0
      },
      {
        metric: "Use Case",
        value: "Productivity",
        change: 0
      }
    ]
  }
}

// Helper function: Get project by ID
export const getProjectById = (id: number): ProjectDetail | undefined => {
  if (!Object.keys(PROJECT_DATA).length) {
    console.warn('PROJECT_DATA is empty');
    return undefined;
  }
  return PROJECT_DATA[id] || Object.values(PROJECT_DATA)[0];
}