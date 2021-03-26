/* Calcular a média final (usando a ponderação da UFRN) dadas as notas das 3 provas e
produzir uma saída com a média e a situação do aluno de acordo com o seguinte critério:
média >= 7, aprovado; 5 < média < 7, recuperação; média < 5, reprovado. */

let nota1=10.0, nota2=1.4, nota3=2.4, media=0.0;


media = (nota1+nota2+nota3)/3;

if(media >= 7){
   console.log("Aluno APROVADO");
}else if(media < 5){
    console.log("Aluno reprovado")
    
}else{
    console.log("Aluno em recuperação", media);
}