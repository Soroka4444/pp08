
let header = document.querySelector("header");
let linkOpenffice = document.querySelector("#linkOpenffice");//ссылка на ЛК для адаптива
let navigation = document.querySelector("#navigation");//навигация
let imgAccount = document.querySelector("#imgAccount");//фото с ссылкой на ЛК для ПК версии
let burger = document.querySelector("#burger");//кнопка открытия навигации в адаптиве
let clozeNav = document.querySelector("#clozeNav");//кнопка закрытия навигации в адаптиве

function openNav() {
    navigation.style.display = "flex";
    burger.style.display = "none";
    linkOpenffice.style.display = "block";
    header.style.alignItems = "baseline";
    clozeNav.style.display = "block";
}
    
function clozedNav() {
    if (pageWidth<=990) {
        navigation.style.display = "none";
        burger.style.display = "flex";
    }
    linkOpenffice.style.display = "none";
    clozeNav.style.display = "none";
    header.style.alignItems = "center";
}


let slayder = document.querySelector(".blockForSlider") ; //слайдер в баннере
let backButton = document.querySelector("#backButton");//кнопка назад
let nextButton = document.querySelector("#nextButton");//кнопка вперёд

let circleZero = document.querySelector("#circleZero"); //для индикаторов
let circleOne = document.querySelector("#circleOne");
let circleTwo = document.querySelector("#circleTwo");
let circleThree = document.querySelector("#circleThree");

//массив для слайдера в баннере
let arrSlayder = new Array();
arrSlayder = ["./images/photo_main_slider.png", "./images/photo_hand2hand.png", "./images/photo_russel_hugs.png", "./images/photo_command.png"];

let numSlide = 0;

//функция перелистывания слайдера вперед
function flippingNext() {
    if (numSlide<3) {
        numSlide++;
    }else{
        numSlide = 0;
    }
    for (let i = 0; i < arrSlayder.length; i++) {
        if (numSlide == i) {
            slayder.style.backgroundImage = "url(" + arrSlayder[i] + ")";   
            if(i == 0){
                circleZero.classList.add('indicatorBlue');
                circleZero.classList.remove('indicatorWhite');
            } else{
                circleZero.classList.add('indicatorWhite');
                circleZero.classList.remove('indicatorBlue');
            }
            if(i == 1){
                circleOne.classList.add('indicatorBlue');
                circleOne.classList.remove('indicatorWhite');
            } else{
                circleOne.classList.add('indicatorWhite');
                circleOne.classList.remove('indicatorBlue');
            }
            if(i == 2){
                circleTwo.classList.add('indicatorBlue');
                circleTwo.classList.remove('indicatorWhite');
            } else{
                circleTwo.classList.add('indicatorWhite');
                circleTwo.classList.remove('indicatorBlue');
            }
            if(i == 3){
                circleThree.classList.add('indicatorBlue');
                circleThree.classList.remove('indicatorWhite');
            } else{
                circleThree.classList.add('indicatorWhite');
                circleThree.classList.remove('indicatorBlue');
            }
        }
    }
}

//функция перелистывания слайдера назад
function flippingBack(){
    if (numSlide>0) {
        numSlide--;
    }else{
        numSlide = 3;
    }
    for (let i = 0; i < arrSlayder.length; i++) {
        if (numSlide == i) {
            slayder.style.backgroundImage = "url(" + arrSlayder[i] + ")";   
        }
        if(i == 0){
            circleZero.classList.add('indicatorBlue');
            circleZero.classList.remove('indicatorWhite');
        } else{
            circleZero.classList.add('indicatorWhite');
            circleZero.classList.remove('indicatorBlue');
        }
        if(i == 1){
            circleOne.classList.add('indicatorBlue');
            circleOne.classList.remove('indicatorWhite');
        } else{
            circleOne.classList.add('indicatorWhite');
            circleOne.classList.remove('indicatorBlue');
        }
        if(i == 2){
            circleTwo.classList.add('indicatorBlue');
            circleTwo.classList.remove('indicatorWhite');
        } else{
            circleTwo.classList.add('indicatorWhite');
            circleTwo.classList.remove('indicatorBlue');
        }
        if(i == 3){
            circleThree.classList.add('indicatorBlue');
            circleThree.classList.remove('indicatorWhite');
        } else{
            circleThree.classList.add('indicatorWhite');
            circleThree.classList.remove('indicatorBlue');
        }
    }  
}

let slayderNews = document.querySelector(".blockForSliderNews") ; //слайдер новости
let backButtonNews = document.querySelector("#backButtonNews");//кнопка назад
let nextButtonNews = document.querySelector("#nextButtonNews");//кнопка вперёд

