function solucao(sequencia) {
	//seu codigo aqui
    let splitSeq = sequencia.split("");
    var posicao = 0;
    for(var i = 0; i<splitSeq.length; i++){
        if(splitSeq[i] == "<"){
            if(posicao == 0){
                posicao = 6;
            }
            else{
                posicao = posicao -1;
            }
        }
        if(splitSeq[i] == ">"){
            if(posicao == 6){
                posicao = 0;
            }
            else{
                posicao = posicao +1;
            }
        }
    }
    console.log(posicao);
}