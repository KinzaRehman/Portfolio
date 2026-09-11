// Mobile navigation
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", function () {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}


// Automatically display the current year
const yearElements = document.querySelectorAll("#year");

yearElements.forEach(function (yearElement) {
  yearElement.textContent = new Date().getFullYear();
});


// Project filtering
const projects = document.querySelectorAll(".filterable-project");
const filterGroups = document.querySelectorAll("[data-filter-group]");
const resultsMessage = document.querySelector("#results-message");

if (projects.length > 0 && filterGroups.length > 0) {
  const selectedFilters = {
    type: "all",
    language: "all"
  };

  // Read a project type from the URL.
  // Example: projects.html?type=client
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


  // Update the appearance of the selected buttons
  function updateFilterButtons() {
    filterGroups.forEach(function (group) {
      const groupName = group.dataset.filterGroup;
      const buttons = group.querySelectorAll(".filter-button");

      buttons.forEach(function (button) {
        const isSelected =
          button.dataset.filter === selectedFilters[groupName];

        button.classList.toggle("active", isSelected);
        button.setAttribute("aria-pressed", isSelected);
      });
    });
  }


  // Display projects that match both selected filters
  function filterProjects() {
    let visibleProjectCount = 0;

    projects.forEach(function (project) {
      const projectTypes = project.dataset.type.split(" ");
      const projectLanguages = project.dataset.languages.split(" ");

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
      const projectWord =
        visibleProjectCount === 1 ? "project" : "projects";

      resultsMessage.textContent =
        `${visibleProjectCount} ${projectWord} shown`;
    }
  }


  // Listen for clicks on the filter buttons
  filterGroups.forEach(function (group) {
    group.addEventListener("click", function (event) {
      const selectedButton =
        event.target.closest(".filter-button");

      if (!selectedButton) {
        return;
      }

      const groupName = group.dataset.filterGroup;
      const selectedValue = selectedButton.dataset.filter;

      selectedFilters[groupName] = selectedValue;

      updateFilterButtons();
      filterProjects();
    });
  });


  // Run the filters when the page first loads
  updateFilterButtons();
  filterProjects();
}