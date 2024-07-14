import homeImage from "./burger.jpg";

export default function home(){
    const home = document.createElement("div");
    home.classList.add("home-content");

    const img = new Image();
    img.src = homeImage;
    img.id = "hero-img";

    const text = document.createElement("div");
    text.innerHTML = "<p>There is something magical about food.<br>For some reason, unhealthy food <strong>TASTE BETTER!</strong></p><h2>Thats why <span>The Cholesterol Empire</span> was created!</h2><p>A place for you, who wants to eat without thinking about the consequences!</p><p>Who cares if you don't live to see another day, what's important is to<br><strong>EAT TASTEFULL FOOD!</strong></p>";

    home.appendChild(img);
    home.appendChild(text);

    return home;
}