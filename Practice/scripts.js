var container = document.getElementById('container'),
    button = document.getElementsByTagName('button')[0];

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="https://www.google.com/">Link 3</a> and <a href="https://www.facebook.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

function loadPage() {
    localStorage.clear();
}

button.addEventListener('click', foo, false);

function foo() {
    var allChildren = firstPar.children;
    for (var i = 0; i < allChildren.length; i++) {
        allChildren[i].className='links';
    }
    localStorage.clear();
}

secondPar.onclick = function(event) {
    var target = event.target;
    if (target.tagName === 'A') {
        if (localStorage.length === 0 || localStorage.key(target.innerText) !== target.innerText) {
            localStorage.setItem(target.innerText, JSON.stringify({ path: target.href }));
            alert('Сохранили информацию об этой ссылке в LS');
            target.href = '#';
        } else if (localStorage.key(target.innerText) === target.innerText) {
            alert (JSON.parse(localStorage.getItem(target.innerText)).path);
        }
        return false;
    }
}


// Первое решение
// secondPar.onclick = function(event) {
//     var target = event.target;
//     if (target.tagName === 'A') {
//         alert(target);
//         return false;
//     }
// }




