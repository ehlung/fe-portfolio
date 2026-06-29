import { content } from '../data/content'

const BASE = import.meta.env.BASE_URL

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'State & Form',
    items: ['TanStack Query', 'Zustand', 'React Hook Form', 'Zod'],
  },
  {
    title: 'Backend & Database',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'Tools & Deployment',
    items: ['Vite', 'Git', 'GitHub', 'Vercel', 'Railway'],
  },
  {
    title: 'Design',
    items: ['Figma', 'Photoshop', 'Illustrator'],
  },
]

export default function About() {
  return (
    <section id="about" className="portfolio-section max-w-250 scroll-mt-20">
      <h2 className="numbered-heading">
        <span>01.</span>
        About Me
        <span />
      </h2>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-[minmax(0,1fr)_minmax(240px,300px)] lg:gap-20">
        <div>
          <p className="mb-3.75 text-pretty leading-[1.3]">{content.about}</p>

          <div className="mt-8 space-y-5">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="grid grid-cols-[14px_minmax(0,1fr)] gap-x-2">
                <span className="font-mono text-sm leading-[1.6] text-teal">▹</span>
                <h3 className="font-mono text-[13px] font-normal leading-[1.6] text-teal">
                  {group.title}
                </h3>
                <p className="col-start-2 font-mono text-[13px] leading-[1.6] text-slate-muted">
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-12.5 w-[70%] max-w-75 md:mt-0 md:w-full md:justify-self-end">
          <div className="group relative block w-full -translate-x-1 -translate-y-1 rounded bg-teal shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-transform duration-200 hover:-translate-x-1.5 hover:-translate-y-1.5">
            <div className="relative z-10 overflow-hidden rounded bg-navy-lighter">
              <img
                src={`${BASE}assets/profile.jpeg`}
                alt="강예령 프로필 사진"
                className="block h-auto w-full"
              />
            </div>
            <div className="absolute left-3.5 top-3.5 -z-10 size-full translate-x-2 translate-y-2 rounded border-2 border-teal transition-transform duration-200 group-hover:translate-x-2.5 group-hover:translate-y-2.5" />
          </div>
        </div>
      </div>
    </section>
  )
}
