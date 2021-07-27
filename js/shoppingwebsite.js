let menu = document.getElementById('menu-items'); 
let productimg = document.getElementById('productimg');
let smallimg = document.getElementsByClassName('smallimg'); 
let LoginForm = document.getElementById("LoginForm");
let RegForm = document.getElementById("RegForm");
let Indiactor = document.getElementById('Indicator'); 
menu.style.maxHeight = "0px" 
function menutoogle() 
{
    if(menu.style.maxHeight == "0px") 
    {
        menu.style.maxHeight = "500px"; 
    } 
    else 
    {
        menu.style.maxHeight = "0px" 
    }
} 
smallimg[0].onclick = function(){
    productimg.src = smallimg[0].src; 
}  
smallimg[1].onclick = function(){
    productimg.src = smallimg[1].src; 
} 
smallimg[2].onclick = function(){
    productimg.src = smallimg[2].src; 
} 
smallimg[3].onclick = function(){
    productimg.src = smallimg[3].src; 
}   
 
function Register() 
{
    RegForm.style.transform = "translateX(0px)"; 
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
} 
function login()
{
    RegForm.style.transform = "translateX(300px)"; 
    LoginForm.style.transform = "translateX(300px)"; 
    Indicator.style.transform = "translateX(0px)"; 
} 
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
}); 

