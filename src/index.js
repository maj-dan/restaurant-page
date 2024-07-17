import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";
import "./style.css";

(function(){
    document.querySelector("nav").addEventListener("click", switchTab);
    const clickEvent = new Event("click", {
        bubbles: true
    });

    document.querySelector("#home-btn").dispatchEvent(clickEvent);

    function switchTab(event) {
        //ckecking if it's a valid btn, to use one event listener with event bubbling
        if(!(/-btn$/.test(event.target.id))) return;
        //prevent error with not existing div after page load
        if(event.isTrusted) document.querySelector("#content > div").remove();
    
        switch (event.target.id) {
            case "menu-btn":
                renderPage(menuPage());
                highlightBtn("menu-btn");
                break;
            case "home-btn":
                renderPage(homePage());
                highlightBtn("home-btn");
                break;
            case "about-btn":
                renderPage(aboutPage());
                highlightBtn("about-btn");
        }
    }
    
    function renderPage(page) {
        document.querySelector("#content").appendChild(page);
    }

    function highlightBtn(string) {
        document.querySelectorAll("nav > button")
        .forEach(button => {
            if(button.id === string){
                button.classList.add("highlight");
            } else {
                button.classList.remove("highlight");
            }
        });
    }
})();
