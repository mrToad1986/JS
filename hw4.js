'use strict'

/* Задание 1
Написать функцию, преобразующую число в объект . Передавая на вход число от 0 до 999,
надо получить на выходе объект , в котором в соответствующих свойствах описаны единицы,
десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
сообщение с помощью console.log и вернуть пустой объект. */

function conversion(number) {
    var digits = {
        units: null,
        decades: null,
        hundreds: null
    }
    if (number < -999 || number > 999) { //отрицательные числа до -999 тоже обрабатываем
        console.log('Вы ввели число вне допустимого диапазона:');
        return digits;
    }
    else {
        console.log('Вы ввели число: ' + number);
        number = Math.abs(parseInt(number));
        var arr = Array.from(String(number)).map(i => Number(i));
        digits.units = arr[2];
        digits.decades = arr[1];
        digits.hundreds = arr[0];
        return digits
    }

}
console.log(conversion(126));
console.log(conversion(-273));
console.log(conversion(1147));

/* Задание 2
2. Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/
function Product(name, price) {
    this.name = name;
    this.price = price
}
var p1 = new Product('mouse', 14.99);
var p2 = new Product('keyboard', 26.50);
var p3 = new Product('usb', 8.99);
var p4 = new Product('phone', 199);
var p5 = new Product('notebook', 500);

var priceList = [p1, p2, p3, p4, p5];

function countBasketPrice(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum += parseFloat(list[i].price);
        //sum += parseFloat(list[i]['price']); - так тоже работает
    }
    return sum;
}
console.log(
    'Стоимость корзины товаров: $' +
    countBasketPrice(priceList)
);

/*3. * Подумать над глобальными сущностями. К примеру , сущность «Продукт» в
интернет-магазине актуальна не только для корзины, но и для каталога. Стремиться нужно к
тому , чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в
разных местах давал возможность вызывать разные методы.*/

function Product(name, price, amount, discount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.discount = discount;
    this.salePrice = function () {
        return this.price = this.price * this.discount
    };
}