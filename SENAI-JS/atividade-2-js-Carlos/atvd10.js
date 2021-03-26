/*  Escreva um programa que pergunte o raio de uma circunferência, e sem seguida mostre o diâmetro, comprimento e área da circunferência. */

let raio=10, pi=3.14, comprimentoCircunferencia, areaCircunferencia, diametro;

    comprimentoCircunferencia = 2*pi*raio;
    areaCircunferencia  = pi* raio*raio;
    diametro = 2*raio;

    console.log("O comprimento da circunferência é:", comprimentoCircunferencia.toFixed(2), "| A área da circunferência:",areaCircunferencia.toFixed(2)," | O diâmetro:", diametro);