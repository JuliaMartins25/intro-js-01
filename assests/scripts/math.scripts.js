function calcular(){
    let numA = Number(document.getElementById("numA").value);
    let numB = Number(document.getElementById("numB").value);
    
    //alert(numA);
    //alert(numB);

//Soma
    let result = numA + numB

    document.getElementById("result").innerText = result;

}