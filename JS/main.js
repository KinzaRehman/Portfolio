// =========================================
// MOBILE NAVIGATION
// =========================================

const menuButton =
  document.querySelector(".menu-button");

const navigation =
  document.querySelector("#site-nav");


if (menuButton && navigation) {

  menuButton.addEventListener(
    "click",
    function () {

      const isOpen =
        navigation.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    }
  );


  navigation
    .querySelectorAll("a")
    .forEach(function (link) {

      link.addEventListener(
        "click",
        function () {

          navigation.classList.remove("open");

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

        }
      );

    });

}


// =========================================
// CURRENT YEAR
// =========================================

const yearElements =
  document.querySelectorAll("#year");


yearElements.forEach(
  function (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }
);


// =========================================
// PROJECT FILTERING
// Used on projects.html
// =========================================

const projects =
  document.querySelectorAll(".filterable-project");

const filterGroups =
  document.querySelectorAll("[data-filter-group]");

const resultsMessage =
  document.querySelector("#results-message");


if (
  projects.length > 0 &&
  filterGroups.length > 0
) {

  const selectedFilters = {
    type: "all",
    language: "all"
  };


  const urlParameters =
    new URLSearchParams(
      window.location.search
    );


  const requestedType =
    urlParameters.get("type");


  const validProjectTypes = [
    "client",
    "passion",
    "portfolio"
  ];


  if (
    validProjectTypes.includes(
      requestedType
    )
  ) {

    selectedFilters.type =
      requestedType;

  }


  function updateFilterButtons() {

    filterGroups.forEach(
      function (group) {

        const groupName =
          group.dataset.filterGroup;


        const buttons =
          group.querySelectorAll(
            ".filter-button"
          );


        buttons.forEach(
          function (button) {

            const isSelected =
              button.dataset.filter ===
              selectedFilters[groupName];


            button.classList.toggle(
              "active",
              isSelected
            );


            button.setAttribute(
              "aria-pressed",
              String(isSelected)
            );

          }
        );

      }
    );

  }


  function filterProjects() {

    let visibleProjectCount = 0;


    projects.forEach(
      function (project) {

        const projectTypes =
          project.dataset.type.split(" ");


        const projectLanguages =
          project.dataset.languages.split(" ");


        const matchesProjectType =
          selectedFilters.type === "all" ||
          projectTypes.includes(
            selectedFilters.type
          );


        const matchesLanguage =
          selectedFilters.language === "all" ||
          projectLanguages.includes(
            selectedFilters.language
          );


        const shouldDisplayProject =
          matchesProjectType &&
          matchesLanguage;


        project.hidden =
          !shouldDisplayProject;


        if (shouldDisplayProject) {
          visibleProjectCount++;
        }

      }
    );


    if (resultsMessage) {

      const projectWord =
        visibleProjectCount === 1
          ? "project"
          : "projects";


      resultsMessage.textContent =
        `${visibleProjectCount} ${projectWord} shown`;

    }


    requestAnimationFrame(
      resizeProjectPreviews
    );

  }


  filterGroups.forEach(
    function (group) {

      group.addEventListener(
        "click",
        function (event) {

          const selectedButton =
            event.target.closest(
              ".filter-button"
            );


          if (!selectedButton) {
            return;
          }


          const groupName =
            group.dataset.filterGroup;


          selectedFilters[groupName] =
            selectedButton.dataset.filter;


          updateFilterButtons();

          filterProjects();

        }
      );

    }
  );


  updateFilterButtons();

  filterProjects();

}


// =========================================
// DESKTOP / LAPTOP IFRAME PREVIEWS
// =========================================

function resizeProjectPreviews() {

  const previews =
    document.querySelectorAll(".project-preview");

  previews.forEach(function (preview) {

    const iframe =
      preview.querySelector("iframe");

    // Placeholder cards don't have iframes
    if (!iframe) {
      return;
    }

    /*
      Large virtual laptop/desktop viewport.

      The website thinks it has a
      1920px-wide browser window.

      We then shrink that entire browser
      into the project card.
    */

    const desktopWidth = 1920;
    const desktopHeight = 1200;

    const previewWidth =
      preview.clientWidth;

    if (previewWidth <= 0) {
      return;
    }

    /*
      Example:

      Card width = 340px

      340 / 1920 = 0.177

      So the entire website is displayed
      at roughly 17.7% of desktop size.
    */

    const scale =
      previewWidth / desktopWidth;

    iframe.style.width =
      `${desktopWidth}px`;

    iframe.style.height =
      `${desktopHeight}px`;

    iframe.style.transformOrigin =
      "top left";

    iframe.style.transform =
      `scale(${scale})`;

  });

}


// Run after page loads
window.addEventListener(
  "load",
  resizeProjectPreviews
);


// Run when browser changes size
window.addEventListener(
  "resize",
  resizeProjectPreviews
);


// Run after each website iframe loads
document
  .querySelectorAll(".project-preview iframe")
  .forEach(function (iframe) {

    iframe.addEventListener(
      "load",
      resizeProjectPreviews
    );

  });


// Watch cards themselves for size changes
if ("ResizeObserver" in window) {

  const previewObserver =
    new ResizeObserver(function () {

      resizeProjectPreviews();

    });


  document
    .querySelectorAll(".project-preview")
    .forEach(function (preview) {

      previewObserver.observe(preview);

    });

}


// =========================================
// INITIAL LOAD
// =========================================

window.addEventListener(
  "load",
  resizeProjectPreviews
);


// =========================================
// BROWSER RESIZE
// =========================================

let resizeTimer;


window.addEventListener(
  "resize",
  function () {

    clearTimeout(resizeTimer);


    resizeTimer =
      setTimeout(
        resizeProjectPreviews,
        50
      );

  }
);


// =========================================
// LAZY-LOADED IFRAMES
// =========================================

document
  .querySelectorAll(
    ".project-preview iframe"
  )
  .forEach(
    function (iframe) {

      iframe.addEventListener(
        "load",
        resizeProjectPreviews
      );

    }
  );


// =========================================
// WATCH PREVIEW SIZE CHANGES
// =========================================

if ("ResizeObserver" in window) {

  const previewObserver =
    new ResizeObserver(
      function () {

        resizeProjectPreviews();

      }
    );


  document
    .querySelectorAll(
      ".project-preview"
    )
    .forEach(
      function (preview) {

        previewObserver.observe(
          preview
        );

      }
    );

}

/* =========================================
   SCALE PROJECT IFRAMES LIKE LAPTOP PREVIEWS
========================================= */

function scaleProjectFrames() {
  const previews = document.querySelectorAll(".project-browser");

  previews.forEach((preview) => {
    const iframe = preview.querySelector(".project-browser-frame");

    if (!iframe) return;

    const laptopWidth = 1440;

    const availableWidth = preview.clientWidth;

    const scale = availableWidth / laptopWidth;

    iframe.style.transform = `scale(${scale})`;
  });
}

window.addEventListener("DOMContentLoaded", scaleProjectFrames);

window.addEventListener("load", scaleProjectFrames);

window.addEventListener("resize", scaleProjectFrames);