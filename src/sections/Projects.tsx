import { FiGithub, FiExternalLink } from "react-icons/fi";
import { content } from "../data/content";

const BASE = import.meta.env.BASE_URL;

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section max-w-250 scroll-mt-20">
      <h2 className="numbered-heading mb-10">
        <span>03.</span>
        Some Things I've Built
        <span />
      </h2>

      <ul className="m-0 list-none p-0">
        {content.projects.map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <li
              key={project.title}
              className="relative grid grid-cols-12 items-center gap-2.5 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] [&:not(:last-child)]:mb-7.5 min-[480px]:[&:not(:last-child)]:mb-17.5 md:shadow-none md:[&:not(:last-child)]:mb-25"
            >
              <div
                className={`project-image relative z-[1] col-span-full row-start-1 h-full opacity-25 md:col-span-6 md:opacity-100
                    ${isEven ? "md:col-start-1 md:col-end-7" : "md:col-start-7 md:col-end-13"}`}
              >
                <a
                  href={project.githubUrl || project.demoUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative flex size-full items-center ${isEven ? "justify-start" : "justify-end"}`}
                  tabIndex={-1}
                >
                  {project.images && project.images.length > 0 ? (
                    <img
                      src={`${BASE}${project.images[0]}`}
                      alt={project.title}
                      className="block h-auto max-h-105 w-auto max-w-full object-contain object-center md:max-h-97.5"
                    />
                  ) : (
                    <div
                      className="flex h-full min-h-105 w-full items-center justify-center rounded md:min-h-72"
                      style={{ backgroundColor: project.color + "18" }}
                    >
                      <span
                        className="font-mono text-8xl font-bold opacity-30"
                        style={{ color: project.color }}
                      >
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </a>
              </div>

              <div
                className={`relative z-[5] col-span-full row-start-1 flex h-full flex-col justify-center px-6.25 pb-5 pt-7.5 md:z-10 md:block md:p-0
                    ${
                      isEven
                        ? "md:col-start-7 md:col-end-13 md:text-right"
                        : "md:col-start-1 md:col-end-7 md:text-left"
                    }`}
              >
                <p className="my-2.5 font-mono text-[13px] text-teal">
                  Featured Project
                </p>
                <h3 className="mb-0 text-[clamp(24px,5vw,28px)] font-semibold leading-[1.1] text-slate-bright md:mb-5 md:text-slate-main">
                  <a
                    href={project.githubUrl || project.demoUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-teal transition-colors duration-200"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="mb-3 text-[16px] text-slate-mid">
                  {project.subtitle}
                </p>

                <div
                  className={`relative z-[2] rounded bg-transparent py-5 text-slate-mid shadow-none md:bg-navy-light md:p-6.25 md:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]
                    ${isEven ? "md:-ml-15" : "md:-mr-15"}`}
                >
                  <p className="text-left text-pretty text-[17px] leading-[1.5] text-slate-main md:text-[18px] md:text-slate-mid">
                    {project.description}
                  </p>
                </div>

                {project.achievements.length > 0 && (
                  <ul
                    className={`relative z-[2] mt-4 flex flex-wrap p-0 font-mono text-[12px] text-teal/90
                        ${isEven ? "md:justify-end" : "md:justify-start"}`}
                  >
                    {project.achievements.map((a) => (
                      <li
                        key={a}
                        className={`${isEven ? "mr-3 md:ml-4 md:mr-0" : "mr-3 md:mr-4"} mb-1.5 whitespace-nowrap`}
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                )}

                <ul
                  className={`relative z-[2] mt-3 flex flex-wrap p-0 font-mono text-[13px] text-slate-main md:text-slate-mid
                      ${isEven ? "md:justify-end" : "md:justify-start"}`}
                >
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className={`${isEven ? "mr-2.5 md:ml-5 md:mr-0" : "mr-2.5 md:mr-5"} mb-1.25 whitespace-nowrap`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div
                  className={`relative z-[2] mt-4 flex items-center text-slate-main
                      ${isEven ? "-ml-2.5 md:ml-0 md:justify-end" : "-ml-2.5 md:justify-start"}`}
                >
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub 저장소"
                      className="p-2.5 text-slate-main transition-colors duration-200 hover:text-teal"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="라이브 데모"
                      className="p-2.5 text-slate-main transition-colors duration-200 hover:text-teal"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
