const lightTheme = "light"
const darkTheme = "dark"

function initializeScripts () {
    /* Skip IE */
    if (isInternetExplorer() === true) {
        return;
    }
    initializeTheme();
    focusLayout();
    setFooter();
    setNavigateArrow();
}

function isInternetExplorer () {
    var agent = navigator.userAgent;
    return (agent.indexOf("MSIE") > -1 || agent.indexOf("Trident") > -1);
}

function initializeTheme () {
    const ls = localStorage.getItem('theme');
    switch(ls) {
        case lightTheme: {
            setTheme(lightTheme);
            break;
        }
        case darkTheme: {
            setTheme(darkTheme);
            break;
        }
        default: {
            setTheme(lightTheme);
            localStorage.setItem('theme', lightTheme);
        };
      }
}

function switchTheme () {
    const ls = localStorage.getItem('theme');
    switch(ls) {
        case lightTheme: {
            setTheme(darkTheme);
            localStorage.setItem('theme', darkTheme);
            break;
        }
        case darkTheme: {
            setTheme(lightTheme);
            localStorage.setItem('theme', lightTheme);
            break;
        }
        default: break;
      }
}

function setTheme (theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.getElementById('theme-switch').innerHTML = theme;
}

function setFooter () {
    document.getElementById('footer-text').innerHTML = "Copyright (c) "+ new Date().getFullYear().toString();
}

function focusLayout () {
    document.getElementById('layout').focus();
}

function setNavigateArrow() {
    const layout = document.getElementById('layout');
    const arrow = document.getElementById('navigate-top');
    const activeClass = "active";
    layout.addEventListener("scroll", () => {
        if(layout.scrollTop >= 100 && !arrow.classList.contains(activeClass)) { 
            arrow.classList.add(activeClass);
        } else if (layout.scrollTop <= 100 && arrow.classList.contains(activeClass)) { 
            arrow.classList.remove(activeClass);
        }
    })
}