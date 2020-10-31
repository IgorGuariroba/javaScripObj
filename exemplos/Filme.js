class Filme{
    constructor(titulo, ano , genero, diretor, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = [];
        this.duracao = duracao;
    }

    Reproduzir(){
        console.log("Reproduzir");
    }

    Pausar(){
        console.log("Pausar");

    }

    Avancar(){
        console.log("Avancar");

    }

    Fechar(){
        console.log("Fechar");

    }

    Ficha(){
        console.log("Titulo: " + this.titulo);
        console.log("Ano: " + this.Ano);
        console.log("Genero: " + this.genero);
        this.Reproduzir();
        this.Avancar();
    }

}


var vingadores = new Filme("Vingadores 2", 2014, "Ação", "Alguem", "2h");
vingadores.Ficha();