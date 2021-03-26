/* Ler 2 números inteiros do teclado (A e B), verificar e imprimir qual deles é o maior, ou a
mensagem “A=B” caso sejam iguais.  */
var x, y;

x=10;
y=8;

if(x>y){
   console.log("O numero", x, "é maior que o", y);
}else if(x<y){
    console.log("O numero", x, "é menor que o", y);
}else {
    console.log("O numero", x, "é igual o", y);
}