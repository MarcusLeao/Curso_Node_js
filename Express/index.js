const express = require("express"); //Importando o express
const app = express(); // Iniciando o express

app.get("/",function(req,res) {
    res.send("<h1>Bem Vindo!</h1>");
});

app.get("/blog/:artigo?",function(req,res) { //parametro opcional
    
    var artigo = req.params.artigo;

    if (artigo) {
        res.send("<h2> Artigo: " + artigo + " </h2>");   
    }else{
        res.send("<h1>Bem vindo ao meu blog!</h1>");   
    }

});


app.get("/canal/youtube",function(req,res) {//Query params /canal/youtube?canal=teste
    var canal = req.query["canal"];

    if (canal) {
        res.send(canal);
    }else{
        res.send("Nenhum canal fornecido!")
    }
})




app.get("/ola/:nome",function(req,res){ //parametro obrigatorio
    // REQ => DADOS ENVIADOS PELO USUÁRIO
    //RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    
    var nome = req.params.nome;
    res.send("<h1>Olá " + nome + " </h1>");
});



app.listen(4000,function(erro){
    if (erro) {
        console.log("Ocorreu um erro")
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})