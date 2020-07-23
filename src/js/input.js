const btn = document.querySelector(".btn"),
    input = document.querySelector(".input"),
    output = document.querySelector(".output");

function deleteFormula(isC){ //C와 CE 수행
    output.innerText="";
    if(isC){
        input.innerText="";
        
    }else{
        input.innerText = 
            input.innerText.substr(0, input.innerText.length-1);
    }
}

function inputFormula(value){ //숫자 또는 연산자 입력(등호 제외)
    output.innerText="";
    if(value!==undefined)
        input.innerText = input.innerText+`${value}`;
}

function clickBtn(event){ //테이블을 클릭했을 때
    const et = (String)(event.target);
    const value = event.target.innerText;
    if(et.indexOf("Button")==-1){ //클릭한게 버튼일 때
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
