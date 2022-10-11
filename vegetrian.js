const dishes = [{
    name: "Eggplant Parmesan",
    vegetarian: true,
}, {
    name: "Spaghetti",
    vegetarian: false,
}];


const vege = dishes.filter(dish => dish.vegetarian == true);
console.log(vege);