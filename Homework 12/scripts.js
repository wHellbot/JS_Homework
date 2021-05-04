// Задание 1:
var names = ['Vasya', 'Vasya', 'Vasya', 'Vasya'];

var nameObj = names.map(function(allName) {
    var newObj = {name: allName};

    return newObj;
});

console.log(nameObj);


// Задание 2:
var arr = ['00', '13', '24'];

var nameObj = arr.reduce(function(x, y) {
    return x + ':' + y;
});

console.log('Текущее время: ' + nameObj);


// Задание 3:
function findV (str) {
    var strArr = str.toLowerCase().split('');
    var vowels = "аеёиоуыэюя";

    var result = strArr.reduce(function (sum, val) {
        if (vowels.indexOf (val) !==-1) {
            sum++;
        }
        return sum;
    }, 0);

    return result;
}
var text = 'Написать функциЮ, которая будет возвращать количество гласных';

console.log(findV(text));


// Задание 4:
function find (str) {
    var strArr = str.split(/[\\!.?]/);

    for (var i in strArr) {
        if (strArr[i].length > 0) {
            console.log(strArr[i].split(" ").join("").split(",").join("").length);
        }
    }

    return strArr;
}

var text = 'Привет, студент! Студент... Как дела, студент?';

console.log(find(text));











