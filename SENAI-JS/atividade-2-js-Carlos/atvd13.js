/* Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e armazene na variável y.
 Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x. */

let x=12, y=14, aux=0;
aux = x;
x = y;
y= aux;

console.log("Os valores trocados:",x,y);