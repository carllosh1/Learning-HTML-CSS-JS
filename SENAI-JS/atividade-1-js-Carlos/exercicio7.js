/* Para ler 3 números reais do teclado e verificar se o primeiro é maior que a soma dos outros
dois. */

var x,y,z;

x=20;
y=5;
z=11;

if(x>(y+z)){
    console.log("O número",x,"foi o primeiro a ser informado e ele é maior que a soma de",y,"+",z);
}else{
    console.log("O número",x,"foi o primeiro a ser informado e ele é menor que a soma de",y,"+",z);
}