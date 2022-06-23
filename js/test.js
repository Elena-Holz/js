
// const firstName = 'Holovina';
// const lastName = 'Elena';
// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// const street = "Zadova";
// const house = '1-G';
// const flat = '10';

// // const adress = `${fullName} ${house} ${flat}`;

// const adress = `Пани ${fullName} живет по адресу ${street} ${house} ${flat}`;
// console.log(adress);

// const ticket = 10;
// const order = `Вы заказали ${ticket} билетов`;
// console.log(order);

// ******
// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// var str = 'Каждый охотник желает знать';
// function stringToarray(str) {

// return str.trim().split(" ")
// };

// var arr = stringToarray(str);
// console.log(arr)
// document.writeln(arr); 

//**** */
//  Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и 
// вставляет тире (-) между словами. 
// При этом все символы строки необходимо перевести в верхний регистр.

// var str = "HTML JavaScript PHP";

// function insert_dash(str) {

// console.log(str.toUpperCase().replaceAll(" ", "-"));

// }


// document.writeln(insert_dash(str));

///*** */
// Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.

// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// function arrayClone(arr) {
// return  arr.slice();

// }

// var arr1 = arrayClone(vegetables);

// document.writeln(arr1);
// console.log(arr1);

// ******
// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. 
// Элементы массива будут разделены запятой. Получите результат двумя разными методами.


var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function stringVed(vegetables) {
return vegetables.toString()
}

function stringVed1(vegetables) {
    return vegetables.join(",")
}
let str1 = stringVed(vegetables);
let str2 = stringVed1(vegetables);
document.writeln(str1); // "Капуста, Репа, Редиска, Морковка"
console.log(str1)
document.writeln(str2); 
console.log(str2)