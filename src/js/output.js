const input2 = document.querySelector(".input"),
    outout = document.querySelector(".output"),
    outputBtn = document.querySelector(".js-outputBtn");

function replaceFormula(formula2){ //곱하기와 나누기 연산자를 교체
    let formula=formula2;
    while(formula.indexOf("×")>0)formula = formula.replace("×","*");
    while(formula.indexOf("÷")>0)formula = formula.replace("÷","/");
    return formula;
}


function outputFormula(event){ //입력 수식의 결과값을 출력
    let formula = input2.innerText;
    formula = replaceFormula(formula);
    const err = new Error('invalid formula');
    try{
        output.innerText = eval(formula);//스트링을 코드로
    }catch(err){
        output.innerText="E";
        console.log(formula);
    }
}

function init(){
    outputBtn.addEventListener("click", outputFormula);
}

init();
