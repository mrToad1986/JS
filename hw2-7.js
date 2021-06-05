'use strict'

/*
6. Сравнить null и 0. Объяснить результат.
0, null undefined, “” и NaN будут
транслированы в false, остальные значения — в true.
*/

console.log(null == 0); //false

/*8.С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
power(val, pow), где val — заданное число, pow –— степень.
*/
function power(val, pow) {
    if (pow > 1) {
        return val * power(val, (pow - 1));
    }
    else {
        return val;
    }
}
console.log(power(3, 3));
console.log(power(2, 8));