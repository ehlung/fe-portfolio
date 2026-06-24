import { content } from '../data/content'

export default function Contact() {
  const emailContact = content.contacts.find((c) => c.label === 'Email')

  return (
    <section id="contact" className="portfolio-section mx-auto max-w-150 scroll-mt-20 text-center">
      <p className="mb-5 font-mono text-[16px] font-normal text-teal max-lg:text-[14px] max-md:text-[13px]">
        04. Contact
      </p>

      <h2 className="m-0 text-[clamp(40px,5vw,60px)] font-semibold leading-[1.1] text-slate-main text-balance">
        Get In Touch
      </h2>

      <p className="mt-5 mb-12.5 text-pretty leading-[1.3] text-slate-muted">
        {content.contactMessage}
      </p>

      <a
        href={emailContact?.url ?? 'mailto:dpfud8786@gmail.com'}
        className="inline-block rounded border border-teal px-7 py-5 font-mono text-sm leading-none text-teal transition-colors duration-200 hover:bg-teal/10"
      >
        Send a Message
      </a>

      <footer className="mt-20 font-mono">
        <p className="text-xs leading-[1.3] text-slate-muted/60">
          Designed &amp; Built by{' '}
          <span className="text-teal">{content.name}</span>
        </p>
        <p className="mt-2 text-xs leading-[1.3] text-slate-muted/50">
          Layout inspired by{' '}
          <a
            href="https://v4.brittanychiang.com/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-muted transition-colors duration-200 hover:text-teal"
          >
            Brittany Chiang v4
          </a>
        </p>
      </footer>
    </section>
  )
}
