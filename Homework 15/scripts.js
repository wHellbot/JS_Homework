var x = document.getElementById('x');
var y = document.getElementById('y');
var buttonCreate = document.getElementById('button_create');
buttonCreate.disabled = true;
var body = document.getElementById('body');
var newTable = document.createElement('table');


function inputX() {
    buttonCreate.disabled = true;
    disButton();
}

function inputY() {
    buttonCreate.disabled = true;
    disButton();
}

function disButton() {
    if (x.value.length > 0 && y.value.length > 0 && x.value !== ' ' && y.value !== ' ') {
        buttonCreate.disabled = false;
    }
}

buttonCreate.onclick = function (event) {
    var oldTable = body.lastChild;
    newTable.innerHTML = '<table id="tb"></table>';

    if (oldTable) {
        body.replaceChild(newTable, oldTable);
    } else {
        body.appendChild(newTable);
    }

    if (10 >= y.value > 0 && +y.value > 0 && y.value % 1 === 0 &&
        10 >= x.value > 0 && +x.value > 0 && x.value % 1 === 0) {
        for (var i = 1; i <= y.value; i++) {
            var newTr = document.createElement('tr');
            newTr.innerHTML = '<td></td>';
            newTable.appendChild(newTr);
        }
    } else if (10 <= y.value > 0 || +y.value < 0  || y.value % 1 !== 0) {
        alert('Введите корректное значение в поле Y - целое число от 1 до 10.');
        y.value = '';
        buttonCreate.disabled = true;
    }

    if (10 >= x.value > 0 && +x.value > 0 && x.value % 1 === 0) {
        var allTd = newTable.children;
        for (var k = 0; k < x.value - 1; k++) {
            for (var l = 0; i < y.value; l++) {
                var newTd = document.createElement('td');
                newTd.innerHTML = '<td></td>';
                allTd[l].appendChild(newTd);
            }
        }
    } else {
        alert('Введите корректное значение в поле X - целое число от 1 до 10.');
        x.value = '';
        buttonCreate.disabled = true;
    }

    buttonCreate.disabled = true;

    var fullTable = newTable.children;
    for (var n = 0; n < Array.from(fullTable).length; n++) {
        var fullTd = Array.from(fullTable)[n].children;
        var links_as_arr = Array.from(fullTd);
        if (n % 2 !== 0) {
            for (var m = 0; m < links_as_arr.length; m++) {
                if (m % 2 === 0) {
                    links_as_arr[m].className = 'black';
                }
            }
        } else {
            for (var p = 0; p < links_as_arr.length; p++) {
                if (p % 2 !== 0) {
                    links_as_arr[p].className = 'black';
                }
            }
        }
    }
}

newTable.onclick = function (event) {
    var target = event.target;
    if (target.tagName === 'TD') {
        var eachTd = document.getElementsByTagName('TD');
        for (var i = 0; i < Array.from(eachTd).length; i++) {
            Array.from(eachTd)[i].classList.toggle('black');
        }
    }
}