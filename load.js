document.addEventListener("DOMContentLoaded", function () {
  function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    for (const key in attributes) {
      element[key] = attributes[key];
    }
    return element;
  }

  let isDarkMode = false;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    
    document.body.style.backgroundColor = isDarkMode ? "#1a1a1a" : "#ffffff";
    document.body.style.color = isDarkMode ? "#ffffff" : "#000000";

    localStorage.setItem("darkMode", isDarkMode ? "on" : "off");
  }

  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode) {
    isDarkMode = savedDarkMode === "on";
    toggleDarkMode();
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
      showOptions();
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

  const footer = createElement("footer", {
    style:
      "color: #fff; display: flex; align-items: center; justify-content: space-between; padding: 0.025rem; position: fixed; bottom: 0; width: 100%; background-color: #333;",
    innerHTML: "<hr><p>PrizVideo 2023</p>",
  });

  infoArea.append(footer, infoTextBox);

  document.body.append(topBar, infoArea);

  function showOptions() {
    const optionsMenu = createElement("div", {
      style: `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
      `,
    });

    const optionsContent = createElement("div", {
      style: `
        background: white;
        padding: 20px;
        border-radius: 10px;
      `,
    });

    const accountButton = createElement("button", {
      innerHTML: "Account Page",
      onclick: function () {
      },
    });

    const historyButton = createElement("button", {
      innerHTML: "History Page",
      onclick: function () {
      },
    });

    const librariesButton = createElement("button", {
      innerHTML: "Libraries Page",
      onclick: function () {
      },
    });

    const darkModeToggle = createElement("label", {
      innerHTML: "Dark Mode",
      style: "margin-top: 10px; display: block;",
    });

    const darkModeSwitch = createElement("input", {
      type: "checkbox",
      checked: isDarkMode,
      onchange: function () {
        toggleDarkMode();
      },
    });

    darkModeToggle.appendChild(darkModeSwitch);

    optionsContent.append(accountButton, historyButton, librariesButton, darkModeToggle);

    optionsMenu.appendChild(optionsContent);
    document.body.appendChild(optionsMenu);
  }
});
