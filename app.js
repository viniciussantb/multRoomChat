var app = require('./config/server');

var server = app.listen(80, ()=>{
    console.log('servidor escutando na porta 80...')
});

var io = require('socket.io').listen(server);
app.set('io', io);

io.on('connection', (socket) => {
    console.log('usuario conectou...');

    socket.on('disconnect', ()=>{
        console.log('usuario desconectou...')
    })

    socket.on('msgParaServer', (data)=>{
        socket.emit('msgParaCliente', {apelido : data.apelido, mensagem : data.mensagem})
        socket.broadcast.emit('msgParaCliente', {apelido : data.apelido, mensagem : data.mensagem});

        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            socket.emit('usuarioEntrou', {apelido : data.apelido})
            socket.broadcast.emit('usuarioEntrou', {apelido : data.apelido});
        }
    });
});
