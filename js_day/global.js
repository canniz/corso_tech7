document.querySelector("#button-menu").addEventListener("click", () => {
  document.querySelector("#sidebar").classList.add("open");
  document.querySelector("#bg-overlay").classList.add("visible");
});

[
  document.querySelector("#button-close"),
  document.querySelector("#bg-overlay"),
].forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector("#sidebar").classList.remove("open");
    document.querySelector("#bg-overlay").classList.remove("visible");
  });
});

document.querySelector(".theme-switch").addEventListener("click", () => {
  if (document.querySelector("html").dataset.theme === "light") {
    document.querySelector("html").dataset.theme = "dark";
  } else {
    document.querySelector("html").dataset.theme = "light";
  }
});
