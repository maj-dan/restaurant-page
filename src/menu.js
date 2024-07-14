import burger from "./imgs/burger.jpg";
import fries from "./imgs/fries.jpg";
import pizza from "./imgs/pizza.jpg";
import iceCream from "./imgs/icecream.jpg";

const foods = [
    {
        name: "Burger",
        img: burger,
        text: "The sweet combinations of carbs, fats and protein! It's like heaven in an bun!"
    },
    {
        name: "Fries",
        img: fries,
        text: "From an boring potato to one of the most loved foods in the world! That's the power of deep frying!"
    },
    {
        name: "Pizza",
        img: pizza,
        text: "The italian classic that lives in our hearts (and arteries, literally)! It's simply irresistible!"
    },
    {
        name: "Ice Cream",
        img: iceCream,
        text: "The mix of fats and sugar that it's simply delicious! Everybody loves its texture and iciness!"
    }
];

export default function menu(){
    const menu = document.createElement("div");

    for (let food of foods){
        const foodCard = document.createElement("div");
        const foodName = document.createElement("h2");
        const foodImg = document.createElement("img");
        const foodText = document.createElement("p");

        foodName.textContent = food.name;
        foodImg.alt = food.name;
        foodImg.src = food.img;
        foodText.textContent = food.text;

        foodCard.appendChild(foodName);
        foodCard.appendChild(foodImg);
        foodCard.appendChild(foodText);

        menu.appendChild(foodCard);
    }

    return menu;
};