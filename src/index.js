import * as home from "./home";
import * as menu from "./menu";
import * as about from "./about";

const nav = document.querySelector("nav");
const content = document.querySelector("#content");

nav.addEventListener("click", (e) => {
  const target = e.target;
  content.innerText = "";

  switch (target.textContent) {
    case "Home":
      content.append(home.heading);
      content.append(home.para);
      break;

    case "Menu":
      content.append(menu.heading);
      content.append(menu.para);
      break;

    case "About":
      content.append(about.heading);
      content.append(about.para);
      break;
  }
});
