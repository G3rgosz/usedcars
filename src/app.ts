/*
* File: app.ts/js
* Author: Szivák Gergő
* Copyright: 2021, Szivák Gergő
* Group: Szoft II N
* Date: 2021-12-04
* Github: https://github.com/Gergosz-2000/usedcars
* Licenc: GNU GPL
*/
var url = 'http://localhost:3000/cars';

class Car {
    id: number;
    plate: string;
    color: string;
    brand: string;
    year: number;
    capacity: number;
    fuel: string;
    price: number;
    sold: boolean;
}

let car = new Car();
let list = document.querySelector('#list');

fetch(url).then(response => response.json()).then(result => {
    result.forEach(cars => {
        addCar(cars);
        createList();
    });
});

function addCar(cars){
    car.id = cars.id;
    car.plate = cars.plate;
    car.color = cars.color;
    car.brand = cars.brand;
    car.year = cars.year;
    car.capacity = cars.capacity;
    car.fuel = cars.fuel;
    car.price = cars.price;
    car.sold = cars.sold;
}
function createList(){
    let li = document.createElement('li');
    li.innerHTML = car.plate;
    li.setAttribute('class', 'list-group-item');
    list.append(li);
}