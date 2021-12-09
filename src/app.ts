/*
* File: app.ts/js
* Author: Szivák Gergő
* Copyright: 2021, Szivák Gergő
* Group: Szoft II N
* Date: 2021-12-09
* Github: https://github.com/Gergosz-2000/usedcars
* Licenc: GNU GPL
*/
var url = 'http://localhost:3000/cars';
import { Car } from './car.js';

var aCars = [];
const list = document.querySelector('#list');

fetch(url).then(response => response.json())
.then(data => {
    addCar(data);
    createList();
});

function addCar(data){
    data.forEach((cars:Car) =>{
        let car = new Car();
        car.id = cars.id;
        car.plate = cars.plate;
        car.color = cars.color;
        car.brand = cars.brand;
        car.year = cars.year;
        car.capacity = cars.capacity;
        car.fuel = cars.fuel;
        car.price = cars.price;
        car.sold = cars.sold;
        aCars.push(car);
        console.log(cars.plate);
    });
}

function createList(){
    aCars.forEach((cars:Car) =>{
        let li = document.createElement('li');
        li.innerHTML = cars.plate;
        li.setAttribute('class', 'list-group-item');
        list.append(li);
    });
}