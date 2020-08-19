export default class {
  constructor() {
    this.body = document.querySelector("body");
    this.menu = document.querySelector(".menu-trigger");
    this.menuCover = document.querySelector(".menu-cover");
    this.menuInput = document.querySelector(
      '.menu-trigger input[type="checkbox"]'
    );

    this.init();
  }

  init() {
    if (this.menu) {
      this.menuCover.addEventListener("click", () => {
        this.body.classList.remove("open");
        this.menuInput.checked = false;
      });
      this.menu.addEventListener("click", () => {
        if (!this.menuInput.checked) {
          this.body.classList.remove("open");
          this.menuInput.checked = false;
        } else if (!this.body.classList.contains("open")) {
          this.body.classList.add("open");
        }
      });
    }
  }
}
