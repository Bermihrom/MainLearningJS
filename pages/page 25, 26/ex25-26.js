import { showResult } from "../../js/show-result.js";

let xhttp = new XMLHttpRequest();

let  divResult = showResult();

const add = document.querySelector(".add");

const buttonShow = document.querySelector(".out");

buttonShow.onclick = function(){
    xhttp.onreadystatechange = function (){
        if(this.readyState == 2 && this.status == 200){
            let name = document.querySelector(".name_user").value;
            console.log("name = ", name);
        }
    }
}  

xhttp.open("GET", "http://getpost.itgid.info/index2.php", true);
xhttp.send();