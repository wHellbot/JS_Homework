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
        '<td></td>' +
        '<td></td>' +
        '<td></td>';
    parentElement.insertBefore(newTr, theFirstChild);
}

tableTbody.onclick = function (event) {
    var target = event.target;
    if (target.tagName === 'TD' || target.tagName === 'P') {
        var newInput = document.createElement('input');
        var textPre = target.textContent;

        newInput.innerHTML ='<input id="myInp"  type="text">';

        newInput.value = textPre;

        newInput.onblur = function(){
            var val =  newInput.value;

            target.removeChild(newInput);

            var aldInput = document.createElement('p');
            aldInput.innerHTML ='<p class="text"></p>';
            aldInput.textContent = val;

            target.appendChild(aldInput);
        }

        if (textPre) {
            var spanS = target.firstChild;

            target.replaceChild(newInput, spanS);
            newInput.focus();
        } else {
            target.appendChild(newInput);
            newInput.focus();
        }
    }
}



