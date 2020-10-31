class Dado {
    constructor(maximoNumero = 6){
        this.maximoNumero = maximoNumero
    }
    Jogar(){
        if(this.maximoNumero < 2){
            console.log("O dado não pode ter o numero menor que 2");
            return false;
        }
        // console.log(this.maximoNumero);
        console.log( + Math.floor(Math.random() * (this.maximoNumero - 1 + 1)) + 1);
    }
}


dado = new Dado();

dado.Jogar();