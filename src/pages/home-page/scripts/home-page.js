/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

document.getElementById("changeCursor").style.cursor = "pointer";
document.getElementById("cancel").style.cursor = "pointer";

const button = document.getElementById("proceed-btn");

button.addEventListener("click", function () {
    button.innerHTML = "...";
    button.disabled = true;


    const intervalId = setInterval(function() {
        button.innerHTML += ".";

    },500);

    setTimeout(function() {
        clearInterval(intervalId);
        button.innerHTML = "Complete";
        button.disabled = true;

    }, 5000);
});
