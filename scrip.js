function project() {
    var x = document.getElementById("loli2");
    var y = document.getElementById("loli1");
    x.style.display = "ada";
    y.style.display="none";
    x.classList.add("project");


}

function skill() {
    var x = document.getElementById("loli1");
    var y = document.getElementById("loli2");
    x.style.display = "ada";
    y.style.display="none";
    x.classList.add("project");
}


function contact(){
    var x = document.getElementById("contact");
    var y = document.getElementById("home");
    var z = document.getElementById("profile");
    x.style.display = "";
    y.style.display="none";
    z.style.display="none";
}

function home(){
    var x = document.getElementById("contact");
    var y = document.getElementById("home");
    var z = document.getElementById("profile");
    x.style.display="none";
    y.style.display="";
    z.style.display="none";
}

function contact(){
    var x = document.getElementById("contact");
    var y = document.getElementById("home");
    var z = document.getElementById("profile");
    x.style.display = "block";
    y.style.display="none";
    z.style.display="none";
}