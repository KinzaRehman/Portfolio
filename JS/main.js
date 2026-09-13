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


  // =======================================
  // READ FILTER FROM URL
  // Example:
  // projects.html?type=passion
  // =======================================

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


  // =======================================
  // UPDATE FILTER BUTTONS
  // =======================================

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


  // =======================================
  // FILTER PROJECTS
  // =======================================

  function filterProjects() {

    let visibleProjectCount = 0;


    projects.forEach(
      function (project) {

        const projectTypes =
          project.dataset.type
            .split(" ");

        const projectLanguages =
          project.dataset.languages
            .split(" ");


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


    /*
      If filtering changes the layout,
      recalculate iframe sizes.
    */

    requestAnimationFrame(
      resizeProjectPreviews
    );

  }


  // =======================================
  // FILTER BUTTON CLICKS
  // =======================================

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

          const selectedValue =
            selectedButton.dataset.filter;


          selectedFilters[groupName] =
            selectedValue;


          updateFilterButtons();

          filterProjects();

        }
      );

    }
  );


  // Run filters when page loads

  updateFilterButtons();

  filterProjects();

}


// =========================================
// LAPTOP WEBSITE PREVIEWS
// =========================================

function resizeProjectPreviews() {

  const previews =
    document.querySelectorAll(
      ".project-preview"
    );


  previews.forEach(
    function (preview) {

      const iframe =
        preview.querySelector("iframe");


      /*
        Placeholder cards don't contain
        an iframe, so skip them.
      */

      if (!iframe) {
        return;
      }


      /*
        Every embedded website renders
        as though it is inside a
        1200 × 675 laptop browser.

        This prevents the embedded
        website from switching to its
        mobile layout simply because
        the portfolio card is narrow.
      */

      const laptopWidth = 1200;
      const laptopHeight = 675;


      const previewWidth =
        preview.clientWidth;


      /*
        Avoid calculating while a
        hidden element has zero width.
      */

      if (previewWidth <= 0) {
        return;
      }


      /*
        Calculate exactly how much the
        laptop browser needs to shrink
        to match the portfolio card.
      */

      const scale =
        previewWidth / laptopWidth;


      iframe.style.width =
        `${laptopWidth}px`;

      iframe.style.height =
        `${laptopHeight}px`;

      iframe.style.transformOrigin =
        "top left";

      iframe.style.transform =
        `scale(${scale})`;

    }
  );

}


// =========================================
// RUN PREVIEW RESIZING
// =========================================

window.addEventListener(
  "load",
  function () {

    resizeProjectPreviews();

  }
);


window.addEventListener(
  "resize",
  function () {

    resizeProjectPreviews();

  }
);


// =========================================
// LAZY-LOADED IFRAMES
// =========================================

const projectIframes =
  document.querySelectorAll(
    ".project-preview iframe"
  );


projectIframes.forEach(
  function (iframe) {

    iframe.addEventListener(
      "load",
      function () {

        resizeProjectPreviews();

      }
    );

  }
);


// =========================================
// RESIZE OBSERVER
// =========================================

/*
  This catches layout changes that don't
  trigger a normal browser resize.

  Example:
  - filter changes
  - grid changes
  - responsive layout changes
*/

if ("ResizeObserver" in window) {

  const previewResizeObserver =
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

        previewResizeObserver.observe(
          preview
        );

      }
    );

}