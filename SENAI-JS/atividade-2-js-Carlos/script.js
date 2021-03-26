/* O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. Escreva um programa que leia o peso do prato montado pelo cliente (em quilos) e imprima o valor a pagar. */


function atvd1(){
    let quilo=10, preco;

    preco = quilo * 12.00;

    console.log(quilo,"kg de comida da R$",preco.toFixed(2));

}

/*Faça um programa que receba dois números, calcule e mostre a divisão do primeiro número pelo segundo. Sabe-se que o segundo número não pode ser zero. */
  
function atvd2(){
    let num1=10, num2=2;

    if(num2==0){
        console.log("Divisão inválida");
    }else{
        console.log(num1,"/",num2,"=",num1/num2);
    }

}

/* Faça um programa que receba o peso de uma pessoa em quilos, calcule e mostre esse peso em gramas. */

function atvd3(){
    let peso=100, pesoGramas;

    pesoGramas = peso * 1000;

    console.log(peso,"kg é igual a",pesoGramas,"g");

}

/*Faça um programa que receba um número e diga se este número está no intervalo entre 100 e 200. */
    
function atvd4(){
    let number=100;


    (number>=100 && number <=200) ? console.log("Número está entre 100 e 200") : console.log("Número não está entre 100 e 200");

    
}

/*Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor. Consegue criar mais de uma solução? */

function atvd5_1(){
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

}

////////////////////////////////////////////////

function atvd5_2(){
    let num1=10, num2=12 ,num3=12;

    console.log("O maior é", Math.max(num1,num2,num3), "O menor é", Math.min(num1,num2,num3));

}
    
////////////////////////////////////////////////
function atvd5_3(){
    let num=[10,11,12], maior=0, menor=999999999999;

    for(i=0;i<3;i++){
        if(num[i]>maior){
           maior=num[i];
        }
        if(num[i]<menor){
            menor=num[i];
        }
    }
    console.log("o maior é:",maior, "| o menor é:", menor);

}


/* Escreva um programa que recebe um número inteiro e diga se é par ou ímpar. Use o operador matemático % (resto da divisão ou módulo) e o teste condicional if. */
    function atvd9_1(){
        let num=22;

        (num%2==0) ? console.log(num,"é par") : console.log(num, "é impar");

    }
    
    function atvd9_2(){
        let num=22;
        
        if(num%2==0){
            console.log(num,"é par");            
        }else{
            console.log(num, "é impar");
        }
    }


/*  Escreva um programa que pergunte o raio de uma circunferência, e sem seguida mostre o diâmetro, comprimento e área da circunferência. */
function atvd10(){

    let raio=10, pi=3.14, comprimentoCircunferencia, areaCircunferencia, diametro;

    comprimentoCircunferencia = 2*pi*raio;
    areaCircunferencia  = pi* raio*raio;
    diametro = 2*raio;

    console.log("O comprimento da circunferência é:", comprimentoCircunferencia.toFixed(2), "| A área da circunferência:",areaCircunferencia.toFixed(2)," | O diâmetro:", diametro);

}
    

/* Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e armazene na variável y.
 Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x. */
  function atvd13(){
    let x=12, y=14, aux=0;
    aux = x;
    x = y;
    y= aux;

    console.log("Os valores trocados:",x,y);
    
}


/*Faça um programa que receba a idade de uma pessoa e mostre mensagem informando “maior de idade”, “menor de idade” ou "idoso(a)". 
Considere a idade a partir de 18 anos como maior de idade. */
    function atvd16(){
            
        let idade=15;

        (idade<18) ? console.log("Menor de idade") : (idade>17 && idade<65) ? console.log("O maior de idade") : console.log("Idoso(a)");

    }


/* Escrever um programa que leia o nome e o sexo de uma pessoa e informe o nome e se ela é homem, mulher ou outros. */

function atvd17(){
    let nome="Lara", sexo="masculino", masculino="Masculino", feminino="Feminino";

    if( sexo.toUpperCase() == feminino.toUpperCase() ){
        console.log("O nome é:", nome,"e é mulher");
    }
    if( sexo.toUpperCase() == masculino.toUpperCase() ){
        console.log("O nome é:", nome,"e é homem");
    }
    else {
        console.log("O nome é:", nome,"e é", sexo);

    }
}