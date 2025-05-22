document.addEventListener("DOMContentLoaded", function () {
  function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    for (const key in attributes) {
      if (key === 'style' && typeof attributes[key] === 'object') {
        Object.assign(element.style, attributes[key]);
      } else {
        element[key] = attributes[key];
      }
    }
    return element;
  }

  let isDarkMode = localStorage.getItem("darkMode") === "on" || false;

  const theme = {
    light: {
      background: "#ffffff",
      text: "#000000",
      infoBox: "#f0f0f0",
      menuBackground: "#ffffff"
    },
    dark: {
      background: "#121212",
      text: "#ffffff",
      infoBox: "#1a1a1a",
      menuBackground: "#1a1a1a"
    }
  };

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    applyTheme();
    localStorage.setItem("darkMode", isDarkMode ? "on" : "off");
  }

  function applyTheme() {
    const currentTheme = isDarkMode ? theme.dark : theme.light;
    document.body.style.backgroundColor = currentTheme.background;
    document.body.style.color = currentTheme.text;
    
    const logoLink = document.querySelector('.logo a');
    if (logoLink) {
      logoLink.style.color = currentTheme.text;
    }

    const infoTextBox = document.querySelector('.info-box');
    if (infoTextBox) {
      infoTextBox.style.backgroundColor = currentTheme.infoBox;
      infoTextBox.style.color = currentTheme.text;
    }

    updateOptionsMenu();
  }

  const topBar = createElement("div", { 
    className: "top-bar",
    style: {
      display: "flex",
      alignItems: "center",
      padding: "10px",
      gap: "10px",
      backgroundColor: "#333"
    }
  });

  const logo = createElement("div", { className: "logo" });
  const logoLink = createElement("a", {
    href: "https://prizvideo.github.io/PrizVideo-Main/",
    style: {
      textDecoration: "none",
      color: "#ffffff",
      fontWeight: "bold"
    },
    innerHTML: "PrizVideo Beta"
  });
  logo.appendChild(logoLink);

  const searchContainer = createElement("div", {
    style: {
      display: "flex",
      gap: "5px",
      flex: "1"
    }
  });

  const searchInput = createElement("input", {
    type: "search",
    placeholder: "Search",
    style: {
      padding: "5px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      flex: "1"
    }
  });

  const searchButton = createElement("button", {
    innerHTML: "Search",
    onclick: function () {
      if (typeof searchresults === 'function') {
        searchresults();
      } else {
        console.warn('Search function not defined');
      }
    },
    style: {
      padding: "5px 10px",
      borderRadius: "4px",
      cursor: "pointer"
    }
  });

  searchContainer.append(searchInput, searchButton);

  const buttonContainer = createElement("div", {
    style: {
      display: "flex",
      gap: "5px"
    }
  });

  const liveTVButton = createElement("button", {
    innerHTML: "Live TV",
    style: {
      padding: "5px 10px",
      borderRadius: "4px",
      cursor: "pointer"
    }
  });

  const optionsButton = createElement("button", {
    innerHTML: "Options",
    onclick: showOptions,
    style: {
      padding: "5px 10px",
      borderRadius: "4px",
      cursor: "pointer"
    }
  });

  buttonContainer.append(liveTVButton, optionsButton);
  topBar.append(logo, searchContainer, buttonContainer);

  const infoArea = createElement("div", { 
    className: "info-area",
    style: {
      margin: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }
  });

  const infoTextBox = createElement("div", {
    className: "info-box",
    style: {
      margin: "auto 10px",
      border: "2px solid black",
      borderRadius: "4px",
      padding: "20px",
      textAlign: "center"
    }
  });

  const footer = createElement("footer", {
    style: {
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px",
      position: "fixed",
      bottom: "0",
      width: "100%",
      backgroundColor: "#333",
      zIndex: "1000"
    },
    innerHTML: "<p>© Copyright PrizVideo 2024</p>"
  });

  infoArea.append(infoTextBox, footer);
  document.body.append(topBar, infoArea);

  function showOptions() {
    const existingMenu = document.querySelector('.options-menu');
    if (existingMenu) {
      existingMenu.remove();
      return;
    }

    const optionsMenu = createElement("div", {
      className: "options-menu",
      style: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "2000",
        opacity: "0",
        transition: "opacity 0.3s ease-in-out"
      }
    });

    const optionsContent = createElement("div", {
      className: "options-content",
      style: {
        background: isDarkMode ? theme.dark.menuBackground : theme.light.menuBackground,
        padding: "30px",
        borderRadius: "10px",
        color: isDarkMode ? theme.dark.text : theme.light.text,
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        minWidth: "300px"
      }
    });

    const optionsPanelText = createElement("h2", {
      innerHTML: "Options Panel",
      style: {
        marginBottom: "20px",
        textAlign: "center"
      }
    });

    const darkModeContainer = createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }
    });

    const darkModeToggleLabel = createElement("label", {
      innerHTML: "Dark Mode",
      style: {
        cursor: "pointer"
      }
    });

    const darkModeSwitch = createElement("input", {
      type: "checkbox",
      id: "darkModeSwitch",
      checked: isDarkMode,
      onchange: toggleDarkMode,
      style: {
        cursor: "pointer"
      }
    });

    darkModeContainer.append(darkModeToggleLabel, darkModeSwitch);

    const navigationButtons = [
      { text: "Account", action: () => console.log("Navigate to account") },
      { text: "History", action: () => console.log("Navigate to history") },
      { text: "Libraries", action: () => console.log("Navigate to libraries") }
    ].map(({ text, action }) => 
      createElement("button", {
        innerHTML: text,
        onclick: action,
        style: {
          padding: "8px",
          borderRadius: "4px",
          cursor: "pointer",
          width: "100%"
        }
      })
    );

    const exitButton = createElement("button", {
      innerHTML: "Exit",
      onclick: () => {
        optionsMenu.style.opacity = "0";
        setTimeout(() => optionsMenu.remove(), 300);
      },
      style: {
        padding: "8px",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "10px",
        backgroundColor: "#ff4444",
        color: "white",
        border: "none"
      }
    });

    optionsContent.append(
      optionsPanelText,
      darkModeContainer,
      ...navigationButtons,
      exitButton
    );

    optionsMenu.appendChild(optionsContent);
    document.body.appendChild(optionsMenu);
    
    setTimeout(() => {
      optionsMenu.style.opacity = "1";
    }, 10);
  }

  function updateConnectionStatus() {
    const message = navigator.onLine
      ? "Uh oh—that page doesn't exist. Either go back to the home page or try again later."
      : "Uh oh—that page doesn't exist. Either go back to the home page or try again later.";
    
    if (infoTextBox) {
      infoTextBox.innerHTML = message;
    }
  }

  window.addEventListener('load', updateConnectionStatus);
  window.addEventListener('online', updateConnectionStatus);
  window.addEventListener('offline', updateConnectionStatus);

  function updateOptionsMenu() {
    const darkModeSwitch = document.querySelector("#darkModeSwitch");
    if (darkModeSwitch) {
      darkModeSwitch.checked = isDarkMode;
    }

    const optionsContent = document.querySelector(".options-content");
    if (optionsContent) {
      optionsContent.style.background = isDarkMode ? theme.dark.menuBackground : theme.light.menuBackground;
      optionsContent.style.color = isDarkMode ? theme.dark.text : theme.light.text;
    }
  }

  applyTheme();
});