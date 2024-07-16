import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";
import "./style.css";

document.querySelector("#content").appendChild(homePage());

(function(){
    document.querySelector("nav").addEventListener("click", switchTab);

    function switchTab(event) {
        //ckecking if it's a valid btn, to use one event listener with event bubbling
        if(!(/-btn$/.test(event.target.id))) return;
    
        document.querySelector("#content > div").remove();
    
        switch (event.target.id) {
            case "menu-btn":
                renderPage(menuPage());
                break;
            case "home-btn":
                renderPage(homePage());
                break;
            case "about-btn":
                renderPage(aboutPage());
        }
    }
    
    function renderPage(page) {
        document.querySelector("#content").appendChild(page);
    }
})();
