const button = document.querySelector(".counter");
const result = document.querySelector(".res");
const input = document.querySelector(".text");

button.onclick = function(){
    let inputTxt = input.value;
    let letters = [...inputTxt];
    let list = new Set(letters);
    for(i of list){
        let letter = document.createElement('div');
        result.append(letter);
        let nLetter = inputTxt.split(i).length - 1;
        letter.innerHTML = i + ': ' + nLetter;
    }
}
