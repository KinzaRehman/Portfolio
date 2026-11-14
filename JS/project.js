// A project must match the category and every checked technology.
const activeFilters = { category: 'all', technologies: [] };
const categoryLabels = {
  'full-stack': 'Full Stack',
  frontend: 'Frontend',
  'ui-ux': 'UI/UX',
  analytics: 'Analytics'
};
const technologyOrder = [
  'JavaScript', 'HTML', 'CSS', 'React', 'Node.js', 'Express.js',
  'MongoDB', 'Mongoose', 'EJS', 'Python', 'SQL', 'REST APIs',
  'TypeScript', 'Tableau'
];

// Create elements with textContent so metadata is never interpreted as HTML.
function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function createLink(label, url, projectName) {
  const link = createElement('a', '', label + ' ↗');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', label + ' for ' + projectName + ' (opens in a new tab)');
  return link;
}

// Scale a desktop live preview to fit its card, including after filtering.
const livePreviewObserver = new ResizeObserver(function (entries) {
  entries.forEach(function (entry) {
    entry.target.style.setProperty('--preview-scale', entry.contentRect.width / 1440);
  });
});

function showMissingPreview(preview, project) {
  preview.replaceChildren();
  if (project.previewUrl || project.liveUrl) {
    preview.classList.add('project-preview-live');
    const iframe = createElement('iframe');
    iframe.src = project.previewUrl || project.liveUrl;
    iframe.title = project.name + ' live preview';
    iframe.loading = 'lazy';
    preview.append(iframe);
    livePreviewObserver.observe(preview);
    return;
  }
  preview.classList.add('project-preview-missing');
  preview.append(
    createElement('span', 'preview-monogram', project.name.slice(0, 1).toUpperCase()),
    createElement('p', '', 'Screenshot coming soon')
  );
}

function createProjectCard(project) {
  const card = createElement('article', 'project-card filterable-project');
  card.dataset.projectId = project.id;
  if (project.featuredRank) card.classList.add('featured-card');
  const titleId = 'project-' + project.id;
  card.setAttribute('aria-labelledby', titleId);

  const preview = createElement('div', 'project-preview project-preview-image');
  if (project.image) {
    const image = createElement('img');
    image.alt = project.imageAlt;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.addEventListener('error', function () { showMissingPreview(preview, project); }, { once: true });
    image.src = project.image;
    preview.append(image);
  } else {
    showMissingPreview(preview, project);
  }

  const body = createElement('div', 'project-body');
  const categories = project.categories.map(category => categoryLabels[category]);
  const category = createElement('p', 'project-type', categories.join(' · ') || 'Coding Practice & Learning');
  const title = createElement('h3', '', project.name);
  title.id = titleId;
  body.append(category, title, createElement('p', 'project-description', project.description));
  if (project.technologies.length) {
    const badges = createElement('ul', 'tags technology-badges');
    badges.setAttribute('aria-label', 'Technologies');
    project.technologies.forEach(technology => badges.append(createElement('li', '', technology)));
    body.append(badges);
  }

  const links = createElement('div', 'project-links');
  if (project.liveUrl) links.append(createLink('Live Demo', project.liveUrl, project.name));
  if (project.repositoryUrl) links.append(createLink('GitHub Repository', project.repositoryUrl, project.name));
  (project.additionalLinks || []).forEach(link => links.append(createLink(link.label, link.url, project.name)));
  body.append(links);
  card.append(preview, body);
  return card;
}

function createFilterButtons(groupName, options, allLabel) {
  const group = document.querySelector('[data-filter-group="' + groupName + '"]');
  const filters = [['all', allLabel], ...options];
  filters.forEach(function ([value, label]) {
    const button = createElement('button', 'filter-button', label);
    button.type = 'button';
    button.dataset.filter = value;
    button.setAttribute('aria-pressed', String(value === 'all'));
    button.classList.toggle('active', value === 'all');
    button.setAttribute('aria-controls', 'project-results');
    button.addEventListener('click', function () {
      activeFilters[groupName] = value;
      filterProjects();
    });
    group.append(button);
  });
}

function matchesFilters(project) {
  const matchesCategory = activeFilters.category === 'all' || project.categories.includes(activeFilters.category);
  const matchesTechnology = activeFilters.technologies.every(technology => project.technologies.includes(technology));
  return matchesCategory && matchesTechnology;
}

