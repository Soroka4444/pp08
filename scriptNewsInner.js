//Для запуска анимации ПОСЛЕ скролла. Стр одной новости
let htmlNewsInner = document.querySelector("#htmlNewsInner");

let approachOne = document.querySelector(".approachOne");
let approachTwo = document.querySelector(".approachTwo");
let approachThree = document.querySelector(".approachThree");
let approachFour = document.querySelector(".approachFour");


window.addEventListener("scroll", (event) => {
    let hjn = htmlNewsInner.scrollTop;
    if (hjn>120) {
        approachOne.classList.add('approachRightAnimation');
        approachTwo.classList.add('approachLeftAnimation');
        approachThree.classList.add('approachRightAnimation');
        approachFour.classList.add('approachLeftAnimation');
    }
});