module.exports.iniciaChat = (app, req, res) => {

    var dadosForm = req.body;

    console.log(dadosForm)

    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracters').len(3, 15);
    
    var errors = req.validationErrors();

    if(errors){
        res.render('index', {validacao : errors});
        return
    }
    
    var io = app.get('io');

    io.emit(
        'msgParaCliente', 
        {apelido : dadosForm.apelido, mensagem : 'Acabou de entrar no chat!'});

    res.render('chat', {apelido : dadosForm.apelido});
};