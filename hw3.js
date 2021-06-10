'use strict'

//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
//вариант 1-1

var i = 2;
while (i < 100) {
    var isPrimeNumber = true;
    var j = 2;
    while (j < i) {
        if (i % j == 0) {
            isPrimeNumber = false;
            break
        }
        j++
    }
    if (isPrimeNumber == true) {
        console.log(i);
    }
    i++;
}

//вариант 1-2

var i = 2;
mainCycle: while (i < 100) {
    i++;
    var j = 2;
    while (j < i) {
        if (i % j == 0) continue mainCycle;
        j++
    }
    console.log(i);
}

// 2,3. Товары в корзине хранятся в массиве. Задачи:
//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var priceList = [
    ['mouse', 14.99],
    ['keyboard', 26.50],
    ['usb', 8.99],
    ['phone', 199],
    ['notebook', 500]
];
function countBasketPrice(list) {
    var sum = 0;
    for (var i = 0; i < priceList.length; i++) {
        sum += parseFloat(priceList[i][1]);
    }
    return sum;
}
console.log(
    'Стоимость корзины товаров: $' +
    countBasketPrice(priceList)
);

//4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это
//должно так: for(...){// здесь пусто}

for (var i = 0; i <= 9; console.log(i++)) {

}

//Нарисовать пирамиду с 20 рядами с помощью console.log
// var symbol = prompt('Введите символ: ');
var symbol = '$';
var row = symbol;
for (var i = 0; i < 20; i++) {
    console.log(row);
    row += symbol;
}