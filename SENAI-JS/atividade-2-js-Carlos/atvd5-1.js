/*Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor. Consegue criar mais de uma solução? */

let num1=10, num2=12 ,num3=12;

    if(num1>num2 && num1> num3) {
        (num2>num3) ?console.log("O maior é",num1, "O menor é", num3) : console.log("O maior é",num1, "O menor é", num3);
        
    }
    if(num2>num1 && num2>num3){
        (num1>num3) ?console.log("O maior é",num2, "O menor é", num3) : console.log("O maior é",num2, "O menor é", num1);
    }
    if(num3> num1 && num3>num2){
        (num1>num2) ?console.log("O maior é",num1, "O menor é", num2) : console.log("O maior é",num2, "O menor é", num1);
    }
    if(num1==num2 && num1>num3){
        console.log("O maior é",num1, "O menor é", num3);
    }
    if(num1==num3 && num1>num2){
        console.log("O maior é",num1, "O menor é", num2);
    }
    if(num2==num3 && num2>num1){
        console.log("O maior é",num2, "O menor é", num1);
    }
    if(num1==num3 && num1 ==num2){
        console.log("O maior é",num1, "O menor é", num1);
    }