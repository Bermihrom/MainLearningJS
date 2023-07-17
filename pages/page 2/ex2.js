let inputIn = document.querySelector(".text");
const txt_button = document.querySelector(".text_in")
txt_button.onclick = function(){
    console.log(inputIn.value);
}

let inputInP = document.querySelector(".text_p");
const txt_p_button = document.querySelector(".text_in_p");
const wrapExercise = document.querySelector(".wrap-exercise");
txt_p_button.onclick = function(){

    let divResult = document.querySelector('.block-res');
    let inputVal = inputInP.value;
    if (!divResult) {
        divResult = document.createElement("div");
        divResult.classList.add('block-res');
        wrapExercise.append(divResult);
        divResult.append(inputVal);
    } else {
        divResult.innerHTML = '';
        document.querySelector(".text_p").value = '';
        divResult.append(inputVal);
    }


}

let input_name = document.querySelector(".username");
let input_surname = document.querySelector(".user_surname");
let input_age = document.querySelector(".age");
let input_prof = document.querySelector(".prof");
const txt_user_button = document.querySelector(".text_user");
const div_user = document.querySelector(".div_user");
txt_user_button.onclick = function(){
    let info = document.createElement("p");
    div_user.append(info);
    info.append(`Dear ${input_name.value} ${input_surname.value}, 
    your age is ${input_age.value} and you're ${input_prof.value}`);
}