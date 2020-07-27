const input2 = document.querySelector(".input"),
    outout = document.querySelector(".output"),
    outputBtn = document.querySelector(".js-outputBtn");

function replaceFormula(formula2){ //×와 ÷를 코드상에서 수행되는 *와/로 교체
    let formula=formula2;
    //나누기 연산자가 연속되어 주석처리가 되는걸 방지
    let isSeqOpr=false;
    for(let i=0; i<formula.length; i++){
        if(formula[i]=="÷"){
            if(isSeqOpr==true){
                formula="E";
                break;
            }
            isSeqOpr=true;
        }else{
            isSeqOpr=false;
        }
    }
    //나머지 기능 수행
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
