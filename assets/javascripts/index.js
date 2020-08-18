import "../stylesheets/styles.scss";

import { Modal, Dropdown } from "bootstrap";
import HugoSearch from "./classes/HugoSearch";

document.addEventListener("DOMContentLoaded", () => {
  new HugoSearch();
  initMenu();
});

function initMenu() {
  const body = document.querySelector("body");
  const menu = document.querySelector(".menu-trigger");
  const menuCover = document.querySelector(".menu-cover");
  const menuInput = document.querySelector(
    '.menu-trigger input[type="checkbox"]'
  );

  if (menu) {
    menuCover.addEventListener("click", () => {
      body.classList.remove("open");
      menuInput.checked = false;
    });
    menu.addEventListener("click", () => {
      if (!menuInput.checked) {
        body.classList.remove("open");
        menuInput.checked = false;
      } else if (!body.classList.contains("open")) {
        body.classList.add("open");
      }
    });
  }
}
