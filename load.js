document.addEventListener("DOMContentLoaded", function () {
  function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    for (const key in attributes) {
      element[key] = attributes[key];
    }
    return element;
  }

  const topBar = createElement("div", { className: "top-bar" });

  const logo = createElement("div", { className: "logo" });
  const logoLink = createElement("a", {
    href: "https://prizvideo.github.io/PrizVideo-Main/",
    style: "text-decoration: none; color: black;",
    innerHTML: "<b>PrizVideo Beta</b>",
  });
  logo.appendChild(logoLink);

  const searchInput = createElement("input", {
    type: "search",
    placeholder: "Search",
  });

  const searchButton = createElement("button", {
    innerHTML: "Search",
    onclick: function () {
      searchresults();
    },
  });

  const liveTVButton = createElement("button", {
    innerHTML: "Live TV",
  });

  const optionsButton = createElement("button", {
    innerHTML: "Options",
    onclick: function () {
      options();
    },
  });

  topBar.append(logo, searchInput, searchButton, liveTVButton, optionsButton);

  const infoArea = createElement("div", { className: "info-area" });

  const infoTextBox = createElement("div", {
    style:
      "margin: auto; border: 2px solid black; border-radius: 4px; background-color: #D3D3D3; padding: 10px;",
  });

  const infoText = createElement("p", {
    innerHTML:
      "Hello! This is still in a testing phase, and it is impossible to create an account, nor upload. However, you can enjoy the work we are putting into it by exploring the site. Goodbye!",
    style: "text-align: center;",
  });

  infoTextBox.appendChild(infoText);

  // Create the footer dynamically
  const footer = createElement("footer", {
    style:
      "color: #fff; display: flex; align-items: center; justify-content: space-between; padding: 0.025rem; position: fixed; bottom: 0; width: 100%; background-color: #333;",
    innerHTML: "<hr><p>PrizVideo 2023</p>",
  });

  infoArea.append(footer, infoTextBox);

  document.body.append(topBar, infoArea);
});
