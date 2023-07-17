const num = document.querySelector(".i-9");
const button = document.querySelector(".b-9");


button.onclick = function (){
    
    let n = +num.value;


    if(n >= 1 && n <= 32){
        console.log("Your number of your home ving is 1")
    }
    else if(n >= 33 && n <= 64){
        console.log("Your number of your home ving is 2")
    }
    else if(n >= 65 && n <= 96){
        console.log("Your number of your home ving is 3")
    }
    else{
        console.log("***n = ", n);
        console.log("***n = undefined")
    }
}
