module.exports.iniciaChat = (app, req, res) => {
    var dadosForm = req.body;

    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracters').len(3, 15);
    
    var errors = req.validationErrors();

    if(errors){
        res.render('index', {validation : errors});
        return
    }

    res.render('chat');
};