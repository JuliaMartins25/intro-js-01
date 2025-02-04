function calcular(){
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);
    
    //alert(numA);
    //alert(numB);

//Soma
    let result = numA + numB

    document.getElementById("result").innerText = result;

}

function soma(){
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);

    let result = numA + numB

    document.getElementById("result").innerText = result;
}

function sub(){
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);

    let result = numA - numB

    document.getElementById("result").innerText = result;
}

function mult(){
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);

    let result = numA * numB

    document.getElementById("result").innerText = result;
}

function divi(){
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);

    let result = numA / numB

    document.getElementById("result").innerText = result;
}