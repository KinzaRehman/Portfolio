// =========================================
// RESPONSIVE DESKTOP WEBSITE PREVIEWS
// =========================================

function resizeProjectPreviews() {

  const previews =
    document.querySelectorAll(".project-preview");

  previews.forEach(function (preview) {

    const iframe =
      preview.querySelector("iframe");

    if (!iframe) {
      return;
    }

    /*
      The embedded website always renders
      as a 1440 × 810 desktop browser.
    */

    const desktopWidth = 1440;
    const desktopHeight = 810;

    /*
      Find the width available inside
      the portfolio card.
    */

    const availableWidth =
      preview.clientWidth;

    /*
      Scale the desktop website proportionally
      to exactly fit the card width.
    */

    const scale =
      availableWidth / desktopWidth;

    iframe.style.width =
      `${desktopWidth}px`;

    iframe.style.height =
      `${desktopHeight}px`;

    iframe.style.transform =
      `scale(${scale})`;

  });

}


// Resize after everything loads
window.addEventListener(
  "load",
  resizeProjectPreviews
);


// Resize when browser changes size
window.addEventListener(
  "resize",
  resizeProjectPreviews
);