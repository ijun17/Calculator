const input2 = document.querySelector(".input"),
    outout = document.querySelector(".output"),
    outputBtn = document.querySelector(".js-outputBtn");

function replaceFormula(formula2){
    let formula=formula2;
    while(formula.indexOf("×")>0)formula = formula.replace("×","*");
    while(formula.indexOf("÷")>0)formula = formula.replace("÷","/");
    return formula;
}


function outputFormula(event){
    let formula = input2.innerText;
    formula = replaceFormula(formula);
    const err = new Error('invalid formula');
    try{
        output.innerText = eval(formula);
    }catch(err){
        output.innerText="E";
        console.log(formula);
    }
}

function init(){
    outputBtn.addEventListener("click", outputFormula);
}

init();