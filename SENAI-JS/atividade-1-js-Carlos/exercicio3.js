/* Calcular a quantidade dinheiro gasta por um fumante. Dados: o número de anos que ele
fuma, o nº de cigarros fumados por dia e o preço de uma carteira.  */
var anosFumando=10, carteiraDiaria=10;
let TotalGasto=0.0, carteiraPreco=20.56;


TotalGasto = (((((365*anosFumando)+2)*carteiraDiaria)/20)*carteiraPreco);
    

console.log("VOCE JA GASTOU aproximadamente R$", TotalGasto, "EM CIGARROS");