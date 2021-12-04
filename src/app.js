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
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
var list = document.querySelector('#list');
fetch(url).then(function (response) { return response.json(); }).then(function (result) {
    result.forEach(function (cars) {
        addCar(cars);
        createList();
    });
});
function addCar(cars) {
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
function createList() {
    var li = document.createElement('li');
    li.innerHTML = car.plate;
    li.setAttribute('class', 'list-group-item');
    list.append(li);
}
