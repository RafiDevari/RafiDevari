var email = document.getElementById('email');
        var emaili = document.getElementById('emaili');
        email.addEventListener('input', function(){
            var value = emaili.value;
            var regeks = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
            if(regeks.test(value)){
                email.classList.remove('border-red-500');
                email.classList.add('border-green-500');
            }else{
                email.classList.add('border-red-500');
            }
        });