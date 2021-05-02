// Задание 1
function filterNumbersArr(numbers) {
    var newArr = numbers.filter(function(number) {
        return number > 0;
    });
    console.log(newArr);
}

filterNumbersArr([-1, 0, 2, 34, -2]);


// Задание 2
function filterNumbersArr(numbers) {
    var newArr = numbers.filter(function(number) {
        return number > 0;
    });

    return console.log(newArr[0]);
}

filterNumbersArr([-1, 0, 2, 34, -2]);

// Задание 3:
function isPalindrome(str) {
    var strReverse = str.toLowerCase().split('').reverse().join('');
    if (strReverse === str.toLowerCase()) {
        return console.log('yes');
    } else {
        return console.log('no');
    }
}

isPalindrome('шалаШ');
isPalindrome('привет');


// Задание 4:
function areAnagrams(word1, word2){
    return word1.toLowerCase().split("").sort().join("") === word2.toLowerCase().split("").sort().join("");
}

console.log(areAnagrams('кот', 'оТк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));


// Задание 5:
function divideArr (array , newLength) {
    var newArray = [];

    for (let i = 0; i <array.length; i += newLength) {
        newArray.push(array.slice(i, i + newLength));
    }

    return console.log(newArray);
}

divideArr([1, 2, 3, 4], 2);
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3);