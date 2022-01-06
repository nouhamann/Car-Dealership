"use strict";
class Car {
    constructor(name, price, color, mileage) {
        this.name = "";
        this.price = 0;
        this.color = "";
        this.mileage = 0;
        this.name = name;
        this.price = price;
        this.color = color;
        this.mileage = mileage;
    }
}


let holder = document.createElement("div");
document.body.appendChild(holder);
holder.classList.add("holder");
let theCars = [];
// theCars.sort(function(a, b){
//     return a.price - b.price
// })
theCars = JSON.parse(localStorage.getItem("cars"));
if (theCars == null) {
    theCars = [];
    theCars.push({ name: "Ford", price: 6000, color: "Blue", mileage: 60000 });
    theCars.push({ name: "Lamborghini", mileage: 1000, color: "White", price: 8000 });
    theCars.push({ name: "Toyota", mileage: 987462, color: "Red", price: 982162 });
    theCars.push({ name: "Audi", price: 15000, color: "Silver", mileage: 45000 });
    theCars.push({ name: "Porsche", price: 25000, color: "Black", mileage: 25000 });
    theCars.push({ name: "Ferrari", price: 125000, color: "Silver", mileage: 35000 });
}
theCars.push(new Car("BMW", 45000, "silver", 24000));
function saveCars() {
    localStorage.setItem("cars", JSON.stringify(theCars));
}
let saveButton = document.getElementById("Save");
saveButton.addEventListener("click", addCar);
renderCars();
function renderCars() {
    holder.innerHTML = "";
    let i = 0;
    while (i < theCars.length) {
        let card = document.createElement("div");
        holder.appendChild(card);
        card.classList.add("card");
        let head = document.createElement("h1");
        card.appendChild(head);
        head.innerHTML = `Brand:${theCars[i].name}`;
        let paragraph = document.createElement("p");
        card.appendChild(paragraph);
        paragraph.innerHTML = `Price:${theCars[i].price}`;
        let paragraph1 = document.createElement("p");
        card.appendChild(paragraph1);
        paragraph1.innerHTML = `Color:${theCars[i].color}`;
        let paragraph2 = document.createElement("p");
        card.appendChild(paragraph2);
        paragraph2.innerHTML = `Mileage: ${theCars[i].mileage}`;
        i++;
    }
}
function addCar() {
    let price = parseInt(document.getElementById("price").value);
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let mileage = parseInt(document.getElementById("mileage").value);
    let car = { name: name, price: price, color: color, mileage: mileage };
    theCars.push(car);
    renderCars();
    saveCars();
}
//# sourceMappingURL=script.js.map