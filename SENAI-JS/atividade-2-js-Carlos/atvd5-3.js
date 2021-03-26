/*Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor. Consegue criar mais de uma solução? */
    
    let num=[10,11,12], maior=0, menor=999999999999;

    for(i=0;i<3;i++){
        if(num[i]>maior){
           maior=num[i];
        }
        if(num[i]<menor){
            menor=num[i];
        }
    }
    console.log("o maior é:",maior, "| o menor é:", menor);

