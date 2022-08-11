const toggle = document.querySelector("label.toggle");
const lightMode = document.querySelector(".mode.light");
const darkMode = document.querySelector(".mode.dark");

toggle.onclick = (event) => {
  const checked = event.target.checked;
  if (checked !== "undefined") {
    changeMode(toggle, checked);
    changeMode(lightMode, !checked);
    changeMode(darkMode, checked);

    const bodyElement = document.querySelector("body");
    checked
      ? bodyElement.classList.add("dark")
      : bodyElement.classList.remove("dark");
  }
};

function changeMode(element, mode) {
  mode ? element.classList.add("on") : element.classList.remove("on");
}