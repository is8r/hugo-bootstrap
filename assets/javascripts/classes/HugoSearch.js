// import $ from "jquery";
import lunr from "lunr";

export default class {
  constructor() {
    this.searchOverlay = document.querySelector(".search-form");
    this.searchButton = document.getElementById("search-button");
    this.searchInput = document.getElementById("search-input");
    this.closeSearch = document.getElementById("close-search");
    this.searchModal = document.getElementById("search");
    this.searchResults = document.querySelector("#search-results");

    this.init();
  }

  init() {
    if (this.closeSearch) {
      this.closeSearch.addEventListener(
        "click",
        event => {
          if (this.searchOverlay.classList.contains("open")) {
            this.searchOverlay.classList.remove("open");
          }
        },
        true
      );
    }

    if (this.searchButton) {
      this.searchButton.addEventListener(
        "click",
        event => {
          this.searchOverlay.classList.toggle("open");
          searchInput.focus();
        },
        true
      );
    }

    this.searchInput.addEventListener(
      "keyup",
      event => {
        var query = document.querySelector("#search-input").value;
        var searchResults = document.querySelector("#search-results");
        if (query.length === 0) {
          searchResults.innerHTML = "";
        }
        if (event.keyCode !== 9 && query.length > 2) {
          var matches = window.index.search(query);
          this.displayResults(matches);
        }
      },
      true
    );

    this.initLunr();
    this.initModal();
  }

  initModal() {
    const scope = this;
    this.searchModal.addEventListener("shown.bs.modal", function () {
      scope.searchInput.focus();
    });
    this.searchModal.addEventListener("hidden.bs.modal", function () {
      scope.searchResults.innerHTML = "";
      scope.searchInput.value = "";
    });
  }

  initLunr() {
    var scope = this;
    fetch("/search.json")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
      })
      .then(json => {
        scope.searchData = json;
        window.index = lunr(function () {
          this.field("id");
          this.field("url");
          this.field("title", { boost: 50 });
          this.field("tags", { boost: 30 });
          this.field("content", { boost: 10 });

          scope.searchData.forEach(function (obj, index) {
            obj["id"] = index;
            this.add(obj);
          }, this);
        });
      })
      .catch(error => console.log(error));
  }

  displayResults(results) {
    this.searchResults = document.querySelector("#search-results");
    // var inputVal = document.querySelector('#search-input').value;
    if (results.length) {
      this.searchResults.innerHTML = "";
      results.forEach(result => {
        var item = this.searchData[result.ref];
        // var section = item.section.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        var appendString = "";
        appendString +=
          '<li class="search-result"><h5><a href="' +
          item.url +
          '">' +
          item.title +
          "</a></h5><p>" +
          item.content +
          "</p>";
        console.log(item);
        // appendString += '<div class=\"in-section\">In: ' + section + '</div><ul class=\"tags\">';
        // appendString += '<ul class=\"tags\">';
        // var tags = '';
        // for (var i = 0; i < item.tags.length; i++) {
        //   appendString += '<li><a href=\"/tags/' + item.tags[i] + '\" class=\"tag\">' + item.tags[i] + '</a> ';
        // }
        appendString += "</ul></li>";
        if (item.content) {
          this.searchResults.innerHTML += appendString;
        }
      });
    }
  }
}
