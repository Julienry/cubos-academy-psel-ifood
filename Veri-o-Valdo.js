function solucao(obras) {
	//seu codigo aqui
    var maior = 0;
    var nome = "";
    for(var i = 0; i<obras.length; i++){
        if(obras[i].valor > maior){
            maior = obras[i].valor;
            nome = obras[i].nome;
        }
        
    }
    console.log(nome);
    
}