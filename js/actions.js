const overlay = document.querySelector(".overlay");

document.querySelectorAll(".main-search").forEach((search) => {
  search.addEventListener("input", () => {
    document.querySelectorAll(".main-search").forEach((input) => {
      input.value = search.value;
    });

    if (search.value != "") {
      document.querySelectorAll(".search-frame").forEach((frame) => {
        frame.classList.add("active");
      });
      header.classList.remove("hidden");

      if (window.innerWidth > 767.98) {
        document.body.style.overflow = "hidden";
        overlay.classList.add("active");
      } else {
        overlay.classList.remove("active");
      }
    } else {
      document.querySelectorAll(".search-frame").forEach((frame) => {
        frame.classList.remove("active");
      });

      if (window.innerWidth > 767.98) {
        document.body.style.overflow = "visible";
      }

      overlay.classList.remove("active");
    }
  });
});
