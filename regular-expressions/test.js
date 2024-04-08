var email = document.getElementById('email');
var emaili = document.getElementById('emaili');
var emailk = document.getElementById('emailk');
email.addEventListener('input', function(){
    var value = emaili.value;
    var regeks = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
    if(regeks.test(value)){
        email.classList.remove('border-red-500');
        email.classList.add('border-green-500');
        emailk.classList.add('hidden');
    }else{
        emailk.classList.remove('hidden');
        email.classList.remove('border-green-500');
        email.classList.add('border-red-500');
    }
});

var npw = document.getElementById('npw');
var npwi = document.getElementById('npwi');
var npwk = document.getElementById('npwk');
npw.addEventListener('input', function(){
    var value = npwi.value;
    var regeks = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if(regeks.test(value)){
        npwk.classList.add('hidden');
        npw.classList.remove('border-red-500');
        npw.classList.add('border-green-500');
    }else{
        npwk.classList.remove('hidden');
        npw.classList.remove('border-green-500');
        npw.classList.add('border-red-500');
    }
});

var nim = document.getElementById('nim');
var nimi = document.getElementById('nimi');
var nimk = document.getElementById('nimk');
nim.addEventListener('input', function(){
    var value = nimi.value;
    var regeks = /^[0-9]{9}$/;
    if(regeks.test(value)){
        nimk.classList.add('hidden');
        nim.classList.remove('border-red-500');
        nim.classList.add('border-green-500');
    }else{
        nimk.classList.remove('hidden');
        nim.classList.remove('border-green-500');
        nim.classList.add('border-red-500');
    }
});

var username = document.getElementById('username');
var usernamei = document.getElementById('usernamei');
var usernamek = document.getElementById('usernamek');
username.addEventListener('input', function(){
    var value = usernamei.value;
    var regeks = /^[a-zA-Z0-9]{5,}$/;
    if(regeks.test(value)){
        usernamek.classList.add('hidden');
        username.classList.remove('border-red-500');
        username.classList.add('border-green-500');
    }else{
        usernamek.classList.remove('hidden');
        username.classList.remove('border-green-500');
        username.classList.add('border-red-500');
    }
});