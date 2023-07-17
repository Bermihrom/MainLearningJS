const ex_1 = document.querySelector("#ex-1")




ex_1.addEventListener("click", (e) => {

    console.log("e.target.id = ", e.target.id);
    if(e.target.id == 'ex-1'){
        return
    }else{
        if(e.target.className == "d-9 b-9"){
            e.target.classList.remove("b-9")
        }else{
            e.target.classList.add("b-9")
        }
    }
        
})

