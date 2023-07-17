import { showResult } from "../../js/show-result.js";


let  divResult = showResult();
const check = document.querySelector(".check");
const clear = document.querySelector(".clear");
const arr = [3, 14, 15, 92, "6", "5", "hello", 32];
check.onclick = function (){
    const divParent = document.querySelector('.article__body').append(divResult)
    const newArr = arr.filter(function(item){
        if( typeof item == 'number'){
            divResult.append(`${item}  `);
            return item
        }
    })
    check.style.display = "none";
    clear.style.display = "block";
}
clear.onclick = function (){
    divResult.innerHTML = '';
    clear.style.display = "none";
    check.style.display = "block";

}

let a9 = [['hi', 'mahai'], ['test', 'best']];
let newA9 = [];
const checkSec = document.querySelector(".second");
checkSec.onclick = function (){
    for(i = 0;i < a9.length;i++){
        newA9.push(a9[i].join('-'));
        console.log("a9[i].join('-') = ", newA9.join('-'));
    }
    newA9.join('-');
    console.log("a9.join('-') = ", newA9.join('-'));
}


