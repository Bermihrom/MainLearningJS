import { showResult } from "../../js/show-result.js";



let  divResult = showResult();
let arr = [];
let storage;

const add = document.querySelector(".add");
const arrShow = document.querySelector('.show_arr');
const localStoreShow = document.querySelector('.show_local-store');

const buttonShow = document.querySelector(".show_button");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");

add.onclick = function(){
    let val = ' ';
    val += document.querySelector(".i-7").value;
    if (val == ' ') {
        return;
    }
    arr.push(val);
    document.querySelector(".i-7").value = '';
    arrShow.innerHTML = arr;
}   

const save = document.querySelector(".save");
save.onclick = function(){

    console.log("arr = ", arr);

    localStorage.setItem("arr_values", JSON.stringify(arr));
    storage = localStorage.getItem("arr_values")
    console.log("storage = ", storage);
}



buttonShow.onclick = function(){
    localStoreShow.append(storage);
}  


clear.onclick = function(){
    localStoreShow.innerHTML = '';
    arrShow.innerHTML = '';
} 

del.onclick = function(){
    arr.pop();
} 