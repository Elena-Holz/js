
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


// // const ticket = 10;
// // const order = `Вы заказали ${ticket} билетов`;
// // console.log(order);






// const incomingValue = 5;
//  const defaultValue = 10;
// const value = incomingValue !== null && incomingValue !== undefined ? incomingValue : defaultValue;
//  console.log(value);

// //   * Example 10 - Опертор % и методы строк
// //  * Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.
// //  *
// //  * 70 покажет 01:10
// //  * 450 покажет 07:30
// //  * 1441 покажет 24:01

// // function clock(totalMinutes) {
// //     result = `Number.parseIN(totalMinutes) + ":" = totalMinutes % 60`;
// //     return result;
// // }

// // console.log(clock(70));


// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // For numbers less than the threshold value, continue is triggered, the body execution stops
// // and control is passed to the next iteration.
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Number is greater than ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// function findLongestWord(string) {
//   // Change code below this line

// stringArray = string.split(" ");
// let longestWord = 0;

// for (i = 0; i < springArray.length; i += 1) {
//   if (springArray[i].length > longestWord) {
//     longestWord = springArray[i];
//   }
// }
// return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));

// function findLongestWord(str) {
//   var strSplit = str.split(' ');
//   var longestWord = 0;
//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord){
// 	longestWord = strSplit[i].length;
//      }
//   }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// let arr = [];
//   for (const product of products) {
  
  
//     if (propName in product) {
      
//       arr.push(product.quantity);
//       // return product.name;
//   // arr.push(products.keys[key]);
    
   
//     }
    
// }
//   return arr;
//   // Change code above this line
// }
// console.log(getAllPropValues('name'));

/*task 35-3*/
// const bookShelf = {
 
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   getBooks() {
//     return this.books;
//   },
  
//   updateBook(oldName, newName) {
  
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     // Change code above this line
//   },
// };

// console.log(bookShelf.getBooks());

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf.getBooks());

// const atTheOldToad = {
//   // Change code below this line
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
// getPotions() {
//   return this.potions;
//   },
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
    
//     // Change code above this line
//   },
//   removePotion(potionName) {
//     // Change code below this line

//   const potionIndex = this.potions.indexOf(potionName);
//   this.potions.splice(potionIndex,1);

//     // Change code above this line
//   },
//     updatePotionName(oldName, newName) {
//     // Change code below this line
//     const indexName = this.potions.indexOf(oldName);
//     this.potions.splice(indexName, 1, newName);

//     // Change code above this line
//   },
// };

/*41*/

// const atTheOldToad = {
 
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
    
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1);
       
//       }
//     }

//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions)
//       if (oldName === potion.name) {
//         potion.name = newName;
//       }

//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// atTheOldToad.getPotions();
// console.log(atTheOldToad.getPotions());
// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.removePotion("Dragon breath"));



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


// var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// function stringVed(vegetables) {
// return vegetables.toString()
// }

// function stringVed1(vegetables) {
//     return vegetables.join(",")
// }
// let str1 = stringVed(vegetables);
// let str2 = stringVed1(vegetables);
// document.writeln(str1); // "Капуста, Репа, Редиска, Морковка"
// console.log(str1);
// document.writeln(str2);
// console.log(str2);


/** */
// Пользователь вводит строку кириллицей разного регистра. Напишите функцию, которая принимает строку в качестве аргумента
// и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должен быть массив [кАжДыЙ оХоТнИк].

// const str = prompt('Введите слово', 'КаЖдЫй ОхОтНиК');
// function changeRegister (str) {
// let UPPER = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
// let LOWER = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
// let result = [];
  
//   for(var i=0; i<str.length; i++) {
//     if(UPPER.includes(str[i])) {
//       result.push(str[i].toLowerCase());
//     }
//     else if(LOWER.includes(str[i])) {
//       result.push(str[i].toUpperCase());
//     }
//     else {
//       result.push(str[i]);
//     }
//   }
//   return result.join('');
// };
// document.writeln(changeRegister(str));

/** */
// Удалить повторяющиеся элементы массива
// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся
//  элементы из массива arr(игнорируйте чувствительность к регистру).

// var arr = ["php", "php", "css", "css",
//   "script", "script", "html", "html", "java"
// ];

// function result(arr) {

//     return arr.filter((el, index, array) =>
//        array.indexOf(el) === index);
// };

// console.log(result(arr));
/***** */
  // Високосным годом является каждый четвертый год и века начинаются только на высокостные года,
  // отличие високосного года от обычного заключается в появлении 366 - го дня.Напишите функцию chooseYears(start, end),
  // которая принимает в качестве аргументов диапозон лет и возвращает массив високосных лет в заданном диапазоне.


  function chooseYears(start, end) {
    let arr = [];
    for (let i = start; i <= end; i += 1) {
      arr.push(i);
    }
    return arr.filter((el, array) => el % 4 === 0 || el % 100 === 0);

}

console.log(chooseYears(2000, 2018));

