import { FiGithub, FiMail, FiBook } from 'react-icons/fi'
import { content } from '../data/content'

const LINKS = [
  { icon: FiGithub, url: content.contacts.find((c) => c.label === 'GitHub')?.url ?? '#', label: 'GitHub' },
  { icon: FiBook,   url: content.contacts.find((c) => c.label === 'Velog')?.url  ?? '#', label: 'Velog' },
  { icon: FiMail,   url: content.contacts.find((c) => c.label === 'Email')?.url  ?? '#', label: 'Email' },
]

export default function SocialLinks() {
  return (
    <div
      className="fixed bottom-0 left-10 z-40 hidden flex-col items-center min-[1081px]:flex"
      style={{ animation: 'sideFadeUp 0.3s ease 1s both' }}
    >
      {LINKS.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target={url.startsWith('mailto') ? undefined : '_blank'}
          rel={url.startsWith('mailto') ? undefined : 'noreferrer'}
          aria-label={label}
          className="p-2.5 text-slate-muted transition-all duration-200 hover:-translate-y-0.75 hover:text-teal"
        >
          <Icon size={20} />
        </a>
      ))}
      <div className="mt-5 h-22.5 w-px bg-slate-muted" />
    </div>
  )
}
