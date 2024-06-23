function validateFormRegister() {
    let nameRegister = document.querySelector("#nameRegister"); // переменная для поля Имя
    let surnameRegister = document.querySelector("#surnameRegister"); // переменная для поля Фамилия
    let patronymicRegister = document.querySelector("#patronymicRegister"); // переменная для поля Отчество
    let dateBurnRegister = document.querySelector("#dateBurnRegister"); // переменная для поля Дата рождения
    let phoneRegister  = document.querySelector("#phoneRegister"); // Переменная для телефона
    let emailRegister = document.querySelector("#emailRegister"); // переменная для поля Email
    let passwordRegister = document.querySelector("#passwordRegister"); // переменная для поля пароля
    let passwordConfirmRegister = document.querySelector("#passwordConfirmRegister"); // переменная для поля пароля

    let isValid = true; // переменная для отслеживания валидности формы
    
    console.log("Начало валидации формы");

    if (nameRegister.value === "") { // проверка на заполнение поля
        alert("Для продолжения вам необходимо представиться");
        nameRegister.classList.add("mistake"); //изменение цвета при ошибке
        isValid = false; // установить isValid в false
    } else {
        nameRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }
    if (!nameRegister.value.match(/^[A-ZА-Я][a-zа-я-]*$/)) { //проверка на соответствие верного написания имени
        alert("Имя должно начинаться с заглавной буквы и может содержать только буквы и тире");
        nameRegister.classList.add("mistake");
        isValid = false;   
    } else {
        nameRegister.classList.remove("mistake");
    }

    if (surnameRegister.value === "") { // проверка на заполнение поля 
        alert("Для продолжения вам необходимо ввести фамилию");
        surnameRegister.classList.add("mistake"); //изменение цвета при ошибке
        isValid = false;
    } else {
        surnameRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }
    if (!surnameRegister.value.match(/^[A-ZА-Я][a-zа-я()\-]*$/)) { //проверка на соответствие верного написания фамилии
        alert("Фамилия должна начинаться с заглавной буквы и может содержать только буквы, скобки и тире");
        surnameRegister.classList.add("mistake");
        isValid = false;   
    } else {
        surnameRegister.classList.remove("mistake");
    }

    if (dateBurnRegister.value === "") { // проверка на заполнение поля даты рождения
        alert("Для продолжения вам необходимо указать дату рождения");
        dateBurnRegister.classList.add("mistake"); //изменение цвета при ошибке
        isValid = false;
    } else {
        dateBurnRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }

    if (phoneRegister.value === "") { // проверка на заполнение поля телефона
        alert("Для продолжения вам необходимо указать номер телефона");
        phoneRegister.classList.add("mistake"); //изменение цвета при ошибке
        isValid = false;
    } else {
        phoneRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }
    if (!phoneRegister.value.match(/^(\+7|8)\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/)) { //проверка на соответствие верного написания номера телефона
        alert("Неверно введен номер телефона");
        phoneRegister.classList.add("mistake");
        isValid = false;   
    } else {
        phoneRegister.classList.remove("mistake");
    }

    if (emailRegister.value === "") { // проверка на заполнение поля email
        alert("Для продолжения вам необходимо указать email");
        emailRegister.classList.add("mistake"); //изменение цвета при ошибке
        isValid = false;
    } else {
        emailRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }
    if (!emailRegister.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) { //проверка на соответствие верного написания email
        alert("Неверно введен email");
        emailRegister.classList.add("mistake");
        isValid = false;   
    } else {
        emailRegister.classList.remove("mistake");
    }

    if (passwordRegister.value === "") { // проверка на заполнение поля пароля
        alert("Для продолжения вам необходимо придумать пароль");    
        passwordRegister.classList.add("mistake"); //изменение цвета при ошибке
        isValid = false;
    } else {
        passwordRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }
    if (!passwordRegister.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) { //проверка на соответствие верного написания пароля
        alert("Пароль должен содержать минимум 8 символов, одну букву и одну цифру");
        passwordRegister.classList.add("mistake");
        isValid = false;   
    } else {
        passwordRegister.classList.remove("mistake");
    }
    
    if (passwordConfirmRegister.value === "") { // проверка на заполнение поля подтверждения пароля
        alert("Для продолжения вам необходимо подтвердить пароль");    
        passwordConfirmRegister.classList.add("mistake"); //изменение цвета при ошибке
        isValid = false;
    } else {
        passwordConfirmRegister.classList.remove("mistake"); //убрать изменение цвета при отсутствии ошибки
    }

    if (passwordRegister.value !== passwordConfirmRegister.value) { // проверка для пароля
        alert("Пароль и подтверждение пароля не совпадают");
        passwordRegister.classList.add("mistake");
        passwordConfirmRegister.classList.add("mistake");
        isValid = false; 
    } else {
        passwordRegister.classList.remove("mistake");
        passwordConfirmRegister.classList.remove("mistake");
    }
    
    if (patronymicRegister.value !== "") { // если поле заполнено - проверка
        if (!patronymicRegister.value.match(/^[A-ZА-Я][a-zа-я]*$/)) { //проверка на соответствие верного написания отчества
            alert("Напишите свое отчество при помощи кириллицы без дополнительных символов");
            patronymicRegister.classList.add("mistake");
            isValid = false;   
        } else {
            patronymicRegister.classList.remove("mistake");
        }
    }

    return isValid; // возвращаем статус валидации формы
} 

let formRegister = document.querySelector("#formRegister"); // переменная для формы
formRegister.addEventListener("submit", function(event) { // вызов после события нажания кнопки отправки формы
    event.preventDefault();
    if (validateFormRegister()) { // проверка на валидность, если форма вернула false - форма не отправляется
        window.location.href = 'personal-office.html';
    }
})
