document.addEventListener("DOMContentLoaded", function() {
 	// Create the top-bar dynamically
        const topBar = document.createElement("div");
        topBar.className = "top-bar";

        const logo = document.createElement("span");
        logo.className = "logo";
        const logoLink = document.createElement("a");
        logoLink.href = "index.html";
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

        const optionsButton = document.createElement("button");
        optionsButton.innerHTML = "Options";
        optionsButton.style.height = "40px"; // Reduce height
        optionsButton.onclick = function () {
            options();
        };

        topBar.appendChild(logo);
        topBar.appendChild(searchInput);
        topBar.appendChild(searchButton);
        topBar.appendChild(liveTVButton);
        topBar.appendChild(optionsButton);

        // Append the top-bar to the body
        document.body.appendChild(topBar);
});
