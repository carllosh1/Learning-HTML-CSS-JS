/* Escrever um programa que leia o nome e o sexo de uma pessoa e informe o nome e se ela é homem, mulher ou outros. */

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