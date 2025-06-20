// filter.js

const filter = () => {
  const portfolioBox = document.querySelector(".portfolio-box");
  const filterButtons = document.querySelectorAll(".filter-button-group button");

  // Exit early if portfolioBox not found
  if (!portfolioBox) return;

  const images = portfolioBox.querySelectorAll("img");

  const imagesLoaded = () => {
    return new Promise((resolve) => {
      // If no images found, resolve immediately
      if (!images || images.length === 0) {
        resolve();
        return;
      }

      let loadedCount = 0;

      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.addEventListener("load", () => {
            loadedCount++;
            if (loadedCount === images.length) resolve();
          });
          img.addEventListener("error", () => {
            loadedCount++;
            if (loadedCount === images.length) resolve();
          });
        }
      });

      if (loadedCount === images.length) resolve();
    });
  };

  imagesLoaded().then(() => {
    import("isotope-layout").then(({ default: Isotope }) => {
      const iso = new Isotope(portfolioBox, {
        itemSelector: ".portfolio-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".portfolio-sizer",
          gutter: ".gutter-sizer",
        },
      });

      // Filter buttons
      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active from all
          filterButtons.forEach((btn) => btn.classList.remove("active"));

          // Add active to clicked button
          button.classList.add("active");

          const filterValue = button.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });
        });
      });
    });
  });
};

export default filter;
