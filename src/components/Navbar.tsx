import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const NAV_ITEMS = [
  { num: '01.', label: 'About', id: 'about' },
  { num: '02.', label: 'Experience', id: 'experience' },
  { num: '03.', label: 'Projects', id: 'projects' },
  { num: '04.', label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', menuOpen)
    return () => document.body.classList.remove('overflow-hidden')
  }, [menuOpen])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 z-50 flex h-25 w-full translate-y-0 items-center bg-navy/85 px-6.25 backdrop-blur-[10px] md:px-10 lg:px-12.5"
      style={{ animation: 'navFadeDown 0.3s ease forwards' }}
    >
      <nav className="relative z-50 flex w-full items-center justify-between font-mono text-slate-main">
        <a
          href="#"
          onClick={goHome}
          className="group relative z-10 flex size-10.5 items-center justify-center text-teal focus:outline-none focus-visible:outline-none"
          aria-label="홈으로"
        >
          <svg className="absolute inset-0 overflow-visible" viewBox="0 0 100 116" aria-hidden>
            <path
              className="translate-x-0 translate-y-0 opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:translate-x-2.5 group-hover:translate-y-2.5 group-hover:opacity-100 group-focus-visible:translate-x-2.5 group-focus-visible:translate-y-2.5 group-focus-visible:opacity-100"
              d="M50 4 L95 27.5 L95 88.5 L50 112 L5 88.5 L5 27.5 Z"
              fill="currentColor"
            />
            <path
              d="M50 4 L95 27.5 L95 88.5 L50 112 L5 88.5 L5 27.5 Z"
              fill="var(--color-navy)"
              stroke="currentColor"
              strokeWidth="5"
            />
            <text
              x="50"
              y="60"
              fill="currentColor"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-sans text-[58px] font-semibold"
            >
              K
            </text>
          </svg>
        </a>

        <div className="hidden items-center md:flex">
          <ol className="flex items-center" aria-label="페이지 섹션">
            {NAV_ITEMS.map(({ num, label, id }) => (
              <li key={id} className="mx-1.25 text-[13px]">
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  className="group p-2.5 transition-colors duration-200"
                >
                  <span className="mr-1.25 text-[12px] text-teal">{num}</span>
                  <span className="ml-1 text-slate-main group-hover:text-teal">{label}</span>
                </a>
              </li>
            ))}
          </ol>

        </div>

        <button
          type="button"
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-50 flex size-11 items-center justify-center text-teal md:hidden"
        >
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-dark-navy/70 transition-opacity duration-200 md:hidden ${menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-40 flex h-dvh w-[min(75vw,400px)] flex-col items-center justify-center bg-navy-light px-2.5 font-mono shadow-[-10px_0_30px_-15px_rgba(2,12,27,0.7)] transition-transform duration-200 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!menuOpen}
      >
        <ol className="w-full text-center">
          {NAV_ITEMS.map(({ num, label, id }) => (
            <li key={id} className="mx-auto mb-5 text-[18px]">
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className="block px-5 py-0.75 text-slate-main transition-colors duration-200 hover:text-teal"
              >
                <span className="mb-1.25 block text-[14px] text-teal">{num}</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </aside>
    </header>
  )
}
