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
/*
Nem jöttem rá, hogy ezt mire kéne használnom....
class Car {
    id: number;
    plate: string;
    color: string;
    brand: string;
    year: number;
    capacity: number;
    fuel: string;
    price: number;
    sold: boolean
}*/
fetch(url).then(function (response) { return response.json(); }).then(function (result) {
    console.log(result);
    var list = document.querySelector('#list');
    result.forEach(function (Car) {
        var li = document.createElement('li');
        li.innerHTML = Car.plate;
        li.setAttribute('class', 'list-group-item');
        list.append(li);
    });
});
