

// =========================================
// MOBILE NAVIGATION
// =========================================

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}


// =========================================
// CURRENT YEAR
// =========================================

document.querySelectorAll("#year").forEach(function (yearElement) {
  yearElement.textContent = new Date().getFullYear();
});


// =========================================
// PROJECT FILTERING
// =========================================

const projects = document.querySelectorAll(".filterable-project");
const filterGroups = document.querySelectorAll("[data-filter-group]");
const resultsMessage = document.querySelector("#results-message");

if (projects.length > 0 && filterGroups.length > 0) {
  const selectedFilters = {
    type: "all",
    language: "all"
  };

  const urlParameters = new URLSearchParams(window.location.search);
  const requestedType = urlParameters.get("type");

  const validProjectTypes = [
    "client",
    "passion",
    "portfolio"
  ];

  if (validProjectTypes.includes(requestedType)) {
    selectedFilters.type = requestedType;
  }

  function updateFilterButtons() {
    filterGroups.forEach(function (group) {
      const groupName = group.dataset.filterGroup;

      group.querySelectorAll(".filter-button").forEach(function (button) {
        const isSelected =
          button.dataset.filter === selectedFilters[groupName];

        button.classList.toggle("active", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
      });
    });
  }

  function filterProjects() {
    let visibleProjectCount = 0;

    projects.forEach(function (project) {
      const projectTypes = (project.dataset.type || "").split(" ");
      const projectLanguages =
        (project.dataset.languages || "").split(" ");

      const matchesProjectType =
        selectedFilters.type === "all" ||
        projectTypes.includes(selectedFilters.type);

      const matchesLanguage =
        selectedFilters.language === "all" ||
        projectLanguages.includes(selectedFilters.language);

      const shouldDisplayProject =
        matchesProjectType && matchesLanguage;

      project.hidden = !shouldDisplayProject;

      if (shouldDisplayProject) {
        visibleProjectCount++;
      }
    });

    if (resultsMessage) {
      resultsMessage.textContent =
        `${visibleProjectCount} ${
          visibleProjectCount === 1 ? "project" : "projects"
        } shown`;
    }

    requestAnimationFrame(resizeAllProjectPreviews);
  }

  filterGroups.forEach(function (group) {
    group.addEventListener("click", function (event) {
      const selectedButton = event.target.closest(".filter-button");

      if (!selectedButton) {
        return;
      }

      const groupName = group.dataset.filterGroup;
      selectedFilters[groupName] = selectedButton.dataset.filter;

      updateFilterButtons();
      filterProjects();
    });
  });

  updateFilterButtons();
  filterProjects();
}


// =========================================
// PROJECT IFRAME SCALING
// =========================================

const desktopWidth = 1440;
const desktopHeight = 900;

function resizeProjectPreview(preview) {
  const iframe = preview.querySelector("iframe");

  if (!iframe || preview.clientWidth <= 0) {
    return;
  }

  const scale = preview.clientWidth / desktopWidth;

  iframe.style.width = `${desktopWidth}px`;
  iframe.style.height = `${desktopHeight}px`;
  iframe.style.transformOrigin = "top left";
  iframe.style.transform = `scale(${scale})`;
}

function resizeAllProjectPreviews() {
  document
    .querySelectorAll(".project-preview")
    .forEach(resizeProjectPreview);
}


// =========================================
// LAZY-LOAD IFRAMES
// =========================================

const lazyIframes = document.querySelectorAll(
  ".project-preview iframe[data-src]"
);

function loadIframe(iframe) {
  if (!iframe.dataset.src || iframe.src) {
    return;
  }

  iframe.src = iframe.dataset.src;
  iframe.removeAttribute("data-src");

  iframe.addEventListener(
    "load",
    function () {
      const preview = iframe.closest(".project-preview");

      if (preview) {
        resizeProjectPreview(preview);
      }
    },
    { once: true }
  );
}

if ("IntersectionObserver" in window) {
  const iframeObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        loadIframe(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      // Begin loading shortly before the card appears
      rootMargin: "300px 0px"
    }
  );

  lazyIframes.forEach(function (iframe) {
    iframeObserver.observe(iframe);
  });
} else {
  lazyIframes.forEach(loadIframe);
}


// =========================================
// WATCH PROJECT CARD SIZE CHANGES
// =========================================

if ("ResizeObserver" in window) {
  const previewObserver = new ResizeObserver(function (entries) {
    entries.forEach(function (entry) {
      resizeProjectPreview(entry.target);
    });
  });

  document.querySelectorAll(".project-preview").forEach(function (preview) {
    previewObserver.observe(preview);
  });
}


// =========================================
// INITIAL LOAD AND BROWSER RESIZE
// =========================================

window.addEventListener("DOMContentLoaded", resizeAllProjectPreviews);
window.addEventListener("load", resizeAllProjectPreviews);

let resizeTimer;

window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(
    resizeAllProjectPreviews,
    100
  );
});