const fs = require("fs");


/**
 * Leitura de arquivos de texto
 */
// fs.readFile("./igor.txt",{encoding: 'utf-8'},(erro, dados) => {
//     if(erro){
//         console.log("Ocorreu um erro")
//     }else{
//         console.log(dados)
//     }
// });

/**
 * Escrever em arquivos de texto
 */
fs.writeFile("./igor.txt","Novo conteudo do arquivo!",(erro) => {
    if(erro){
        console.log("Ocorreu um erro")
    }
});