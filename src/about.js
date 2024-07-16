const INFO = [
    {
        title: "Mission",
        content: "<p>In an time where the needs and desires of the individual must be protected and fulfilled, although the current knowledge about eating habits and it's impacts in the matters of health and life quality says that beeing undisciplined is bad, we aim at serving what one wants!</p>"
    },
    {
        title: "Address",
        content: "<p>The Cholesterol Empire</p><p>Almost The Cofin Street 5432, Yougettingthere</p><p>The Federated States of Sweetness.</p>"
    },
    {
        title: "Contact",
        content: "<p>McLovin Faterson: 5555-5444</p><p>E-mail: eatuntiltheend@realemail.com</p>"
    }
];

export default function about() {
    const about = document.createElement("div");
    about.classList.add("about-content");
    
    for(let section of INFO) {
        const container = document.createElement("div");
        const title = document.createElement("h2");
        const content = document.createElement("div");

        title.textContent = section.title;
        content.innerHTML = section.content;

        container.appendChild(title);
        container.appendChild(content);

        about.appendChild(container);
    }

    return about;
}