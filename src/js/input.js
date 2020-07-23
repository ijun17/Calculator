const btn = document.querySelector(".btn"),
    input = document.querySelector(".input"),
    output = document.querySelector(".output");

function deleteFormula(isC){
    output.innerText="";
    if(isC){
        input.innerText="";
        
    }else{
        input.innerText = 
            input.innerText.substr(0, input.innerText.length-1);
    }
}

function inputFormula(value){
    output.innerText="";
    if(value!==undefined)
        input.innerText = input.innerText+`${value}`;
}

function clickBtn(event){
    const et = (String)(event.target);
    const value = event.target.innerText;
    if(et.indexOf("Button")==-1){
        console.log(et);
    }else if(value=="C"){
        deleteFormula(true);
    }else if(value=="CE"){
        deleteFormula(false);
    }else if(value!=="="){
        inputFormula(value);
    }
}

function init(){
    btn.addEventListener("click", clickBtn);
}

init();