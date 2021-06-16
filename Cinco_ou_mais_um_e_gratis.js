function solucao(precos) {
    let desconto = 0;
    let menorValor = precos[1];
    let total = 0;
    for (let item of precos){
        total = total + item;
        desconto = desconto +1;        
        if (item < menorValor) {
            menorValor = item;
        }
    }
    if (desconto >= 5){
        console.log (total - menorValor);
    }else {
        console.log (total);
    }
    
}