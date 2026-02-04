var allElem = document.querySelectorAll('button');

allElem.forEach(function (elem) {
    elem.addEventListener("click", function () {
        if (elem.innerHTML === 'Add Friend') {
            elem.innerHTML = 'Remove';
        } else {
            elem.innerHTML = 'Add Friend';
        }
    });
});