// Keep the existing cards in the DOM: filtering doesn't reload their images.
function filterProjects() {
  let featuredCount = 0;
  let moreCount = 0;
  projectsData.forEach(function (project) {
    const visible = matchesFilters(project);
    projectCards.get(project.id).hidden = !visible;
    if (visible && project.featuredRank) featuredCount++;
    if (visible && !project.featuredRank) moreCount++;
  });
  document.querySelectorAll('[data-filter-group="category"]').forEach(function (group) {
    group.querySelectorAll('button').forEach(function (button) {
      const active = button.dataset.filter === activeFilters[group.dataset.filterGroup];
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  });
  updateTechnologyFilter();
  const count = featuredCount + moreCount;
  document.querySelector('#featured-projects').hidden = featuredCount === 0;
  document.querySelector('#more-projects').hidden = moreCount === 0;
  document.querySelector('#empty-results').hidden = count !== 0;
  const category = categoryLabels[activeFilters.category] || 'All Projects';
  const technology = activeFilters.technologies.length ? activeFilters.technologies.join(' + ') : 'All Technologies';
  document.querySelector('#results-message').textContent = count + (count === 1 ? ' project' : ' projects') + ' · ' + category + ' · ' + technology;
}

const projectCards = new Map();
projectsData.forEach(function (project) {
  const card = createProjectCard(project);
  projectCards.set(project.id, card);
  const grid = document.querySelector(project.featuredRank ? '#featured-grid' : '#more-grid');
  grid.append(card);
});

createFilterButtons('category', Object.entries(categoryLabels).filter(([category]) =>
  projectsData.some(project => project.categories.includes(category))), 'All Projects');
// Native disclosure and checkboxes allow multiple choices without modifier keys.
const technologyDropdown = createElement('details', 'technology-dropdown');
const technologySummary = createElement('summary', 'technology-select');
const technologySummaryText = createElement('span', '', 'All Technologies');
technologySummaryText.id = 'technology-selection';
technologySummary.setAttribute('aria-labelledby', 'technology-label technology-selection');
technologySummary.append(technologySummaryText);
const technologyPanel = createElement('div', 'technology-options');
technologyPanel.append(createElement('p', 'technology-hint', 'Match all selected technologies.'));
const usedTechnologies = technologyOrder.filter(technology =>
  projectsData.some(project => project.technologies.includes(technology)));
usedTechnologies.forEach(function (technology) {
  const label = createElement('label', 'technology-option');
  const checkbox = createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = technology;
  checkbox.name = 'technology';
  checkbox.setAttribute('aria-controls', 'project-results');
  checkbox.addEventListener('change', function () {
    activeFilters.technologies = Array.from(technologyPanel.querySelectorAll('input:checked'), input => input.value);
    filterProjects();
  });
  label.append(checkbox, createElement('span', '', technology));
  technologyPanel.append(label);
});
const clearTechnologies = createElement('button', 'clear-technologies', 'Clear technologies');
clearTechnologies.type = 'button';
clearTechnologies.addEventListener('click', function () {
  activeFilters.technologies = [];
  filterProjects();
});
technologyPanel.append(clearTechnologies);
technologyDropdown.append(technologySummary, technologyPanel);
document.querySelector('[data-filter-group="technology"]').append(technologyDropdown);

function updateTechnologyFilter() {
  technologyPanel.querySelectorAll('input').forEach(function (checkbox) {
    checkbox.checked = activeFilters.technologies.includes(checkbox.value);
  });
  const count = activeFilters.technologies.length;
  technologySummaryText.textContent = count === 0 ? 'All Technologies' :
    count === 1 ? activeFilters.technologies[0] : count + ' technologies selected';
}

technologyDropdown.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    technologyDropdown.open = false;
    technologySummary.focus();
  }
});
document.addEventListener('click', function (event) {
  if (!technologyDropdown.contains(event.target)) technologyDropdown.open = false;
});

document.querySelector('#reset-filters').addEventListener('click', function () {
  activeFilters.category = 'all';
  activeFilters.technologies = [];
  technologyDropdown.open = false;
  filterProjects();
});
document.querySelector('.project-filters').hidden = false;
document.querySelector('#year').textContent = new Date().getFullYear();
filterProjects();
