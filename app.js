var Reader     = require("./Reader");
var Processor  = require("./Processor");
var Table      = require("./Table");
var HtmlParser = require("./HtmlParser");
var leitor = new Reader();


async function main(){
    var dados = await leitor.Read("./users.csv");
    var processedata = Processor.Process(dados);
    var usuarios = new Table(processedata);

    var html = await HtmlParser.Parse(usuarios);
    console.log(html);
}

main();