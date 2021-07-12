let screen = document.getElementById('result'),
    operation = document.getElementById('operation'),
    elements = document.getElementsByClassName('btn'),
    result = screen.textContent;

let calculadora = function(){
    let attribute = this.getAttribute("data-set");

    if (attribute === "equal"){
        operation.textContent = result;
        result = eval(result);     
    }
    else if (attribute === "backspace"){
        result = result.slice(0, -1);
    }
    else if (attribute === "reset"){
        result = "";
        operation.textContent="";
    }
    else{
        result += attribute;
    }
    screen.innerHTML = result;
}

for (let i = 0; i < elements.length; i++){
    elements[i].addEventListener('click',calculadora,false);

}
console.log(result);