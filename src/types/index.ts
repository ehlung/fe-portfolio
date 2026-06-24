export interface Project {
  title: string
  subtitle: string
  period: string
  type: string
  description: string
  role: string
  tech: string[]
  images?: string[]
  features: string[]
  contributions: string[]
  troubleshooting: string[]
  achievements: string[]
  githubUrl: string
  demoUrl: string
  color: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface ExperienceItem {
  tabLabel: string
  title: string
  period: string
  url?: string
  bullets: string[]
  entries?: {
    title: string
    period: string
    url?: string
    bullets: string[]
  }[]
}

export interface ContactItem {
  label: string
  value: string
  url: string
}

export interface PortfolioContent {
  name: string
  role: string
  headline: string
  summary: string
  about: string
  resumeUrl: string
  profile: { label: string; value: string }[]
  projects: Project[]
  skills: SkillGroup[]
  experiences: ExperienceItem[]
  contactMessage: string
  contacts: ContactItem[]
}
