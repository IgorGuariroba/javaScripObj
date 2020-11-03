var Reader     = require("./Reader");
var Processor  = require("./Processor");
var Table      = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer     = require("./Writer.js");
var PDFWriter  = require("./PDFWriter.js");

var leitor   = new Reader();
var escritor = new Writer();


async function main(){
    var dados = await leitor.Read("./users.csv");
    var processedata = Processor.Process(dados);
    var usuarios = new Table(processedata);
    // console.log(usuarios.RowCount);
    // console.log(usuarios.ColumnCount);
    var html = await HtmlParser.Parse(usuarios);

    escritor.Writer(Date.now() + ".html",html);
    PDFWriter.WritePDF(Date.now() + ".pdf",html);
}

main();