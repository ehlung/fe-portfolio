const content = window.PORTFOLIO_CONTENT;

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
};

const createElement = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

const createTagList = (items) => {
  const list = createElement("ul", "tag-list");
  items.forEach((item) => list.append(createElement("li", "", item)));
  return list;
};

const createBulletSection = (title, items) => {
  if (!items || items.length === 0) return null;

  const section = createElement("section", "project-detail");
  section.append(createElement("h4", "", title));

  const list = createElement("ul");
  items.forEach((item) => list.append(createElement("li", "", item)));
  section.append(list);

  return section;
};

const fillStaticContent = () => {
  document.title = `${content.name} | Frontend Developer`;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", `${content.name} 프론트엔드 개발자 포트폴리오`);

  document.querySelectorAll("[data-content]").forEach((element) => {
    const key = element.dataset.content;
    if (content[key]) element.textContent = content[key];
  });

  const resumeLink = document.querySelector("[data-link='resume']");
  if (content.resumeUrl) {
    resumeLink.href = content.resumeUrl;
  } else {
    resumeLink.style.display = "none";
  }
};

const renderProfile = () => {
  const list = document.querySelector("#profile-list");
  content.profile.forEach((item) => {
    const wrapper = createElement("div");
    wrapper.append(createElement("dt", "", item.label));
    wrapper.append(createElement("dd", "", item.value));
    list.append(wrapper);
  });
};

const renderProjects = () => {
  const grid = document.querySelector("#project-grid");
  content.projects.forEach((project) => {
    const article = createElement("article", "project-card");
    article.style.setProperty("--project-color", project.color || "#0d6b5f");

    const shot = createElement("div", "project-shot");
    if (project.images && project.images.length > 0) {
      shot.classList.add("has-images");
      project.images.forEach((src, index) => {
        const image = createElement("img", index === 0 ? "project-image main-image" : "project-image");
        image.src = src;
        image.alt = `${project.title} 화면 ${index + 1}`;
        shot.append(image);
      });
    } else {
      shot.append(createElement("span", "", project.title));
    }

    const body = createElement("div", "project-content");
    body.append(createElement("h3", "", project.title));
    if (project.subtitle) body.append(createElement("p", "project-subtitle", project.subtitle));
    body.append(createElement("p", "project-meta", `${project.period} · ${project.type || project.role}`));
    body.append(createElement("p", "project-description", project.description));
    body.append(createTagList(project.tech));

    const details = createElement("div", "project-details");
    [
      ["주요 기능", project.features],
      ["담당 역할", project.contributions],
      ["트러블슈팅", project.troubleshooting],
      ["성과", project.achievements],
    ].forEach(([title, items]) => {
      const section = createBulletSection(title, items);
      if (section) details.append(section);
    });
    body.append(details);

    const links = createElement("div", "project-links");
    if (project.demoUrl) {
      const demo = createElement("a", "text-link", "Demo");
      demo.href = project.demoUrl;
      demo.target = "_blank";
      demo.rel = "noreferrer";
      links.append(demo);
    }
    if (project.githubUrl) {
      const github = createElement("a", "text-link", "GitHub");
      github.href = project.githubUrl;
      github.target = "_blank";
      github.rel = "noreferrer";
      links.append(github);
    }
    body.append(links);

    article.append(shot, body);
    grid.append(article);
  });
};

const renderSkills = () => {
  const groups = document.querySelector("#skill-groups");
  content.skills.forEach((group) => {
    const section = createElement("section", "skill-group");
    section.append(createElement("h3", "", group.title));

    const list = createElement("ul");
    group.items.forEach((item) => list.append(createElement("li", "", item)));
    section.append(list);
    groups.append(section);
  });
};

const renderExperiences = () => {
  const timeline = document.querySelector("#timeline");
  content.experiences.forEach((experience) => {
    const item = createElement("article", "timeline-item");
    item.append(createElement("time", "", experience.period));
    item.append(createElement("h3", "", experience.title));
    item.append(createElement("p", "", experience.description));
    timeline.append(item);
  });
};

const renderContacts = () => {
  const links = document.querySelector("#contact-links");
  content.contacts.forEach((contact) => {
    const link = createElement("a", "contact-link");
    link.href = contact.url;
    link.target = contact.url.startsWith("mailto:") ? "_self" : "_blank";
    link.rel = "noreferrer";
    link.append(createElement("strong", "", contact.label));
    link.append(createElement("span", "", contact.value));
    links.append(link);
  });
};

fillStaticContent();
renderProfile();
renderProjects();
renderSkills();
renderExperiences();
renderContacts();
