getThemeSettings();

function getThemeSettings() {
    var config = window.localStorage.getItem('theme');
    var theme = document.getElementById('theme');
    
    if (config == 'light') {
        console.log("Loaded from storage: Light");
        theme.setAttribute('href', '/style/light.css');
    }
    else if (config == 'dark') {
        console.log("Loaded from storage: Dark");
        theme.setAttribute('href', '/style/dark.css');
    }
    else {
        console.log("No theme saved - Using default (dark)");
    }
}

function toggleTheme() {
    
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.

    var theme = document.getElementById("theme");

    // Change the value of href attribute 
    // to change the css sheet.
    
    if (theme.getAttribute('href') == '/style/light.css') {
        theme.setAttribute('href', '/style/dark.css');
        window.localStorage.setItem('theme', 'dark');
        console.log("Set theme: Dark");
    } 
    else {
        theme.setAttribute('href', '/style/light.css');
        window.localStorage.setItem('theme', 'light');
        console.log("Set theme: Light");
    }
}

