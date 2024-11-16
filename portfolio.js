var running = true;

var darkMode = true;

function toggleMode() {
    if (darkMode) {
        document.body.style.background = "#e5e5e5";
        document.getElementById("logo").style.background = "#121212";
        document.getElementById("logo").style.color = "#e5e5e5";
        document.getElementById("header").style.background = "white";
        document.getElementById("header").style.borderBottomColor = "#121212";
        document.getElementById("headshot").style.boxShadow = "0px 0px 6px #121212";
        document.getElementById("intro").style.color = "#121212";
        document.getElementById("aboutMe").style.color = "#121212";
        document.getElementById("description").style.background = "white";
        document.getElementById("description").style.boxShadow = "0px 0px 6px #121212";
        document.getElementById("mySkills").style.color = "#121212";
        document.getElementById("myProjects").style.color = "#121212";
        document.getElementById("computerProjects").style.color = "#121212";
        document.getElementById("computerProjects").style.boxShadow = "0px 0px 6px #121212";
        document.getElementById("myActivities").style.color = "#121212";
        document.getElementById("mode").style.background = "white";
        document.getElementById("mode").style.boxShadow = "0px 0px 1px #121212";
        document.getElementById("activityBorder").style.boxShadow = "0px 0px 6px #121212";
        document.getElementById("resume").style.boxShadow = "0px 0px 6px #121212";
        document.getElementById("resume").style.background = "white";
        document.getElementById("resume").style.color = "#121212";
        document.getElementById("modeSymbol").src = "Logos/light-mode.png";
        document.getElementById("linkedIn").src = "Logos/linkedin-black.png";
        document.getElementById("email").src = "Logos/email-black.png";
        document.getElementById("github").src = "Logos/github-black.png";
        var cards = document.getElementsByClassName("card");
        for (i = 0; i < cards.length; i++) {
            cards[i].style.background = "white";
        }
        var headers = document.getElementsByClassName("nav");
        for (i = 0; i < headers.length; i++) {
            headers[i].style.color = "black";
        }
        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = ".title::after {background-color: #e5e5e5;}";
        darkMode = false;
    }
    else {
        document.body.style.background = "#242424";
        document.getElementById("logo").style.background = "white";
        document.getElementById("logo").style.color = "#121212";
        document.getElementById("header").style.background = "#121212";
        document.getElementById("header").style.borderBottomColor = "#e5e5e5";
        document.getElementById("headshot").style.boxShadow = "0px 0px 6px #e5e5e5";
        document.getElementById("intro").style.color = "#e5e5e5";
        document.getElementById("aboutMe").style.color = "#e5e5e5";
        document.getElementById("description").style.background = "#121212";
        document.getElementById("description").style.boxShadow = "0px 0px 6px #e5e5e5";
        document.getElementById("mySkills").style.color = "#e5e5e5";
        document.getElementById("myProjects").style.color = "#e5e5e5";
        document.getElementById("computerProjects").style.color = "#e5e5e5";
        document.getElementById("computerProjects").style.boxShadow = "0px 0px 6px #e5e5e5";
        document.getElementById("myActivities").style.color = "#e5e5e5";
        document.getElementById("mode").style.background = "#121212";
        document.getElementById("mode").style.boxShadow = "0px 0px 1px #e5e5e5";
        document.getElementById("activityBorder").style.boxShadow = "0px 0px 6px #e5e5e5";
        document.getElementById("resume").style.boxShadow = "0px 0px 6px #e5e5e5";
        document.getElementById("resume").style.background = "#121212";
        document.getElementById("resume").style.color = "#e5e5e5";
        document.getElementById("modeSymbol").src = "Logos/dark-mode.png";
        document.getElementById("linkedIn").src = "Logos/linkedin-white.png";
        document.getElementById("email").src = "Logos/email-white.png";
        document.getElementById("github").src = "Logos/github-white.png";
        var headers = document.getElementsByClassName("nav");
        for (i = 0; i < headers.length; i++) {
            headers[i].style.color = "white";
        }
        var cards = document.getElementsByClassName("card");
        for (i = 0; i < cards.length; i++) {
            cards[i].style.background = "#121212";
        }
        var styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = ".title::after {background-color: #242424;}";
        darkMode = true
    }
}

function mouseOver()
{
    var resumeButton = document.getElementById("resume");
    resumeButton.style.boxShadow = "0px 0px 0px";
    resumeButton.style.scale = "0.97";
}

function mouseLeave()
{
    var resumeButton = document.getElementById("resume");
    resumeButton.style.scale = "1";
    if (darkMode)
    {
        resumeButton.style.boxShadow = "0px 0px 6px #e5e5e5";
    }
    else
    {
        resumeButton.style.boxShadow = "0px 0px 6px #121212";
    }
}