let user = [
    {
        'login' : 'login1@gmail.ru', 
        'password' : 'password1',
    } ,
    {
        'login' : 'login2@gmail.ru', 
        'password' : 'password2',
    } ,
    {
	    'login' : 'login3@gmail.ru', 
	    'password' : 'password3',
    } 
];

let loginAutoriz = document.querySelector("#loginAutoriz"); // переменная для поля логин
let passwordAutoriz = document.querySelector("#passwordAutoriz"); // переменная для поля пароль

let formAutorization = document.querySelector("#formAutorization"); // переменная для поля пароль

formAutorization.addEventListener("submit",function(event){
    event.preventDefault();

    let enteredLogin = loginAutoriz.value;
    let enteredPassword = passwordAutoriz.value;

    let matchedUser = user.find(user => user.login === enteredLogin && user.password === enteredPassword);
    if(matchedUser){
        localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
        window.location.href = 'personal-office.html';
        console.log(location);
        document.body.appendChild(logoutButton);
        logoutButton.addEventListener('clic', function () {
            localStorage.removeItem('loggedInUser')
        });
    }
    else{
        alert('попробуйте снова')
    }
})