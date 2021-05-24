var button = document.getElementById('button_create');
var containerUsers;
var allUsers;
var eachUser;
var eachContent;
var userAva;
var userName;
var userLastName;

(function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();

    xhr.onload = function() {
        var statusType = Math.round(this.status / 100);
        allUsers = (statusType === 2) ? JSON.parse(this.response).data : this.status;
    };

    xhr.onerror = function() {
        console.error(this.status);
        var container = document.getElementById('container');
        var errorOnConteiner = document.createElement('div');
        errorOnConteiner.innerHTML ='<div id="content_error">An ERROR occurend while load data...</div>';
        container.appendChild(errorOnConteiner);
    };

    xhr.onloadend = function() {
        console.log('Запрос завершен');
    };
})();

button.onclick = function(event) {
    var target = event.target;
    if (!containerUsers) {
        var content = document.createElement('div');
        content.innerHTML ='<div id="content">' +
            '<div id="containerItems"></div>' +
            '<div id="containerUsers"></div>' +
            '</div>';
        container.appendChild(content);
        containerItems = document.getElementById('containerItems');
        containerUsers = document.getElementById('containerUsers');
        for (var n = 0; n < Array.from(allUsers).length; n++) {
            eachUser = document.createElement('button');
            eachUser.innerHTML ='<button></button>';
            containerItems.appendChild(eachUser);

            var nameFunc = ('setAttributeTages' + n) + '(event)';
            containerItems.children[n].setAttribute("onclick", nameFunc.toString());
            eachUser.innerText = 'User ' + (n+1);
        }

        containerItems.firstChild.style.backgroundColor = 'white';
        containerItems.children[0].focus();

        for (var m = 1; m < Array.from(containerItems.children).length; m++) {
            containerItems.children[m].className = 'unFocus';
        }

        for (var b = 0; b < Array.from(containerItems.children).length; b++) {
            eachContent = document.createElement('div');
            eachContent.innerHTML ='<div class="eachContent"><img class="images"></div>';
            containerUsers.appendChild(eachContent);

            userAva = document.getElementsByTagName('img')[b];
            userAva.setAttribute('src', allUsers[b].avatar.toString())

            var eachContentDiv = document.getElementsByClassName('eachContent')[b];
            userName = document.createElement('i');
            userName.innerHTML ='<i class="userName"></i>';
            userName.textContent = 'First Name : ' + allUsers[b].first_name.toString();
            eachContentDiv.appendChild(userName);

            userLastName = document.createElement('i');
            userLastName.innerHTML ='<i class="userLastName"></i>';
            userLastName.textContent = 'Last Name : ' + allUsers[b].last_name.toString();
            eachContentDiv.appendChild(userLastName);
        }

        var eachContentDivAll = document.getElementsByClassName('eachContent');
        for (var m = 1; m < Array.prototype.slice.call(eachContentDivAll).length; m++) {
            Array.prototype.slice.call(eachContentDivAll)[m].className = 'eachContent ondisplay';
        }
    }
}

function setAttributeTages0(event) {
    var eachContentDivAll = document.getElementsByClassName('eachContent');
    var eachContentDivAllList = Array.prototype.slice.call(eachContentDivAll);

    for (var m = 1; m < eachContentDivAllList.length; m++) {
        if (m !== 0) {
            eachContentDivAllList[m].className = 'eachContent ondisplay';
        } else {
            eachContentDivAllList[m].className = 'eachContent';
        }
    }
    eachContentDivAllList[0].className = 'eachContent';

    for (var i = 0; i < containerItems.children.length; i++) {
        if (i !==0) {
            containerItems.children[i].style.backgroundColor = 'greenyellow';
        }else {
            containerItems.children[i].style.backgroundColor = 'white';
        }
    }
}

function setAttributeTages1(event) {
    var eachContentDivAll = document.getElementsByClassName('eachContent');
    var eachContentDivAllList = Array.prototype.slice.call(eachContentDivAll);

    for (var m = 0; m < eachContentDivAllList.length; m++) {
        if (m !== 1) {
            eachContentDivAllList[m].className = 'eachContent ondisplay';
        } else {
            eachContentDivAllList[m].className = 'eachContent';
        }
    }

    for (var i = 0; i < containerItems.children.length; i++) {
        if (i !== 1) {
            containerItems.children[i].style.backgroundColor = 'greenyellow';
        } else {
            containerItems.children[i].style.backgroundColor = 'white';
        }
    }
}

function setAttributeTages2(event) {
    var eachContentDivAll = document.getElementsByClassName('eachContent');
    var eachContentDivAllList = Array.prototype.slice.call(eachContentDivAll);

    for (var m = 0; m < eachContentDivAllList.length; m++) {
        if (m !== 2) {
            eachContentDivAllList[m].className = 'eachContent ondisplay';
        } else {
            eachContentDivAllList[m].className = 'eachContent';
        }
    }

    for (var i = 0; i < containerItems.children.length; i++) {
        if (i !== 2) {
            containerItems.children[i].style.backgroundColor = 'greenyellow';
        } else {
            containerItems.children[i].style.backgroundColor = 'white';
        }
    }
}

function setAttributeTages3(event) {
    var eachContentDivAll = document.getElementsByClassName('eachContent');
    var eachContentDivAllList = Array.prototype.slice.call(eachContentDivAll);

    for (var m = 0; m < eachContentDivAllList.length; m++) {
        if (m !== 3) {
            eachContentDivAllList[m].className = 'eachContent ondisplay';
        } else {
            eachContentDivAllList[m].className = 'eachContent';
        }
    }

    for (var i = 0; i < containerItems.children.length; i++) {
        if (i !== 3) {
            containerItems.children[i].style.backgroundColor = 'greenyellow';
        } else {
            containerItems.children[i].style.backgroundColor = 'white';
        }
    }
}

function setAttributeTages4(event) {
    var eachContentDivAll = document.getElementsByClassName('eachContent');
    var eachContentDivAllList = Array.prototype.slice.call(eachContentDivAll);

    for (var m = 0; m < eachContentDivAllList.length; m++) {
        if (m !== 4) {
            eachContentDivAllList[m].className = 'eachContent ondisplay';
        } else {
            eachContentDivAllList[m].className = 'eachContent';
        }
    }

    for (var i = 0; i < containerItems.children.length; i++) {
        if (i !== 4) {
            containerItems.children[i].style.backgroundColor = 'greenyellow';
        } else {
            containerItems.children[i].style.backgroundColor = 'white';
        }
    }
}

function setAttributeTages5(event) {
    var eachContentDivAll = document.getElementsByClassName('eachContent');
    var eachContentDivAllList = Array.prototype.slice.call(eachContentDivAll);

    for (var m = 0; m < eachContentDivAllList.length; m++) {
        if (m !== 5) {
            eachContentDivAllList[m].className = 'eachContent ondisplay';
        } else {
            eachContentDivAllList[m].className = 'eachContent';
        }
    }

    for (var i = 0; i < containerItems.children.length; i++) {
        if (i !== 5) {
            containerItems.children[i].style.backgroundColor = 'greenyellow';
        } else {
            containerItems.children[i].style.backgroundColor = 'white';
        }
    }
}