let circleZeroNews = document.querySelector("#circleZeroNews"); //для индикаторов
let circleOneNews = document.querySelector("#circleOneNews");
let circleTwoNews = document.querySelector("#circleTwoNews");
let circleThreeNews = document.querySelector("#circleThreeNews");

//массив для слайдера в баннере
let arrSlayderNews = new Array();
arrSlayderNews = ["./images/photo_hand2hand.png", "./images/photo_main_slider.png", "./images/photo_russel_hugs.png", "./images/photo_command.png"];

let numSlideNews = 0;

//функция перелистывания слайдера вперед
function flippingNextNews() {
    if (numSlideNews<3) {
        numSlideNews++;
    }else{
        numSlideNews = 0;
    }
    for (let i = 0; i < arrSlayderNews.length; i++) {
        if (numSlideNews == i) {
            slayderNews.style.backgroundImage = "url(" + arrSlayderNews[i] + ")";   
            if(i == 0){
                circleZeroNews.classList.add('indicatorBlue');
                circleZeroNews.classList.remove('indicatorWhite');
            } else{
                circleZeroNews.classList.add('indicatorWhite');
                circleZeroNews.classList.remove('indicatorBlue');
            }
            if(i == 1){
                circleOneNews.classList.add('indicatorBlue');
                circleOneNews.classList.remove('indicatorWhite');
            } else{
                circleOneNews.classList.add('indicatorWhite');
                circleOneNews.classList.remove('indicatorBlue');
            }
            if(i == 2){
                circleTwoNews.classList.add('indicatorBlue');
                circleTwoNews.classList.remove('indicatorWhite');
            } else{
                circleTwoNews.classList.add('indicatorWhite');
                circleTwoNews.classList.remove('indicatorBlue');
            }
            if(i == 3){
                circleThreeNews.classList.add('indicatorBlue');
                circleThreeNews.classList.remove('indicatorWhite');
            } else{
                circleThreeNews.classList.add('indicatorWhite');
                circleThreeNews.classList.remove('indicatorBlue');
            }
        }
    }
}

//функция перелистывания слайдера назад
function flippingBackNews(){
    if (numSlideNews>0) {
        numSlideNews--;
    }else{
        numSlideNews = 3;
    }
    for (let i = 0; i < arrSlayderNews.length; i++) {
        if (numSlideNews == i) {
            slayderNews.style.backgroundImage = "url(" + arrSlayderNews[i] + ")";   
        }
        if(i == 0){
            circleZeroNews.classList.add('indicatorBlue');
            circleZeroNews.classList.remove('indicatorWhite');
        } else{
            circleZeroNews.classList.add('indicatorWhite');
            circleZeroNews.classList.remove('indicatorBlue');
        }
        if(i == 1){
            circleOneNews.classList.add('indicatorBlue');
            circleOneNews.classList.remove('indicatorWhite');
        } else{
            circleOneNews.classList.add('indicatorWhite');
            circleOneNews.classList.remove('indicatorBlue');
        }
        if(i == 2){
            circleTwoNews.classList.add('indicatorBlue');
            circleTwoNews.classList.remove('indicatorWhite');
        } else{
            circleTwoNews.classList.add('indicatorWhite');
            circleTwoNews.classList.remove('indicatorBlue');
        }
        if(i == 3){
            circleThreeNews.classList.add('indicatorBlue');
            circleThreeNews.classList.remove('indicatorWhite');
        } else{
            circleThreeNews.classList.add('indicatorWhite');
            circleThreeNews.classList.remove('indicatorBlue');
        }
    }  
}

//код для сортировки

function sortDate() {
    let newsContainer = document.querySelector('#newsContainer'); // контейнер для новостей
    let news = Array.from(document.querySelectorAll(".blockNews")); // добавить блоки новостей в массив

    // Сортируем элементы новостей по дате
    news.sort((a, b) => {
        let dateA = new Date(a.getAttribute('data-date')); // Преобразуем дату первой новости
        let dateB = new Date(b.getAttribute('data-date')); // Преобразуем дату второй новости
        return dateB - dateA; // Сортируем по убыванию даты
    });

    // Очищаем контейнер и добавляем отсортированные элементы
    newsContainer.innerHTML = ''; // Очищаем содержимое контейнера
    news.forEach(item => {
        newsContainer.appendChild(item); // Добавляем отсортированные элементы обратно в контейнер
    });
}

/*Код для фильтрации новостей*/
function collectionFilter(collection) {//атрибут - колекция категорий новостей
    let news = document.querySelectorAll(".blockNews"); // добавить блоки новостей в массив
    console.log(news)
    news.forEach(newsInContainer => {
        let newsAll = newsInContainer.getAttribute('data-collection');
        if (newsAll === collection || collection === 'all') {
            newsInContainer.style.display = 'flex';
        } else {
            newsInContainer.style.display = 'none';
        }
    });
}