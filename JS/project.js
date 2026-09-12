// ==========================================
// PROJECT FILTERS
// ==========================================


// Get all filter groups
const filterGroups = document.querySelectorAll(".filter-buttons");


// Get all project cards
const projects = document.querySelectorAll(".filterable-project");


// Get the results message
const resultsMessage = document.querySelector("#results-message");


// Store the currently selected filters
const activeFilters = {
  type: "all",
  language: "all",
  analytics: "all"
};


// ==========================================
// LISTEN FOR FILTER BUTTON CLICKS
// ==========================================

filterGroups.forEach(function(group) {

  // Find all buttons inside this group
  const buttons = group.querySelectorAll(".filter-button");


  // Find out which group this is
  // type, language, or analytics
  const groupName = group.dataset.filterGroup;


  buttons.forEach(function(button) {

    button.addEventListener("click", function() {


      // --------------------------------------
      // Remove active state from this group
      // --------------------------------------

      buttons.forEach(function(currentButton) {

        currentButton.classList.remove("active");

        currentButton.setAttribute(
          "aria-pressed",
          "false"
        );

      });


      // --------------------------------------
      // Make clicked button active
      // --------------------------------------

      button.classList.add("active");

      button.setAttribute(
        "aria-pressed",
        "true"
      );


      // --------------------------------------
      // Save the selected filter
      // --------------------------------------

      activeFilters[groupName] =
        button.dataset.filter;


      // Run our filtering function
      filterProjects();

    });

  });

});


// ==========================================
// FILTER PROJECTS
// ==========================================

function filterProjects() {

  let visibleProjects = 0;


  projects.forEach(function(project) {


    // --------------------------------------
    // Get project types
    // --------------------------------------

    const projectTypes = project.dataset.type
      ? project.dataset.type.split(" ")
      : [];


    // --------------------------------------
    // Get project languages
    // --------------------------------------

    const projectLanguages =
      project.dataset.languages
        ? project.dataset.languages.split(" ")
        : [];


    // --------------------------------------
    // Get analytics categories
    // --------------------------------------

    const projectAnalytics =
      project.dataset.analytics
        ? project.dataset.analytics.split(" ")
        : [];


    // ======================================
    // CHECK PROJECT TYPE
    // ======================================

    const matchesType =
      activeFilters.type === "all" ||
      projectTypes.includes(
        activeFilters.type
      );


    // ======================================
    // CHECK LANGUAGE
    // ======================================

    const matchesLanguage =
      activeFilters.language === "all" ||
      projectLanguages.includes(
        activeFilters.language
      );


    // ======================================
    // CHECK ANALYTICS
    // ======================================

    const matchesAnalytics =
      activeFilters.analytics === "all" ||
      projectAnalytics.includes(
        activeFilters.analytics
      );


    // ======================================
    // SHOW OR HIDE PROJECT
    // ======================================

    if (
      matchesType &&
      matchesLanguage &&
      matchesAnalytics
    ) {

      project.hidden = false;

      visibleProjects++;

    } else {

      project.hidden = true;

    }

  });


  // ========================================
  // UPDATE RESULTS MESSAGE
  // ========================================

  if (resultsMessage) {

    if (visibleProjects === 0) {

      resultsMessage.textContent =
        "No projects match these filters.";

    } else if (visibleProjects === 1) {

      resultsMessage.textContent =
        "1 project found.";

    } else {

      resultsMessage.textContent =
        visibleProjects + " projects found.";

    }

  }

}


// ==========================================
// FOOTER YEAR
// ==========================================

const year = document.querySelector("#year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}


// ==========================================
// SHOW INITIAL PROJECT COUNT
// ==========================================

filterProjects();

function resizeProjectPreviews() {
  const previews = document.querySelectorAll(".project-preview");

  previews.forEach((preview) => {
    const iframe = preview.querySelector("iframe");

    if (!iframe) return;

    const desktopWidth = 1440;
    const scale = preview.clientWidth / desktopWidth;

    iframe.style.transform = `scale(${scale})`;
  });
}

window.addEventListener("load", resizeProjectPreviews);
window.addEventListener("resize", resizeProjectPreviews);