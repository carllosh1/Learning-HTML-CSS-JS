
    
 function atvd11(){
    let preco = parseFloat(document.querySelector("#atvd11-1").value);

    document.getElementById("imposto-text").innerHTML = "O imposto é: R$";
    document.querySelector("#imposto").innerHTML = preco * 0.45;

    document.getElementById("lucro-text").innerHTML = "O lucro é: R$";
    document.querySelector("#lucro").innerHTML = preco * 0.12;

    document.getElementById("carro-text").innerHTML = "O preço do carro é: R$";
    document.querySelector("#carro").innerHTML = preco+(preco*0.45)+(preco*0.12);
   
    }



    function atvd12(){
      let velocidade = parseFloat(document.querySelector("#atvd12-1").value);

      if(velocidade> 60 && velocidade<71){
         document.getElementById("res3").innerHTML = "A sua multa foi de R$50,00";
      }else if(velocidade> 70 && velocidade<101){
         document.getElementById("res3").innerHTML = "A sua multa foi de R$100,00";
      }else if(velocidade > 100){
         document.getElementById("res3").innerHTML = "A sua multa foi de R$200,00";
      }else{
         document.getElementById("res3").innerHTML = "Não teve Multa!!";
      }
    }


    function atvd13(){
      let latao = parseInt(document.querySelector("#atvd13-1").value);

      document.getElementById("cobre1").innerHTML = "Quantidade em gramas de cobre: ";
      document.querySelector("#cobre").innerHTML = 130*latao* 0.7;
      document.getElementById("cobre2").innerHTML = "g";

      document.getElementById("zinco1").innerHTML = "Quantidade em gramas de zinco: ";
      document.querySelector("#zinco").innerHTML = 130*latao * 0.3;
      document.getElementById("zinco2").innerHTML = "g";
     
    }



    function atvd14(){
      let x = parseInt(document.querySelector("#atvd14-1").value);
      let y= parseInt(document.querySelector("#atvd14-2").value);

      if(y==0){
         document.getElementById("quociente").innerHTML = "Divisão por ZERO";
         document.getElementById("quociente1").innerHTML = "";

      }
      else{
         document.getElementById("quociente").innerHTML = "O quociente é: ";
         document.querySelector("#quociente1").innerHTML = x/y;
   
      }
 
    }


    function atvd15(){
      let x = parseInt(document.querySelector("#atvd15-1",).value);
      let y= parseInt(document.querySelector("#atvd15-2").value);
      let z=parseInt(document.querySelector("#atvd15-3").value);
          
/*
         if(x>y && x>z){
            document.getElementById("n1").innerHTML = "O maior número entre eles é o";
            document.getElementById("n1-text").innerHTML = x;

         }
          if(y>x && y>z){
            document.getElementById("n1").innerHTML = "O maior número entre eles é o";
            document.getElementById("n1-text").innerHTML = y;

         }
         if(z>x && z>y){
            document.getElementById("n1").innerHTML = "O maior número entre eles é o";
            document.getElementById("n1-text").innerHTML = z;
         }
*/        
         document.getElementById("n1").innerHTML = "O maior número entre eles é o";
            
         document.getElementById("n1-text").innerHTML = Math.max(x,y,z);
     
 
    }


    function atvd16(){
      
      let    x = parseInt(document.querySelector("#atvd16-1").value);
      let    y= parseInt(document.querySelector("#atvd16-2").value);
      let    z=parseInt(document.querySelector("#atvd16-3").value);
               let maior=0;
              
            if(x > z){
               maior = z;
               z = x;
               x = maior;
            }

            if(x > y){
               maior = y;
               y = x;
               x = maior;
            }

            if(y > z){
               maior = z;
               z = y;
               y = maior;
            }
               
    
        
            document.getElementById("crescente-text").innerHTML = (x+"-"+y+"-"+z);
      }

// parou de funcionar a partir desse
      function atvd17(){
      
         let      a = parseFloat(document.querySelector("#atvd17-1").value);
         let      b = parseFloat(document.querySelector("#atvd17-2").value);
         let      c = parseFloat(document.querySelector("#atvd17-3").value);

         let de,x1=0,x2=0;
         

               de = (Math.pow(b, 2)) - (4*a*c);
               
               
               x1= (-b - Math.sqrt(de))/(2*a);
             
               x2= (-b + Math.sqrt(de))/(2*a);
               

         if(de<0){
            document.getElementById("raiz").innerHTML = "Não existe raiz real";

         }else{
            document.getElementById("raiz").innerHTML = "VALOR DA PRIMEIRA RAIZ:" + x1+ "   |  " + "VALOR DA SEGUNDA RAIZ:" + x2;
      
         }
                  
      }


      function atvd18(){
         let      lado1 = parseFloat(document.querySelector("#atvd18-1").value);
         let      lado2= parseFloat(document.querySelector("#atvd18-2").value);
         let      lado3=parseFloat(document.querySelector("#atvd18-3").value);

         if ((lado1>lado2+lado3)||(lado2>lado1+lado3)||(lado3>lado1+lado2)){
            document.getElementById("triangulo-text").innerHTML = "Não forma um triângulo";
         } else if (lado1 == lado2 && lado1 == lado3){
            document.getElementById("triangulo-text").innerHTML = "Formou um triângulo Equilátero";
            
         }else if (lado1 == lado2 && lado1 != lado3){
            document.getElementById("triangulo-text").innerHTML = "Formou um triângulo Isóceles";
            
         }else if (lado1 != lado2 && lado1 == lado3){
            document.getElementById("triangulo-text").innerHTML = "Formou um triângulo Isceles";
            
         } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
            document.getElementById("triangulo-text").innerHTML = "Formou um triângulo Escaleno";
         }else{}
         
      }


      function atvd19(){
         let num1 = parseInt(document.querySelector("#atvd19-1").value);
         let num2 = parseInt(document.querySelector("#atvd19-2").value);
         let num3 = parseInt(document.querySelector("#atvd19-3").value);
         let num4 = parseInt(document.querySelector("#atvd19-4").value);

         let numero=[num1, num2, num3, num4], soma=0, i;

         for(i=0; i<4; i++){
            if(numero[i]%2==0){
               soma+= numero[i];
            }
         }
         document.getElementById("soma-text").innerHTML = "A soma é:";
         document.querySelector("#soma").innerHTML = soma;
      }

      function atvd20(){
         let ano = parseInt(document.querySelector("#atvd20-1").value);

         if( ano%400==0 || ano%4==0 && ano%100!=0){
            document.getElementById("ano-text").innerHTML = "Ano bissexto";
            
         }else{
            document.getElementById("ano-text").innerHTML = "Ano NÃO bissexto";
         }
      }