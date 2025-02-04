function dim(){
    let atual = Number(document.getElementById("counter").innerHTML);

    let result = atual - 1;

    document.getElementById("counter").innerHTML = result;

}

function aum(){
    let atual = Number(document.getElementById("counter").innerHTML);

    let result = atual + 1;

    document.getElementById("counter").innerHTML = result;

}

function reset(){
    document.getElementById("counter").innerHTML = 0;

}