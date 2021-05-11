var tableAll = document.getElementById('all_table');
var tableTbody = document.getElementById('tbody_table');
var ButtonAddRow = tableAll.lastElementChild;

ButtonAddRow.onclick = function(event) {
    var target = event.target;
        if (target.tagName === 'TD') {
            add_row();
        }
}

function add_row() {
    var parentElement = document.getElementById('tbody_table');
    var theFirstChild = parentElement.firstChild;
    var newTr = document.createElement('tr');
    newTr.innerHTML =
        '<td class="all_td"></td>' +
        '<td class="all_td"></td>' +
        '<td class="all_td"></td>';
    parentElement.insertBefore(newTr, theFirstChild);
}

tableTbody.onclick = function (event) {
    var target = event.target;
    if (target.tagName === 'TD') {
        var textPre = target.textContent;
        addInput(target);
        var input = target.getElementsByTagName('input');
        input.value = textPre;

// и тут я в конец запутался)
        target.onblur = function() {
            var inputValue = input.value;
            target.textContent = inputValue;
        };
    }
}


function addInput(node) {
    var newInput = document.createElement('p');
    newInput.innerHTML ='<input  type="text" autofocus>';
    node.appendChild(newInput);
}


