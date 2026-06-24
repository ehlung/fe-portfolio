import { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { content } from '../data/content'

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)
  const active = content.experiences[activeTab]

  return (
    <section id="experience" className="portfolio-section max-w-175 scroll-mt-20">
      <h2 className="numbered-heading">
        <span>02.</span>
        Where I've Been
        <span />
      </h2>

      <div className="block min-[600px]:flex min-[700px]:min-h-85">
        <div
          className="relative z-10 mb-7.5 flex w-[calc(100%+50px)] -translate-x-6.25 overflow-x-auto pl-6.25 min-[480px]:w-[calc(100%+100px)] min-[480px]:-translate-x-12.5 min-[480px]:pl-12.5 min-[600px]:mb-0 min-[600px]:w-max min-[600px]:translate-x-0 min-[600px]:flex-col min-[600px]:overflow-visible min-[600px]:pl-0"
          role="tablist"
          aria-label="Experience tabs"
        >
          {content.experiences.map((exp, i) => (
            <div key={i} role="presentation" className="first:ml-6.25 last:pr-6.25 min-[480px]:first:ml-12.5 min-[480px]:last:pr-12.5 min-[600px]:first:ml-0 min-[600px]:last:pr-0">
              <button
                id={`tab-${i}`}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`panel-${i}`}
                tabIndex={activeTab === i ? 0 : -1}
                onClick={() => setActiveTab(i)}
                className={`flex h-10.5 min-w-30 items-center justify-center border-b-2 border-navy-lighter bg-transparent px-3.75 pb-0.5 pt-0 text-center font-mono text-[13px] transition-colors duration-200 hover:bg-navy-light hover:text-teal min-[600px]:w-full min-[600px]:justify-start min-[600px]:border-b-0 min-[600px]:border-l-2 min-[600px]:px-5 min-[600px]:text-left min-[768px]:px-3.75
                  ${activeTab === i
                    ? 'text-teal'
                    : 'text-slate-muted'
                  }`}
              >
                {exp.tabLabel}
              </button>
            </div>
          ))}
          <div
            className="absolute bottom-0 left-0 z-10 ml-6.25 h-0.5 w-30 rounded bg-teal transition-transform duration-200 min-[480px]:ml-12.5 min-[600px]:hidden"
            style={{ transform: `translateX(${activeTab * 120}px)` }}
          />
          <div
            className="absolute left-0 top-0 z-10 hidden h-10.5 w-0.5 rounded bg-teal transition-transform duration-200 min-[600px]:block"
            style={{ transform: `translateY(${activeTab * 42}px)` }}
          />
        </div>

        <div
          id={`panel-${activeTab}`}
          key={activeTab}
          className="w-full px-1.25 py-2.5 min-[600px]:ml-5"
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`tab-${activeTab}`}
          style={{ animation: 'heroFadeUp 0.2s ease both' }}
        >
          {active.entries ? (
            <div className="space-y-8">
              {active.entries.map((entry) => (
                <div key={entry.title}>
                  <h3 className="mb-0.5 text-[22px] font-medium leading-[1.3] text-slate-main text-balance">
                    <span>{entry.title}</span>
                    {entry.url && (
                      <a
                        href={entry.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${entry.title} 링크`}
                        className="ml-2 inline-flex size-5 translate-y-[0.14em] items-center justify-center text-slate-main transition-colors duration-200 hover:text-teal"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </h3>
                  <p className="mb-5 font-mono text-[13px] text-slate-mid">{entry.period}</p>

                  <ul className="m-0 list-none p-0">
                    {entry.bullets.map((bullet, i) => (
                      <li key={i} className="relative mb-2.5 pl-7.5 text-pretty text-[18px] leading-[1.3]">
                        <span className="absolute left-0 top-1 text-sm leading-none text-teal">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <>
              <h3 className="mb-0.5 text-[22px] font-medium leading-[1.3] text-slate-main text-balance">
                <span>{active.title}</span>
                {active.url && (
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${active.title} 링크`}
                    className="ml-2 inline-flex size-5 translate-y-[0.14em] items-center justify-center text-slate-main transition-colors duration-200 hover:text-teal"
                  >
                    <FiExternalLink size={18} />
                  </a>
                )}
              </h3>
              <p className="mb-6.25 font-mono text-[13px] text-slate-mid">{active.period}</p>

              <ul className="m-0 list-none p-0">
                {active.bullets.map((bullet, i) => (
                  <li key={i} className="relative mb-2.5 pl-7.5 text-pretty text-[18px] leading-[1.3]">
                    <span className="absolute left-0 top-1 text-sm leading-none text-teal">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
