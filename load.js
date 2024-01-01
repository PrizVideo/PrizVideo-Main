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

    updateOptionsMenu();
    
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
    style: `text-decoration: none; color: ${isDarkMode ? "#ffffff" : "#000000"};`,
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
      `margin: auto; border: 2px solid black; border-radius: 4px; background-color: ${isDarkMode ? "#1a1a1a" : "#D3D3D3"}; padding: 10px; color: ${isDarkMode ? "#ffffff" : "#000000"};`,
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
        flex-direction: column;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      `,
    });

    setTimeout(() => {
      optionsMenu.style.opacity = "1";
    }, 10);

    const optionsContent = createElement("div", {
      style: `
        background: ${isDarkMode ? "#1a1a1a" : "white"};
        padding: 20px;
        border-radius: 10px;
        color: ${isDarkMode ? "#ffffff" : "#000000"};
        transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
      `,
    });

    const optionsPanelText = createElement("h2", {
      innerHTML: "Options Panel",
      style: "margin-bottom: 20px;",
    });

    const darkModeToggleLabel = createElement("label", {
      innerHTML: "Dark Mode",
      style: "margin-bottom: 10px; display: block;",
    });

    const darkModeSwitch = createElement("input", {
      type: "checkbox",
      id: "darkModeSwitch",
      checked: isDarkMode,
      onchange: function () {
        toggleDarkMode();
      },
    });

    darkModeToggleLabel.appendChild(darkModeSwitch);

    const accountButton = createElement("button", {
      innerHTML: "Account Page",
      onclick: function () {
        // Navigate to account page
      },
    });

    const historyButton = createElement("button", {
      innerHTML: "History Page",
      onclick: function () {
        // Navigate to history page
      },
    });

    const librariesButton = createElement("button", {
      innerHTML: "Libraries Page",
      onclick: function () {
        // Navigate to libraries page
      },
    });

    const exitButton = createElement("button", {
      innerHTML: "Exit",
      onclick: function () {
        optionsMenu.style.opacity = "0";
        setTimeout(() => {
          document.body.removeChild(optionsMenu);
        }, 300);
      },
    });

    optionsContent.append(optionsPanelText, darkModeToggleLabel, accountButton, historyButton, librariesButton, exitButton);

    optionsMenu.appendChild(optionsContent);
    document.body.appendChild(optionsMenu);
  }

  function updateOptionsMenu() {
    const darkModeSwitch = document.querySelector("#darkModeSwitch");
    if (darkModeSwitch) {
      darkModeSwitch.checked = isDarkMode;
    }
  }
});