/* Leia a razão de uma PA (Progressão Aritmética) e o seu primeiro e último termos e informe
a soma dos elementos dessa PA. */

var i,p=0,primeiro, ultimo, razao, pa;
primeiro=1;
ultimo=9; // tem que ser número impar (pq a razão é 2)
razao=2;

for(i=primeiro; i<=ultimo; i+=razao){
    p++;
}
pa = (primeiro + ultimo)*p /2;

console.log("A soma é:",pa);