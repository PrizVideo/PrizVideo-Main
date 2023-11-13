document.addEventListener("DOMContentLoaded", function() {
 	// Create the top-bar dynamically
        const topBar = document.createElement("div");
        topBar.className = "top-bar";

        const logo = document.createElement("span");
        logo.className = "logo";
        const logoLink = document.createElement("a");
        logoLink.href = "https://prizvideo.github.io/PrizVideo-Main/";
        logoLink.style.textDecoration = "none"; // Remove underline
        logoLink.style.color = "black"; // Set text color to black
        logoLink.innerHTML = "<b>PrizVideo Beta⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</b>";
        logo.appendChild(logoLink);

        const searchInput = document.createElement("input");
        searchInput.type = "search";
        searchInput.style.width = "250px"; // Reduce width
        searchInput.style.height = "40px"; // Reduce height

        const searchButton = document.createElement("button");
        searchButton.innerHTML = "Search";
        searchButton.style.height = "40px"; // Reduce height
        searchButton.style.marginRight = "10px"; // Increase spacing
        searchButton.onclick = function () {
            searchresults();
        };

        const liveTVButton = document.createElement("button");
        liveTVButton.innerHTML = "Live TV";
        liveTVButton.style.height = "40px"; // Reduce height
        liveTVButton.style.marginRight = "10px"; // Increase spacing
        liveTVButton.style.textAlign = "right";

        const optionsButton = document.createElement("button");
        optionsButton.innerHTML = "Options";
        optionsButton.style.height = "40px"; // Reduce height
        optionsButton.style.textAlign = "right";
        optionsButton.onclick = function () {
            options();
        };
  
        const breakerEmpty = document.createElement("br");

        const breakerLine = document.createElement("hr");

        topBar.appendChild(logo);
        topBar.appendChild(searchInput);
        topBar.appendChild(searchButton);
        topBar.appendChild(liveTVButton);
        topBar.appendChild(optionsButton);
        topBar.appendChild(breakerEmpty);
        topBar.appendChild(breakerLine);
 
        const infoArea = document.createElement("div");
        infoArea.className = "info-area";

        const infoTextBox = document.createElement("div");
        infoTextBox.style.margin = "auto";
        infoTextBox.style.border = "2px solid black";
        infoTextBox.style.borderRadius = "4px";
        infoTextBox.style.backgroundColor = "#D3D3D3";
        const infoText = document.createElement("p");
        infoText.innerHTML = "Hello! This is still in a testing phase, and it is impossible to create an account, nor upload. However, you can enjoy the work we are putting into it by exploring the site. Goodbye!";
        infoText.style.textAlign = "center";
        infoTextBox.appendChild(infoText);

        const footer = document.createElement('footer');
        footer.style.color = '#fff';
        footer.style.display = 'flex';
        footer.style.alignItems = 'center';
        footer.style.justifyContent = 'space-between';
        footer.style.padding = '0.025rem';
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.width = '100%';
        footer.innerHTML = '<hr><p>PrizVideo 2023</p>';

        infoArea.appendChild(footer);
        infoArea.appendChild(infoTextBox);
 
        // Append the top-bar to the body
        document.body.appendChild(topBar);
        document.body.appendChild(infoArea);
});
