
class Leitor{
    Ler(caminho){
        return "Camingo do arquivo!"
    }
}


class Escritor{
    Escrever(arquivo,conteudo){
         console.log("conteudo escrito");
    }
}

class Criador{
    Criar(nome){
         console.log("Arquivo criado");
    }
}

class Destruidor{
    Deletar(nome){
         console.log("Deletando arquivo");
    }
}




class ManipuladorDeArquivo{
    constructor(nome){
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.destruidor = new Destruidor();

    }
}

