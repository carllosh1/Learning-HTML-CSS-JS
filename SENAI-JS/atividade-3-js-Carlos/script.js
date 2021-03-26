/* Fazer um programa para ler o código de uma peça 1, o número de peças 1, o valor unitário de cada
peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Calcule e
mostre o valor a ser pago. */

function atvd6(){
    let pieceCode=parseInt(document.querySelector("#code").value);
    let pieceUnity=parseInt(document.querySelector("#unity").value);
    let piecePrice=parseFloat(document.querySelector("#price").value);

    let pieceCode2=parseInt(document.querySelector("#code1").value);
    let pieceUnity2=parseInt(document.querySelector("#unity1").value);
    let piecePrice2=parseFloat(document.querySelector("#price1").value);

    let result;

    result=pieceUnity*piecePrice + pieceUnity2*piecePrice2;
    
    document.querySelector("#text-atvd6").innerHTML= "O Preço total que você vai pagar é: R$" + result.toFixed(2);

}

/* Com base na tabela de preços ao lado, faça um programa que leia o código de um item e a
quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar. */
function atvd8(){
    let Code=parseInt(document.querySelector("#code-atvd8").value);
    let Unity=parseInt(document.querySelector("#unity-atvd8").value);

    let price, name, totalPrice;

    if(Code==1){
        price= 4.00;
        name="Cachorro Quente";
    }
    if(Code==2){
        price=4.50;
        name="X-Salada";

    }
    if(Code==3){
        price=5.00;
        name="X-Bacon"
    }
    if(Code==4){
        price=2.00;
        name="Torrada Simples";
    }
    if(Code==5){
        price=1.50;
        name="Refrigerante";
    }

    totalPrice= price*Unity;

    document.querySelector("#text-atvd8").innerHTML= "O Preço total que você vai pagar por:  "+Unity+"  "+name + " é: R$" + totalPrice.toFixed(2);
}

/* Para doar sangue é necessário ter entre 18 e 67 anos. Faça um aplicativo na linguagem C que
pergunte a idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores
lógicos OU (||) e E (&&). */

function atvd11(){
    let age =parseInt(document.querySelector("#age").value);

    (age>17 && age<68) ? document.querySelector("#text-atvd11").innerHTML="Você pode doar sangue" : document.querySelector("#text-atvd11").innerHTML="Você não pode doar sangue";
}

/* Elabore um programa que, dada a idade de um nadador. Classifique-o em uma das seguintes
categorias: Infantil A = 5 - 7 anos,
         Infantil B = 8 - 10 anos, 
         juvenil A = 11- 13 anos 
         juvenil B =14 - 17 anos e
          Sênior = 18 - 25 anos. Apresentar mensagem “idade fora da faixa etária” quando
for outro ano não contemplado. */
function atvd15(){
    let age=parseInt(document.querySelector("#age-atvd15").value);

    if(age>4 && age<8){
        document.querySelector("#text-atvd15").innerHTML ="Categoria: Infantil A.";
    }
    if(age>7 && age<11){
        document.querySelector("#text-atvd15").innerHTML ="Categoria: Infantil B.";
    }
    if(age>10&& age<14){
        document.querySelector("#text-atvd15").innerHTML ="Categoria: Juvenil A.";
    }
    if(age>13 && age<18){
        document.querySelector("#text-atvd15").innerHTML ="Categoria: Juvenil B.";
    }
    if(age>17 && age<26){
        document.querySelector("#text-atvd15").innerHTML ="Categoria: Sênior.";
    }
    if(age>25 || age < 4) {
        document.querySelector("#text-atvd15").innerHTML ="Idade fora da faixa etária.";

    }
}
/* Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura
de senha incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for
informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo
encerrado. Considere que a senha correta é o valor 2002.
Exemplo: */
function atvd18(){
    let PasswordRegister = (document.querySelector("#passwordRegister").value);
    
    
    return PasswordRegister;

}
function atvd18_2(){
    let LoginRegister = (document.querySelector("#loginRegister").value);

    LoginRegister=LoginRegister.toLowerCase();

    return LoginRegister;
}
function atvd18_1(){
        let Senha = (document.querySelector("#password").value);
        let login = (document.querySelector("#login").value);
    

    if(login===atvd18_2() && Senha===atvd18()){
        alert("ACESSO VÁLIDO");
        document.querySelector("#text-atvd18").innerHTML =  "Acesso Válido";
    }else{
         alert("Dados inválidos");

        document.querySelector("#text-atvd18").innerHTML =  "Acesso inválida.";
    }
}

/* Faça uma página web para tratar das autuações por excesso de
velocidade. Precisa ter um input onde o usuário digite a velocidade máxima
permitida pela via. Precisa ter um input onde o usuário digite a velocidade do
carro. Criar uma div para exibir o resultado. Dependendo da velocidade
exibir: -
 Até 7 km/h acima da permitida pela via informar: Advertência
 - Acima
de 7 km/h. Até 20% informar: Autuado. Infração Grave - 
Entre 20% e 50%

informar. Autuado. Infração gravíssima. - Acima de 50% informar. Autuado.
Infração gravíssima. Penalidade de suspensão do direito de dirigir. */

function detran(){
    let trackSpeed = parseInt(document.querySelector("#trackSpeed").value);
    let speed = parseInt(document.querySelector("#speed").value);


    let advertencia, infracaoGrave, exceeded;
    exceeded = speed-trackSpeed;
    advertencia = trackSpeed + (trackSpeed*0.1);
    infracaoGrave = trackSpeed + (trackSpeed*0.5);

    if(speed>trackSpeed){
        if(speed<=advertencia){

            document.querySelector("#text-speed").innerHTML= "Penalidade: Advertência";
            document.querySelector("#text-speed1").innerHTML= "Você ultrapassou a velocidade via em: " +exceeded+"Km/h";
        }
        if(speed>advertencia && speed<=infracaoGrave){

            document.querySelector("#text-speed").innerHTML= "Penalidade: Autuado, Infração Grave";
            document.querySelector("#text-speed1").innerHTML= "Você ultrapassou a velocidade via em: " +exceeded+"Km/h";
        }
        if(speed>infracaoGrave){
            document.querySelector("#text-speed").innerHTML= "Penalidade: Autuado, Infração gravíssima, Penalidade de suspensão do direito de dirigir.";
            document.querySelector("#text-speed1").innerHTML= "Você ultrapassou a velocidade via em: " +exceeded+"Km/h";
        }
    }else{
        document.querySelector("#text-speed").innerHTML= "Está tudo bem!";
    }
}