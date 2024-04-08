var email = document.getElementById('email');
var emaili = document.getElementById('emaili');
email.addEventListener('input', function(){
    var value = emaili.value;
    var regeks = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
    if(regeks.test(value)){
        email.classList.remove('border-red-500');
        email.classList.add('border-green-500');
    }else{
        email.classList.remove('border-green-500');
        email.classList.add('border-red-500');
    }
});

var npw = document.getElementById('npw');
var npwi = document.getElementById('npwi');
npw.addEventListener('input', function(){
    var value = npwi.value;
    var regeks = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(regeks.test(value)){
        npw.classList.remove('border-red-500');
        npw.classList.add('border-green-500');
    }else{
        npw.classList.remove('border-green-500');
        npw.classList.add('border-red-500');
    }
});

var nim = document.getElementById('nim');
var nimi = document.getElementById('nimi');
nim.addEventListener('input', function(){
    var value = nimi.value;
    var regeks = /^[0-9]{9}$/;
    if(regeks.test(value)){
        nim.classList.remove('border-red-500');
        nim.classList.add('border-green-500');
    }else{
        nim.classList.remove('border-green-500');
        nim.classList.add('border-red-500');
    }
});

var username = document.getElementById('username');
var usernamei = document.getElementById('usernamei');
username.addEventListener('input', function(){
    var value = usernamei.value;
    var regeks = /^[a-zA-Z0-9]{5,}$/;
    if(regeks.test(value)){
        username.classList.remove('border-red-500');
        username.classList.add('border-green-500');
    }else{
        username.classList.remove('border-green-500');
        username.classList.add('border-red-500');
    }
});