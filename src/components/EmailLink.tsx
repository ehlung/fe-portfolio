import { content } from '../data/content'

export default function EmailLink() {
  const email = content.contacts.find((c) => c.label === 'Email')?.value ?? ''

  return (
    <div
      className="fixed bottom-0 right-10 z-40 hidden flex-col items-center min-[1081px]:flex"
      style={{ animation: 'sideFadeUp 0.3s ease 1.1s both' }}
    >
      <a
        href={`mailto:${email}`}
        className="my-5 p-2.5 font-mono text-xs tracking-[0.1em] text-slate-muted transition-all duration-200 hover:-translate-y-0.75 hover:text-teal [writing-mode:vertical-rl]"
      >
        {email}
      </a>
      <div className="h-22.5 w-px bg-slate-muted" />
    </div>
  )
}
