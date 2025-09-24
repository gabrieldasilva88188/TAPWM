module.exports = function(app){
app.get('/formulario_adicionar_usuario', function(req,res){
    res.send("admin/adicionar_usario");
});
}