const fs = require("fs");


/**
 * Leitura de arquivos de texto
 * e escrita
 */
function modficaArquivo(nome,sobreNome,idade){
    fs.readFile("./usuario.json",{encoding: 'utf-8'},(erro, dados) => {
        if(erro){
            console.log("Ocorreu um erro")
        }else{
    
            var conteudo = JSON.parse(dados);
            conteudo.nome = nome
            conteudo.sobrenome = sobreNome;
            conteudo.idade = idade;
            console.log(conteudo);
    
            fs.writeFile("./novo.json",JSON.stringify(conteudo),(erro) => {
                if(erro){
                    console.log("Ocorreu um erro")
                }
            });
        }
    });
}

modficaArquivo("João","Santos","23");

