function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui
    var nenhuma = true;
    for(i = 0; i< palavras.length; i++){
        let splitPalavras = palavras[i].split("");
        if(splitPalavras[0] == primeiraLetra && splitPalavras[1] == segundaLetra){
            nenhuma = false;
            console.log(palavras[i]);
        }
    }
    if(nenhuma == true){
        console.log("NENHUMA");
    }

}