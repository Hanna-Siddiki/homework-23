//TASK-1
// let age = prompt('Сколько вам лет?');
// if (age >= 0 && age < 12) {
//     console.log('Вы-ребенок');
// }
// else if (age >= 12 && age < 18) {
//     console.log('Вы подросток');
// }
// else if (age >= 18 && age < 60) {
//     console.log('Вы-взрослый');
// }
// else if (age >= 60) {
//     console.log('Вы пенсионер');
// }

// //TASK-3
// let number = prompt('Введите число от 100 до 999');
// number = number + '';
// if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
//     alert('TRUE');
// }
// else
//     alert('FALSE');

// //TASK-4
// let year = prompt('Введите любой год');
// if (year % 4 == 0 && year % 100 !== 0) {
//     alert('Високосный год');
// }
// else
//     alert('не високосный год');

// //TASK-5
// let number = prompt('Введите число от 10000 до 99999');
// number = number + '';
// if (number === number.split('').reverse().join(''))
//     alert('палиндром');
// else
//     alert('не палиндром');

// //TASK-7
// let amount = prompt('Введите стоимость покупки:');
// if (amount >= 200 && amount < 300)
//     alert(amount / 100 * 97 + '$ с 3% скидкой');
// else if (amount >= 300 && amount < 500)
//     alert(amount / 100 * 95 + '$ с 5% скидкой');
// else if (amount >= 500)
//     alert(amount / 100 * 93 + '$ с 7% скидкой');