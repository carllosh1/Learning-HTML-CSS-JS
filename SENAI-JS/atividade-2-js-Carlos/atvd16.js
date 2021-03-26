
/*Faça um programa que receba a idade de uma pessoa e mostre mensagem informando “maior de idade”, “menor de idade” ou "idoso(a)". 
Considere a idade a partir de 18 anos como maior de idade. */

let idade=15;

        (idade<18) ? console.log("Menor de idade") : (idade>17 && idade<65) ? console.log("O maior de idade") : console.log("Idoso(a)");