// função para encontrar o maior número de um array
function encontrarMaiorNumero(numeros){
    let maiorNumero = numeros[0];
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i]
        }
    }
    return maiorNumero;
}
 
// função para encontrar o menor número de um array
function encontrarMenorNumero (numeros){
    let menorNumero = numeros[0];
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i]
        }
    }
    return menorNumero;
}
 
//exemplos de utilização
 
encontrarMaiorNumero([0,3,5,1,8,4,9]);
 
encontrarMenorNumero([3,5,6,2,4,2,1]);