let express = require('express')
let texto = require('./modulo1')
let app = express()
app.set('view engine', 'ejs')
app.get('/', function(req,res){
    res.send("home/index");
});
app.get('/formulario_adicionar_usuario', function(req,res){
    res.send("admin/adicionar_usario");
});
app.get('/infomacao/historia', function(req,res){
    res.send("infomacao/historia");
});
app.get('/infomacao/curso', function(req,res){
    res.send("infomacao/curso");
});
app.get('/infomacao/professores', function(req,res){
    res.send("infomacao/prodessores");
});
app.listen(3000,function(){
    console.log(texto)
})
