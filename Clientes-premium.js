function solucao(precos) {
    //seu codigo aqui
    var total = 0;
    var premium = false;
    for(i = 0; i < precos.length; i++){
        total = total + precos[i];
        if(precos[i] > 200){
            premium = true;
        }
    }
    if(total >= 1000 && premium == true){
        console.log("PREMIUM");
    }
    else if(total >= 1000 && premium == false){
        console.log("VIP");
    }
    else{
        console.log("NORMAL");
    }

}
