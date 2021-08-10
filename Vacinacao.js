function solucao(obj) {
	//seu codigo aqui
    if(obj.idade >= 60 && obj.jaTomouVacina == false){
        console.log("APTA POR IDADE");
    }
    else if(obj.temComorbidade == true && obj.jaTomouVacina == false){
        console.log("APTA POR COMORBIDADE");
    }
    else if(obj.jaTomouVacina == true){
        console.log("JA TOMOU VACINA");
    }
    else{
        console.log("INAPTA");
    }
}