function solucao(produtos) {
	    let valor = {
        totalTop : 0,
        percentual : 0,               
  };
    let total = 0;    
    for (let item of produtos){ 
      //console.log (item);
        total = (total + item.preco);
        if (item.preco > "10000"){
        valor.totalTop = valor.totalTop + item.preco;
    }
        
    }
    valor.percentual = (valor.totalTop / total);
    console.log(valor);
    }
