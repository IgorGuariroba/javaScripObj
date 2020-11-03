var Reader     = require("./Reader");
var Processor  = require("./Processor");
var Table      = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer     = require("./Writer.js");

var leitor   = new Reader();
var escritor = new Writer();


async function main(){
    var dados = await leitor.Read("./users.csv");
    var processedata = Processor.Process(dados);
    var usuarios = new Table(processedata);
    // console.log(usuarios.RowCount);
    // console.log(usuarios.ColumnCount);
    var html = await HtmlParser.Parse(usuarios);

    escritor.Writer("meuhtmlgerado.html",html);
}

main();