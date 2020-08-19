import "../stylesheets/styles.scss";

import { Modal, Dropdown } from "bootstrap";
import HugoSearch from "./classes/HugoSearch";
import Hamburger from "./classes/Hamburger";

document.addEventListener("DOMContentLoaded", () => {
  new HugoSearch();
  new Hamburger();
});
